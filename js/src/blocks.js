/**
 * Editor Embed Blocks importer.
 *
 * @package Formation
 */
const {registerBlockType} = wp.blocks;

import FormEmbed from './blocks/form-embed';

import './style.scss';



registerBlockType( 'formation/form-embed', FormEmbed() );
