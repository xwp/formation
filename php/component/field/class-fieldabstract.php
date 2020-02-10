<?php
/**
 * Fields abstraction class for Formation field.
 *
 * @package Formation
 */

namespace Formation\Component\Field;

use Formation;
use Formation\Plugin;
use Formation\Component;
use Formation\Component\Utility\Utils;

/**
 * Class FieldAbstract
 */
abstract class FieldAbstract {

	/**
	 * Holds the plugin instance.
	 *
	 * @since   0.1
	 * @var     Plugin Instance of the global plugin.
	 */
	public $args;

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type;

	/**
	 * Flags the field as valid or not.
	 *
	 * @var bool
	 */
	private $valid = true;

	/**
	 * Holds user feeadback notices.
	 *
	 * @var array
	 */
	private $notices = array();

	/**
	 * Holds possible notices to use.
	 *
	 * @var array
	 */
	private $notice_messages = array();

	/**
	 * Plugin component.
	 *
	 * @var \Formation\Plugin
	 */
	public $plugin;

	/**
	 * Entry component
	 *
	 * @var \Formation\Entry
	 */
	public $entry;

	/**
	 * Holds the Field component.
	 *
	 * @var \Formation\Field
	 */
	public $field;

	/**
	 * The associated block for the field.
	 *
	 * @var array
	 */
	public $block;


	/**
	 * Initiate the Field.
	 *
	 * @param array             $args   Field instance args.
	 * @param \Formation\Plugin $plugin Instance of the main plugin.
	 * @param array             $block  The field block object.
	 */
	public function __construct( $args, $plugin, $block ) {
		$this->plugin = $plugin;
		$this->entry  = $plugin->components['entry'];
		$this->field  = $plugin->components['field'];
		$this->block  = $block;

		$default_attributes = $this->get_default_attributes();
		$args               = wp_parse_args( $args, $default_attributes );
		$this->set_args( $args );
		$this->notice_messages = $this->get_notice_messages();

		if ( ! empty( $this->args['default_value'] ) ) {
			$this->set_value( $this->args['default_value'] );
		}

		do_action( 'formation_field_init', $this );
		do_action( 'formation_field_init_' . $this->type, $this );
	}

	/**
	 * Get the default Attributes for theis field.
	 *
	 * @return array
	 */
	private function get_default_attributes() {
		$default_attributes = array(
			'type'          => $this->type,
			'label'         => null,
			'slug'          => null,
			'placeholder'   => null,
			'value'         => null,
			'description'   => null,
			'required'      => false,
			'required_text' => '*',
			'is_repeatable' => null,
			'default_value' => null,
		);

		$default_attributes = apply_filters( 'formation_field_default_attributes', $default_attributes, $this );
		$default_attributes = apply_filters( 'formation_field_default_attributes_' . $this->type, $default_attributes, $this );

		return $default_attributes;
	}

	/**
	 * Get messages for a notices.
	 *
	 * @return array
	 */
	private function get_notice_messages() {
		$messages = array(
			'invalid_value' => array(
				'type'    => 'error',
				'message' => __( 'Invalid Value', 'formation' ),
			),
			'required'      => array(
				'type'    => 'error',
				'message' => __( 'Field is required', 'formation' ),
			),
		);

		/**
		 * Filter possible notices.
		 */
		$messages = apply_filters( 'formation_field_notices', $messages, $this );
		$messages = apply_filters( 'formation_field_notices_' . $this->type, $messages, $this );
		$messages = apply_filters( 'formation_field_notices_' . $this->type . '_' . $this->args['slug'], $messages, $this );
		// Add a non removable general error.
		$messages['general_error'] = array(
			'type'    => 'error',
			'message' => __( 'General Error', 'formation' ),
		);

		return $messages;
	}

	/**
	 * Renders a field.
	 *
	 * @param string $content Content created by block renderer.
	 *
	 * @return string
	 */
	public function render( $content = null ) {

		$html                    = array();
		$attributes              = $this->get_wrapper_attributes();
		$attribute_string        = $this->build_attribute_string( $attributes, 'field_wrapper' );
		$html['opening_wrapper'] = sprintf( '<div %s>', $attribute_string );
		$html['label']           = $this->render_label();
		$html['required']        = $this->render_required();
		$html['input']           = $this->render_input();
		$html['description']     = $this->render_description();
		$html['notice']          = $this->render_notice();
		$html['close_wrapper']   = '</div>';

		$html = apply_filters( 'formation_field_structure', $html );
		$html = apply_filters( 'formation_field_structure_' . $this->type, $html );

		$html = array_filter( $html );

		return implode( $html );
	}

