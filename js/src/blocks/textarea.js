const {InspectorControls} = wp.editor;
const {Fragment} = wp.element;

const {__} = window.wp.i18n;
const {
	withFilters
} = wp.components;
import FieldSettings from '../controls/field-settings';
import FieldExtensions from '../controls/field-extension';

const FieldSettingsWithFilters = withFilters( 'formation.fieldSettings' )( FieldSettings );
const FieldExtensionsWithFilters = withFilters( 'formation.fieldExtensions' )( FieldExtensions );

import TextField from './text-input';

const TextArea = () => {
	const field = TextField();
	field.title = __( 'TextArea' );
	field.edit = ( props ) => {
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
					<textarea
						required={required}
						placeholder={placeholder}
						disabled={'disabled'}
					></textarea>
					{description &&
					<div className={'description'}>{description}</div>
					}
				</div>
			</Fragment>

		);
	};
	field.save = (props) => {
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

					<textarea
						required={required}
						placeholder={placeholder}
						id={slug}
						name={slug}
					></textarea>
					{description &&
					<div className={'description'}>{description}</div>
					}
				</div>
			);
	}

	return field;

};

export default TextArea;
