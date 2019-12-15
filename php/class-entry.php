<?php
/**
 * Entry class for Formation.
 *
 * @package Formation
 */

namespace Formation;

use Formation\Component;

/**
 * Handles Formation's admin settings.
 */
class Entry implements Component\Post_Types {

	/**
	 * Holds the plugin instance.
	 *
	 * @since   0.1
	 * @var     Plugin Instance of the global plugin.
	 */
	private $plugin;

	/**
	 * Initiate the plugin resources.
	 *
	 * @param object $plugin Instance of the plugin.
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
	}

	/**
	 * Register Post types.
	 */
	public function post_types() {
		// Register Custom Post Type.
		$labels = array(
			'name'                  => _x( 'Entries', 'Post Type General Name', 'formation' ),
			'singular_name'         => _x( 'Entry', 'Post Type Singular Name', 'formation' ),
			'menu_name'             => __( 'Entries', 'formation' ),
			'name_admin_bar'        => __( 'Entry', 'formation' ),
			'archives'              => __( 'Entry Archives', 'formation' ),
			'attributes'            => __( 'Entry Attributes', 'formation' ),
			'parent_item_colon'     => __( 'Parent Entry:', 'formation' ),
			'all_items'             => __( 'All Entries', 'formation' ),
			'add_new_item'          => __( 'Add New Entry', 'formation' ),
			'add_new'               => __( 'Add New', 'formation' ),
			'new_item'              => __( 'New Entry', 'formation' ),
			'edit_item'             => __( 'Edit Entry', 'formation' ),
			'update_item'           => __( 'Update Entry', 'formation' ),
			'view_item'             => __( 'View Entry', 'formation' ),
			'view_items'            => __( 'View Entries', 'formation' ),
			'search_items'          => __( 'Search Entry', 'formation' ),
			'not_found'             => __( 'Not found', 'formation' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'formation' ),
			'featured_image'        => __( 'Featured Image', 'formation' ),
			'set_featured_image'    => __( 'Set featured image', 'formation' ),
			'remove_featured_image' => __( 'Remove featured image', 'formation' ),
			'use_featured_image'    => __( 'Use as featured image', 'formation' ),
			'insert_into_item'      => __( 'Insert into entry', 'formation' ),
			'uploaded_to_this_item' => __( 'Uploaded to this entry', 'formation' ),
			'items_list'            => __( 'Entries list', 'formation' ),
			'items_list_navigation' => __( 'Entries list navigation', 'formation' ),
			'filter_items_list'     => __( 'Filter entry list', 'formation' ),
		);
		$args   = array(
			'label'               => __( 'Entry', 'formation' ),
			'description'         => __( 'Formation entry', 'formation' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'revisions', 'page-attributes' ),
			'hierarchical'        => false,
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => 'edit.php?post_type=formation',
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => true,
			'publicly_queryable'  => false,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
			'rest_base'           => 'formation_entry',
		);

		return array( 'formation_entry' => $args );
	}

}
