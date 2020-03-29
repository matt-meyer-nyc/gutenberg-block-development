import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import classnames from 'classnames';
import { isEmpty, pick } from 'lodash';
/**
 * WordPress dependencies
 */

import { BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
/**
 * Internal dependencies
 */

import GradientPicker from './';
export default function (_ref) {
  var className = _ref.className,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? __('Gradient Presets') : _ref$label,
      props = _objectWithoutProperties(_ref, ["className", "value", "onChange", "label"]);

  var _useSelect = useSelect(function (select) {
    return pick(select('core/block-editor').getSettings(), ['gradients', 'disableCustomGradients']);
  }, []),
      _useSelect$gradients = _useSelect.gradients,
      gradients = _useSelect$gradients === void 0 ? [] : _useSelect$gradients,
      disableCustomGradients = _useSelect.disableCustomGradients;

  if (isEmpty(gradients) && disableCustomGradients) {
    return null;
  }

  return createElement(BaseControl, {
    className: classnames('block-editor-gradient-picker-control', className)
  }, createElement(BaseControl.VisualLabel, null, label), createElement(GradientPicker, _extends({
    value: value,
    onChange: onChange,
    className: "block-editor-gradient-picker-control__gradient-picker-presets",
    gradients: gradients,
    disableCustomGradients: disableCustomGradients
  }, props)));
}
//# sourceMappingURL=control.js.map