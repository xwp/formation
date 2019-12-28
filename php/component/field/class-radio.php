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
class Radio extends Checkbox {

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type = 'radio';

	/**
	 * Get the name for the option input.
	 *
	 * @return string
	 */
	public function get_option_name() {
		return $this->get_args( 'slug' );
	}

	/**
	 * Get the id for the option input.
	 *
	 * @return string
	 */
	public function get_option_id( $index ) {
		return $this->get_args( 'slug' ) . '_' . $index;
	}

	/**
	 * Get submitted value.
	 *
	 * @return mixed
	 */
	public function get_submitted_value() {

		$value = filter_input( INPUT_POST, $this->get_base_name(), FILTER_DEFAULT );

		return array( $value );
	}

}
