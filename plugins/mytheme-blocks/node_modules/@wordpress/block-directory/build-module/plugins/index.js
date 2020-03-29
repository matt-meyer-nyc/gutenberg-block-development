import { createElement } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
/**
 * Internal dependencies
 */

import InserterMenuDownloadableBlocksPanel from './inserter-menu-downloadable-blocks-panel';
registerPlugin('block-directory', {
  render: function render() {
    return createElement(InserterMenuDownloadableBlocksPanel, null);
  }
});
//# sourceMappingURL=index.js.map