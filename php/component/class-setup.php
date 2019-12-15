<?php
/**
 * Interface for config based classes.
 *
 * @package Formation
 */

namespace Formation\Component;

/**
 * Defines an object that requires setup.
 */
interface Setup {

	/**
	 * Setup the object.
	 */
	public function setup();

}