	/**
	 * Get the field value.
	 *
	 * @param \WP_Error|mixed $value The value to set.
	 *
	 * @return \WP_Error|mixed
	 */
	public function set_value( $value ) {

		/**
		 * Filter the value before setting it.
		 */
		$value          = apply_filters( 'formation_field_set_value', $value, $this );
		$value          = apply_filters( 'formation_field_set_value_' . $this->type, $value, $this );
		$value          = apply_filters( 'formation_field_set_value_' . $this->type . '_' . $this->args['slug'], $value, $this );
		$proposed_value = $this->validate_value( $value );
		if ( is_wp_error( $proposed_value ) ) {
			$this->args['value'] = $proposed_value->get_error_message(); // Set to the error since it may be from the filters.
		} else {
			/**
			 * Set to the proposed value regardless of validation to allow the user to change or replace the value.
			 */
			$this->args['value'] = $proposed_value;
		}

		return $proposed_value; // Return the proposed value, not the set value to allow the setter to handle a WP_Error.
	}

	/**
	 * Get the field value.
	 *
	 * @return mixed
	 */
	public function get_value() {
		if ( $this->entry->is_submitting() ) {
			$this->set_value( $this->get_submitted_value() );
		}

		return $this->args['value'];
	}

	/**
	 * Get submitted value.
	 *
	 * @return mixed
	 */
	public function get_submitted_value() {
		$value = filter_input( INPUT_POST, $this->get_base_name(), FILTER_DEFAULT );

		return $value;
	}

	/**
	 * Get the field id.
	 *
	 * @return string
	 */
	public function get_id() {
		return $this->args['slug'];
	}

	/**
	 * Get the field base name.
	 *
	 * @return string
	 */
	public function get_base_name() {
		$slug = $this->args['slug'];

		return $slug;
	}

	/**
	 * Get the field name.
	 *
	 * @return string
	 */
	public function get_input_name() {
		$name = $this->get_base_name();

		return $name;
	}

	/**
	 * Is field Valid.
	 *
	 * @return mixed
	 */
	public function is_valid() {
		return $this->valid;
	}

	/**
	 * Validates a value.
	 *
	 * @param \WP_Error|mixed $value The value to validate.
	 *
	 * @return mixed
	 */
	protected function validate_value( $value ) {
		// Let the validate start checking if error for 3rd party plugins to be able to send errors when populating.
		if ( true === $this->args['required'] && is_null( $value ) ) {
			$this->set_notice( 'required' );
			$this->valid    = false;
			$proposed_value = $value;
		} else {
			// Sanitize value.
			$proposed_value = $this->sanitize_value( $value );
			// Check if we got an error.
			if ( is_wp_error( $proposed_value ) ) {
				$this->set_notice( $proposed_value->get_error_code() );
				$this->valid = false;
			}
		}

		return $proposed_value;
	}

	/**
	 * Sanitizes the input value.
	 *
	 * @param mixed $value The value to sanitize.
	 *
	 * @return mixed|\WP_Error
	 */
	public function sanitize_value( $value ) {

		if ( 'date' === $this->args['type'] ) {
			$value = Utils::date( 'Y-m-d', Utils::gmstrtotime( $value ) );
		} else {
			$value = sanitize_text_field( $value );
		}

		return $value;
	}

	/**
	 * Sets the fields notices for user feadback.
	 *
	 * @param string $code The code of the message to set.
	 */
	public function set_notice( $code ) {
		if ( isset( $this->notice_messages[ $code ] ) ) {
			$notice = $this->notice_messages[ $code ];
		} else {
			$notice = $this->notice_messages['general_error'];
		}
		$this->notices[] = $notice;
	}

	/**
	 * Get and arg for the plugin.
	 *
	 * @param array|string $arg The arg or array of args to get.
	 *
	 * @return mixed
	 */
	public function get_args( $args ) {
		$return = array();
		foreach ( (array) $args as $arg ) {
			$value = null;
			if ( isset( $this->args[ $arg ] ) ) {
				$value = $this->args[ $arg ];
			}
			$return[ $arg ] = $value;
		}

		if ( 1 === count( $return ) ) {
			$return = array_shift( $return );
		}

		return $return;
	}

	/**
	 * Get and arg for the plugin.
	 *
	 * @param array $args The arg or array of args to get.
	 *
	 * @return mixed
	 */
	public function set_args( $args ) {
		$args = apply_filters( 'formation_field_set_args', $args, $this );
		$args = apply_filters( 'formation_field_set_args_' . $this->type, $args, $this );
		foreach ( $args as $arg => $value ) {
			$this->args[ $arg ] = $value;
		}
	}

	/**
	 * Get the attributes for this fields wrapper tag.
	 *
	 * @return array
	 */
	public function get_wrapper_attributes() {

		$attributes = array(
			'class'           => array(
				'formation-field',
			),
			'data-field-type' => $this->type,
			'data-form'       => get_queried_object_id(),
		);

		if ( ! empty( $this->args['has_conditions'] ) ) {
			$condition                    = array(
				'action'  => ! empty( $this->args['condition_action'] ) ? $this->args['condition_action'] : 'show',
				'field'   => $this->args['condition_field'],
				'compare' => ! empty( $this->args['condition_compare'] ) ? $this->args['condition_compare'] : 'equal',
				'value'   => $this->args['condition_value'],
			);
			$attributes['data-condition'] = wp_json_encode( $condition );
		}

		return $attributes;
	}

