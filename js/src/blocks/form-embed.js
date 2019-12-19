// Get helper functions from global scope
import {
    SelectControl,
    ToggleControl,
    TextControl,
    PanelBody
} from '@wordpress/components';
const {Fragment} = wp.element;
const { InspectorControls } = wp.editor;

const { __ } = window.wp.i18n;

const FormEmbed = () => {
    return {
        title: __( 'Embed Form' ),
        category: 'common',
        icon: 'forms',
        keywords: [
            __( 'Form' ),
            __( 'Embed' )
        ],
        attributes: {
            show_title: {
                type: 'bool',
            },
            form_id: {
                type: 'number',
            },
        },
        edit: props => {
            const {
                show_title,
                form_id
            } = props.attributes;

            return (
                <Fragment>
                    <InspectorControls>
                        <PanelBody title={__( 'Form Settings' )}>
                        <ToggleControl
                            label={ __( 'Show Form Title' ) }
                            onChange={ ( value ) => props.setAttributes( {
                                show_title: value,
                            } ) }
                            checked={ show_title }
                        />
                        <SelectControl
                            label={ __( 'Form' ) }
                            value={ form_id }
                            options={ Formation }
                            onChange={ ( value ) => props.setAttributes( {
                                form_id: parseInt( value ),
                            } ) }
                        />
                        </PanelBody>
                    </InspectorControls>
                    <div className={props.className}>
                        { form_id &&
                        <span>Form Embedded : {form_id}</span>
                        }
                        { ! form_id &&
                        <span>Select a Form to embed: {form_id}</span>
                        }
                    </div>
                </Fragment>
            );
        },
        save: () => {
            return null;
        },
    };
};

export default FormEmbed;
