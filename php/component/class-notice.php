<?php
/**
 * Notice component for notice based classes.
 *
 * @package Formation
 */

namespace Formation\Component;

/**
 * Defines an object that requires setup.
 */
interface Notice {

	/**
	 * Set admin notice.
	 *
	 * @return array
	 */
	public function get_notices();

}
