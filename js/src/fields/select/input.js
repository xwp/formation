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
        <select
            required={ required }
            placeholder={ placeholder }
        >
            { options && options.split( '\n' ).map( ( parts ) => {
                return <option>{ parts.split( '|' )[ 1 ] ? parts.split( '|' )[ 1 ] + ' (' + parts.split( '|' )[ 0 ] + ')' : parts.split( '|' )[ 0 ] }</option>;
            } ) }
        </select>
    );
};

export default InputField;
