<?php

namespace Formation\Component\Field;

use Formation;

/**
 * Class PluginAbstract
 */
class TextArea extends FieldAbstract {


	protected function render_input( $args ) {
		return '<textarea name="' . esc_attr( $args['slug'] ) . '"></textarea>';
	}

}
