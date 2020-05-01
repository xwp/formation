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
	 * @var int
	 */
	protected $form_id;

	/**
	 * @var array
	 */
	protected $config;

	/**
	 * Form_Config constructor.
	 * @param $form_id
	 */
	public function __construct( $form_id ) {
		$this->form_id = $form_id;
		$this->config  = $this->parse_config();
	}

	/**
	 * @return array
	 */
	public function get_config() {
		return $this->config;
	}

	/**
	 * Find the field label for a provided slug, or just return the slug if it doesn't exist
	 *
	 * @param  $slug
	 * @return string
	 */
	public function get_field_label( $slug ) {
		return isset($this->config[$slug]) ? $this->config[$slug]['attrs']['label'] : $slug;
	}

	/**
	 * Get the field type for a provided slug
	 *
	 * @param $slug
	 * @return string|null
	 */
	public function get_field_type( $slug ) {
		return isset($this->config[ $slug ]) ? $this->config[ $slug ][ 'type' ] : null;
	}

	/**
	 * Is this field of type repeatable
	 *
	 * @param $slug
	 * @return bool
	 */
	public function is_repeater( $slug ) {
		return 'repeatable' === $this->get_field_type( $slug );
	}

	/**
	 * Get the full label for a field, including a hierarchical 'breadcrumb' style label if field is a repeater child
	 *
	 * @param $slug
	 * @return string
	 */
	public function get_full_label( $slug ) {
		$label = $this->get_field_label( $slug );
		$parent = $this->get_parent_slug( $slug );
		if ( $parent ) {
			$label = $this->get_full_label( $parent ) . " > " . $label;
		}

		return $label;
	}

	public function get_parent_slug( $slug ) {
		return isset($this->config[ $slug ]) ? $this->config[ $slug ][ 'parent' ] : null;
	}

	/**
	 * Parse the blocks in a form post object to get a standardised array of the form config
	 *
	 * @return array
	 */
	public function parse_config() {
		$form = get_post( $this->form_id );

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
