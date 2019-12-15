/**
 * Editor Blocks importer.
 *
 * @package Formation
 */
const {registerBlockType} = window.wp.blocks;
import TextInput from './blocks/text-input';
import TextArea from './blocks/textarea';

import './editor.scss';

// Use registerBlockType to create a custom block.
registerBlockType( 'formation/text-input', TextInput() );
registerBlockType( 'formation/text-area', TextArea() );
