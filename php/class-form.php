<?php
/**
 * Form class for Formation.
 *
 * @package Formation
 */

namespace Formation;

use Formation\Component;

/**
 * Handles Formation's admin settings.
 */
class Form implements Component\Assets, Component\Setup, Component\Notice, Component\Post_Types {

	/**
	 * Holds the plugin instance.
	 *
	 * @since   0.1
	 * @var     Plugin Instance of the global plugin.
	 */
	private $plugin;

	/**
	 * Holds list of assets.
	 *
	 * @var array
	 */
	private $assets = array(
		'blocks',
		'editor',
		'components',
		'public',
	);

	/**
	 * The post type slug.
	 *
	 * @var string
	 */
	public static $slug = 'formation';

	/**
	 * Initiate the plugin resources.
	 *
	 * @param object $plugin Instance of the plugin.
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
	}

	/**
	 * Set admin notice.
	 *
	 * @return array|null
	 */
	public function get_notices() {

		return null;
	}

	/**
	 * Setup hooks
	 *
	 * @since  0.1
	 */
	public function setup() {
		//add_filter( 'allowed_block_types', array( $this, 'block_types' ), 10, 2 );
		add_filter( 'block_categories', array( $this, 'block_category' ), 10, 2 );
		register_block_type(
			'formation/form-embed',
			array(
				'render_callback' => array( $this, 'render_form' ),
			)
		);
	}

	/**
	 * Render a form block.
	 *
	 * @param array  $atts    The attributes for the block.
	 * @param string $content The rendered content.
	 *
	 * @return string
	 */
	public function render_form( $atts, $content ) {

		if ( ! empty( $atts['form_id'] ) ) {
			$form = get_post( $atts['form_id'] );
			if ( $atts['show_title'] ) {
				$content .= '<h3>' . $form->post_title . '</h3>';
			}
			$content .= $form->post_content;
			$content = $this->plugin->components['view']->wrap_form( do_blocks( $content ), $form );
		}

		return $content;
	}

	/**
	 * Setup the blocks to be used.
	 *
	 * @param array|bool $blocks The current blocks available.
	 * @param \WP_Post   $post   The current post object.
	 *
	 * @return array|bool
	 */
	public function block_types( $blocks, $post ) {
		if ( self::$slug === $post->post_type ) {
			$block_registry = \WP_Block_Type_Registry::get_instance();
			$block_types    = array_keys( $block_registry->get_all_registered() );

			$allowed    = array_filter(
				$block_types,
				function ( $type ) {
					return false === strpos( $type, 'core/' ) ? false : true;
				}
			);
			$my_allowed = array(
				'core/columns',
				'core/image',
				'core/paragraph',
				'core/heading',
				'core/list',
				'core/block',

			);
			$fields     = $this->plugin->components['field']->get_fields();
			$types      = array_keys( $fields );

			$blocks = array_merge( $types, $allowed );
		}

		return $blocks;
	}

	/**
	 * Add Form category.
	 *
	 * @param array    $categories The existing categories.
	 * @param \WP_Post $post       The current post.
	 *
	 * @return array
	 */
	public function block_category( $categories, $post ) {
		if ( self::$slug === $post->post_type ) {
			$categories = array_merge( [
				[
					'slug'  => 'fields',
					'title' => __( 'Form Fields', 'formation' ),
					'icon'  => 'dashicons-forms',
				],
			], $categories );
		}

		return $categories;
	}

