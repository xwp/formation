/**
 * Formation field edit.
 */


const InputField = ( props ) => {
    if ( props.name !== 'formation/text-area' ) {
        return null;
    }
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
                rows={ rows }
            />
            { description &&
            <div className={ 'description' }>{ description }</div>
            }
        </>
    );
};

// Define in field type for Text Area.
const FormationTextAreaInput = ( FormationFieldInput ) => {
    return ( props ) => {
        return ( <>
                <FormationFieldInput { ...props } />
                { props.name === 'formation/text-area' &&
                <InputField { ...props } />
                }
            </>
        );
    };
};

export default FormationTextAreaInput;
