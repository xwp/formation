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

// Register fields as blocks.
export const registerFields = () => {
    [
        textinput,
        textarea

    ].forEach( ( block ) => {
        if ( !block ) {
            return;
        }
        const { settings, name } = block;
        registerBlockType( name, settings );
    } );
};
