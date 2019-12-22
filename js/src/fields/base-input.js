// Get helper functions from global scope
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;
const { __ } = window.wp.i18n;
import {
    PanelBody,
} from '@wordpress/components';

const {
    FormationFieldInput,
    FormationFieldSettings,
    FormationFieldExtensions,
    FormationFieldLabel,
} = formation.components;

// Define the input field edit component.
const LabelField = ( props ) => {
    const {
        label,
        slug,
        required,
    } = props.attributes;
    return (
        <>
            <label for={ slug }>
                { label }
                { required &&
                <span className={ 'required' }>*</span>
                }
            </label>
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
        _unique_id: {
            type: 'string',
        },
    },
    label: LabelField,
    input: InputField,
    settings: ( props ) => ( <></> ),
    description: DescriptionField,
    edit: ( props ) => {
        const {
            _unique_id
        } = props.attributes;
        props.setAttributes( { _unique_id: props.clientId } );

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={ __( 'Field Settings' ) }>
                        <FormationFieldSettings { ...props } />
                    </PanelBody>
                    <FormationFieldExtensions { ...props } />
                </InspectorControls>

                <div className={ props.className + ' formation-editor-input' } id={ 'field_' + _unique_id }>
                    <FormationFieldInput { ...props } />
                </div>
            </Fragment>
        );
    },
    save: () => { return null; },
};

export default BaseInput;
