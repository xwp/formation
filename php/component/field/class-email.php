<?php
/**
 * Text-Input class for Formation field.
 *
 * @package Formation
 */

namespace Formation\Component\Field;

use Formation;

/**
 * Class Text_Input
 */
class Email extends FieldAbstract {

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type = 'email';

	/**
	 * Sanitizes the input value.
	 *
	 * @param mixed $value The value to sanitize.
	 *
	 * @return mixed
	 */
	public function sanitize_value( $value ) {
		if ( ! is_email( $value ) ) {
			return new \WP_Error( 'invalid_value', $value );
		}

		return $value;
	}
}
