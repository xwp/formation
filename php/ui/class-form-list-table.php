<?php
/**
 * Extends the Form List table in WordPress Admin.
 *
 * @package Formation
 */

namespace Formation\UI;

use Formation\Component;

/**
 * Extends the Forms List Table.
 */
class Form_List_Table implements Component\Setup {

	/**
	 * Setup hooks
	 *
	 * @since  0.1
	 */
	public function setup() {

		add_action( 'load-edit.php', array( $this, 'extend_list_table' ) );
	}

	/**
	 * Hook the current admin sceen to extend list table.
	 *
	 * @return void
	 */
	public function extend_list_table() {
		$screen = get_current_screen();

		if ( ! isset( $screen->post_type ) || \Formation\Form::$slug !== $screen->post_type ) {
			return;
		}

		add_filter( "manage_{$screen->id}_columns", array( $this, 'add_columns' ) );
		add_action(
			"manage_{$screen->post_type}_posts_custom_column",
			array( $this, 'render_columns' ),
			10,
			2
		);
	}

	/**
	 * Extends list table with new columns.
	 *
	 * @param array $cols Columns to filter.
	 * @return array
	 */
	public function add_columns( $cols ) {
		$cols = array_slice( $cols, 0, count( $cols ) - 1, true ) +
		array( 'formation_entries' => __( 'Entries', 'formation' ) ) +
		array_slice( $cols, 3, count( $cols ) - 1, true );
		return $cols;
	}

	/**
	 * Render List Table Column for Entries.
	 *
	 * @param string $column The column identifier.
	 * @param int    $post_id Post ID of current form.
	 * @return void
	 */
	public function render_columns( $column, $post_id ) {
		switch ( $column ) {
			case 'formation_entries':
				$children = new \WP_Query(
					array(
						'post_type'      => \Formation\Entry::$slug,
						'post_parent'    => $post_id,
						'posts_per_page' => 1,
					)
				);

				$has_entries = $children->found_posts > 0;

				$url = \get_admin_url(
					\get_current_blog_id(),
					sprintf(
						'edit.php?post_type=%s&parent=%d',
						\Formation\Entry::$slug,
						$post_id
					)
				);

				echo sprintf(
					'<a href="%s" class="button button-primary">%s (%d)</a>',
					esc_url( $url ),
					__( 'View Entries', 'formation' ),
					esc_html( $children->found_posts )
				);

				break;
		}
	}
}
