"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

/**
 * WordPress dependencies
 */
var SlotFillContext = (0, _element.createContext)({
  slots: {},
  fills: {},
  registerSlot: function registerSlot() {},
  unregisterSlot: function unregisterSlot() {},
  registerFill: function registerFill() {},
  unregisterFill: function unregisterFill() {}
});
var _default = SlotFillContext;
exports.default = _default;
//# sourceMappingURL=slot-fill-context.js.map