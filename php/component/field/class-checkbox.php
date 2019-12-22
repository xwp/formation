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
class Checkbox extends FieldAbstract {

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

		return '<div %s>' . $options . '</div>';
	}


	/**
	 * Build the options for the select.
	 *
	 * @return string
	 */
	public function build_options() {
		$options     = $this->get_args( 'options' );
		$option_html = array();
		if ( ! empty( $options ) ) {
			$options     = explode( "\n", $options );
			$value       = $this->get_value();
			$option_html = array();
			$name_id     = $this->get_args( 'slug' );
			foreach ( $options as $index => $option ) {
				$part = explode( '|', $option );
				if ( empty( $part[1] ) ) {
					$part[1] = $part[0];
				}
				$is_checked         = checked( $part[0], $value, false );
				$option_atts        = array(
					'type'    => 'checkbox',
					'value'   => $part[0],
					'name'    => $name_id . '[' . $index . ']',
					'id'      => $name_id . '_' . $index,
					'checked' => empty( $is_checked ) ? false : true,
				);
				$option_atts_string = Formation\Component\Utility\Utils::build_attributes( $option_atts );
				$option_html[]      = sprintf( '<label><input %s />%s</label>', $option_atts_string, esc_html( $part[1] ) );

			}
		}
		$option_html = array_filter( $option_html );

		return implode( $option_html );
	}

}
