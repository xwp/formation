<?php
/**
 * Interface for post type based classes.
 *
 * @package Formation
 */

namespace Formation\Component;

/**
 * Sets up methods used if this class has configs.
 */
interface Post_Types {

	/**
	 * Retrieve config from class.
	 *
	 * @return array
	 */
	public function post_types();

}
