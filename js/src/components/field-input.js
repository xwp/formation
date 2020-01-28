/**
 * Formation field input extension.
 */

import { withFilters } from '@wordpress/components';
import { getBlockType } from '@wordpress/blocks';

const FormationFieldInput = ( props ) => {
    const { label, input, descriptionField } = getBlockType( props.name );
    const LabelComponent = label;
    const InputComponent = input;
    const DescriptionComponent = descriptionField;
    return (
        <>
            <LabelComponent { ...props } />
            <InputComponent { ...props } />
            <DescriptionComponent { ...props } />
        </>
    );
};

export default withFilters( 'FormationFieldInput' )( FormationFieldInput );
