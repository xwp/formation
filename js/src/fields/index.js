/**
 * Editor Fields importer.
 *
 * @package Formation
 */

import {
    registerBlockType,
} from '@wordpress/blocks';

// Import fields.
import * as textinput from './text-input';
import * as textarea from './textarea';
import * as email from './email';
import * as select from './select';

// Register fields as blocks.
export const registerFields = () => {
    [
        textinput,
        textarea,
        email,
        select,

    ].forEach( ( block ) => {
        if ( !block ) {
            return;
        }
        const { settings, name } = block;
        registerBlockType( name, settings );
    } );
};
