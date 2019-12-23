/**
 * Formation field setting panel extension.
 */

import { withFilters } from '@wordpress/components';
import { getBlockType } from '@wordpress/blocks';
import { find } from 'lodash';
import { select } from '@wordpress/data';
import { Fields } from '../fields';

const FormationFieldExtension = ( props ) => {
    const { extension } = getBlockType( props.name );
    const ExtensionComponent = extension;



    return (
        <>
            <LabelComponent { ...props } />
            <ExtensionComponent { ...props } />
        </>
    );
};

export default withFilters( 'FormationFieldExtension' )( FormationFieldExtension );