	/**
	 * Register Post types.
	 */
	public function post_types() {
		// Register Custom Post Type.
		$labels = array(
			'name'                  => _x( 'Forms', 'Post Type General Name', 'formation' ),
			'singular_name'         => _x( 'Form', 'Post Type Singular Name', 'formation' ),
			'menu_name'             => __( 'Forms', 'formation' ),
			'name_admin_bar'        => __( 'Form', 'formation' ),
			'archives'              => __( 'Form Archives', 'formation' ),
			'attributes'            => __( 'Form Attributes', 'formation' ),
			'parent_item_colon'     => __( 'Parent Form:', 'formation' ),
			'all_items'             => __( 'All Forms', 'formation' ),
			'add_new_item'          => __( 'Add New Form', 'formation' ),
			'add_new'               => __( 'Add New', 'formation' ),
			'new_item'              => __( 'New Form', 'formation' ),
			'edit_item'             => __( 'Edit Form', 'formation' ),
			'update_item'           => __( 'Update Form', 'formation' ),
			'view_item'             => __( 'View Form', 'formation' ),
			'view_items'            => __( 'View Forms', 'formation' ),
			'search_items'          => __( 'Search Form', 'formation' ),
			'not_found'             => __( 'Not found', 'formation' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'formation' ),
			'featured_image'        => __( 'Featured Image', 'formation' ),
			'set_featured_image'    => __( 'Set featured image', 'formation' ),
			'remove_featured_image' => __( 'Remove featured image', 'formation' ),
			'use_featured_image'    => __( 'Use as featured image', 'formation' ),
			'insert_into_item'      => __( 'Insert into form', 'formation' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'formation' ),
			'items_list'            => __( 'Forms list', 'formation' ),
			'items_list_navigation' => __( 'Forms list navigation', 'formation' ),
			'filter_items_list'     => __( 'Filter items list', 'formation' ),
		);
		$args   = array(
			'label'               => __( 'Form', 'formation' ),
			'description'         => __( 'Formation form', 'formation' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'revisions', 'page-attributes', 'custom-fields' ),
			'taxonomies'          => array( 'category' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'menu_icon'           => 'dashicons-forms',
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => true,
			'publicly_queryable'  => true,
			'rewrite'             => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
			'rest_base'           => self::$slug,
		);

		return array( self::$slug => $args );
	}

	/**
	 * Register assets to be used for the class.
	 */
	public function register_assets() {

		foreach ( $this->assets as $asset ) {
			$js_path  = $this->plugin->dir() . '/js/dist/' . $asset . '.asset.php';
			$css_path = $this->plugin->dir() . '/css/' . $asset . '.css';
			if ( file_exists( $js_path ) ) {
				$assets_dep = require_once $js_path;
				wp_register_script(
					'formation-' . $asset . '-js',
					$this->plugin->asset_url( 'js/dist/' . $asset . '.js' ),
					$assets_dep['dependencies'],
					$assets_dep['version'],
					true
				);

				if ( file_exists( $css_path ) ) {
					wp_register_style(
						'formation-' . $asset . '-css',
						$this->plugin->asset_url( 'css/' . $asset . '.css' ),
						null,
						$assets_dep['version']
					);
				}
			}
		}
	}


	/**
	 * Enqueue Assets.
	 */
	public function enqueue_assets() {

	}


	/**
	 * Enqueue Assets.
	 */
	public function enqueue_front_assets() {
		wp_enqueue_style( 'formation-public-css' );
	}

	/**
	 * Enqueue Assets.
	 */
	public function enqueue_editor_assets() {
		wp_enqueue_script( 'formation-components-js' );

		if ( $this->is_active() ) {
			wp_enqueue_script( 'formation-editor-js' );
			wp_enqueue_style( 'formation-editor-css' );
		}
		wp_enqueue_script( 'formation-blocks-js' );
		$this->load_form_data();
	}

	/**
	 * Load forms data.
	 */
	private function load_form_data() {

		$data  = array(
			'forms' => array(
				array(
					'label' => null,
					'value' => null,
				),
			),
		);
		$forms = get_posts(
			array(
				'post_type'   => self::$slug,
				'numberposts' => - 1,
			)
		);
		foreach ( $forms as $form ) {
			$data['forms'][] = array(
				'label' => $form->post_title,
				'value' => $form->ID,
			);
		}

		$data['field_attributes'] = $this->plugin->components['field']->get_field_block_attributes();

		$script = 'var Formation = ' . wp_json_encode( $data );
		wp_add_inline_script( 'formation-editor-js', $script );
	}

	/**
	 * Check if this class is active.
	 *
	 * @return bool True if active False if not.
	 */
	public function is_active() {
		$screen = get_current_screen();

		return $screen instanceof \WP_Screen && isset( $screen->post_type ) && 'formation' === $screen->post_type;
	}

}
