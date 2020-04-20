/**
 * Conditional Logic.
 * @todo: Make this work on a greater scale. I.E multiple conditions.
 */
const initConditionals = () => {

    const toggleField = ( field, action ) => {

        const inputs = field.querySelectorAll( '[data-field]' );
        if ( action === 'hide' ) {
            [ ...inputs ].map( ( input ) => {
                input.disabled = true;
            } );
            field.style.display = 'none';
        }
        else if ( action === 'show' ) {
            [ ...inputs ].map( ( input ) => {
                input.disabled = false;
            } );
            field.style.display = '';
        }
    };

    const condition_fields = document.querySelectorAll( '.formation-field[data-condition]' );

    [ ...condition_fields ].map( ( condition_field ) => {

        toggleField( condition_field, 'hide' );
        const condition = JSON.parse( condition_field.dataset.condition );
        const bound_fields = condition_field.parentNode.querySelectorAll( '[data-field][data-slug=' + condition.field + ']' );
        [ ...bound_fields ].map( ( field ) => {
        	const event_type = ( field.type === 'checkbox' || field.type === 'radio' || field.type === 'select-one' || field.type === 'select-multiple' ) ? 'change' : 'input';
            field.addEventListener( event_type , ( ev ) => {
                const values = [];
                for ( let f of bound_fields ) {
                    if ( f.type === 'checkbox' || f.type === 'radio' ) {
                        if ( f.checked ) {
                            values.push( f.value );
                        }
                    }
                    else {
                        values.push( f.value );
                    }
                }

                if ( condition.compare === 'equal' ) {
                    if ( values.indexOf( condition.value ) >= 0 ) {
                        toggleField( condition_field, 'show' );
                    }
                    else {
                        toggleField( condition_field, 'hide' );
                    }
                }
                else if ( condition.compare === 'not_equal' ) {
                    if ( values.indexOf( condition.value ) < 0 ) {
                        toggleField( condition_field, 'show' );
                    }
                    else {
                        toggleField( condition_field, 'hide' );
                    }
                }
            } );
            // Initial trigger for initial load.
            field.dispatchEvent( new Event( event_type ) );
        } );
    } );

};

export default initConditionals;
