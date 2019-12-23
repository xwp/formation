import {
    PanelBody,
    TextControl
} from '@wordpress/components';

const { __ } = window.wp.i18n;

// Define the additional settings controls.
const InputSettings = ( props ) => {
    const {
        label,
    } = props.attributes;
    return (
            <TextControl
                label={ __( 'Label' ) }
                value={ label }
                onChange={ ( value ) => props.setAttributes( {
                    label: value,
                } ) }
            />
    );
};

// Define additional settings included in previous settings.
const FormationInputSettings = ( FormationFieldSettings ) => {
    return ( props ) => {
        return ( <>
                { props.name === 'formation/button' ?
                    <InputSettings { ...props } />
                    :
                    <FormationFieldSettings { ...props } />
                }
            </>
        );
    };
};

export default FormationInputSettings;
