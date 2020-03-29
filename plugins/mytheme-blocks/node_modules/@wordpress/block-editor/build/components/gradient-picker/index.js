"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _lodash = require("lodash");

var _components = require("@wordpress/components");

var _data = require("@wordpress/data");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
function GradientPickerWithGradients(props) {
  var _useSelect = (0, _data.useSelect)(function (select) {
    return (0, _lodash.pick)(select('core/block-editor').getSettings(), ['gradients', 'disableCustomGradients']);
  }, []),
      gradients = _useSelect.gradients,
      disableCustomGradients = _useSelect.disableCustomGradients;

  return (0, _element.createElement)(_components.__experimentalGradientPicker, (0, _extends2.default)({
    gradients: props.gradients !== undefined ? props.gradient : gradients,
    disableCustomGradients: props.disableCustomGradients !== undefined ? props.disableCustomGradients : disableCustomGradients
  }, props));
}

function _default(props) {
  var ComponentToUse = props.gradients !== undefined && props.disableCustomGradients !== undefined ? _components.__experimentalGradientPicker : GradientPickerWithGradients;
  return (0, _element.createElement)(ComponentToUse, props);
}
//# sourceMappingURL=index.js.map