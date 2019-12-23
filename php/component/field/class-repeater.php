<?php
/**
 * TextArea class for Formation field.
 *
 * @package Formation
 */

namespace Formation\Component\Field;

use Formation;

/**
 * Class TextArea
 */
class Repeater extends FieldAbstract {

	/**
	 * The field type.
	 *
	 * @var string
	 */
	public $type = 'repeater';

	/**
	 * Initiate the Field.
	 *
	 * @param array             $args   Field instance args.
	 * @param \Formation\Plugin $plugin Instance of the main plugin.
	 * @param array             $block  The field block object.
	 */
	public function __construct( $args, $plugin, $block ) {
		parent::__construct( $args, $plugin, $block );

		$field_types = array_keys( $this->field->get_fields() );
		foreach ( $block['innerBlocks'] as &$inner_block ) {
			if( isset( $inner_block['attrs']['_unique_id'] ) && isset( $this->field->instances[ $inner_block['attrs']['_unique_id'] ] ) ) {
				$this->field->instances[ $inner_block['attrs']['_unique_id'] ]['attrs']['slug'] .= '[]';
			}
			if ( in_array( $inner_block['blockName'], $field_types, true ) ) {

			}
		}
	}

	/**
	 * Get the name for the option input.
	 *
	 * @param int $index The option index.
	 *
	 * @return string
	 */
	public function get_option_name( $index ) {
		return $this->get_args( 'slug' );
	}

	/**
	 * Get the id for the option input.
	 *
	 * @param int $index The option index.
	 *
	 * @return string
	 */
	public function get_option_id( $index ) {
		return $this->get_args( 'slug' );
	}


	/**
	 * Renders a field.
	 *
	 * @param string $content Content created by block renderer.
	 *
	 * @return string
	 */
	public function render( $content = null ) {
		$template = '<div class="formation-field">';
		$template .= '<div data-template="' . esc_attr( $this->args['_unique_id'] ) . '" style="display:none;visibility:hidden;">';
		$template .= '<div class="formation-repeatable">';
		$template .= '<button type="button" data-closer="true">&times;</button>';
		$template .= $content;
		$template .= '</div>';
		$template .= '</div>';
		$template .= '<div class="formation-repeatable-container" data-container="' . esc_attr( $this->args['_unique_id'] ) . '"></div>';
		$template .= '<button type="button" class="button" data-repeater="' . esc_attr( $this->args['_unique_id'] ) . '">' . esc_html( $this->args['label'] ) . '</button>';
		$template .= '</div>';


		return $template;
	}

	/**
	 * Get submitted value.
	 *
	 * @return mixed
	 */
	public function get_submitted_value() {

		// Get the names of the inner blocks.


		$value = filter_input_array( INPUT_POST, $this->get_base_name(), FILTER_DEFAULT );

		return $value;
	}

}
