this["formation"] = this["formation"] || {}; this["formation"]["components"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/components.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/components.js":
/*!******************************!*\
  !*** ./js/src/components.js ***!
  \******************************/
/*! exports provided: FormationFieldSettings, FormationFieldExtensions, FormationFieldInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_field_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/field-settings */ "./js/src/components/field-settings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormationFieldSettings", function() { return _components_field_settings__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_field_extentions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/field-extentions */ "./js/src/components/field-extentions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormationFieldExtensions", function() { return _components_field_extentions__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_field_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/field-input */ "./js/src/components/field-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormationFieldInput", function() { return _components_field_input__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * Formation components for extending in other plugins.
 *
 * @package Formation
 */




/***/ }),

/***/ "./js/src/components/field-conditions.js":
/*!***********************************************!*\
  !*** ./js/src/components/field-conditions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _get_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-blocks */ "./js/src/components/get-blocks.js");




/**
 * Formation field setting extension.
 */


var __ = window.wp.i18n.__;

var FormationFieldConditions = function FormationFieldConditions(props) {
  var has_conditions = props.attributes.has_conditions;

  var toggleAttribute = function toggleAttribute(attribute) {
    return function (newValue) {
      props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, attribute, newValue));
    };
  }; // list of fields.


  var fields = Object(_get_blocks__WEBPACK_IMPORTED_MODULE_4__["getFieldBlocks"])();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: __('Conditionals'),
    initialOpen: false
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: 'Enable Conditionals',
    onChange: toggleAttribute('has_conditions'),
    checked: has_conditions
  }), has_conditions && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["withFilters"])('FormationFieldConditions')(FormationFieldConditions));

/***/ }),

/***/ "./js/src/components/field-extentions.js":
/*!***********************************************!*\
  !*** ./js/src/components/field-extentions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _field_conditions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-conditions */ "./js/src/components/field-conditions.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);



/**
 * Formation field setting panel extension.
 */




var FormationFieldExtension = function FormationFieldExtension(props) {
  var _getBlockType = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockType"])(props.name),
      extension = _getBlockType.extension;

  var ExtensionComponent = extension;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ExtensionComponent, props), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_field_conditions__WEBPACK_IMPORTED_MODULE_3__["default"], props));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["withFilters"])('FormationFieldExtension')(FormationFieldExtension));

/***/ }),

/***/ "./js/src/components/field-input.js":
/*!******************************************!*\
  !*** ./js/src/components/field-input.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);



/**
 * Formation field input extension.
 */



var FormationFieldInput = function FormationFieldInput(props) {
  var _getBlockType = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["getBlockType"])(props.name),
      label = _getBlockType.label,
      input = _getBlockType.input,
      description = _getBlockType.description;

  var LabelComponent = label;
  var InputComponent = input;
  var DescriptionComponent = description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LabelComponent, props), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputComponent, props), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DescriptionComponent, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["withFilters"])('FormationFieldInput')(FormationFieldInput));

/***/ }),

/***/ "./js/src/components/field-settings.js":
/*!*********************************************!*\
  !*** ./js/src/components/field-settings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);




/**
 * Formation field setting extension.
 */


var __ = window.wp.i18n.__;

