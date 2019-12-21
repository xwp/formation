/**
 * Formation field edit.
 */

// Define the input field edit component.
const InputField = ( props ) => {
    const {
        label,
    } = props.attributes;
    return (
        <>
            <button
                type={ 'button' }
                disabled={ 'disabled' }
            >{label ? label : '..enter label'}</button>
        </>
    );
};

export default InputField;
