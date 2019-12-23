const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';

const field = {
    ...BaseInput,
    name: 'formation/email',
    title: __( 'Email Address' ),
    input: InputField
};

const { name } = field;
export { field, name };

export const settings = field;
