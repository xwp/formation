<?php
/**
 * Field class for Formation.
 *
 * @package Formation
 */

namespace Formation;

use Formation\Component;

/**
 * Handles Formation's fields handling.
 */
class Field implements Component\Pre_Setup, Component\Setup {

	/**
	 * All fields registered.
	 *
	 * @var array
	 */
	public $fields;

	/**
	 * All rendered instances.
	 *
	 * @var array
	 */
	public $instances;

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
			'formation/text-input' => '\Formation\Component\Field\Text_Input',
			'formation/text-area'  => '\Formation\Component\Field\TextArea',
			'formation/button'     => '\Formation\Component\Field\Button',
			'formation/email'      => '\Formation\Component\Field\Email',
		);

		return $fields;
	}

	/**
	 * Pre-setup plugin (register stuff)
	 */
	public function pre_setup() {
		foreach ( $this->fields as $field => $instance ) {
			register_block_type(
				$field,
				array(
					'render_callback' => array( $this, 'render' ),
				)
			);
		}
		add_filter( 'render_block_data', array( $this, 'register_field_instance' ) );
	}

	/**
	 * Setup the object.
	 */
	public function setup() {
		if ( $this->plugin->components['entry']->is_submitting() ) {
			$form_id = filter_input( INPUT_POST, $this->plugin->components['view']::FORM_ID_KEY, FILTER_SANITIZE_NUMBER_INT );
			$form    = get_post( $form_id );
			if ( empty( $form ) ) {
				return new \WP_Error( 'form_404', __( 'Form not found', 'formation' ) );
			}
			$blocks = parse_blocks( $form->post_content );
			if ( ! empty( $blocks ) ) {
				$this->find_field_blocks( $blocks );
			}
		}
	}

	private function find_field_blocks( $blocks ) {

		foreach ( $blocks as $block ) {
			$this->register_field_instance( $block );
			// Process innerBlocks
			if ( ! empty( $block['innerBlocks'] ) ) {
				$this->find_field_blocks( $block['innerBlocks'] );
			}
		}
	}

	/**
	 * Setup the object.
	 */
	public function register_field_instance( $block ) {

		if ( isset( $this->fields[ $block['blockName'] ] ) ) {
			// Check the field has not already been registered.
			if ( ! isset( $this->instances[ $block['attrs']['_unique_id'] ] ) ) {
				$init = $this->get_field_init( $this->fields[ $block['blockName'] ] );
				if ( $init ) {
					$field = new $init( $block['attrs'] );
					$value = filter_input( INPUT_POST, $field->get_arg( 'slug' ), FILTER_DEFAULT );
					if ( ! is_null( $value ) ) {
						$field->set_value( $value );
					}
					$this->instances[ $field->get_arg( '_unique_id' ) ] = $field;
					$block['formationField']                            = $field;
				}
			}
		}

		return $block;
	}

	/**
	 * Returns a callback for registering the object or null if invalid type
	 *
	 * @since 1.0.0
	 *
	 * @param string $type The type of field to get callback for.
	 *
	 * @return array|null Callback array for registering an object or null if invalid
	 */
	public function get_field_init( $type ) {
		if ( ! class_exists( $type ) ) {
			return false;
		}

		return $type;
	}

	/**
	 * Render a field instance.
	 */
	public function render( $args ) {
		if ( $this->instances[ $args['_unique_id'] ] ) {
			return $this->instances[ $args['_unique_id'] ]->render();
		}
	}

}
