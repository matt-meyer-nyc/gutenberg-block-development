"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _blocks = require("@wordpress/blocks");

var _inserterListItem = _interopRequireDefault(require("../inserter-list-item"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BlockTypesList(_ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      onSelect = _ref.onSelect,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? function () {} : _ref$onHover,
      children = _ref.children;
  var normalizedItems = items.reduce(function (result, item) {
    var _item$variations = item.variations,
        variations = _item$variations === void 0 ? [] : _item$variations;
    var hasDefaultVariation = variations.some(function (_ref2) {
      var isDefault = _ref2.isDefault;
      return isDefault;
    }); // If there is no default inserter variation provided,
    // then default block type is displayed.

    if (!hasDefaultVariation) {
      result.push(item);
    }

    if (variations.length) {
      result = result.concat(variations.map(function (variation) {
        return _objectSpread({}, item, {
          id: "".concat(item.id, "-").concat(variation.name),
          icon: variation.icon || item.icon,
          title: variation.title || item.title,
          description: variation.description || item.description,
          // If `example` is explicitly undefined for the variation, the preview will not be shown.
          example: variation.hasOwnProperty('example') ? variation.example : item.example,
          initialAttributes: _objectSpread({}, item.initialAttributes, {}, variation.attributes),
          innerBlocks: variation.innerBlocks
        });
      }));
    }

    return result;
  }, []);
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    (0, _element.createElement)("ul", {
      role: "list",
      className: "block-editor-block-types-list"
    }, normalizedItems.map(function (item) {
      return (0, _element.createElement)(_inserterListItem.default, {
        key: item.id,
        className: (0, _blocks.getBlockMenuDefaultClassName)(item.id),
        icon: item.icon,
        onClick: function onClick() {
          onSelect(item);
          onHover(null);
        },
        onFocus: function onFocus() {
          return onHover(item);
        },
        onMouseEnter: function onMouseEnter() {
          return onHover(item);
        },
        onMouseLeave: function onMouseLeave() {
          return onHover(null);
        },
        onBlur: function onBlur() {
          return onHover(null);
        },
        isDisabled: item.isDisabled,
        title: item.title
      });
    }), children)
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
}

var _default = BlockTypesList;
exports.default = _default;
//# sourceMappingURL=index.js.map