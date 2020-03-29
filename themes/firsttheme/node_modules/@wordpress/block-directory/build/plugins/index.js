"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _element = require("@wordpress/element");

var _plugins = require("@wordpress/plugins");

var _inserterMenuDownloadableBlocksPanel = _interopRequireDefault(require("./inserter-menu-downloadable-blocks-panel"));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
(0, _plugins.registerPlugin)('block-directory', {
  render: function render() {
    return (0, _element.createElement)(_inserterMenuDownloadableBlocksPanel.default, null);
  }
});
//# sourceMappingURL=index.js.map