<?php
/**
 * Entry class for Formation.
 *
 * @package Formation
 */

namespace Formation;

use Formation\Component\Field\Text_Input;
use Formation\Component\Setup;

/**
 * Handles Formation's admin settings.
 */
class Field implements Setup {

	/**
	 * All fields registered.
	 *
	 * @var array
	 */
	public $fields;

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
		$this->fields = apply_filters( 'formation_register_fields', $this->get_fields() );
	}

	/**
	 * Get fields.
	 */
	public function get_fields() {
		$fields = array(
			'formation/text-input' => new Component\Field\Text_Input( $this->plugin ),
			'formation/text-area'   => new Component\Field\TextArea( $this->plugin ),
		);

		return $fields;
	}

	/**
	 * Setup the object.
	 */
	public function setup() {
		foreach ( $this->fields as $field => $instance ) {
			register_block_type(
				$field,
				array(
					'render_callback' => array( $instance, 'render' ),
				)
			);
		}
	}
}
