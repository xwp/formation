/**
 * Form Editor field (Blocks) importer and register.
 *
 * @package Formation
 */
const { __ } = window.wp.i18n;
import { registerFields } from './fields';

const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
import { SelectControl } from '@wordpress/components';

const { withSelect, withDispatch } = wp.data;

import './editor.scss';

registerFields();

const PostsDropdownControl = wp.compose.compose(
    withDispatch( function( dispatch, props ) {
        return {
            setMetaValue: function( metaValue ) {
                dispatch( 'core/editor' ).editPost(
                    { meta: { [ props.metaKey ]: metaValue } }
                );
            }
        };
    } ),

    withSelect( function( select, props ) {
        return {
            posts: select( 'core' ).getEntityRecords( 'postType', 'page' ),
            metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
        };
    } ) )( function( props ) {

        // options for SelectControl
        var options = [];

        // if posts found.
        if ( props.posts ) {
            options.push( { value: 0, label: 'No redirection' } );
            props.posts.forEach( ( post ) => { // simple foreach loop
                options.push( { value: post.id, label: post.title.rendered } );
            } );
        }
        else {
            options.push( { value: 0, label: 'Loading...' } );
        }

        return wp.element.createElement( SelectControl,
            {
                label: __( 'Select page to redirect to after submit' ),
                options: options,
                onChange: function( content ) {
                    props.setMetaValue( content );
                },
                value: props.metaValue,
            }
        );

    }
);


registerPlugin( 'redirect-sidebar', {
    render() {
        return (
            <PluginDocumentSettingPanel
                name="form-redirect"
                title={ __( 'Redirection' ) }
                icon="redo"
            >
                <div className="redirect-content">
                    <PostsDropdownControl metaKey="redirect"/>
                </div>
            </PluginDocumentSettingPanel>
        );
    },
} );
