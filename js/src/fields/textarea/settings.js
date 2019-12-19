import {
    TextControl,
} from '@wordpress/components';

const { __ } = window.wp.i18n;

// Define the additional settings controls.
const TextAreaSettings = ( props ) => {
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

// Define additional settings included in previous settings.
const FormationTextAreaSettings = ( FormationFieldSettings ) => {
    return ( props ) => {
        return ( <>
                <FormationFieldSettings { ...props } />
                { props.name === 'formation/text-area' &&
                <TextAreaSettings { ...props } />
                }
            </>
        );
    };
};

export default FormationTextAreaSettings;
