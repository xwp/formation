/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
    ToggleControl,
    TextControl,
    PanelBody,
    withFilters
} from '@wordpress/components';

import FieldExtension from './field-extension';

const FieldSettings = ( props ) => {

    const FieldExtensionWithFilters = withFilters( 'formation.fieldSettingsExtension' )( FieldExtension );
    const {
        label,
        slug,
        placeholder,
        description,
        required,
        ExtendedSettings
    } = props.attributes;

    const toggleAttribute = ( attribute ) => {
        return ( newValue ) => {
            props.setAttributes( { [ attribute ]: newValue } );
        };
    };

    return (
        <>
            <PanelBody title={ __( 'Field Settings' ) }>
                <TextControl
                    label={ __( 'Label' ) }
                    value={ label }
                    onChange={ ( value ) => props.setAttributes( {
                        label: value,
                    } ) }
                />
                <TextControl
                    label={ __( 'Slug' ) }
                    value={ slug }
                    onChange={ ( value ) => props.setAttributes( {
                        slug: value,
                    } ) }
                />
                <TextControl
                    label={ __( 'Placeholder' ) }
                    value={ placeholder }
                    onChange={ ( value ) => props.setAttributes( {
                        placeholder: value,
                    } ) }
                />
                <TextControl
                    label={ __( 'Description' ) }
                    value={ description }
                    onChange={ ( value ) => props.setAttributes( {
                        description: value,
                    } ) }
                />
                <ToggleControl
                    label={ 'Required' }
                    onChange={ toggleAttribute( 'required' ) }
                    checked={ required }
                />
                { ExtendedSettings &&
                    <ExtendedSettings {...props } />
                }
                <FieldExtensionWithFilters { ...props } />
            </PanelBody>
        </>
    );
};

export default FieldSettings;

