import {
    TextareaControl,
} from '@wordpress/components';

const { __ } = window.wp.i18n;

// Define the additional settings controls.
const Settings = ( props ) => {
    const {
        options,
    } = props.attributes;
    return (
        <TextareaControl
            label={ __( 'Options' ) }
            value={ options }
            help={ __( 'Each option per line, e.g ( option_value|Option Lave )' ) }
            onChange={ ( value ) => props.setAttributes( {
                options: value,
            } ) }
        />
    );
};

export default Settings;
