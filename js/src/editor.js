/**
 * Editor Blocks importer.
 *
 * @package Formation
 */
const {registerBlockType} = window.wp.blocks;
import TextInput from './blocks/text-input';
import TextArea from './blocks/textarea';
import FormEmbed from './blocks/form-embed';

import './editor.scss';

// Register blocks.
registerBlockType( 'formation/text-input', TextInput() );
registerBlockType( 'formation/text-area', TextArea() );
