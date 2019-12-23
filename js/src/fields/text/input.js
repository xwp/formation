/**
 * Formation field edit.
 */

/**
 * External dependencies
 */

// Define the input field edit component.
const InputField = ( props ) => {
    const {
        placeholder,
        required,
    } = props.attributes;
    return (
        <>
            <input
                type={ 'text' }
                required={ required }
                placeholder={ placeholder }
                disabled={ 'disabled' }
            />
        </>
    );
};

export default InputField;
