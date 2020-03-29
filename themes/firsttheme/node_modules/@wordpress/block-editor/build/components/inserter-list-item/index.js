"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("@wordpress/components");

var _blockIcon = _interopRequireDefault(require("../block-icon"));

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
function InserterListItem(_ref) {
  var icon = _ref.icon,
      _onClick = _ref.onClick,
      isDisabled = _ref.isDisabled,
      title = _ref.title,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["icon", "onClick", "isDisabled", "title", "className"]);
  var itemIconStyle = icon ? {
    backgroundColor: icon.background,
    color: icon.foreground
  } : {};
  return (0, _element.createElement)("li", {
    className: "block-editor-block-types-list__list-item"
  }, (0, _element.createElement)(_components.Button, (0, _extends2.default)({
    className: (0, _classnames.default)('block-editor-block-types-list__item', className),
    onClick: function onClick(event) {
      event.preventDefault();

      _onClick();
    },
    disabled: isDisabled
  }, props), (0, _element.createElement)("span", {
    className: "block-editor-block-types-list__item-icon",
    style: itemIconStyle
  }, (0, _element.createElement)(_blockIcon.default, {
    icon: icon,
    showColors: true
  })), (0, _element.createElement)("span", {
    className: "block-editor-block-types-list__item-title"
  }, title)));
}

var _default = InserterListItem;
exports.default = _default;
//# sourceMappingURL=index.js.map