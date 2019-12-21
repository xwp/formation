import {
    TextControl,
} from '@wordpress/components';

const { __ } = window.wp.i18n;

// Define the additional settings controls.
const Settings = ( props ) => {
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
            type={ 'number' }
        />
    );
};

export default Settings;
