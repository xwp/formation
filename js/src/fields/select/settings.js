import {
    TextareaControl,
} from '@wordpress/components';

const { __ } = window.wp.i18n;

// Define the additional settings controls.
const InputSettings = ( props ) => {
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

// Define additional settings included in previous settings.
const FormationInputSelectSettings = ( FormationFieldSettings ) => {
    return ( props ) => {
        return ( <>
                <FormationFieldSettings { ...props } />
                { props.name === 'formation/select' &&
                <InputSettings { ...props } />
                }
            </>
        );
    };
};

export default FormationInputSelectSettings;