var FormationFieldSettings = function FormationFieldSettings(props) {
  var _props$attributes = props.attributes,
      label = _props$attributes.label,
      slug = _props$attributes.slug,
      placeholder = _props$attributes.placeholder,
      description = _props$attributes.description,
      required = _props$attributes.required,
      is_repeatable = _props$attributes.is_repeatable,
      default_value = _props$attributes.default_value;
  props.setAttributes({
    _unique_id: props.clientId
  });
  var blockType = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockType"])(props.name);
  var SettingsComponent = blockType.settings;

  var supports = function supports(support) {
    return blockType.supports.indexOf(support) > -1;
  };

  var toggleAttribute = function toggleAttribute(attribute) {
    return function (newValue) {
      props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, attribute, newValue));
    };
  };

  var setLabel = function setLabel(value) {
    // Make label based slug.
    var SanitizedSlug = value.split(' ').join('_').split('-').join('_').replace(/[^a-z0-9_]/gi, '').toLowerCase();

    if (!slug || slug.length <= 1 || slug === SanitizedSlug.substring(0, SanitizedSlug.length - 1)) {
      props.setAttributes({
        slug: SanitizedSlug
      });
    } // Some Clever Stuff.


    if (label && 'formation/text-input' === blockType.name) {
      if (label.indexOf('email') >= 0 || label.indexOf('Email') >= 0) {
        props.setAttributes({
          type: 'email'
        });
      }
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, supports('label') && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: __('Label'),
    value: label,
    onChange: function onChange(value) {
      props.setAttributes({
        label: value
      });
      setLabel(value);
    }
  }), supports('slug') && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: __('Slug'),
    value: slug,
    onChange: function onChange(value) {
      props.setAttributes({
        slug: value
      });

      if (value.length <= 0) {
        setLabel(label);
      }
    },
    onBlur: function onBlur() {
      setLabel(label);
    }
  }), supports('placeholder') && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: __('Placeholder'),
    value: placeholder,
    onChange: function onChange(value) {
      return props.setAttributes({
        placeholder: value
      });
    }
  }), supports('description') && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: __('Description'),
    value: description,
    onChange: function onChange(value) {
      return props.setAttributes({
        description: value
      });
    }
  }), supports('default_value') && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: __('Default Value'),
    value: default_value,
    onChange: function onChange(value) {
      return props.setAttributes({
        default_value: value
      });
    }
  }), supports('required') && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: 'Required',
    onChange: toggleAttribute('required'),
    checked: required
  }), supports('repeatable') && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: 'Repeatable',
    onChange: toggleAttribute('is_repeatable'),
    checked: is_repeatable
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SettingsComponent, props));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["withFilters"])('FormationFieldSettings')(FormationFieldSettings));

/***/ }),

/***/ "./js/src/components/get-blocks.js":
/*!*****************************************!*\
  !*** ./js/src/components/get-blocks.js ***!
  \*****************************************/
/*! exports provided: getFieldBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldBlocks", function() { return getFieldBlocks; });
/* harmony import */ var _fields_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fields/fields */ "./js/src/fields/fields.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);



var getInnerBlocks = function getInnerBlocks(block, types) {
  var found = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = block.innerBlocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var innerBlock = _step.value;

      if (types.indexOf(innerBlock.name) >= 0) {
        found.push(innerBlock);
      }

      if (innerBlock.innerBlocks.length) {
        var inners = getInnerBlocks(innerBlock, types);

        if (inners.length) {
          found = found.concat(inners);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return found;
};

var getFieldBlocks = function getFieldBlocks() {
  var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var blocks = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])('core/editor').getBlocks();
  var found = [];

  if (null === types) {
    types = _fields_fields__WEBPACK_IMPORTED_MODULE_0__["FieldNames"];
  } else {
    types = types.split(',');
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = blocks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var block = _step2.value;

      if (types.indexOf(block.name) >= 0) {
        found.push(block);
      }

      if (block.innerBlocks.length) {
        var inners = getInnerBlocks(block, types);

        if (inners.length) {
          found = found.concat(inners);
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return found;
};

/***/ }),

/***/ "./js/src/fields/base-input.js":
/*!*************************************!*\
  !*** ./js/src/fields/base-input.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_field_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/field-input */ "./js/src/components/field-input.js");
/* harmony import */ var _components_field_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/field-settings */ "./js/src/components/field-settings.js");
/* harmony import */ var _components_field_extentions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/field-extentions */ "./js/src/components/field-extentions.js");


// Get helper functions from global scope
var InspectorControls = wp.editor.InspectorControls;
var Fragment = wp.element.Fragment;
var __ = window.wp.i18n.__;



 // Define the input field edit component.

var LabelField = function LabelField(props) {
  var _props$attributes = props.attributes,
      label = _props$attributes.label,
      slug = _props$attributes.slug,
      required = _props$attributes.required;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    for: slug
  }, label, required && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: 'required'
  }, "*")));
};

var DescriptionField = function DescriptionField(props) {
  var description = props.attributes.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, description && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'description'
  }, description));
}; // Define the input field edit component.


var InputField = function InputField(props) {
  var _props$attributes2 = props.attributes,
      placeholder = _props$attributes2.placeholder,
      required = _props$attributes2.required;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: 'text',
    required: required,
    placeholder: placeholder,
    disabled: 'disabled'
  }));
}; // Define the base input field.


