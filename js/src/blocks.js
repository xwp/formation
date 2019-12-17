/**
 * Editor Blocks importer.
 *
 * @package Formation
 */
const {registerBlockType} = window.wp.blocks;

import FormEmbed from './blocks/form-embed';

import './style.scss';



registerBlockType( 'formation/form-embed', FormEmbed() );
