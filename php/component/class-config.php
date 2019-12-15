<?php
/**
 * Interface for config based classes.
 *
 * @package Formation
 */

namespace Formation\Component;

/**
 * Sets up methods used if this class has configs.
 */
interface Config {

	/**
	 * Retrieve config from class.
	 */
	public function get_config();

}
