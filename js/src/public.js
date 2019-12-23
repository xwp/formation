/**
 * Frontend scripts.
 *
 * @package Formation
 */

import './style.scss';

const repeaterTemplates = {};
export const repeatable = ( element ) => {
    if ( !element ) {
        element = document;
    }
    const triggers = element.querySelectorAll( '[data-repeater]' );
    const templates = element.querySelectorAll( '[data-template]' );
    [ ...triggers ].map( ( button ) => {
        button.addEventListener( 'click', addGroup );
    } );

    [ ...templates ].map( ( template ) => {
        repeaterTemplates[ template.dataset.template ] = template.firstChild;
    } );

    // once we have templates, remove from dom.
    [ ...templates ].map( ( template ) => {
        template.remove();
    } );

};

const addGroup = ( event ) => {
    const repeater = event.target.dataset.repeater;
    const holder = document.querySelector( '[data-container="' + repeater + '"]' );
    const template = repeaterTemplates[ repeater ];

    const copy = template.cloneNode( true );
    copy.querySelector( '[data-closer]' ).addEventListener( 'click', () => {
        copy.remove();
    } );
    holder.append( copy );
    repeatable( copy );
};

repeatable();
