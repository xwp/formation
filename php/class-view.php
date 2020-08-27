<?php
/**
 * Entry class for Formation.
 *
 * @package Formation
 */

namespace Formation;

use Formation\Component\Field;
use Formation\Component\Setup;
use Formation\Component\Utility\Utils;

/**
 * Handles Formation's admin settings.
 */
class View implements Setup {

	/**
	 * Holds the plugin instance.
	 *
	 * @since   0.1
	 * @var     Plugin Instance of the global plugin.
	 */
	private $plugin;

	/**
	 * Holds the key to find a form ID in a submission.
	 *
	 * @var string
	 */
	public const FORM_ID_KEY = '__form_id';

	/**
	 * Holds the key to find a entry ID in a submission.
	 *
	 * @var string
	 */
	public const ENTRY_ID_KEY = '__entry_id';


	/**
	 * Initiate the plugin resources.
	 *
	 * @param object $plugin Instance of the plugin.
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
	}

	/**
	 * Setup the object.
	 */
	public function setup() {
		add_filter( 'the_content', array( $this, 'wrap_form' ), 1000 );
	}

	/**
	 * Wrap the form page in the correct form tags.
	 *
	 * @param string        $content The form content.
	 * @param \WP_Post|null $post    The form post object.
	 *
	 * @return string
	 */
	public function wrap_form( $content, $post = null ) {
		if ( is_null( $post ) ) {
			$post = get_queried_object();
		}
		if ( ! $post || $this->plugin->components['form']::$slug !== $post->post_type ) {
			return $content;
		}

		$form_attributes         = $this->get_form_attributes( $post );
		$attribute_string        = Utils::build_attributes( $form_attributes );
		$html                    = array();
		$html['opening_wrapper'] = sprintf( '<form %s>', $attribute_string );
		$html['notices']         = $this->get_input_notices();
		$html['nonce']           = $this->get_nonce( $post );
		$html['content']         = $content;
		$html['submit']          = $this->render_submit( $post );
		$html['closing_wrapper'] = '</form>';

		$html = apply_filters( 'formation_form_html', $html, $post );
		$html = apply_filters( 'formation_form_html_' . $post->post_name, $html, $post );

		$html          = array_filter( $html );
		$html['nonce'] = array_filter( $html['nonce'] );
		$html['nonce'] = implode( $html['nonce'] );

		return implode( $html );
	}

	/**
	 * Get the form attributes.
	 *
	 * @param \WP_Post $post The form object.
	 *
	 * @return array
	 */
	public function get_form_attributes( $post ) {
		$attributes = array(
			'method'    => 'post',
			'enctype'   => 'multipart/form-data',
			'class'     => array(
				'formation',
				'formation-form',
			),
			'data-form' => $post->ID,
		);
		$attributes = apply_filters( 'formation_form_attributes_' . $post->ID, $attributes, $post );
		$attributes = apply_filters( 'formation_form_attributes', $attributes, $post );

		return $attributes;
	}

	/**
	 * Get the nonce validation fields.
	 *
	 * @param \WP_Post $post The form post.
	 *
	 * @return array.
	 */
	private function get_nonce( $post ) {
		$nonce = array(
			wp_nonce_field( 'formation_frontend_submission', 'formation_nonce', true, false ),
		);

		$reference_args = array(
			'value' => $post->ID,
			'slug'  => self::FORM_ID_KEY,
		);
		$reference      = new Field\Hidden( $reference_args, $this->plugin, null );
		$nonce[]        = $reference->render( $reference_args );

		return $nonce;
	}

	/**
	 * Renders the submit button.
	 *
	 * @param \WP_Post $post The form.
	 *
	 * @return string
	 */
	public function render_submit( $post ) {
		$button_args = array(
			'label' => __( 'Submit', 'formation' ),
			'slug'  => 'submit_' . $post->ID,
			'type'  => 'submit',
		);
		$button      = new Field\Button( $button_args, $this->plugin, null );

		return $button->render();

	}

	/**
	 * Get Input notices.
	 */
	private function get_input_notices() {
		$field_instances = $this->plugin->components['field']->instances;
		$notices         = array();

		// Retrieve notices from each field instance.
		if ( is_array( $field_instances ) && ! empty( $field_instances ) ) {
			foreach ( $field_instances as $instance ) {
				$notices[] = $instance->render_notice();
			}
		}
		return implode( $notices );
	}
}
