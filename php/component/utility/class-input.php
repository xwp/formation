<?php
/**
 * Input sanitization class for Formation.
 *
 * @package Formation
 */

namespace Formation\Component\Utility;

use Formation;

/**
 * Class Input
 */
class Input {

	/**
	 * Sanitize global input.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @param int         $method INPUT_POST or INPUT_GET.
	 * @return mixed
	 */
	public static function input( $key, $default = null, $method = INPUT_GET ) {
		$val = filter_input( $method, $key, FILTER_SANITIZE_STRING );
		return ! is_null( $val ) ? $val : $default;
	}

	/**
	 * Sanitize global input array.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @param int         $method INPUT_POST or INPUT_GET.
	 * @return mixed
	 */
	public static function input_array_raw( $key, $default = null, $method = INPUT_GET ) {
		$val = filter_input_array( $method );
		$val = isset( $val[ $key ] ) ? $val[ $key ] : $default;
		return is_null( $val ) || 0 === count( (array) $val ) ? $default : $val;
	}

	/**
	 * Sanitize global input strings.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @return mixed
	 */
	public static function text( $key, $default = '' ) {
		return wp_unslash( self::input( $key, $default, INPUT_GET ) );
	}

	/**
	 * Sanitize global POST input strings.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @return mixed
	 */
	public static function text_post( $key, $default = '' ) {
		return wp_unslash( self::text( $key, $default, INPUT_POST ) );
	}

	/**
	 * Sanitize global input int.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @return mixed
	 */
	public static function int( $key, $default = 0 ) {
		return (int) wp_unslash( self::input( $key, $default, INPUT_GET ) );
	}

	/**
	 * Sanitize global POST input int.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @return mixed
	 */
	public static function int_post( $key, $default = 0 ) {
		return (int) wp_unslash( self::input( $key, $default, INPUT_POST ) );
	}

	/**
	 * Sanitize global GET input int array.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @return mixed
	 */
	public static function int_array( $key, $default = array() ) {

		$values = self::input_array_raw( $key, $default );

		$values = array_map(
			function( $value ) {
				return (int) $value;
			},
			$values
		);

		return 0 !== count( $values ) ? $values : $default;
	}

	/**
	 * Sanitize global POST input int array.
	 *
	 * @param string      $key Name of var.
	 * @param string|null $default If nothing is found.
	 * @return mixed
	 */
	public static function int_post_array( $key, $default = array() ) {

		$values = self::input_array_raw( $key, $default, INPUT_POST );

		$values = array_map(
			function( $value ) {
				return (int) $value;
			},
			$values
		);

		return 0 !== count( $values ) ? $values : $default;
	}

}
