"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _keyboardShortcuts = require("@wordpress/keyboard-shortcuts");

var _data = require("@wordpress/data");

/**
 * WordPress dependencies
 */
function SaveShortcut() {
  var _useDispatch = (0, _data.useDispatch)('core/editor'),
      savePost = _useDispatch.savePost;

  var isEditedPostDirty = (0, _data.useSelect)(function (select) {
    return select('core/editor').isEditedPostDirty;
  }, []);
  (0, _keyboardShortcuts.useShortcut)('core/editor/save', function (event) {
    event.preventDefault(); // TODO: This should be handled in the `savePost` effect in
    // considering `isSaveable`. See note on `isEditedPostSaveable`
    // selector about dirtiness and meta-boxes.
    //
    // See: `isEditedPostSaveable`

    if (!isEditedPostDirty()) {
      return;
    }

    savePost();
  }, {
    bindGlobal: true
  });
  return null;
}

var _default = SaveShortcut;
exports.default = _default;
//# sourceMappingURL=save-shortcut.js.map