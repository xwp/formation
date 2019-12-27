/**
 * Frontend scripts.
 *
 * @package Formation
 */

import './style.scss';

const repeaterTemplates = {};
const repeaterEntries = {};
const repeaterTriggers = {};
const repeaterFields = {};

export const repeatable = ( element ) => {
    if ( !element ) {
        element = document;
    }
    const triggers = element.querySelectorAll( '[data-repeater]' );
    const templates = element.querySelectorAll( '[data-template]' );
    const repeaters = element.querySelectorAll( '[data-parent]' );
    [ ...triggers ].map( ( button ) => {
        button.addEventListener( 'click', addGroup );
        repeaterTriggers[ button.dataset.repeater ] = button;
    } );

    [ ...templates ].map( ( template ) => {
        const repeater_id = template.dataset.template;
        repeaterTemplates[ repeater_id ] = template.firstChild;
    } );

    // once we have templates, remove from dom.
    [ ...templates ].map( ( template ) => {
        template.remove();
    } );
    [ ...repeaters ].map( ( repeater ) => {
        repeaterFields[ repeater.dataset.parent ] = repeater;
        repeaterEntries[ repeater.dataset.parent ] = [];
        const values = JSON.parse( repeater.value );
        if ( values ) {
            values.forEach( ( value ) => {
                const event = new CustomEvent( 'click', {
                    detail: value,
                } );
                repeaterTriggers[ repeater.dataset.parent ].dispatchEvent( event );
            } );
        }
    } );

};

const addGroup = ( event ) => {

    const repeater = event.target.dataset.repeater;
    const holder = document.querySelector( '[data-container="' + repeater + '"]' );
    const template = repeaterTemplates[ repeater ];

    const copy = template.cloneNode( true );
    const fields = copy.querySelectorAll( '[data-field]' );
    const struct = {};

    [ ...fields ].map( ( field ) => {
        const name = field.name;
        if ( name.indexOf( '[]' ) >= 0 ) {
            const name_part = JSON.parse( '{"' + name.replace( /\[/gi, '":[' ) + '}' );
            for ( const key in name_part ) {
                struct[ key ] = name_part[ key ];
                field.dataset.name = key;
            }
        }
        else {
            struct[ field.name ] = field.value;
            field.dataset.name = field.name;
        }

        field.name = null;
        if ( event.detail && event.detail[ field.dataset.name ] ) {
            field.value = event.detail[ field.dataset.name ];
        }
    } );
    copy.formationEntry = struct;
    holder.append( copy );
    repeatable( copy );
    repeaterEntries[ repeater ].push( copy );
    copy.querySelector( '[data-closer]' ).addEventListener( 'click', () => {
        const entry = repeaterEntries[ repeater ].indexOf( copy );
        repeaterEntries[ repeater ].splice( entry, 1 );
        copy.remove();

        buildEntries( repeater );
    } );
    elementJSON( copy, repeater );
};

export const elementJSON = ( element, repeater ) => {
    const fields = element.querySelectorAll( '[data-field]' );
    [ ...fields ].map( ( field ) => {
        field.addEventListener( 'input', ( event ) => {
            const field = event.target;
            const { value } = field;
            const { name } = field.dataset;

            if ( field.type === 'checkbox' ) {
                const index = element.formationEntry[ name ].indexOf( value );

                if ( !field.checked ) {
                    element.formationEntry[ name ].splice( index, 1 );
                }
                else {
                    element.formationEntry[ name ].push( value );
                }
            }
            else {
                element.formationEntry[ name ] = value;
            }

            buildEntries( repeater );
        } );
    } );
};

const buildEntries = ( repeater ) => {
    const entry = [];
    for ( const item of repeaterEntries[ repeater ] ) {
        entry.push( item.formationEntry );
    }
    repeaterFields[ repeater ].value = JSON.stringify( entry );
};

repeatable();
