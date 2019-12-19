const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import FormationTextInput from './input';

wp.hooks.addFilter( 'FormationFieldInput', 'Formation', FormationTextInput );

const field = {
    ...BaseInput,
    name: 'formation/text-input',
    title: __( 'Text Input' ),
};

const { name } = field;
export { field, name };

export const settings = field;
