<?php
/**
 * CSV utility functions.
 *
 * @package Formation
 */
namespace Formation\Component\Utility;

use Formation\Form;

/**
 * Class FormConfig
 */
class Form_Config {

	/**
	 * Parse the blocks in a form post object to get a standardised array of the form config
	 *
	 * @param int     $form_id The post id of a form object.
	 * @return array
	 */
	public static function get_config( $form_id ) {
		$form = get_post( $form_id );

		if ( !$form || Form::$slug !== $form->post_type ) {
			return array();
		}

		$blocks = parse_blocks($form->post_content);

		return static::parse_blocks_for_fields($blocks);

	}

	/**
	 * Parse blocks to get form field definitions and recursively add inner block fields to extract
	 * all fields we're interested in from the top level blocks array passed in
	 *
	 * @param array  $blocks The blocks to parse
	 * @param array  $fields The current fields array to add newly found fields to
	 * @param string $parent The parent slug to assign to any found fields
	 * @return array
	 */
	protected static function parse_blocks_for_fields($blocks, $fields = array(), $parent = '') {

		foreach ($blocks as $block) {
			$is_form_field = ( strpos( $block[ 'blockName' ], 'formation/' ) === 0 );

			if ( $is_form_field ) {
				$fields[ $block[ 'attrs' ][ 'slug' ] ] = array(
					'type' => str_replace( 'formation/', '', $block[ 'blockName' ] ),
					'parent' => $parent,
					'attrs' => $block[ 'attrs' ],
				);
			}

			if( $block[ 'innerBlocks' ] ) {
				$inner_parent = $is_form_field ? $block[ 'attrs' ][ 'slug' ] : '';
				$fields = static::parse_blocks_for_fields( $block['innerBlocks'], $fields, $inner_parent );
			}
		}

		return $fields;
	}
}
