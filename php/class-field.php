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
class Field implements Component\Pre_Setup, Component\Setup, Component\Post_Setup, Component\Assets {

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
			'formation/text'       => '\Formation\Component\Field\Text_Input',
			'formation/textarea'   => '\Formation\Component\Field\TextArea',
			'formation/button'     => '\Formation\Component\Field\Button',
			'formation/email'      => '\Formation\Component\Field\Email',
			'formation/select'     => '\Formation\Component\Field\Select',
			'formation/checkbox'   => '\Formation\Component\Field\Checkbox',
			'formation/radio'      => '\Formation\Component\Field\Radio',
			'formation/repeatable' => '\Formation\Component\Field\Repeater',
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

		/**
		 * Preload entries from previous submission.
		 */
		if ( ! $this->plugin->components['entry']->is_submitting() ) {
			// Check for an entry.
			$entry_id = filter_input( INPUT_GET, 'entry_id', FILTER_SANITIZE_NUMBER_INT );
			if ( $entry_id ) {
				$entry = $this->plugin->components['entry']->get_entry( $entry_id );
				if ( ! is_wp_error( $entry ) ) {
					$can_load = get_current_user_id() === (int) $entry->post_author;
					if ( apply_filters( 'formation_load_entry', $can_load, $entry ) ) {
						if ( $this->plugin->components['entry']::$slug === $entry->post_type ) {
							$this->load_form( $entry->post_parent );
							$data = $entry->post_content;
							foreach ( $this->instances as $instance ) {
								$instance_name = $instance->get_input_name();
								if ( ! empty( $data[ $instance_name ] ) ) {
									$instance->set_value( $data[ $instance_name ] );
								}
							}
						}
					}
				}
			}
		}
	}

	/**
	 * Setup the object.
	 */
	public function setup() {
		if ( $this->plugin->components['entry']->is_submitting() ) {
			$form_id = filter_input( INPUT_POST, $this->plugin->components['view']::FORM_ID_KEY, FILTER_SANITIZE_NUMBER_INT );
			$this->load_form( $form_id );
		}
	}

	/**
	 * Loads a form.
	 *
	 * @param $form_id
	 *
	 * @return \WP_Post|\WP_Error
	 */
	public function load_form( $form_id ) {
		$form = get_post( $form_id );
		if ( empty( $form ) ) {
			return new \WP_Error( 'form_404', __( 'Form not found', 'formation' ) );
		}
		$blocks = parse_blocks( $form->post_content );
		if ( ! empty( $blocks ) ) {
			$this->find_field_blocks( $blocks );
		}

		return $form;
	}

	public function post_setup() {

	}

	private function find_field_blocks( $blocks ) {

		foreach ( $blocks as $block ) {
			// Check for core reusable.
			if ( 'core/block' === $block['blockName'] ) {
				$this->load_form( $block['attrs']['ref'] );
			} else {
				$this->register_field_instance( $block );
				// Process innerBlocks.
				if ( ! empty( $block['innerBlocks'] ) ) {
					$this->find_field_blocks( $block['innerBlocks'] );
				}
			}
		}
	}

	/**
	 * Registers the block instance.
	 */
	private function prepare_block_for_registration( $block ) {
		if ( isset( $this->fields[ $block['blockName'] ] ) ) {
			// Check the field has not already been registered.
			if ( ! isset( $this->instances[ $block['attrs']['_unique_id'] ] ) ) {
				// Check permission.
				if ( ! empty( $block['attrs']['role_restriction'] ) ) {
					$roles = json_decode( $block['attrs']['role_restriction'], ARRAY_A );
					if ( ! empty( $roles ) ) {
						$user_can = false;
						foreach ( $roles as $role ) {
							if ( current_user_can( $role['value'] ) ) {
								$user_can = true;
								break;
							}
						}
						if ( false === $user_can ) {
							return $block;
						}
					}
				}
				$init = $this->get_field_init( $this->fields[ $block['blockName'] ] );

				if ( $init ) {
					$field = new $init( $block['attrs'], $this->plugin, $block );
					$this->instances[ $field->get_args( '_unique_id' ) ] = $field;
					$block['formationField']                             = $field;
				}
			}
		}

		return $block;
	}

	/**
	 * Setup the object.
	 */
	public function register_field_instance( $block ) {

		/**
		 * Since 5.5.0, Inner blocks will not pass through the 'render_block_data' filter.
		 * For that reason we would need to take the extra step of looping inside a parent block
		 * and registering the inner blocks. This assumes the inner block is only ONE level deep.
		 */

		// Exit early for non-Formation blocks.
		if ( empty( $block['innerBlocks'] ) && ! isset( $this->fields[ $block['blockName'] ] ) ) {
			return $block;
		}

		// Register standalone blocks.
		if ( empty( $block['innerBlocks'] ) ) {
			$this->prepare_block_for_registration( $block );
			return $block;
		}

		// Register inner blocks.
		foreach ( $block['innerBlocks'] as &$inner_block ) {
			$this->prepare_block_for_registration( $inner_block );
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
	public function render( $args, $content ) {
		if ( isset( $this->instances[ $args['_unique_id'] ] ) ) {
			return $this->instances[ $args['_unique_id'] ]->render( $content );
		}
	}

	public function is_active() {
		return ! empty( $this->instances );
	}

	public function register_assets() {
		// TODO: Implement register_assets() method.
	}

	public function enqueue_assets() {
		// TODO: Implement enqueue_assets() method.
	}

	/**
	 * Output Fields attributes template.
	 */
	public function enqueue_editor_assets() {
	}

	public function get_field_block_attributes() {
		$field_Attributes = array(
			'label'          => array(
				'type' => 'string',
			),
			'slug'           => array(
				'type' => 'string',
			),
			'placeholder'    => array(
				'type' => 'string',
			),
			'description'    => array(
				'type' => 'string',
			),
			'required'       => array(
				'type' => 'bool',
			),
			'is_repeatable'  => array(
				'type' => 'bool',
			),
			'default_value'  => array(
				'type' => 'string',
			),
			'has_conditions' => array(
				'type' => 'bool',
			),
			'_unique_id'     => array(
				'type' => 'string',

			),
		);

		return apply_filters( 'formation_field_block_attributes', $field_Attributes, $this );
	}

	public function enqueue_front_assets() {
		wp_enqueue_script( 'formation-public-js' );
		wp_enqueue_style( 'formation-public-css' );
	}
}
