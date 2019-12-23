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
        description,
    } = props.attributes;
    if ( !description ) {
        props.setAttributes( {
            description: __( 'Add Item' )
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
            >{ description }</button>
        </>
    );
};

export default InputField;
