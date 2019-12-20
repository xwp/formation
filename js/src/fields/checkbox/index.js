const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import FormationInput from './input';
import FormationInputSettings from './settings';

wp.hooks.addFilter( 'FormationFieldInput', 'Formation', FormationInput );
wp.hooks.addFilter( 'FormationFieldSettings', 'Formation', FormationInputSettings );

const field = {
    ...BaseInput,
    name: 'formation/checkbox',
    title: __( 'Checkbox' ),
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
    }
};

const { name } = field;
export { field, name };

export const settings = field;
