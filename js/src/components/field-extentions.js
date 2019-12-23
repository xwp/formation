/**
 * Formation field setting panel extension.
 */

import { withFilters } from '@wordpress/components';
import FormationFieldConditions from './field-conditions';
import { getBlockType } from '@wordpress/blocks';

const FormationFieldExtension = ( props ) => {
    const { extension } = getBlockType( props.name );
    const ExtensionComponent = extension;

    return (
        <>
            <ExtensionComponent { ...props } />
            <FormationFieldConditions { ...props } />
        </>
    );
};

export default withFilters( 'FormationFieldExtension' )( FormationFieldExtension );
