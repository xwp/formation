<?php
/**
 * Form presentation logic.
 *
 * @package Formation
 */

namespace Formation\Component\Utility;

/**
 * Class Form_Presenter
 */
class Form_Presenter {

	/**
	 * Format the input field according to its field type
	 *
	 * @param mixed  $value input value to be formatted.
	 * @param string $type  type of field upon which to base formatting.
	 * @return string
	 */
	public static function get_formatted_value( $value, $type ) {
		switch ( $type ) {
			case 'checkbox':
				return is_array( $value ) ? implode( ', ', $value ) : $value;
			default:
				return is_array( $value ) ? wp_json_encode( $value ) : $value;
		}
	}

	/**
	 * Format the entry's fields for quick display
	 *
	 * @param array       $entry The entry data.
	 * @param Form_Config $config The config object for the form which produced the entry.
	 * @param int         $repeater_level The repeater level to control indenting of sub-fields.
	 *
	 * @return string
	 */
	public static function get_formatted_entry( $entry, $config, $repeater_level = 0 ) {

		$data = '';

		foreach ( $entry as $slug => $field_value ) {
			// if it's an internal string like _entry_id, _entry_created or _invalid, don't do anything with it.
			if ( '_' === substr( $slug, 0, 1 ) ) {
				continue;
			}

			// when we're inside a repeater, indent the text to show the level.
			if ( $repeater_level ) {
				$data .= str_repeat( '&nbsp;', $repeater_level );
			}

			if ( $config->is_repeater( $slug ) && ! empty( $field_value ) ) {
				$data .= sprintf( '<strong>%s:</strong><br/>', esc_html( $config->get_field_label( $slug ) ) );
				foreach ( $field_value as $repeater_row ) {
					$data .= static::get_formatted_entry( $repeater_row, $config, $repeater_level + 1 );
					$data .= '<br/>';
				}
			} else {
				$field_type = $config->get_field_type( $slug );
				$data      .= sprintf(
					'<strong>%s:</strong>&nbsp;%s<br/>',
					esc_html( $config->get_field_label( $slug ) ),
					esc_html( static::get_formatted_value( $field_value, $field_type ) )
				);
			}
		}

		return $data;
	}

}
