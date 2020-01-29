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
        const bound_fields = condition_field.parentNode.querySelectorAll( '[data-field][name=' + condition.field + ']' );
        [ ...bound_fields ].map( ( field ) => {
            field.addEventListener( 'input', ( ev ) => {
                if ( condition.compare === 'equal' ) {
                    if ( field.value === condition.value ) {
                        toggleField( condition_field, 'show' );
                    }
                    else {
                        toggleField( condition_field, 'hide' );
                    }
                }
                else if ( condition.compare === 'not_equal' ) {
                    if ( field.value === condition.value ) {
                        toggleField( condition_field, 'hide' );
                    }
                    else {
                        toggleField( condition_field, 'show' );
                    }
                }
            } );
        } );
    } );

};

export default initConditionals;
