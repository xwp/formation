/**
 * Formation field setting extension.
 */

import {
    ToggleControl,
    TextControl,
    withFilters
} from '@wordpress/components';
import { getBlockType } from '@wordpress/blocks';

const { __ } = window.wp.i18n;

const FormationFieldSettings = ( props ) => {
    const {
        label,
        slug,
        placeholder,
        description,
        required,
        is_repeatable,
        default_value,
    } = props.attributes;
    props.setAttributes( { _unique_id: props.clientId } );
    const blockType = getBlockType( props.name );
    const SettingsComponent = blockType.settings;
    const supports = ( support ) => {
        return blockType.supports.indexOf( support ) > -1;
    };
    const toggleAttribute = ( attribute ) => {
        return ( newValue ) => {
            props.setAttributes( { [ attribute ]: newValue } );
        };
    };

    const setLabel = ( value ) => {
        // Make label based slug.
        const SanitizedSlug = value.split( ' ' ).join( '_' ).split( '-' ).join( '_' ).replace( /[^a-z0-9_]/gi, '' ).toLowerCase();
        if ( !slug || slug.length <= 1 || slug === SanitizedSlug.substring( 0, SanitizedSlug.length - 1 ) ) {
            props.setAttributes( {
                slug: SanitizedSlug,
            } );
        }
        // Some Clever Stuff.
        if ( label && 'formation/text-input' === blockType.name ) {
            if ( label.indexOf( 'email' ) >= 0 || label.indexOf( 'Email' ) >= 0 ) {
                props.setAttributes( {
                    type: 'email',
                } );
            }
        }
    };
    return (
        <>
            { supports( 'label' ) &&
            <TextControl
                label={ __( 'Label' ) }
                value={ label }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        label: value,
                    } );
                    setLabel( value );
                } }
            />
            }
            { supports( 'slug' ) &&
            <TextControl
                label={ __( 'Slug' ) }
                value={ slug }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        slug: value,
                    } );
                    if ( value.length <= 0 ) {
                        setLabel( label );
                    }
                } }
                onBlur={ () => {
                    setLabel( label );
                } }
            />
            }
            { supports( 'placeholder' ) &&
            <TextControl
                label={ __( 'Placeholder' ) }
                value={ placeholder }
                onChange={ ( value ) => props.setAttributes( {
                    placeholder: value,
                } ) }
            />
            }
            { supports( 'description' ) &&
            <TextControl
                label={ __( 'Description' ) }
                value={ description }
                onChange={ ( value ) => props.setAttributes( {
                    description: value,
                } ) }
            />
            }
            { supports( 'default_value' ) &&
            <TextControl
                label={ __( 'Default Value' ) }
                value={ default_value }
                onChange={ ( value ) => props.setAttributes( {
                    default_value: value,
                } ) }
            />
            }
            { supports( 'required' ) &&
            <ToggleControl
                label={ 'Required' }
                onChange={ toggleAttribute( 'required' ) }
                checked={ required }
            />
            }
            { supports( 'repeatable' ) &&
            <ToggleControl
                label={ 'Repeatable' }
                onChange={ toggleAttribute( 'is_repeatable' ) }
                checked={ is_repeatable }
            />
            }
            <SettingsComponent { ...props } />
        </>
    );
};

export default withFilters( 'FormationFieldSettings' )( FormationFieldSettings );

