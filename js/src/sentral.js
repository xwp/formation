/**
 * Sentral Blocks importer.
 *
 * @package Formation
 */
import { __ } from '@wordpress/i18n';
import {
	ToggleControl,
	TextControl,
	PanelBody
} from '@wordpress/components';

wp.hooks.addFilter( 'blocks.registerBlockType', 'formation', ( settings, name ) => {
	if ( 'formation/text-input' === name ) {
		settings.attributes.url = {
			type: 'string',
		};
		settings.attributes.enable_sentral = {
			type: 'bool',
		};
	}
	return settings;
} );

const ComponentToAppend = ( props ) => {

	const {
		url,
		enable_sentral
	} = props.attributes;

	return (
		<PanelBody title={__( 'Sentral Connection' )}>
			<ToggleControl
				label={__( 'Enable Sentral' )}
				onChange={( value ) => props.setAttributes( {
					enable_sentral: value,
				} )}
				checked={enable_sentral}
			/>
			{!!enable_sentral &&
			<TextControl
				label={__( 'URL' )}
				value={url}
				onChange={( value ) => props.setAttributes( {
					url: value,
				} )}
			/>
			}
		</PanelBody>
	);
};

const filtered = ( FilteredComponent ) => {
	return ( props ) => (
		<>
			<ComponentToAppend {...props} />
			<FilteredComponent {...props} />
		</>
	);
};

wp.hooks.addFilter(
	'formation.fieldExtensions',
	'plugin/with-component-appended',
	filtered
);

