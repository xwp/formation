const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';

const field = {
    ...BaseInput,
    name: 'formation/button',
    title: __( 'Button' ),
    supports: [
        'label'
    ],
    input: InputField
};

const { name } = field;
export { field, name };

export const settings = field;
