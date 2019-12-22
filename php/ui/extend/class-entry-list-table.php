<?php
/**
 * Extends WP_List_table.
 *
 * @package Formation
 */

namespace Formation\UI\Extend;

use Formation\Component\Utility\Input;
use Formation\Component\Utility\Utils;

/**
 * Extends WP_List_table
 */
class Entry_List_Table  extends \WP_List_Table {

	/**
	 * Table labels.
	 *
	 * @var array
	 */
	private $labels;

	/**
	 * The parent form ID.
	 *
	 * @var int
	 */
	private $parent_id;

	/**
	 * The current $page slug.
	 *
	 * @var string
	 */
	private $page_slug;

	/**
	 * The current $entry.
	 *
	 * @var string
	 */
	private $current_entry;

	/**
	 * A list table action to perform.
	 *
	 * @var string
	 */
	private $action;

	/**
	 * The url of this list table.
	 *
	 * @var string
	 */
	private $url;

	/**
	 * The list table screen hook name.
	 *
	 * @var mixed
	 */
	private $screen_hook;

	/**
	 * Number of trashed posts.
	 *
	 * @var int
	 */
	private $trash_count = 0;

	/**
	 * Number of published posts.
	 *
	 * @var integer
	 */
	private $publish_count = 0;

	/**
	 * Nonce actions.
	 *
	 * @var array
	 */
	private $nonce_actions = array(
		'trash'   => 'formation_trash_entry',
		'publish' => 'formation_publish_entry',
	);

	/**
	 * Constructor.
	 *
	 * @param int    $parent_id The ID of the parent form.
	 * @param string $screen_hook The admin page that created this table.
	 */
	public function __construct( $parent_id, $screen_hook ) {

		$this->screen_hook = $screen_hook;

		$this->labels = array(
			'singular' => __( 'Entry', 'formation' ),
			'plural'   => __( 'Entries', 'formation' ),
		);

		parent::__construct(
			array(
				'singular' => $this->labels['singular'],
				'plural'   => $this->labels['plural'],
				'ajax'     => false,
			)
		);

		$this->parent_id     = $parent_id;
		$this->page_slug     = Input::text( 'page' );
		$this->current_entry = Input::int( 'entry' );

		// For post-action redirects.
		$this->url = \get_admin_url(
			\get_current_blog_id(),
			sprintf(
				'admin.php?page=%s&parent=%d',
				$this->page_slug,
				$this->parent_id
			)
		);

		$action       = Input::text_post( 'action' );
		$action2      = Input::text_post( 'action2' );
		$this->action = ! empty( $action ) ? $action : $action2;
		$this->action = ! empty( $this->action ) ? $this->action : $this->current_action();

		$this->hooks();
	}

	/**
	 * Add hooks.
	 *
	 * @return void
	 */
	public function hooks() {
		add_filter( "views_{$this->screen_hook}", array( $this, 'view_filters' ) );
	}

	/**
	 * Renders when there are no entries.
	 *
	 * @return void
	 */
	public function no_items() {
		esc_html_e( 'No form entries avaliable.', 'formation' );
	}

	/**
	 * Get the 'Formation' nonce action for list tables.
	 *
	 * @param string $action The action.
	 * @return string
	 */
	private function nonce_action( $action ) {
		return isset( $this->nonce_actions[ $action ] ) ? $this->nonce_actions[ $action ] : '_wpnonce';
	}

	/**
	 * Method for 'name' column
	 *
	 * @param array $item Entry item.
	 *
	 * @return string
	 */
	public function column_name( $item ) {

		$title = '<strong>' . $item->post_title . '</strong>';

		$actions = array(
			'trash'   => array(
				'label' => __( 'Delete', 'formation' ),
			),
			'publish' => array(
				'label' => __( 'Restore', 'formation' ),
			),
		);

		array_walk(
			$actions,
			function( &$action, $key, $item ) {
				$action = sprintf(
					'<a href="?page=%s&action=%s&entry=%s&parent=%s&_wpnonce=%s">%s</a>',
					esc_attr( $this->page_slug ),
					esc_attr( $key ),
					absint( $item->ID ),
					(int) $this->parent_id,
					esc_attr( wp_create_nonce( $this->nonce_action( $key ) ) ),
					esc_html( $action['label'] )
				);
			},
			$item
		);

		// Delete or Restore?
		if ( 'trash' === Input::text( 'post_status', 'publish' ) ) {
			unset( $actions['trash'] );
		} else {
			unset( $actions['publish'] );
		}

		return $title . $this->row_actions( $actions );
	}

	/**
	 * Render a column when no column specific method exists.
	 *
	 * @param array  $item Entry item.
	 * @param string $column_name Generic column name.
	 *
	 * @return mixed
	 */
	public function column_default( $item, $column_name ) {
		switch ( $column_name ) {
			case 'preview':
				return Utils::trim_text( $item->post_content, 200 );
			case 'submitted':
			case 'modified':
				return get_date_from_gmt( $item->post_modified_gmt );
			default:
				return '&mdash;';
		}
	}

	/**
	 * Render the bulk edit checkbox
	 *
	 * @param array $item Entry item.
	 *
	 * @return string
	 */
	public function column_cb( $item ) {
		return sprintf(
			'<input type="checkbox" name="bulk-ids[]" value="%s" />',
			(int) $item->ID
		);
	}

