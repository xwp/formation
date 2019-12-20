/**
 * Formation field edit.
 */

// Define the input field edit component.
const InputField = ( props ) => {
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
                type={ 'email' }
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

// Add the component on text inputs only.
const FormationInput = ( FormationFieldInput ) => {
    return ( props ) => {
        return ( <>
                <FormationFieldInput { ...props } />
                { props.name === 'formation/email' &&
                <InputField { ...props } />
                }
            </>
        );
    };
};

export default FormationInput;
