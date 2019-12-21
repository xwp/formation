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
    return (
        <>
            { supports( 'label' ) &&
            <TextControl
                label={ __( 'Label' ) }
                value={ label }
                onChange={ ( value ) => props.setAttributes( {
                    label: value,
                } ) }
            />
            }
            { supports( 'slug' ) &&
            <TextControl
                label={ __( 'Slug' ) }
                value={ slug }
                onChange={ ( value ) => props.setAttributes( {
                    slug: value,
                } ) }
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
            { supports( 'description' ) &&
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
            <SettingsComponent { ...props } />
        </>
    );
};

export default withFilters( 'FormationFieldSettings' )( FormationFieldSettings );

