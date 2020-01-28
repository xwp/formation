const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';
import Settings from '../select/settings';

const field = {
    ...BaseInput,
    name: 'formation/radio',
    title: __( 'Radio' ),
    description: __( 'Radio button group.' ),
    category: 'fields',
    example: {
        attributes: {
            ...BaseInput.example.attributes,
            label: __('Radio group'),
            options: "Option 1\nOption 2\nOption 3\nOption 4",
        },
    },
    keywords: [
        __( 'Field' ),
        __( 'Form' ),
        __( 'Text' )
    ],
    attributes: {
        ...BaseInput.attributes,
        options: {
            type: 'string',
        }
    },
    input: InputField,
    settings: Settings,
};

const { name } = field;
export { field, name };

export const settings = field;
