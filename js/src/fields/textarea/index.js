const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import FormationTextAreaInput from './input';
import FormationTextAreaSettings from './settings';

wp.hooks.addFilter( 'FormationFieldInput', 'Formation', FormationTextAreaInput );
wp.hooks.addFilter( 'FormationFieldSettings', 'Formation', FormationTextAreaSettings );

const field = {
    ...BaseInput,
    name: 'formation/text-area',
    title: __( 'Text Area' ),
    category: 'fields',
    icon: 'forms',
    keywords: [
        __( 'Field' ),
        __( 'Form' ),
        __( 'Text' )
    ],
    attributes: {
        ...BaseInput.attributes,
        rows : {
            type: 'number',
            default: 5
        }
    }
};

const { name } = field;
export { field, name };

export const settings = field;
