"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _utils = require("./utils");

/**
 * Internal dependencies
 */

/**
 * Removes trailing br elements from text-level content.
 *
 * @param {Element} node Node to check.
 */
function _default(node) {
  if (node.nodeName !== 'BR') {
    return;
  }

  if ((0, _utils.getSibling)(node, 'next')) {
    return;
  }

  node.parentNode.removeChild(node);
}
//# sourceMappingURL=br-remover.js.map