// Get helper functions from global scope
import {
    SelectControl,
    ToggleControl,
    TextControl,
    PanelBody
} from '@wordpress/components';
import { embedIcon } from '../components/icons';

const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;

const { __ } = window.wp.i18n;

const FormEmbed = () => {
    return {
        title: __( 'Embed Form' ),
        category: 'common',
        icon: embedIcon,
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
            const convertFormId = ( id ) => {
                for ( const form of Formation.forms ) {
                    if ( form.value === id ) {
                        return form.label;
                    }
                }
                return __( 'No form selected, or form removed.' );
            };
            return (
                <Fragment>
                    <InspectorControls>
                        <PanelBody title={ __( 'Form Settings' ) }>
                            <ToggleControl
                                label={ __( 'Show Form Title' ) }
                                onChange={ ( value ) => props.setAttributes( {
                                    show_title: value,
                                } ) }
                                checked={ show_title }
                            />
                        </PanelBody>
                    </InspectorControls>
                    <div className={ props.className }>
                        { show_title &&
                        <span>{ convertFormId( form_id ) }</span>
                        }
                        <SelectControl
                            value={ form_id }
                            options={ Formation.forms }
                            onChange={ ( value ) => props.setAttributes( {
                                form_id: parseInt( value ),
                            } ) }
                        />
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
