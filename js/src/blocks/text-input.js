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

    let FieldInputWithFilters = withFilters( 'formation.fieldInput' )( override && override.fieldInput ? override.fieldInput : FieldInput );
    let FieldSettingsWithFilters = withFilters( 'formation.fieldSettings' )( override && override.fieldSettings ? override.fieldSettings : FieldSettings );
    let FieldExtensionsWithFilters = withFilters( 'formation.fieldExtensions' )( override && override.fieldExtensions ? override.fieldExtensions : FieldExtensions );

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
        edit: ( props ) => {
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
