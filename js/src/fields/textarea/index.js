const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';
import Settings from './settings';

const field = {
    ...BaseInput,
    name: 'formation/textarea',
    title: __( 'Text Area' ),
    description: __( 'Text box/paragraph input field.' ),
    category: 'fields',
    keywords: [
        __( 'Field' ),
        __( 'Form' ),
        __( 'Text' )
    ],
    attributes: {
        ...BaseInput.attributes,
        rows: {
            type: 'number',
            default: 5
        }
    },
    example: {
        attributes: {
            ...BaseInput.example.attributes,
            label: __('Textarea'),
        },
    },
    input: InputField,
    settings: Settings,
};

const { name } = field;
export { field, name };

export const settings = field;
