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
	 * @param int $index The option index.
	 *
	 * @return string
	 */
	public function get_option_name( $index ) {
		return $this->get_args( 'slug' );
	}

	/**
	 * Get the id for the option input.
	 *
	 * @param int $index The option index.
	 *
	 * @return string
	 */
	public function get_option_id( $index ) {
		return $this->get_args( 'slug' );
	}

}
