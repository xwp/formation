/**
 * Formation field edit.
 */


const TextareaInput = ( props ) => {
    const {
        label,
        slug,
        placeholder,
        description,
        required,
        rows,
    } = props.attributes;
    return (
        <>
            <label for={ slug }>
                { label }
                { required &&
                <span className={ 'required' }>*</span>
                }
            </label>
            <textarea
                required={ required }
                placeholder={ placeholder }
                disabled={ 'disabled' }
                rows={rows}
            ></textarea>
            { description &&
            <div className={ 'description' }>{ description }</div>
            }
        </>
    );
};
export default TextareaInput;
