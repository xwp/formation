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
class Select extends FieldAbstract {

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type = 'select';

	/**
	 * Get the attributes for this fields input tag.
	 *
	 * @return array
	 */
	public function get_input_attributes() {
		$attributes = parent::get_input_attributes();
		unset( $attributes['value'] );
		unset( $attributes['type'] );

		return $attributes;
	}

	/**
	 * Get the input template string for this fields input.
	 *
	 * @return string
	 */
	public function get_input_template() {
		$options = $this->build_options();

		return '<select %s>' . $options . '</select>';
	}

	/**
	 * Get the input template string for this fields input.
	 *
	 * @param int $index The index of the option.
	 *
	 * @return string
	 */
	public function get_option_template( $index ) {
		return '<option %s>%s</option>';
	}

	/**
	 * Get options for the field values.
	 *
	 * @return array
	 */
	public function get_options() {
		$options = $this->get_args( 'options' );
		if ( ! empty( $options ) ) {
			$options = explode( "\n", $options );
			$options = array_map(
				function ( $option ) {
					$part = explode( '|', $option );
					if ( empty( $part[1] ) ) {
						$part[1] = $part[0];
					}

					return $part;
				},
				$options
			);
		}

		return $options;
	}

	/**
	 * Build the options for the select.
	 *
	 * @return string
	 */
	public function build_options() {
		$options     = $this->get_options();
		$option_html = array();
		if ( ! empty( $options ) ) {
			$option_html = array();
			foreach ( $options as $index => $option ) {
				$option_atts        = $this->get_option_attributes( $option[0], $index );
				$option_atts_string = Formation\Component\Utility\Utils::build_attributes( $option_atts );
				$option_html[]      = sprintf( $this->get_option_template( $index ), $option_atts_string, esc_html( $option[1] ) );
			}
		}
		$option_html = array_filter( $option_html );

		return implode( $option_html );
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
		$value       = $this->get_value();
		$option_atts = array(
			'value'       => $option_value,
			'selected'    => $value === $option_value,
			'data-option' => $index,
		);

		return $option_atts;
	}

}
