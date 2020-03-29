"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBlockEditContext = useBlockEditContext;
exports.ifBlockEditSelected = exports.withBlockEditContext = exports.BlockEditContextProvider = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _lodash = require("lodash");

var _compose = require("@wordpress/compose");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
var Context = (0, _element.createContext)({
  name: '',
  isSelected: false,
  focusedElement: null,
  setFocusedElement: _lodash.noop,
  clientId: null
});
var Provider = Context.Provider,
    Consumer = Context.Consumer;
exports.BlockEditContextProvider = Provider;

/**
 * A hook that returns the block edit context.
 *
 * @return {Object} Block edit context
 */
function useBlockEditContext() {
  return (0, _element.useContext)(Context);
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


var withBlockEditContext = function withBlockEditContext(mapContextToProps) {
  return (0, _compose.createHigherOrderComponent)(function (OriginalComponent) {
    return function (props) {
      return (0, _element.createElement)(Consumer, null, function (context) {
        return (0, _element.createElement)(OriginalComponent, (0, _extends2.default)({}, props, mapContextToProps(context, props)));
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


exports.withBlockEditContext = withBlockEditContext;
var ifBlockEditSelected = (0, _compose.createHigherOrderComponent)(function (OriginalComponent) {
  return function (props) {
    return (0, _element.createElement)(Consumer, null, function (_ref) {
      var isSelected = _ref.isSelected;
      return isSelected && (0, _element.createElement)(OriginalComponent, props);
    });
  };
}, 'ifBlockEditSelected');
exports.ifBlockEditSelected = ifBlockEditSelected;
//# sourceMappingURL=context.js.map