//Setup all fields.

import * as text from './text';
import * as textarea from './textarea';
import * as email from './email';
import * as select from './select';
import * as checkbox from './checkbox';
import * as button from './button';
import * as radio from './radio';
import * as repeatable from './repeatable';

export const Fields = {
    'formation/text': text,
    'formation/textarea': textarea,
    'formation/email': email,
    'formation/select': select,
    'formation/checkbox': checkbox,
    'formation/button': button,
    'formation/radio': radio,
    'formation/repeatable': repeatable,
};

let names = [];
let objects = [];
for ( const block in Fields ) {
    names.push( block );
    objects.push( Fields[ block ] );
}
export const FieldObjects = objects;
export const FieldNames = names;
