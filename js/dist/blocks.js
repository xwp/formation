this["formation"] = this["formation"] || {}; this["formation"]["blocks"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/blocks.js":
/*!**************************!*\
  !*** ./js/src/blocks.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_form_embed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/form-embed */ "./js/src/blocks/form-embed.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./js/src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Editor Embed Blocks importer.
 *
 * @package Formation
 */
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('formation/form-embed', Object(_blocks_form_embed__WEBPACK_IMPORTED_MODULE_0__["default"])());

/***/ }),

/***/ "./js/src/blocks/form-embed.js":
/*!*************************************!*\
  !*** ./js/src/blocks/form-embed.js ***!
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
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icons */ "./js/src/components/icons.js");


// Get helper functions from global scope


var Fragment = wp.element.Fragment;
var InspectorControls = wp.editor.InspectorControls;
var __ = window.wp.i18n.__;

var FormEmbed = function FormEmbed() {
  return {
    title: __('Embed Form'),
    category: 'common',
    icon: _components_icons__WEBPACK_IMPORTED_MODULE_3__["embedIcon"],
    keywords: [__('Form'), __('Embed')],
    attributes: {
      show_title: {
        type: 'bool'
      },
      form_id: {
        type: 'number'
      }
    },
    edit: function edit(props) {
      var _props$attributes = props.attributes,
          show_title = _props$attributes.show_title,
          form_id = _props$attributes.form_id;

      var convertFormId = function convertFormId(id) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Formation.forms[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var form = _step.value;

            if (form.value === id) {
              return form.label;
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

        return __('No form selected, or form removed.');
      };

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InspectorControls, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
        title: __('Form Settings')
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
        label: __('Show Form Title'),
        onChange: function onChange(value) {
          return props.setAttributes({
            show_title: value
          });
        },
        checked: show_title
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: props.className
      }, show_title && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, convertFormId(form_id)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        value: form_id,
        options: Formation.forms,
        onChange: function onChange(value) {
          return props.setAttributes({
            form_id: parseInt(value)
          });
        }
      })));
    },
    save: function save() {
      return null;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (FormEmbed);

/***/ }),

/***/ "./js/src/components/icons.js":
/*!************************************!*\
  !*** ./js/src/components/icons.js ***!
  \************************************/
/*! exports provided: embedIcon, fieldIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "embedIcon", function() { return embedIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldIcon", function() { return fieldIcon; });
var el = wp.element.createElement;
var embedIcon = el('svg', {
  width: 40,
  height: 40,
  viewBox: '0 0 768 768'
}, el('path', {
  d: 'M223.5 480h64.5v64.5h-64.5v-64.5zM223.5 352.5h64.5v63h-64.5v-63zM223.5 223.5h64.5v64.5h-64.5v-64.5zM352.5 480h192v64.5h-192v-64.5zM352.5 352.5h192v63h-192v-63zM352.5 223.5h192v64.5h-192v-64.5zM643.5 96q10.5 0 19.5 8.25t9 20.25v519q0 10.5-9 19.5t-19.5 9h-519q-12 0-20.25-9t-8.25-19.5v-519q0-28.5 28.5-28.5h519zM607.5 160.5h-447v447h447v-447z'
}));
var fieldIcon = el('svg', {
  width: 30,
  height: 30,
  viewBox: '0 0 768 768'
}, el('path', {
  d: 'M663 225l-58.5 58.5-120-120 58.5-58.5q9-9 22.5-9t22.5 9l75 75q9 9 9 22.5t-9 22.5zM96 552l354-354 120 120-354 354h-120v-120z'
}));

/***/ }),

/***/ "./js/src/style.scss":
/*!***************************!*\
  !*** ./js/src/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

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
//# sourceMappingURL=blocks.js.map