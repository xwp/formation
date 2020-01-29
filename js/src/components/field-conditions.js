/**
 * Formation field setting extension.
 */

import {
    ToggleControl,
    TextControl,
    SelectControl,
    PanelBody,
    withFilters
} from '@wordpress/components';

import { getFieldBlocks } from './get-blocks';

const { __ } = window.wp.i18n;
const FormationFieldConditions = ( props ) => {
    const {
        has_conditions,
        slug,
        condition_action,
        condition_field,
        condition_compare,
        condition_value,
    } = props.attributes;
    const toggleAttribute = ( attribute ) => {
        return ( newValue ) => {
            props.setAttributes( { [ attribute ]: newValue } );
        };
    };
    // list of fields.
    const fields = getFieldBlocks( null, slug );
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
                    <SelectControl
                        value={ condition_action }
                        options={
                            [
                                { label: 'Show', value: 'show' },
                                { label: 'Hide', value: 'hide' },
                            ]
                        }
                        onChange={ ( value ) => props.setAttributes( {
                            condition_action: value,
                        } ) }
                    />
                    <SelectControl
                        label={'If'}
                        value={ condition_field }
                        options={
                            fields
                        }
                        onChange={ ( value ) => props.setAttributes( {
                            condition_field: value,
                        } ) }
                    />
                    <SelectControl
                        value={ condition_compare }
                        options={
                            [
                                { label: 'Is Equal', value: 'equal' },
                                { label: 'Not Equal', value: 'not_equal' },
                            ]
                        }
                        onChange={ ( value ) => props.setAttributes( {
                            condition_action: value,
                        } ) }
                    />
                    <TextControl
                        value={ condition_value }
                        onChange={ ( value ) => {
                            props.setAttributes( {
                                condition_value: value,
                            } );
                        } }
                    />
                </>
                }
            </PanelBody>
        </>
    );
};

export default withFilters( 'FormationFieldConditions' )( FormationFieldConditions );

