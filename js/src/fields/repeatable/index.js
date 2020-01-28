const { __ } = window.wp.i18n;
import BaseInput from '../base-input';
import InputField from './input';
const { InnerBlocks } = wp.editor;

const field = {
    ...BaseInput,
    name: 'formation/repeatable',
    title: __( 'Repeatable' ),
    description: __( 'Repeatable container. All fields in this container form a repeatable group.' ),
    attributes: {
        ...BaseInput.attributes,
        type: {
            type: 'string',
        }
    },
    example: {
        attributes: {
            ...BaseInput.example.attributes,
            label: __('Repeatable'),
            description: __('Add Item'),
        },
        innerBlocks: [
            {
                name: 'core/columns',
                innerBlocks: [
                    {
                        name: 'core/column',
                        innerBlocks: [
                            {
                                name: 'formation/text',
                                attributes: {
                                    label: __( 'Name' ),
                                },
                            },
                        ],
                    },
                    {
                        name: 'core/column',
                        innerBlocks: [
                            {
                                name: 'formation/text',
                                attributes: {
                                    label: __( 'Email' ),
                                },
                            },
                        ],
                    },
                ],
            },
            {
                name: 'core/columns',
                innerBlocks: [
                    {
                        name: 'core/column',
                        innerBlocks: [
                            {
                                name: 'formation/text',
                                attributes: {
                                    label: __( 'Location' ),
                                },
                            },
                        ],
                    },
                    {
                        name: 'core/column',
                        innerBlocks: [
                            {
                                name: 'formation/text',
                                attributes: {
                                    label: __( 'Room' ),
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    options: [
        'label',
        'description',
        'slug',
        'required',
    ],
    input: InputField,
    descriptionField: () => ( <></> ),
    save: () => {
        return (
            <InnerBlocks.Content/>
        );
    },
};

const { name } = field;
export { field, name };

export const settings = field;
