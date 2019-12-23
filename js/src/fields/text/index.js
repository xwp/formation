const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';
import Settings from './settings';

const field = {
    ...BaseInput,
    name: 'formation/text',
    title: __( 'Text Input' ),
    attributes: {
        ...BaseInput.attributes,
        type: {
            type: 'string',
        }
    },
    input: InputField,
    settings: Settings
};

const { name } = field;
export { field, name };

export const settings = field;
