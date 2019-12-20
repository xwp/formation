<?php
/**
 * Interface for post-setup based classes.
 *
 * @package Formation
 */

namespace Formation\Component;

/**
 * Defines an object that requires a post-setup.
 */
interface Post_Setup {

	/**
	 * Post setup plugins.
	 */
	public function post_setup();

}
