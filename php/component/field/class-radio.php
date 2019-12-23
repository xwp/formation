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
	public function get_option_id() {
		return $this->get_args( 'slug' );
	}

}
