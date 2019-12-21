/**
 * Formation field edit.
 */

// Define the input field edit component.
const InputField = ( props ) => {
    const {
        placeholder,
        rows,

    } = props.attributes;
    return (
        <>
            <textarea
                placeholder={ placeholder }
                disabled={ 'disabled' }
                rows={ rows }
            />
        </>
    );
};

export default InputField;
