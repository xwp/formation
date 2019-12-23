const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';
import Settings from './settings'
const field = {
    ...BaseInput,
    name: 'formation/select',
    title: __( 'Select' ),
    category: 'fields',
    icon: 'forms',
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
    settings: Settings
};

const { name } = field;
export { field, name };

export const settings = field;
