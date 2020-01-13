// Get helper functions from global scope
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { __ } = window.wp.i18n;
import {
    PanelBody,
} from '@wordpress/components';

import FormationFieldInput from '../components/field-input';
import FormationFieldSettings from '../components/field-settings';
import FormationFieldExtensions from '../components/field-extentions';

// Define the input field edit component.
const LabelField = ( props ) => {
    const {
        label,
        show_label,
        slug,
        required,
    } = props.attributes;
    return (
        <> { show_label &&
        <label for={ slug }>
            { label }
            { required &&
            <span className={ 'required' }>*</span>
            }
        </label>
        }
        </>
    );
};
const DescriptionField = ( props ) => {
    const {
        description,
    } = props.attributes;
    return (
        <>
            { description &&
            <div className={ 'description' }>{ description }</div>
            }
        </>
    );
};
// Define the input field edit component.
const InputField = ( props ) => {
    const {
        placeholder,
        required,
    } = props.attributes;
    return (
        <>
            <input
                type={ 'text' }
                required={ required }
                placeholder={ placeholder }
                disabled={ 'disabled' }
            />
        </>
    );
};

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
    supports: [
        'label',
        'slug',
        'placeholder',
        'description',
        'default_value',
        'required',
        'repeatable',
    ],
    attributes: {
        label: {
            type: 'string',
        },
        show_label: {
            type: 'bool',
            default: true,
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
        is_repeatable: {
            type: 'bool',
        },
        default_value: {
            type: 'string',
        },
        has_conditions: {
            type: 'bool',
        },
        role_restriction: {
            type: 'string',
            default: null
        },
        _unique_id: {
            type: 'string',
        },
        has_error: {
            type: 'string',
        }
    },
    label: LabelField,
    input: InputField,
    settings: ( props ) => ( <></> ),
    extension: ( props ) => ( <></> ),
    description: DescriptionField,
    edit: ( props ) => {

        const {
            _unique_id,
            label,
            has_error,
        } = props.attributes;

        if(  !props.isSelected ) {
            // check for a slug.
            if ( ( !label || label.length === 0 ) ) {
                wp.data.dispatch( 'core/block-editor' ).selectBlock( _unique_id );
            } else {
                // check slug isn't used.

            }

        }

        // Set only if one is not set. moving/reloading creates a new one. lets
        // keep the first one created.
        if ( !_unique_id ) {
            props.setAttributes( { _unique_id: props.clientId } );
        }

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={ __( 'Field Settings' ) }>
                        <FormationFieldSettings { ...props } />
                    </PanelBody>
                    <FormationFieldExtensions { ...props } />
                </InspectorControls>

                <div
                    className={ props.className + ' formation-editor-input ' + ( has_error ? 'has_error' : '' ) }
                    id={ 'field_' + _unique_id }
                >
                    <FormationFieldInput { ...props } />
                </div>
            </Fragment>
        );
    },
    save: () => { return null; },
};

export default BaseInput;
