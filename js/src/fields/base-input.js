// Get helper functions from global scope
import {
    ToggleControl,
    TextControl,
    PanelBody,
} from '@wordpress/components';

const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;

const { __ } = window.wp.i18n;

const { FormationFieldInput, FormationFieldSettings, FormationFieldExtensions } = formation.components;

// Define the base input field.
const BaseInput = {
    title: __( 'Base Field' ),
    category: 'fields',
    icon: 'forms',
    keywords: [
        __( 'Field' ),
        __( 'Form' ),
        __( 'Text' )
    ],
    attributes: {
        label: {
            type: 'string',
            default: __( 'New Field' )
        },
        slug: {
            type: 'string',
        },
        placeholder: {
            type: 'string',
        },
        description: {
            type: 'string',
        },
        required: {
            type: 'bool',
        },
        _unique_id: {
            type: 'string',
        }
    },
    edit: ( props ) => {
        const {
            label,
            slug,
            placeholder,
            description,
            required,
            _unique_id
        } = props.attributes;

        const toggleAttribute = ( attribute ) => {
            return ( newValue ) => {
                props.setAttributes( { [ attribute ]: newValue } );
            };
        };
        props.setAttributes( { _unique_id: props.clientId } );

        return (
            <Fragment>
                <InspectorControls>
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
                        <FormationFieldSettings { ...props }/>
                    </PanelBody>
                    <FormationFieldExtensions { ...props } />
                </InspectorControls>

                <div className={ props.className + ' formation-editor-input' }>
                    <FormationFieldInput { ...props } />
                </div>
            </Fragment>
        );
    },
    save: () => { return null; },
};

export default BaseInput;
