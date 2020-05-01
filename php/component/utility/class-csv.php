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
	 * @var int
	 */
	protected $form_id;

	/**
	 * @var Form_Config
	 */
	protected $config;

	/**
	 * @var array
	 */
	protected $input_data;

	/**
	 * @var array
	 */
	protected $output_data = array();

	/**
	 * CSV constructor.
	 *
	 * @param $form_id
	 * @param $input_data
	 */
	public function __construct( $form_id, $input_data )
	{
		$this->form_id = $form_id;
		$this->config = new Form_Config($form_id);

		$this->input_data = $input_data;
	}

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
	 * Converts an array into a CSV structure and initiates a download if required.
	 *
	 * @param bool   $download True initiates a download.
	 * @param null|string $filename A custom filename or null to generate the filename
	 * @return string
	 */
	public function array_to_csv( $download = false, $filename = null ) {
		if ( 0 === count( $this->input_data ) ) {
			return '';
		}

		ob_start();
		$df = fopen( 'php://output', 'w' );

		foreach ( $this->input_data as $row ) {
			$this->process_row( $row );
		}

		fputcsv( $df, $this->get_header_row() );

		foreach ( $this->prepare_csv_data() as $row ) {
			fputcsv( $df, $row );
		}

		// Not dealing with the actual filesystem. WP_Filesystem gets in the way here.
		fclose( $df ); // phpcs:ignore

		$csv = ob_get_clean();

		if ( $download ) {
			if ( !$filename ) {
				$filename = $this->generate_default_filename();
			}

			self::download_headers( $filename );

			// Echo's to buffer, not WordPress so can be ignored.
			echo $csv; // phpcs:ignore
			exit;
		}

		return $csv;
	}

	/**
	 * Create the header row using the config of rows
	 *
	 * @return string[]
	 */
	protected function get_header_row() {
		$headers = array(
			'Entry ID',
			'Entry Created'
		);

		foreach ($this->config->get_config() as $slug => $field) {
			//don't include repeaters since their values are in their child fields, which will have their own column
			if ( !$this->config->is_repeater( $slug ) ) {
				$headers[] = $this->config->get_full_label( $slug );
			}
		}

		return $headers;
	}

	/**
	 * Use the prepared output rows to create rows ready for the CSV file, mapped to the relevant header label positions
	 *
	 * @return array
	 */
	protected function prepare_csv_data() {
		$data = array();

		foreach ( $this->output_data as $data_row ) {
			$output_row = array(
				'Entry ID' => isset( $data_row[ '_entry_id'] ) ? $data_row[ '_entry_id'] : '',
				'Entry Created' => isset( $data_row[ '_entry_created'] ) ? $data_row[ '_entry_created'] : '',
			);

			foreach ( $this->config->get_config() as $slug => $field ) {
				//don't include repeaters since their values are in their child fields, which will have their own column
				if ( !$this->config->is_repeater( $slug )) {
					$output_row[] = isset($data_row[$slug]) ? $data_row[$slug] : '';
				}
			}

			$data[] = $output_row;
		}

		return $data;
	}

	/**
	 * Given the values for all of the repeaters in a row, organise them into keyed sets of rows per repeater field
	 *
	 * @param array $repeaters
	 * @return array
	 */
	protected function parse_repeaters($repeaters) {
		$data = array();

		//repeaters to parse
		foreach ($repeaters as $repeater_slug => $repeater) {
			//each row of data within the repeater
			foreach ($repeater as $i => $repeater_row) {
				//each individual field value within the repeater
				foreach ($repeater_row as $field_slug => $field_value) {
					//don't include the invalidity field or any field which somehow has no slug
					if ($field_slug && $field_slug !== '_invalid_') {
						$field_type = $this->config->get_field_type( $field_slug );
						$data[ $repeater_slug ][ $i ][ $field_slug ] = static::get_formatted_value($field_value, $field_type);
					}
				}
			}
		}

		return $data;
	}

	/**
	 * Given the keys sets of rows per repeater, duplicate the information to create unique row combinations for each
	 *
	 * @param array $sets
	 * @return array
	 */
	protected function expand_repeater_rows($sets) {
		$data = array();

		$counter = 0;

		foreach ($sets as $data_set) {
			if ( !$counter ) {
				$data = $data_set;
				$counter++;
				continue;
			}

			$temp_row_data = array();

			foreach ($data as $existing_row) {
				foreach ($data_set as $new_row) {
					$temp_row_data[] = array_merge($existing_row, $new_row);
				}
			}

			$counter++;
			$data = $temp_row_data;
		}

		return $data;
	}

	/**
	 * Process an individual row of data
	 *
	 * @param array $row the row data to process
	 * @param array $parent_row parent data to be merged with the input data row when processing
	 * @return void
	 */
	protected function process_row( $row, $parent_row = array() ) {
		$data = $parent_row;
		$repeaters = array();

		// populate all the fields that aren't repeaters first so we've got "parent" data
		foreach ( $row as $slug => $field_value ) {
			if ( !$this->config->is_repeater( $slug ) ) {
				$field_type = $this->config->get_field_type( $slug );
				$data[ $slug ] = static::get_formatted_value( $field_value, $field_type );
			} else {
				$repeaters[ $slug ] = $field_value;
			}
		}

		$repeater_sets = $this->parse_repeaters( $repeaters );
		$repeater_data = $this->expand_repeater_rows( $repeater_sets );

		//now that we've got the repeaters organised and expanded to unique rows, push them and the parent data into new rows
		foreach ( $repeater_data as $repeater_row ) {
			$this->process_row( $repeater_row, $data );
		}

		//only write the original row if we didn't already let the repeaters do this
		if ( !count( $repeater_data ) ) {
			$this->output_data[] = $data;
		}
	}

	/**
	 * Format the input field according to its field type
	 *
	 * @param $value input value to be formatted
	 * @param $type type of field upon which to base formatting
	 * @return string
	 */
	protected static function get_formatted_value( $value, $type ) {
		switch ($type) {
			case 'checkbox':
				return is_array( $value ) ? implode( ", ", $value ) : $value;
			default:
				return is_array( $value ) ? json_encode( $value ) : $value;
		}
	}

	/**
	 * Generate a default filename for this CSV file
	 *
	 * @return string
	 */
	protected function generate_default_filename() {
		$date     = gmdate( 'Y_m_d__H_i_s' );
		$normalize_filename = static::normalize_filename( get_the_title( $this->form_id ) );
		$filename = sprintf( '%s-%s.csv', $normalize_filename, $date );

		return apply_filters( 'formation_csv_download_filename', $filename, $this->form_id );
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
