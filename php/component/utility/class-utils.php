<?php
/**
 * Utility class for Formation.
 *
 * @package Formation
 */

namespace Formation\Component\Utility;

use Formation;

/**
 * Class Utils
 */
class Utils {


	/**
	 * Build Attributes for the input control
	 *
	 * @param array $attributes_array Key Value array of attributes to construct.
	 *
	 * @return string Attributes string for applying to an element.
	 */
	public static function build_attributes( $attributes_array ) {
		// setup attributes.
		$attributes = [];
		foreach ( $attributes_array as $att => $value ) {
			if ( is_bool( $value ) ) {
				if ( true === $value ) {
					$value = $att; // make value repeated i.e required="required".
				} else {
					continue; // A false param shouldn't render.
				}
			}
			if ( is_array( $value ) ) {
				$value = implode( ' ', $value );
			}
			$attributes[] = sprintf( '%s="%s"', esc_html( $att ), esc_attr( $value ) );
		}

		return implode( ' ', $attributes );
	}

}
