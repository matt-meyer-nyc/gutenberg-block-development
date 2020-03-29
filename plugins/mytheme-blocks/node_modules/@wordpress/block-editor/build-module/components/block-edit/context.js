import _extends from "@babel/runtime/helpers/esm/extends";
import { createElement } from "@wordpress/element";

/**
 * External dependencies
 */
import { noop } from 'lodash';
/**
 * WordPress dependencies
 */

import { createContext, useContext } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
var Context = createContext({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: noop,
  clientId: null
});
var Provider = Context.Provider,
    Consumer = Context.Consumer;
export { Provider as BlockEditContextProvider };
/**
 * A hook that returns the block edit context.
 *
 * @return {Object} Block edit context
 */

export function useBlockEditContext() {
  return useContext(Context);
}
/**
 * A Higher Order Component used to inject BlockEdit context to the
 * wrapped component.
 *
 * @param {Function} mapContextToProps Function called on every context change,
 *                                     expected to return object of props to
 *                                     merge with the component's own props.
 *
 * @return {WPComponent} Enhanced component with injected context as props.
 */

export var withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return createHigherOrderComponent(function (OriginalComponent) {
    return function (props) {
      return createElement(Consumer, null, function (context) {
        return createElement(OriginalComponent, _extends({}, props, mapContextToProps(context, props)));
      });
    };
  }, 'withBlockEditContext');
};
/**
 * A Higher Order Component used to render conditionally the wrapped
 * component only when the BlockEdit has selected state set.
 *
 * @param {WPComponent} OriginalComponent Component to wrap.
 *
 * @return {WPComponent} Component which renders only when the BlockEdit is selected.
 */

export var ifBlockEditSelected = createHigherOrderComponent(function (OriginalComponent) {
  return function (props) {
    return createElement(Consumer, null, function (_ref) {
      var isSelected = _ref.isSelected;
      return isSelected && createElement(OriginalComponent, props);
    });
  };
}, 'ifBlockEditSelected');
//# sourceMappingURL=context.js.map