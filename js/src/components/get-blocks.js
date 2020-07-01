import { FieldNames } from '../fields/fields';
import { select } from '@wordpress/data';

const getInnerBlocks = ( block, types ) => {

    let found = [];
    for ( const innerBlock of block.innerBlocks ) {
        if ( types.indexOf( innerBlock.name ) >= 0 ) {
			const { attributes } = innerBlock;
			const { slug, label } = attributes;

			found.push({
				label,
				value: slug,
			});
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

export const getFieldBlocks = ( types = null, exclude = null ) => {
    const blocks = select( 'core/block-editor' ).getBlocks();
    let found = [{}];
    if ( null === types ) {
        types = FieldNames;
    }
    else {
        types = types.split( ',' );
    }
    for ( const block of blocks ) {
        if ( types.indexOf( block.name ) >= 0 && block.attributes.slug !== exclude ) {
            found.push( {
                value: block.attributes.slug,
                label: block.attributes.label
            } );
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
