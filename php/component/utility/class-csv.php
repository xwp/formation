<?php
/**
 * CSV utility functions.
 *
 * @package Formation
 */

namespace Formation\Component\Utility;

use Formation;

/**
 * Class CSV
 */
class CSV {

	/**
	 * Send download headers to initiate CSV download.
	 *
	 * @param string $filename Filename for download.
	 * @return void
	 */
	private static function download_headers( $filename ) {

		// Disable browser caching.
		$now = gmdate( 'D, d M Y H:i:s' );
		header( 'Expires: Tue, 03 Jul 2001 06:00:00 GMT' );
		header( 'Cache-Control: max-age=0, no-cache, must-revalidate, proxy-revalidate' );
		header( "Last-Modified: {$now} GMT" );

		// Set download headers.
		header( 'Content-Type: text/csv; charset=utf-8' );
		header( 'Content-Disposition: attachment; filename="'.$filename.'"' );
	}

	/**
	 * Converts an array into a CSV structure.
	 *
	 * @param array  $data The input array.
	 * @param string $filename If download, then this is the filename.
	 * @param bool   $download True initiates a download.
	 * @return string
	 */
	public static function array_to_csv( $data, $filename = 'output.csv', $download = false ) {
		if ( 0 === count( $data ) ) {
			return '';
		}

		ob_start();
		$df = fopen( 'php://output', 'w' );

		$header_row = array();
		self::flatten_keys( $header_row, $data[0] );
		fputcsv( $df, $header_row );

		foreach ( $data as $row ) {
			$temp     = array();
			$item_row = array();
			self::flatten_items( $temp, $row );
			foreach ( $header_row as $header_key ) {
				if ( array_key_exists( $header_key, $temp ) ) {
					$item_row[ $header_key ] = $temp[ $header_key ];
				} else {
					$item_row[ $header_key ] = '';
				}
			}
			fputcsv( $df, $item_row );
		}

		// Not dealing with the actual filesystem. WP_Filesystem gets in the way here.
		fclose( $df ); // phpcs:ignore

		$csv = ob_get_clean();

		if ( $download ) {
			self::download_headers( $filename );

			// Echo's to buffer, not WordPress so can be ignored.
			echo $csv; // phpcs:ignore
			exit;
		}

		return $csv;
	}

	/**
	 * Flattens hierarchical keys.
	 *
	 * @param array   $result The final result will be stored here.
	 * @param array   $array The input data.
	 * @param string  $parent Used to keep track of parent keys to construct hierarchy.
	 * @param integer $offset Because child_1 looks better than child_0 to end users.
	 * @return void
	 */
	private static function flatten_keys( &$result, $array, $parent = '', $offset = 1 ) {
		foreach ( $array as $key => $item ) {
			if ( 'integer' === gettype( $key ) ) {
				$key = $key + $offset;
			}
			if ( is_array( $item ) && 0 < count( $item ) ) {
				self::flatten_keys( $result, $item, $parent . $key . '_' );
				continue;
			}
			$result[] = rtrim( ltrim( $parent . $key, '1_' ), '_1' );
		}
	}

	/**
	 * Flattens hierarchical items.
	 *
	 * @param array   $result The final result will be stored here.
	 * @param array   $array The input data.
	 * @param string  $parent Used to keep track of parent keys to construct hierarchy.
	 * @param integer $offset Because child_1 looks better than child_0 to end users.
	 * @return void
	 */
	private static function flatten_items( &$result, $array, $parent = '', $offset = 1 ) {
		foreach ( $array as $key => $item ) {
			if ( 'integer' === gettype( $key ) ) {
				$key = $key + $offset;
			}
			if ( is_array( $item ) ) {
				self::flatten_items( $result, $item, $parent . $key . '_' );
				continue;
			}
			$item_key            = rtrim( ltrim( $parent . $key, '1_' ), '_1' );
			$result[ $item_key ] = $item;
		}
	}

	/**
	 * Normalize file names by converting HTML entities back to the respective special characters.
	 *
	 * @param string $form_title Title of the form.
	 * @return string $normalize_form_title The normalized form title with special characters.
	 */
	public static function normalize_filename( $form_title ) {
		if ( ! $form_title ) {
			return;
		}

		// converts HTML entities for ampersands, dashes etc. back into the special character.
		$normalize_form_title = html_entity_decode( $form_title, ENT_QUOTES );

		return $normalize_form_title;
	}

}
