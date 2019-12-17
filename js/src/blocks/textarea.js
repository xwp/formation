const { __ } = window.wp.i18n;

import TextInput from './text-input';
import { TextareaInput } from '../inputs';
import {
    TextControl,
} from '@wordpress/components';

const ExtendedSettings = ( props ) => {
    const {
        rows,
    } = props.attributes;
    return (
        <TextControl
            label={ __( 'Rows' ) }
            value={ rows }
            onChange={ ( value ) => props.setAttributes( {
                rows: value,
            } ) }
            type={"number"}
        />
    );
};

const TextArea = () => {
    const input = new TextInput( { fieldInput: TextareaInput } );
    const EditComponent = input.edit;

    input.title = __( 'Textarea' );
    input.attributes.rows = {
        type: 'number',
        default: 5
    };

    input.edit = ( props ) => {
        props.setAttributes( {
            ExtendedSettings: ExtendedSettings
        } );

        return (
            <EditComponent { ...props } />
        );
    };
    return input;
};

export default TextArea;
