const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';
const { InnerBlocks } = wp.editor;

const field = {
    ...BaseInput,
    name: 'formation/repeatable',
    title: __( 'Repeatable' ),
    attributes: {
        ...BaseInput.attributes,
        type: {
            type: 'string',
        }
    },
    supports: [
        'label',
        'description',
        'slug',
        'required',
    ],
    input: InputField,
    description: () => ( <></> ),
    save: () => {
        return (
            <InnerBlocks.Content/>
        );
    },
};

const { name } = field;
export { field, name };

export const settings = field;
