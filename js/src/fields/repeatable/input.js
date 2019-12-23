/**
 * Formation field edit.
 */

/**
 * External dependencies
 */
const { __ } = window.wp.i18n;
const { InnerBlocks } = wp.editor;
// Define the input field edit component.
const InputField = ( props ) => {
    const {
        label,
    } = props.attributes;
    if ( !label ) {
        props.setAttributes( {
            label: __( 'Add Item' )
        } );
    }
    return (
        <>
            <div className={ 'formation-repeater' }>
                <InnerBlocks placeholder={'Add Fields'} />
            </div>
            <button
                type={ 'button' }
                className={ 'button' }
            >{ label }</button>
        </>
    );
};

export default InputField;
