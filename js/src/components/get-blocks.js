import { FieldNames } from '../fields/fields';
import { select } from '@wordpress/data';

const getInnerBlocks = ( block, types ) => {

    let found = [];
    for ( const innerBlock of block.innerBlocks ) {
        if ( types.indexOf( innerBlock.name ) >= 0 ) {
            found.push( innerBlock );
        }
        if ( innerBlock.innerBlocks.length ) {
            let inners = getInnerBlocks( innerBlock, types );
            if ( inners.length ) {
                found = found.concat( inners );
            }
        }
    }
    return found;
};

export const getFieldBlocks = ( types = null ) => {
    const blocks = select( 'core/block-editor' ).getBlocks();
    let found = [];
    if ( null === types ) {
        types = FieldNames;
    }
    else {
        types = types.split( ',' );
    }
    for ( const block of blocks ) {
        if ( types.indexOf( block.name ) >= 0 ) {
            found.push( block );
        }
        if ( block.innerBlocks.length ) {
            let inners = getInnerBlocks( block, types );
            if ( inners.length ) {
                found = found.concat( inners );
            }
        }
    }
    return found;
};
