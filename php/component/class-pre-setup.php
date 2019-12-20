<?php
/**
 * Interface for post-setup based classes.
 *
 * @package Formation
 */

namespace Formation\Component;

/**
 * Defines an object that requires a pre-setup.
 */
interface Pre_Setup {

	/**
	 * Pre setup plugins.
	 */
	public function pre_setup();

}
