/**
 * Formation field setting extension.
 */

import {
    ToggleControl,
    TextControl,
    withFilters
} from '@wordpress/components';
import { getBlockType } from '@wordpress/blocks';
import Select from 'react-select';

const { __ } = window.wp.i18n;

const FormationFieldSettings = ( props ) => {
    const {
        label,
        slug,
        placeholder,
        description,
        required,
        role_restriction,
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
    const handleSelectChange = ( role_restriction ) => props.setAttributes( { role_restriction: JSON.stringify( role_restriction ) } );

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
            <div className={ 'components-base-control' }>
                <div className={ 'components-base-control__field' }>
                    <label className={ 'components-base-control__label' }>{ __( 'Role Restriction' ) }</label>
                    <Select
                        name='select-two'
                        value={ JSON.parse( role_restriction ) }
                        onChange={ handleSelectChange }
                        options={ Formation.roles }
                        isMulti='true'
                    />
                </div>
            </div>
            <SettingsComponent { ...props } />
        </>
    );
};

export default withFilters( 'FormationFieldSettings' )( FormationFieldSettings );

