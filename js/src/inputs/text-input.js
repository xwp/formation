/**
 * Formation field edit.
 */


const TextInput = ( props ) => {
    const {
        label,
        slug,
        placeholder,
        description,
        required,
    } = props.attributes;
    return (
        <>
            <label for={ slug }>
                { label }
                { required &&
                <span className={ 'required' }>*</span>
                }
            </label>
            <input
                type={ 'text' }
                required={ required }
                placeholder={ placeholder }
                disabled={ 'disabled' }
            />
            { description &&
            <div className={ 'description' }>{ description }</div>
            }
        </>
    );
};
export default TextInput;
