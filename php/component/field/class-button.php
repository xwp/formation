<?php
/**
 * TextArea class for Formation field.
 *
 * @package Formation
 */

namespace Formation\Component\Field;

use Formation;

/**
 * Class Button
 */
class Button extends FieldAbstract {

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type = 'button';

	/**
	 * Get the attributes for this fields input tag.
	 *
	 * @return array
	 */
	public function get_input_attributes() {
		$attributes = parent::get_input_attributes();
		unset( $attributes['value'] );

		return $attributes;
	}

	/**
	 * Get the input template string for this fields input.
	 *
	 * @return string
	 */
	public function get_input_template() {
		return '<button %s>%s</button>';
	}

}
