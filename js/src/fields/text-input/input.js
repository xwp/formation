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

// Add the component on text inputs only.
const FormationTextInput = ( FormationFieldInput ) => {
    return ( props ) => {
        return ( <>
                <FormationFieldInput { ...props } />
                { props.name === 'formation/text-input' &&
                <InputField { ...props } />
                }
            </>
        );
    };
};

export default FormationTextInput;
