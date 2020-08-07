<?php
/**
 * Utility class for Formation.
 *
 * @package Formation
 */

namespace Formation\Component\Utility;

use Formation;
use WP_Embed;

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
		$attributes = array();
		foreach ( $attributes_array as $att => $value ) {
			if ( is_bool( $value ) || is_null( $value ) ) {
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

	/**
	 * Trim a blob of text.
	 *
	 * @param string $text Text to trim.
	 * @param int    $length Characters to trim it to.
	 * @param string $pattern A suffic to the trimmed text.
	 * @param bool   $chop_word True will trim the middle of a word. False looks for an available space.
	 * @return string
	 */
	public static function trim_text( $text, $length, $pattern = '…', $chop_word = false ) {
		if ( strlen( $text ) > $length ) {
			$offset       = ( $length - 3 ) - strlen( $text );
			$space_offset = $chop_word ? strrpos( $text, ' ', $offset ) : false;
			$text         = substr( $text, 0, $space_offset ? $space_offset : $offset ) . $pattern;
		}
		return $text;
	}

	/**
	 * Converts string to time with timezone offset.
	 *
	 * @see https://mediarealm.com.au/articles/wordpress-timezones-strtotime-date-functions/
	 *
	 * @param string $str String to convert to time.
	 * @return time|Exception
	 */
	public static function gmstrtotime( $str ) {
		$tz_string = get_option( 'timezone_string' );
		$tz_offset = get_option( 'gmt_offset', 0 );
		if ( ! empty( $tz_string ) ) {
			$timezone = $tz_string;
		} elseif ( 0 === $tz_offset ) {
			$timezone = 'UTC';
		} else {
			$timezone = $tz_offset;
			if ( substr( $tz_offset, 0, 1 ) !== '-' && substr( $tz_offset, 0, 1 ) !== '+' && substr( $tz_offset, 0, 1 ) !== 'U' ) {
				$timezone = '+' . $tz_offset;
			}
		}

		$str = str_replace( '/', '-', $str );

		// Ensure format of $str is either dd/mm/yyyy OR yyyy/mm/dd.
		if ( preg_match( '/(([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4})|(\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1]))/', $str ) ) {
			// Convert format to yyyy/mm/dd.
			if ( preg_match( '/(([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4})/', $str ) ) {
				$parts = explode( '-', $str );
				$str   = implode( '-', array( $parts[2], $parts[1], $parts[0] ) );
			}
			// The eventual format for $str will be yyyy/mm/dd.
			$datetime = new \DateTime( $str, new \DateTimeZone( $timezone ) );
			return $datetime->format( 'U' );
		}

		return new \WP_Error( 'invalid_value', __( 'Invalid Date', 'caulfield' ) );
	}

	/**
	 * Get a localized WP date.
	 *
	 * @param string $format The date format.
	 * @param int    $timestamp The timestamp.
	 * @return \DateTime|error
	 */
	public static function date( $format, $timestamp = null ) {
		if ( ! absint( $timestamp ) ) {
			return new \WP_Error( 'invalid_value', __( 'Invalid Timestamp', 'caulfield' ) );
		}

		if ( is_wp_error( $timestamp ) ) {
			return $timestamp;
		}

		$tz_string = get_option( 'timezone_string' );
		$tz_offset = get_option( 'gmt_offset', 0 );
		if ( ! empty( $tz_string ) ) {
			$timezone = $tz_string;
		} elseif ( 0 === $tz_offset ) {
			$timezone = 'UTC';
		} else {
			$timezone = $tz_offset;
			if ( substr( $tz_offset, 0, 1 ) !== '-' && substr( $tz_offset, 0, 1 ) !== '+' && substr( $tz_offset, 0, 1 ) !== 'U' ) {
				$timezone = '+' . $tz_offset;
			}
		}
		if ( null === $timestamp ) {
			$timestamp = time();
		}
		$datetime = new \DateTime();
		$datetime->setTimestamp( $timestamp );
		$datetime->setTimezone( new \DateTimeZone( $timezone ) );
		return $datetime->format( $format );
	}

}
