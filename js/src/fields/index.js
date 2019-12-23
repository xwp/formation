/**
 * Editor Fields importer.
 *
 * @package Formation
 */

import {
    registerBlockType,
} from '@wordpress/blocks';

import { Fields } from './fields';

// Register fields as blocks.
export const registerFields = () => {
    Fields.forEach( ( block ) => {
        console.log( block );
        if ( !block ) {
            return;
        }
        const { settings, name } = block;
        registerBlockType( name, settings );
    } );
};
