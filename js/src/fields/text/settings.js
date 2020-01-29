import {
    SelectControl,
} from '@wordpress/components';

const { __ } = window.wp.i18n;

// Define the additional settings controls.
const Settings = ( props ) => {
    const {
        type,
    } = props.attributes;
    return (
        <SelectControl
            label={ __( 'Type' ) }
            value={ type }
            onChange={ ( value ) => props.setAttributes( {
                type: value,
            } ) }
            options={ [
                { value: 'text', label: __( 'Text' ) },
                { value: 'email', label: __( 'Email' ) },
                { value: 'tel', label: __( 'Tel' ) },
                { value: 'date', label: __( 'Date' ) },
                { value: 'hidden', label: __( 'Hidden' ) },
            ] }/>
    );
};

export default Settings;
