// Get helper functions from global scope
const {
    withFilters
} = wp.components;

const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;

const { __ } = window.wp.i18n;

import FieldSettings from '../controls/field-settings';
import FieldExtensions from '../controls/field-extension';
import { TextInput as FieldInput } from '../inputs';

const TextInput = ( override ) => {
    let FieldInputWithFilters = withFilters( 'formation.fieldInput' )( FieldInput );
    let FieldSettingsWithFilters = withFilters( 'formation.fieldSettings' )( FieldSettings );
    let FieldExtensionsWithFilters = withFilters( 'formation.fieldExtensions' )( FieldExtensions );
    if ( override ) {
        if ( override.fieldInput ) {
            FieldInputWithFilters = withFilters( 'formation.fieldInput' )( override.FieldInput );
        }
        if ( override.fieldSettings ) {
            FieldSettingsWithFilters = withFilters( 'formation.fieldSettings' )( override.FieldSettings );
        }
        if ( override.fieldExtensions ) {
            FieldExtensionsWithFilters = withFilters( 'formation.fieldExtensions' )( override.FieldInput );
        }
    }

    return {
        title: __( 'Text Input' ),
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

        },
        edit: props => {

            return (
                <Fragment>
                    <InspectorControls>
                        <FieldSettingsWithFilters { ...props }/>
                        <FieldExtensionsWithFilters { ...props } />
                    </InspectorControls>

                    <div className={ props.className }>
                        <FieldInputWithFilters { ...props } />
                    </div>
                </Fragment>
            );
        },
        save: () => { return null; },
    };
};
export default TextInput;