var BaseInput = {
  title: __('Base Field'),
  category: 'fields',
  icon: 'forms',
  keywords: [__('Field'), __('Form'), __('Text')],
  supports: ['label', 'slug', 'placeholder', 'description', 'default_value', 'required', 'repeatable'],
  attributes: {
    label: {
      type: 'string'
    },
    slug: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    required: {
      type: 'bool'
    },
    is_repeatable: {
      type: 'bool'
    },
    default_value: {
      type: 'string'
    },
    has_conditions: {
      type: 'bool'
    },
    _unique_id: {
      type: 'string'
    }
  },
  label: LabelField,
  input: InputField,
  settings: function settings(props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
  },
  extension: function extension(props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
  },
  description: DescriptionField,
  edit: function edit(props) {
    var _unique_id = props.attributes._unique_id; // Set only if one is not set. moving/reloading creates a new one. lets
    // keep the first one created.

    if (!_unique_id) {
      props.setAttributes({
        _unique_id: props.clientId
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InspectorControls, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: __('Field Settings')
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_field_settings__WEBPACK_IMPORTED_MODULE_4__["default"], props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_field_extentions__WEBPACK_IMPORTED_MODULE_5__["default"], props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: props.className + ' formation-editor-input',
      id: 'field_' + _unique_id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_field_input__WEBPACK_IMPORTED_MODULE_3__["default"], props)));
  },
  save: function save() {
    return null;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BaseInput);

/***/ }),

/***/ "./js/src/fields/button/index.js":
/*!***************************************!*\
  !*** ./js/src/fields/button/index.js ***!
  \***************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./js/src/fields/button/input.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;



var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: 'formation/button',
  title: __('Button'),
  supports: ['label'],
  input: _input__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/button/input.js":
/*!***************************************!*\
  !*** ./js/src/fields/button/input.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */
// Define the input field edit component.
var InputField = function InputField(props) {
  var label = props.attributes.label;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: 'button',
    disabled: 'disabled'
  }, label ? label : '..enter label'));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/checkbox/index.js":
/*!*****************************************!*\
  !*** ./js/src/fields/checkbox/index.js ***!
  \*****************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./js/src/fields/checkbox/input.js");
/* harmony import */ var _select_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select/settings */ "./js/src/fields/select/settings.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;




var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: 'formation/checkbox',
  title: __('Checkbox'),
  category: 'fields',
  icon: 'forms',
  keywords: [__('Field'), __('Form'), __('Text')],
  attributes: _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"].attributes, {
    options: {
      type: 'string'
    }
  }),
  input: _input__WEBPACK_IMPORTED_MODULE_2__["default"],
  settings: _select_settings__WEBPACK_IMPORTED_MODULE_3__["default"]
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/checkbox/input.js":
/*!*****************************************!*\
  !*** ./js/src/fields/checkbox/input.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */
// Define the input field edit component.
var InputField = function InputField(props) {
  var _props$attributes = props.attributes,
      placeholder = _props$attributes.placeholder,
      required = _props$attributes.required,
      options = _props$attributes.options;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, options && options.split('\n').map(function (parts) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: 'checkbox',
      required: required,
      placeholder: placeholder,
      disabled: 'disabled'
    }), parts.split('|')[1] ? parts.split('|')[1] + ' (' + parts.split('|')[0] + ')' : parts.split('|')[0]);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/email/index.js":
/*!**************************************!*\
  !*** ./js/src/fields/email/index.js ***!
  \**************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./js/src/fields/email/input.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;



var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: 'formation/email',
  title: __('Email Address'),
  input: _input__WEBPACK_IMPORTED_MODULE_2__["default"]
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/email/input.js":
/*!**************************************!*\
  !*** ./js/src/fields/email/input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */
// Define the input field edit component.
var InputField = function InputField(props) {
  var _props$attributes = props.attributes,
      placeholder = _props$attributes.placeholder,
      required = _props$attributes.required;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: 'text',
    required: required,
    placeholder: placeholder,
    disabled: 'disabled'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/fields.js":
/*!*********************************!*\
  !*** ./js/src/fields/fields.js ***!
  \*********************************/
/*! exports provided: Fields, FieldObjects, FieldNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return Fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldObjects", function() { return FieldObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldNames", function() { return FieldNames; });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./js/src/fields/text/index.js");
/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea */ "./js/src/fields/textarea/index.js");
/* harmony import */ var _email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email */ "./js/src/fields/email/index.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./js/src/fields/select/index.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkbox */ "./js/src/fields/checkbox/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button */ "./js/src/fields/button/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio */ "./js/src/fields/radio/index.js");
/* harmony import */ var _repeatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repeatable */ "./js/src/fields/repeatable/index.js");
//Setup all fields.