	/**
	 *  Associative array of columns
	 *
	 * @return array
	 */
	public function get_columns() {
		$columns = array(
			'cb'        => '<input type="checkbox" />',
			'name'      => __( 'Name', 'formation' ),
			'preview'   => __( 'Data Preview', 'formation' ),
			'modified'  => __( 'Modified', 'formation' ),
			'submitted' => __( 'Submitted', 'formation' ),
		);

		return $columns;
	}

	/**
	 * Columns to make sortable.
	 *
	 * @return array
	 */
	public function get_sortable_columns() {
		$sortable_columns = array(
			'name'      => array( 'name', false ),
			'modified'  => array( 'modified', true ),
			'submitted' => array( 'submitted', false ),
		);

		return $sortable_columns;
	}

	/**
	 * Returns an associative array containing the bulk action
	 *
	 * @return array
	 */
	public function get_bulk_actions() {
		$actions = array(
			'bulk-trash'   => __( 'Delete', 'formation' ),
			'bulk-publish' => __( 'Restore', 'formation' ),
		);

		// Delete or Restore?
		if ( 'trash' === Input::text( 'post_status', 'publish' ) ) {
			unset( $actions['bulk-trash'] );
		} else {
			unset( $actions['bulk-publish'] );
		}

		return $actions;
	}

	/**
	 * Handles data query and filter, sorting, and pagination.
	 */
	public function prepare_items() {

		$query = array(
			'post_type'      => \Formation\Entry::$slug,
			'post_parent'    => $this->post_id,
			'posts_per_page' => 1,
			'post_status'    => 'publish',
		);

		/**
		 * Published count.
		 */
		$children            = new \WP_Query( $query );
		$this->publish_count = $children->found_posts;

		/**
		 * Trash count.
		 */
		$query['post_status'] = 'trash';
		$children             = new \WP_Query( $query );
		$this->trash_count    = $children->found_posts;

		$this->_column_headers = $this->get_column_info();

		$per_page     = $this->get_items_per_page( 'entries_per_page', 25 );
		$current_page = $this->get_pagenum();
		$total_items  = 'publish' === Input::text( 'post_status', 'publish' ) ?
			$this->publish_count :
			$this->trash_count;

		$order_by = Input::text( 'orderby' );
		$order    = Input::text( 'order' );

		$this->set_pagination_args(
			array(
				'total_items' => $total_items,
				'per_page'    => $per_page,
			)
		);

		$children = new \WP_Query(
			array(
				'post_type'      => \Formation\Entry::$slug,
				'post_parent'    => $this->parent_id,
				'posts_per_page' => $per_page,
				'paged'          => $current_page,
				'page'           => $current_page,
				'order_by'       => $order_by,
				'order'          => $order,
				'post_status'    => Input::text( 'post_status', 'publish' ),
			)
		);

		$this->items = $children->posts;
	}

	/**
	 * Handle bulk actions (and single actions).
	 *
	 * @return void
	 */
	public function process_action() {

		switch ( $this->action ) {
			case 'trash':
			case 'publish':
				$nonce          = Input::text( '_wpnonce' );
				$verified_nonce = \wp_verify_nonce( Input::text( '_wpnonce' ), $this->nonce_action( $this->action ) );

				if ( ! $verified_nonce ) {
					die( esc_html( __( 'Unpermitted action attempted.', 'formation' ) ) );
				}

				$this->set_entry_status( $this->current_entry, $this->action );
				break;
			case 'bulk-trash':
			case 'bulk-publish':
				$ids = Input::int_post_array( 'bulk-ids' );

				foreach ( $ids as $id ) {
					$this->set_entry_status( $id, str_replace( 'bulk-', '', $this->action ) );
				}
				break;
			default:
				return;
		}

		wp_safe_redirect( $this->url );
		exit;
	}

	/**
	 * Add view fiters.
	 *
	 * @param array $views Views.
	 * @return array
	 */
	public function view_filters( $views = array() ) {

		$current = Input::text( 'post_status', 'publish' );

		// Entries link.
		$class            = 'publish' === $current ? 'current' : '';
		$url              = remove_query_arg( 'post_status' );
		$views['entries'] = sprintf(
			'<a href="%s" class="%s" >%s (%d)</a>',
			esc_url_raw( $url ),
			esc_attr( $class ),
			esc_html( __( 'Entries', 'formation' ) ),
			(int) $this->publish_count
		);

		// Trashed link.
		$url            = add_query_arg( 'post_status', 'trash' );
		$class          = 'trash' === $current ? 'current' : '';
		$views['trash'] = sprintf(
			'<a href="%s" class="%s" >%s (%d)</a>',
			esc_url_raw( $url ),
			esc_attr( $class ),
			esc_html( __( 'Trashed', 'formation' ) ),
			(int) $this->trash_count
		);

		return $views;
	}

	/**
	 * Set post status.
	 *
	 * @param int    $id The post to restore.
	 * @param string $status The new status.
	 * @return mixed
	 */
	private function set_entry_status( $id, $status ) {
		return wp_update_post(
			array(
				'ID'          => $id,
				'post_status' => $status,
			)
		);
	}
}
