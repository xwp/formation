const { __ } = window.wp.i18n;

import TextInput from './text-input';
import { TextareaInput } from '../inputs';

const TextArea = () => {
    const input = new TextInput( { fieldInput: TextareaInput } );
    input.title = __( 'Textarea' );

    return input;
};

export default TextArea;
