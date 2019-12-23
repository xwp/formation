/**
 * Formation field setting extension.
 */

import {
    ToggleControl,
    TextControl,
    PanelBody,
    withFilters
} from '@wordpress/components';

import { getFieldBlocks } from './get-blocks';
const { __ } = window.wp.i18n;
const FormationFieldConditions = ( props ) => {
    const {
        has_conditions,
    } = props.attributes;
    const toggleAttribute = ( attribute ) => {
        return ( newValue ) => {
            props.setAttributes( { [ attribute ]: newValue } );
        };
    };
    // list of fields.
    const fields = getFieldBlocks();
    return (
        <>
            <PanelBody title={ __( 'Conditionals' ) } initialOpen={ false }>
                <ToggleControl
                    label={ 'Enable Conditionals' }
                    onChange={ toggleAttribute( 'has_conditions' ) }
                    checked={ has_conditions }
                />
                { has_conditions &&
                <>

                </>
                }
            </PanelBody>
        </>
    );
};

export default withFilters( 'FormationFieldConditions' )( FormationFieldConditions );