	/**
	 * Get the attributes for this fields input tag.
	 *
	 * @return array
	 */
	public function get_input_attributes() {

		$value = $this->args['value'];
		if ( ! empty( $value ) && 'date' === $this->args['type'] ) {
			$value = Utils::date( 'Y-m-d', Utils::gmstrtotime( $value ) );
		}
		$attributes = array(
			'type'        => $this->args['type'],
			'name'        => $this->get_input_name(),
			'id'          => $this->get_id(),
			'placeholder' => $this->args['placeholder'],
			'required'    => $this->args['required'],
			'value'       => $value,
			'data-field'  => $this->type,
			'data-slug'   => $this->args['slug'],
			'class'       => array(
				'formation-field-' . $this->type,
			),
		);

		return $attributes;
	}

	/**
	 * Get the attributes for this fields label tag.
	 *
	 * @return array
	 */
	public function get_label_attributes() {
		return array(
			'for'   => $this->args['slug'],
			'class' => array(
				'formation-field-label',
			),
		);
	}

	/**
	 * Get the attributes for this fields required tag.
	 *
	 * @return array
	 */
	public function get_required_attributes() {
		return array(
			'class' => array(
				'required',
			),
		);
	}

	/**
	 * Get the attributes for this fields label tag.
	 *
	 * @return array
	 */
	public function get_description_attributes() {
		return array(
			'class' => array(
				'description',
				'formation-field-description',
			),
		);
	}

	/**
	 * Get the attributes for this fields notices.
	 *
	 * @param array $notice The notice array.
	 *
	 * @return array
	 */
	public function get_notice_attributes( $notice ) {
		return array(
			'class' => array(
				'notice',
				'formation-field-notice',
				'formation-field-notice-' . $notice['type'],
			),
		);
	}

	/**
	 * Get the input template string for this fields input.
	 *
	 * @return string
	 */
	public function get_input_template() {
		return '<input %s>';
	}

	/**
	 * Render a label tag for a field.
	 *
	 * @return string
	 */
	public function render_label() {

		$html = null;
		if ( ! empty( $this->args['label'] ) ) {
			$attributes       = $this->get_label_attributes();
			$attribute_string = $this->build_attribute_string( $attributes, 'label' );
			$html             = sprintf( '<label %s>%s</label>', $attribute_string, esc_html( $this->args['label'] ) );
		}

		return $html;
	}

	/**
	 * Render a required tag for a field.
	 *
	 * @return string
	 */
	public function render_required() {

		$html = null;
		if ( ! empty( $this->args['required'] ) ) {
			$attributes       = $this->get_required_attributes();
			$attribute_string = $this->build_attribute_string( $attributes, 'required' );
			$html             = sprintf( '<span %s>%s</span>', $attribute_string, esc_html( $this->args['required_text'] ) );
		}

		return $html;
	}

	/**
	 * Render an input tag for a field.
	 *
	 * @return string
	 */
	public function render_input() {

		$attributes       = $this->get_input_attributes();
		$attribute_string = $this->build_attribute_string( $attributes, 'input' );
		$input_template   = $this->get_input_template();
		$html             = sprintf( $input_template, $attribute_string, $this->get_value() );

		return $html;
	}

	/**
	 * Render a label tag for a field.
	 *
	 * @return string
	 */
	public function render_description() {

		$html = null;
		if ( ! empty( $this->args['description'] ) ) {
			$attributes       = $this->get_description_attributes();
			$attribute_string = $this->build_attribute_string( $attributes, 'description' );
			$html             = sprintf( '<div %s>%s</div>', $attribute_string, esc_html( $this->args['description'] ) );
		}

		return $html;
	}

	/**
	 * Render a notice tag for a field.
	 *
	 * @return string
	 */
	public function render_notice() {

		$html = null;
		if ( ! empty( $this->notices ) ) {
			foreach ( $this->notices as $notice ) {
				$default_notice   = array(
					'type'    => 'success',
					'message' => __( 'Success', 'formation' ),
				);
				$notice           = wp_parse_args( $notice, $default_notice );
				$attributes       = $this->get_notice_attributes( $notice );
				$attribute_string = $this->build_attribute_string( $attributes, 'notice' );
				$html             = sprintf( '<div %s>%s</div>', $attribute_string, esc_html( $notice['message'] ) );
			}
		}

		return $html;
	}

	/**
	 * Build attribute string for an HTML tag.
	 *
	 * @param array  $attributes Array of attributes to build.
	 * @param string $tag        The tag to build for.
	 *
	 * @return string
	 */
	public function build_attribute_string( $attributes, $tag ) {

		$attributes = apply_filters( 'formation_field_' . $tag . '_attributes_' . $this->type, $attributes, $this );
		$attributes = apply_filters( 'formation_field_' . $tag . '_attributes', $attributes, $this );

		return Component\Utility\Utils::build_attributes( $attributes );
	}
}