var Fields = {
  'formation/text': _text__WEBPACK_IMPORTED_MODULE_0__,
  'formation/textarea': _textarea__WEBPACK_IMPORTED_MODULE_1__,
  'formation/email': _email__WEBPACK_IMPORTED_MODULE_2__,
  'formation/select': _select__WEBPACK_IMPORTED_MODULE_3__,
  'formation/checkbox': _checkbox__WEBPACK_IMPORTED_MODULE_4__,
  'formation/button': _button__WEBPACK_IMPORTED_MODULE_5__,
  'formation/radio': _radio__WEBPACK_IMPORTED_MODULE_6__,
  'formation/repeatable': _repeatable__WEBPACK_IMPORTED_MODULE_7__
};
var names = [];
var objects = [];

for (var block in Fields) {
  names.push(block);
  objects.push(Fields[block]);
}

var FieldObjects = objects;
var FieldNames = names;

/***/ }),

/***/ "./js/src/fields/radio/index.js":
/*!**************************************!*\
  !*** ./js/src/fields/radio/index.js ***!
  \**************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./js/src/fields/radio/input.js");
/* harmony import */ var _select_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select/settings */ "./js/src/fields/select/settings.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;




var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: 'formation/radio',
  title: __('Radio'),
  category: 'fields',
  icon: 'forms',
  keywords: [__('Field'), __('Form'), __('Text')],
  attributes: _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"].attributes, {
    options: {
      type: 'string'
    }
  }),
  input: _input__WEBPACK_IMPORTED_MODULE_2__["default"],
  settings: _select_settings__WEBPACK_IMPORTED_MODULE_3__["default"]
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/radio/input.js":
/*!**************************************!*\
  !*** ./js/src/fields/radio/input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */
// Define the input field edit component.
var InputField = function InputField(props) {
  var _props$attributes = props.attributes,
      placeholder = _props$attributes.placeholder,
      required = _props$attributes.required,
      options = _props$attributes.options;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, options && options.split('\n').map(function (parts) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: 'radio',
      required: required,
      placeholder: placeholder,
      disabled: 'disabled'
    }), parts.split('|')[1] ? parts.split('|')[1] + ' (' + parts.split('|')[0] + ')' : parts.split('|')[0]);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/repeatable/index.js":
/*!*******************************************!*\
  !*** ./js/src/fields/repeatable/index.js ***!
  \*******************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./js/src/fields/repeatable/input.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;


var InnerBlocks = wp.editor.InnerBlocks;

var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
  name: 'formation/repeatable',
  title: __('Repeatable'),
  attributes: _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_3__["default"].attributes, {
    type: {
      type: 'string'
    }
  }),
  supports: ['label', 'description', 'slug', 'required'],
  input: _input__WEBPACK_IMPORTED_MODULE_4__["default"],
  description: function description() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
  },
  save: function save() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerBlocks.Content, null);
  }
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/repeatable/input.js":
/*!*******************************************!*\
  !*** ./js/src/fields/repeatable/input.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */

/**
 * External dependencies
 */
var __ = window.wp.i18n.__;
var InnerBlocks = wp.editor.InnerBlocks; // Define the input field edit component.

