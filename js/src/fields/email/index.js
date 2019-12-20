const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import FormationInput from './input';

wp.hooks.addFilter( 'FormationFieldInput', 'Formation', FormationInput );

const field = {
    ...BaseInput,
    name: 'formation/email',
    title: __( 'Email Address' ),
};

const { name } = field;
export { field, name };

export const settings = field;
