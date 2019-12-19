<?php
/**
 * Entry class for Formation.
 *
 * @package Formation
 */

namespace Formation;

use Formation\Component\Setup;

/**
 * Handles Formation's admin settings.
 */
class View implements Setup {

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

	public function render_field( $args, $content ){

		return $content;
	}
	/**
	 * Setup the object.
	 */
	public function setup() {
		register_block_type( 'formation/text-input', array(
			'render_callback' => array( $this, 'render_field' ),
		) );
	}
}
