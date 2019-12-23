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
		fputcsv( $df, array_keys( reset( $data ) ) );
		foreach ( $data as $row ) {
			fputcsv( $df, $row );
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
}
