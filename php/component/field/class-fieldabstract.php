<?php

namespace Formation\Component\Field;

use Formation;
use Formation\Plugin;

/**
 * Class PluginAbstract
 */
abstract class FieldAbstract {

	/**
	 * Holds the plugin instance.
	 *
	 * @since   0.1
	 * @var     Plugin Instance of the global plugin.
	 */
	private $plugin;

	/**
	 * Initiate the Field.
	 *
	 * @param object $plugin Instance of the plugin.
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
	}

	/**
	 * Renders a field.
	 *
	 * @param $args
	 */
	public function render( $args ) {

		if ( ! empty( $args['slug'] ) ) {
			$args['slug'] = sanitize_key( $args['slug'] );
		} else {
			$args['slug'] = sanitize_key( $args['label'] );
		}

		$html   = array();
		$html[] = '<div>';

		$html[] = '<label for="' . esc_attr( $args['slug'] ) . '">' . esc_html( $args['label'] ) . '</label>';

		$html[] = $this->render_input( $args );

		$html[] = '</div>';

		return implode( '', $html );
	}

	protected function render_input( $args ) {
		return '<input type="text" name="' . esc_attr( $args['slug'] ) . '">';
	}
}