var InputField = function InputField(props) {
  var description = props.attributes.description;

  if (!description) {
    props.setAttributes({
      description: __('Add Item')
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: 'formation-repeater'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InnerBlocks, {
    placeholder: 'Add Fields'
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: 'button',
    className: 'button'
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/select/index.js":
/*!***************************************!*\
  !*** ./js/src/fields/select/index.js ***!
  \***************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./js/src/fields/select/input.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./js/src/fields/select/settings.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;




var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: 'formation/select',
  title: __('Select'),
  category: 'fields',
  icon: 'forms',
  keywords: [__('Field'), __('Form'), __('Text')],
  attributes: _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"].attributes, {
    options: {
      type: 'string'
    }
  }),
  input: _input__WEBPACK_IMPORTED_MODULE_2__["default"],
  settings: _settings__WEBPACK_IMPORTED_MODULE_3__["default"]
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/select/input.js":
/*!***************************************!*\
  !*** ./js/src/fields/select/input.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */
// Define the input field edit component.
var InputField = function InputField(props) {
  var _props$attributes = props.attributes,
      placeholder = _props$attributes.placeholder,
      required = _props$attributes.required,
      options = _props$attributes.options;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    required: required,
    placeholder: placeholder
  }, options && options.split('\n').map(function (parts) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", null, parts.split('|')[1] ? parts.split('|')[1] + ' (' + parts.split('|')[0] + ')' : parts.split('|')[0]);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/select/settings.js":
/*!******************************************!*\
  !*** ./js/src/fields/select/settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var __ = window.wp.i18n.__; // Define the additional settings controls.

var Settings = function Settings(props) {
  var options = props.attributes.options;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextareaControl"], {
    label: __('Options'),
    value: options,
    help: __('Each option per line, e.g ( option_value|Option Lave )'),
    onChange: function onChange(value) {
      return props.setAttributes({
        options: value
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./js/src/fields/text/index.js":
/*!*************************************!*\
  !*** ./js/src/fields/text/index.js ***!
  \*************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./js/src/fields/text/input.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./js/src/fields/text/settings.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;




var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: 'formation/text',
  title: __('Text Input'),
  attributes: _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"].attributes, {
    type: {
      type: 'string'
    }
  }),
  input: _input__WEBPACK_IMPORTED_MODULE_2__["default"],
  settings: _settings__WEBPACK_IMPORTED_MODULE_3__["default"]
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/text/input.js":
/*!*************************************!*\
  !*** ./js/src/fields/text/input.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */

/**
 * External dependencies
 */
// Define the input field edit component.
var InputField = function InputField(props) {
  var _props$attributes = props.attributes,
      placeholder = _props$attributes.placeholder,
      required = _props$attributes.required;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: 'text',
    required: required,
    placeholder: placeholder,
    disabled: 'disabled'
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/text/settings.js":
/*!****************************************!*\
  !*** ./js/src/fields/text/settings.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var __ = window.wp.i18n.__; // Define the additional settings controls.

var Settings = function Settings(props) {
  var type = props.attributes.type;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: __('Type'),
    value: type,
    onChange: function onChange(value) {
      return props.setAttributes({
        type: value
      });
    },
    options: [{
      value: 'text',
      label: __('Text')
    }, {
      value: 'email',
      label: __('Email')
    }, {
      value: 'tel',
      label: __('Tel')
    }, {
      value: 'date',
      label: __('Date')
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./js/src/fields/textarea/index.js":
/*!*****************************************!*\
  !*** ./js/src/fields/textarea/index.js ***!
  \*****************************************/
/*! exports provided: field, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "field", function() { return field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-input */ "./js/src/fields/base-input.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./js/src/fields/textarea/input.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./js/src/fields/textarea/settings.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = window.wp.i18n.__;




var field = _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  name: 'formation/textarea',
  title: __('Text Area'),
  category: 'fields',
  icon: 'forms',
  keywords: [__('Field'), __('Form'), __('Text')],
  attributes: _objectSpread({}, _base_input__WEBPACK_IMPORTED_MODULE_1__["default"].attributes, {
    rows: {
      type: 'number',
      default: 5
    }
  }),
  input: _input__WEBPACK_IMPORTED_MODULE_2__["default"],
  settings: _settings__WEBPACK_IMPORTED_MODULE_3__["default"]
});

var name = field.name;

var settings = field;

/***/ }),

/***/ "./js/src/fields/textarea/input.js":
/*!*****************************************!*\
  !*** ./js/src/fields/textarea/input.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Formation field edit.
 */
// Define the input field edit component.
var InputField = function InputField(props) {
  var _props$attributes = props.attributes,
      placeholder = _props$attributes.placeholder,
      rows = _props$attributes.rows;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    placeholder: placeholder,
    disabled: 'disabled',
    rows: rows
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./js/src/fields/textarea/settings.js":
/*!********************************************!*\
  !*** ./js/src/fields/textarea/settings.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



var __ = window.wp.i18n.__; // Define the additional settings controls.

var Settings = function Settings(props) {
  var rows = props.attributes.rows;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: __('Rows'),
    value: rows,
    onChange: function onChange(value) {
      return props.setAttributes({
        rows: value
      });
    },
    type: 'number'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=components.js.map