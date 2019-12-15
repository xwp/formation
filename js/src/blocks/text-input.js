// Get helper functions from global scope
const {
	Dashicon,
	IconButton,
	PanelBody,
	RangeControl,
	SVG,
	ToggleControl,
	TextControl,
	SelectControl,
	withFilters
} = wp.components;

const {InspectorControls} = wp.editor;
const {Fragment} = wp.element;

const {__} = window.wp.i18n;

import FieldSettings from '../controls/field-settings';
import FieldExtensions from '../controls/field-extension';

const FieldSettingsWithFilters = withFilters( 'formation.fieldSettings' )( FieldSettings );
const FieldExtensionsWithFilters = withFilters( 'formation.fieldExtensions' )( FieldExtensions );

const TextInput = () => {
	return {
		title: __( 'Text Input' ),
		category: 'fields',
		icon: 'forms',
		keywords: [
			__( 'Field' ),
			__( 'Form' ),
			__( 'Text' )
		],
		attributes: {
			label: {
				type: 'string',
				source: 'text',
				selector: 'label',
				default: __( 'New Field' )
			},
			slug: {
				type: 'string',
				source: 'attribute',
				selector: 'input',
				attribute: 'id',
			},
			placeholder: {
				type: 'string',
				source: 'attribute',
				selector: 'input',
				attribute: 'placeholder',
			},
			description: {
				type: 'string',
				source: 'html',
				selector: '.description',
			},
			required: {
				type: 'bool',
			},

		},
		edit: props => {
			const {
				label,
				slug,
				placeholder,
				description,
				required,
			} = props.attributes;
			return (
				<Fragment>
					<InspectorControls>
						<FieldSettingsWithFilters {...props}/>
						<FieldExtensionsWithFilters {...props} />
					</InspectorControls>
					<div className={props.className}>
						<label for={slug}>
							{label}
							{required &&
							<span className={'required'}>*</span>
							}
						</label>
						<input
							type={'text'}
							required={required}
							placeholder={placeholder}
							disabled={'disabled'}
						/>
						{description &&
						<div className={'description'}>{description}</div>
						}
					</div>
				</Fragment>

			);
		},
		save: props => {
			const {
				label,
				slug,
				placeholder,
				description,
				required,
			} = props.attributes;
			return (
				<div className={props.className}>
					<label for={slug}>
						{label}
						{required &&
						<span className={'required'}>*</span>
						}
					</label>

					<input
						type={'text'}
						required={required}
						placeholder={placeholder}
						id={slug}
						name={slug}
					/>
					{description &&
					<div className={'description'}>{description}</div>
					}
				</div>
			);
		},
	};
};
export default TextInput;
