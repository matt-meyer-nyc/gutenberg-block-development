import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { pick } from 'lodash';
/**
 * WordPress dependencies
 */

import { __experimentalGradientPicker } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

function GradientPickerWithGradients(props) {
  var _useSelect = useSelect(function (select) {
    return pick(select('core/block-editor').getSettings(), ['gradients', 'disableCustomGradients']);
  }, []),
      gradients = _useSelect.gradients,
      disableCustomGradients = _useSelect.disableCustomGradients;

  return createElement(__experimentalGradientPicker, _extends({
    gradients: props.gradients !== undefined ? props.gradient : gradients,
    disableCustomGradients: props.disableCustomGradients !== undefined ? props.disableCustomGradients : disableCustomGradients
  }, props));
}

export default function (props) {
  var ComponentToUse = props.gradients !== undefined && props.disableCustomGradients !== undefined ? __experimentalGradientPicker : GradientPickerWithGradients;
  return createElement(ComponentToUse, props);
}
//# sourceMappingURL=index.js.map