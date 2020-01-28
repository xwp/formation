<?php
/**
 * Text-Input class for Formation field.
 *
 * @package Formation
 */

namespace Formation\Component\Field;

use Formation;

/**
 * Class Text_Input
 */
class Text_Input extends FieldAbstract {

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type = 'text';

	/**
	 * Renders a field.
	 *
	 * @param string $content Content created by block renderer.
	 *
	 * @return string
	 */
	public function render( $content = null ) {

		if ( 'hidden' !== $this->args['type'] ) {
			// Use the base render.
			return parent::render( $content );
		} else {
			$html = array();

			$attributes = array(
				'class'           => array(
					'formation-field',
				),
				'data-field-type' => $this->type,
				'data-form'       => get_queried_object_id(),
			);

			$attribute_string = $this->build_attribute_string( $attributes, 'field_wrapper' );


			// For the hidden type.
			$html['opening_wrapper'] = sprintf( '<span %s>', $attribute_string );
			$html['input']           = $this->render_input();
			$html['close_wrapper']   = '</span>';
		}
		$html = apply_filters( 'formation_field_structure', $html );
		$html = apply_filters( 'formation_field_structure_' . $this->type, $html );

		$html = array_filter( $html );

		return implode( $html );
	}

}
