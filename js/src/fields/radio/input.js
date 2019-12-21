/**
 * Formation field edit.
 */
// Define the input field edit component.
const InputField = ( props ) => {
    const {
        placeholder,
        required,
        options,
    } = props.attributes;
    return (
        <>
            { options && options.split( '\n' ).map( ( parts ) => {
                return (
                    <div><input
                        type={ 'radio' }
                        required={ required }
                        placeholder={ placeholder }
                        disabled={ 'disabled' }
                    />
                        { parts.split('|')[1] ? parts.split('|')[1] + ' (' + parts.split('|')[0] + ')' : parts.split('|')[0] }
                    </div>
                );
            } ) }
        </>
    );
};

export default InputField;
