<?php
/**
 * Bootstraps the Formation plugin.
 *
 * @package Formation
 */

namespace Formation;

use Formation\Component\Assets;
use Formation\Component\Config;
use Formation\Component\Notice;
use Formation\Component\Post_Setup;
use Formation\Component\Post_Types;
use Formation\Component\Pre_Setup;
use Formation\Component\Setup;

/**
 * Main plugin bootstrap file.
 */
class Plugin {

	/**
	 * Absolute path to the main plugin file.
	 *
	 * @var string
	 */
	protected $file;

	/**
	 * Absolute path to the root directory of this plugin.
	 *
	 * @var string
	 */
	protected $dir;

	/**
	 * Store the WP uploads dir object.
	 *
	 * @see https://developer.wordpress.org/reference/functions/wp_upload_dir/
	 * @var array
	 */
	protected $uploads_dir;

	/**
	 * Holds the components of the plugin
	 *
	 * @since   0.1
	 *
	 * @var     array
	 */
	public $components;

	/**
	 * Setup the plugin.
	 *
	 * @param string $plugin_file_path Absolute path to the main plugin file.
	 */
	public function __construct( $plugin_file_path ) {
		spl_autoload_register( array( $this, 'autoload' ) );
		$this->file        = $plugin_file_path;
		$this->dir         = dirname( $plugin_file_path );
		$this->uploads_dir = wp_upload_dir( null, false );
		$this->register_hooks();
	}

