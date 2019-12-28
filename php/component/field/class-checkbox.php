<?php
/**
 * TextArea class for Formation field.
 *
 * @package Formation
 */

namespace Formation\Component\Field;

use Formation;

/**
 * Class TextArea
 */
class Checkbox extends Select {

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type = 'checkbox';

	public $data_att;

	/**
	 * Get the input template string for this fields input.
	 *
	 * @return string
	 */
	public function get_input_template() {
		$options = $this->build_options();

		return '<ul %s>' . $options . '</ul>';
	}

	/**
	 * Get the attributes for this fields input tag.
	 *
	 * @return array
	 */
	public function get_input_attributes() {

		$attributes     = parent::get_input_attributes();
		$this->data_att = $attributes['data-field'];

		unset( $attributes['data-field'] );

		return $attributes;
	}

	/**
	 * Get the input template string for this fields input.
	 *
	 * @param int $index The index of the option.
	 *
	 * @return string
	 */
	public function get_option_template( $index ) {
		return '<li><input %s /><label for="' . $this->get_option_id( $index ) . '">%s</label></li>';
	}

	/**
	 * Build a single option.
	 *
	 * @param string $option_value The value of the option.
	 * @param int    $index        The option index/number.
	 *
	 * @return array
	 */
	public function get_option_attributes( $option_value, $index ) {
		$value = $this->get_value();
		if ( is_array( $value ) ) {
			$is_checked = in_array( $option_value, $value, true );
		} else {
			$is_checked = checked( $option_value, $value, false );
		}
		$option_atts = array(
			'type'       => $this->type,
			'value'      => $option_value,
			'name'       => $this->get_option_name(),
			'id'         => $this->get_option_id( $index ),
			'checked'    => empty( $is_checked ) ? false : true,
			'data-field' => $this->data_att,
		);

		return $option_atts;
	}

	/**
	 * Get the name for the option input.
	 *
	 * @return string
	 */
	public function get_option_name() {
		$name = $this->get_input_name();

		return $name . '[]';
	}

	/**
	 * Get the id for the option input.
	 *
	 * @return string
	 */
	public function get_option_id( $index ) {
		$slug = $this->get_args( 'slug' );

		return $slug . '_' . $index;
	}

	/**
	 * Get submitted value.
	 *
	 * @return mixed
	 */
	public function get_submitted_value() {
		$name  = $this->get_base_name();
		$args  = array(
			$name => array(
				'flags' => FILTER_REQUIRE_ARRAY,
			),
		);
		$value = filter_input_array( INPUT_POST, $args, true );

		return $value[ $name ];
	}

	/**
	 * Sanitizes the input value.
	 *
	 * @param mixed $value The value to sanitize.
	 *
	 * @return mixed|\WP_Error
	 */
	public function sanitize_value( $value ) {

		$value = array_map(
			function ( $value ) {
				return sanitize_text_field( $value );
			},
			(array) $value
		);

		return $value;
	}
}
