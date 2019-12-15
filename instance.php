<?php
/**
 * Instantiates the Formation plugin
 *
 * @package Formation
 */

namespace Formation;

/**
 * Formation Plugin Instance
 *
 * @return Plugin
 */
function formation() {
	static $formation;
	require_once __DIR__ . '/php/class-plugin.php';

	if ( ! $formation ) {
		$formation = new Plugin( __FILE__ );
	}

	return $formation;
}

// Init formation instance.
formation();