	/**
	 * Register Hooks for the plugin.
	 */
	public function register_hooks() {
		add_action( 'plugins_loaded', array( $this, 'init' ), 9 );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );
		add_action( 'wp', array( $this, 'enqueue_front_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_assets' ), 20 );
		add_action( 'init', array( $this, 'setup' ), 10 );
		add_action( 'init', array( $this, 'register_assets' ), 10 );
		add_action( 'admin_notices', array( $this, 'admin_notices' ) );
	}

	/**
	 * Initiate the plugin resources.
	 *
	 * Priority is 9 because WP_Customize_Widgets::register_settings() happens at
	 * after_setup_theme priority 10. This is especially important for plugins
	 * that extend the Customizer to ensure resources are available in time.
	 */
	public function init() {
		$components = glob( __DIR__ . '/class-*.php' );
		foreach ( $components as $component ) {
			$component_name = strstr( str_replace( 'class-', '', basename( $component ) ), '.php', true );
			if ( 'plugin' === $component_name ) {
				continue;
			}
			$method                              = str_replace( ' ', '_', ucwords( str_replace( '-', ' ', $component_name ) ) );
			$class_name                          = 'Formation\\' . $method;
			$this->components[ $component_name ] = new $class_name( $this );
		}
	}

	/**
	 * Setup hooks
	 *
	 * @since  0.1
	 */
	public function pre_setup() {
		$this->post_types();
		$components = $this->get_components( Pre_Setup::class );
		// Do pre setups.
		array_map(
			function ( $component ) {
				/**
				 * Component that implements Component\Setup.
				 *
				 * @var  Component\Setup $component
				 */
				$component->pre_setup();
			},
			$components
		);
	}


	/**
	 * Setup hooks
	 *
	 * @since  0.1
	 */
	public function post_setup() {
		$components = $this->get_components( Post_Setup::class );
		// Run post setups, to enble setups that require registration of all components.
		array_map(
			function ( $component ) {
				/**
				 * Component that implements Component\Setup.
				 *
				 * @var  Component\Setup $component
				 */
				$component->post_setup();
			},
			$components
		);
	}

	/**
	 * Setup hooks
	 *
	 * @since  0.1
	 */
	public function setup() {
		$this->post_types();
		$this->pre_setup();
		$components = $this->get_components( Setup::class );
		// Do setups.
		array_map(
			function ( $component ) {
				/**
				 * Component that implements Component\Setup.
				 *
				 * @var  Component\Setup $component
				 */
				$component->setup();
			},
			$components
		);
		$this->post_setup();
	}

	/**
	 * Setup post types
	 *
	 * @since  0.1
	 */
	public function post_types() {

		$components = $this->get_components( Post_Types::class );
		array_map(
			function ( $component ) {
				$post_types = $component->post_types();
				foreach ( $post_types as $post_type => $args ) {
					register_post_type( $post_type, $args );
				}
			},
			$components
		);
	}

	/**
	 * Register Assets
	 *
	 * @since  0.1
	 */
	public function register_assets() {
		$components = $this->get_components( Assets::class );
		array_map(
			function ( $component ) {
				/**
				 * Component that implements Component\Assets.
				 *
				 * @var  Component\Assets $component
				 */
				$component->register_assets();
			},
			$components
		);
	}

	/**
	 * Enqueue scripts.
	 */
	public function enqueue_assets() {
		// Enqueue Main.
		$components = array_filter( $this->components, array( $this, 'is_active_asset_component' ) );

		// Enqueue components.
		array_map(
			function ( $component ) {
				/**
				 * Component that implements Component\Assets.
				 *
				 * @var  Component\Assets $component
				 */
				$component->enqueue_assets();
			},
			$components
		);
	}
	/**
	 * Enqueue scripts.
	 */
	public function enqueue_front_assets() {
		// Enqueue Public.
		$components = $this->get_components( Assets::class );

		// Enqueue components.
		array_map(
			function ( $component ) {
				/**
				 * Component that implements Component\Assets.
				 *
				 * @var  Component\Assets $component
				 */
				$component->enqueue_front_assets();
			},
			$components
		);
	}
	/**
	 * Enqueue editor assets.
	 */
	public function enqueue_editor_assets() {
		// Enqueue Main.
		$components = $this->get_components( Assets::class );

		// Enqueue components.
		array_map(
			function ( $component ) {
				/**
				 * Component that implements Component\Assets.
				 *
				 * @var  Component\Assets $component
				 */
				$component->enqueue_editor_assets();
			},
			$components
		);
	}

	/**
	 * Check if an asset component is active.
	 *
	 * @since  0.1
	 *
	 * @param object $component The component to check.
	 *
	 * @return bool If the component is an asset impmented object or not.
	 */
	private function is_active_asset_component( $component ) {
		return $component instanceof Assets && $component->is_active();
	}

	/**
	 * Load admin notices where needed.
	 *
	 * @since  0.1
	 */
	public function admin_notices() {

		$components = $this->get_components( Notice::class );
		$default    = array(
			'message'     => '',
			'type'        => 'error',
			'dismissible' => true,
		);
		foreach ( $components as $component ) {
			$notices = $component->get_notices();
			if ( empty( $notices ) ) {
				continue;
			}
			// Go over all notices the component returned.
			foreach ( $notices as $notice ) {
				if ( ! empty( $notice ) && ! empty( $notice['message'] ) ) {
					$notice = wp_parse_args( $notice, $default );
					if ( true === $notice['dismissible'] ) {
						$html = sprintf(
							'<div class="notice-%1$s settings-error notice is-dismissible"><p><strong>%2$s</strong></p><button type="button" class="notice-dismiss"><span class="screen-reader-text">%3$s</span></button></div>',
							esc_attr( $notice['type'] ),
							$notice['message'],
							__( 'Dismiss this notice.', 'formation' )
						);
					} else {
						$html = sprintf(
							'<div class="notice-%1$s settings-error notice"><p><strong>%2$s</strong></p></div>',
							esc_attr( $notice['type'] ),
							$notice['message']
						);
					}
					echo wp_kses_post( $html );
				}
			}
		}
	}

	/**
	 * Get all components, or filter by type.
	 *
	 * @since  0.1
	 *
	 * @param object $type Optional type to filter components by.
	 *
	 * @return array Plugin components.
	 */
	private function get_components( $type = null ) {

		$components = $this->components;
		if ( ! empty( $type ) ) {
			$components = array_filter(
				$components,
				function ( $component ) use ( $type ) {
					return $component instanceof $type;
				}
			);
		}

		return $components;
	}

	/**
	 * Return the absolute path to the plugin directory.
	 *
	 * @return string
	 */
	public function dir() {
		return $this->dir;
	}

	/**
	 * Return the absolute path to the plugin file.
	 *
	 * @return string
	 */
	public function file() {
		return $this->file;
	}

	/**
	 * Get the file path relative to the WordPress plugin directory.
	 *
	 * @param string $file_path Absolute path to any plugin file.
	 *
	 * @return string
	 */
	public function basename( $file_path = null ) {
		if ( ! isset( $file_path ) ) {
			$file_path = $this->file();
		}

		return plugin_basename( $file_path );
	}

	/**
	 * Get the public URL to the asset file.
	 *
	 * @param string $path_relative Path relative to this plugin directory root.
	 *
	 * @return string The URL to the asset.
	 */
	public function asset_url( $path_relative ) {
		return plugins_url( $path_relative, $this->file() );
	}

	/**
	 * Get absolute path to a file in the uploads directory.
	 *
	 * @param string $path_relative File path relative to the root of the WordPress uploads directory.
	 *
	 * @return string
	 */
	public function uploads_dir( $path_relative = null ) {
		if ( isset( $path_relative ) ) {
			return sprintf( '%s/%s', $this->uploads_dir['basedir'], $path_relative );
		}

		return $this->uploads_dir['basedir'];
	}

	/**
	 * Get URL to a file in the uploads directory.
	 *
	 * @param string $path_relative Path to the file relative to the root of the WordPress uploads directory.
	 *
	 * @return string
	 */
	public function uploads_dir_url( $path_relative = null ) {
		if ( isset( $path_relative ) ) {
			return sprintf( '%s/%s', $this->uploads_dir['baseurl'], $path_relative );
		}

		return $this->uploads_dir['baseurl'];
	}

	/**
	 * Is WP debug mode enabled.
	 *
	 * @return boolean
	 */
	public function is_debug() {
		return ( defined( 'WP_DEBUG' ) && WP_DEBUG );
	}

	/**
	 * Is WP script debug mode enabled.
	 *
	 * @return boolean
	 */
	public function is_script_debug() {
		return ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG );
	}

	/**
	 * Return the current version of the plugin.
	 *
	 * @return mixed
	 */
	public function version() {
		return $this->meta( 'Version' );
	}

	/**
	 * Sync the plugin version with the asset version.
	 *
	 * @return string
	 */
	public function asset_version() {
		if ( $this->is_debug() || $this->is_script_debug() ) {
			return time();
		}

		return $this->version();
	}

	/**
	 * Get plugin meta data.
	 *
	 * @param string $field Optional field key.
	 *
	 * @return array|string|null
	 */
	public function meta( $field = null ) {
		static $meta;

		if ( ! isset( $meta ) ) {
			$meta = get_file_data( $this->file );
		}

		if ( isset( $field ) ) {
			if ( isset( $meta[ $field ] ) ) {
				return $meta[ $field ];
			}

			return null;
		}

		return $meta;
	}

	/**
	 * Autoload for classes that are in the same namespace as $this.
	 *
	 * @param string $class Class name.
	 *
	 * @return void
	 */
	public function autoload( $class ) {
		// Assume we're using namespaces (because that's how the plugin is structured).
		$namespace = explode( '\\', $class );
		$root      = array_shift( $namespace );

		// If a class ends with "Trait" then prefix the filename with 'trait-', else use 'class-'.
		$class_trait = preg_match( '/Trait$/', $class ) ? 'trait-' : 'class-';

		// If we're not in the plugin's namespace then just return.
		if ( 'Formation' !== $root ) {
			return;
		}

		// Class name is the last part of the FQN.
		$class_name = array_pop( $namespace );

		// Remove "Trait" from the class name.
		if ( 'trait-' === $class_trait ) {
			$class_name = str_replace( 'Trait', '', $class_name );
		}

		// For file naming, the namespace is everything but the class name and the root namespace.
		$namespace = trim( implode( DIRECTORY_SEPARATOR, $namespace ) );

		// Get the path to our files.
		$directory = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . '../php';
		if ( ! empty( $namespace ) ) {
			$directory .= DIRECTORY_SEPARATOR . strtolower( $namespace );
		}

		// Because WordPress file naming conventions are odd.
		$file = strtolower( str_replace( '_', '-', $class_name ) );

		$file = $directory . DIRECTORY_SEPARATOR . $class_trait . $file . '.php';

		if ( file_exists( $file ) ) {
			require_once $file; // phpcs:ignore
		}
	}

}
