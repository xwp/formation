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
		header( "Content-Disposition: attachment; filename=$filename" );
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
		self::flatten_keys( $header_row, $data );
		fputcsv( $df, $header_row );

		foreach ( $data as $row ) {
			$item_row = array();
			self::flatten_items( $item_row, $row );
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
			if ( is_array( $item ) ) {
				self::flatten_keys( $result, $item, $parent . $key . '_' );
				continue;
			}
			$result[] = ltrim( $parent . $key, '1_' );
		}
	}

	/**
	 * Flattens hierarchical items.
	 *
	 * @param array $result The final result will be stored here.
	 * @param array $array The input data.
	 * @return void
	 */
	private static function flatten_items( &$result, $array ) {
		foreach ( $array as $item ) {
			if ( is_array( $item ) ) {
				self::flatten_items( $result, $item );
				continue;
			}
			$result[] = $item;
		}
	}
}
