"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * Removes empty paragraph elements.
 *
 * @param {Element} node Node to check.
 */
function _default(node) {
  if (node.nodeName !== 'P') {
    return;
  }

  if (node.hasChildNodes()) {
    return;
  }

  node.parentNode.removeChild(node);
}
//# sourceMappingURL=empty-paragraph-remover.js.map