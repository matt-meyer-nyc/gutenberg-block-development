import { createElement, Fragment } from "@wordpress/element";

/**
 * WordPress dependencies
 */
import { useShortcut } from '@wordpress/keyboard-shortcuts';
import { useDispatch, useSelect } from '@wordpress/data';
import deprecated from '@wordpress/deprecated';
import { BlockEditorKeyboardShortcuts } from '@wordpress/block-editor';
/**
 * Internal dependencies
 */

import SaveShortcut from './save-shortcut';

function VisualEditorGlobalKeyboardShortcuts() {
  var _useDispatch = useDispatch('core/editor'),
      redo = _useDispatch.redo,
      undo = _useDispatch.undo,
      savePost = _useDispatch.savePost;

  var isEditedPostDirty = useSelect(function (select) {
    return select('core/editor').isEditedPostDirty;
  }, []);
  useShortcut('core/editor/undo', function (event) {
    undo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  useShortcut('core/editor/redo', function (event) {
    redo();
    event.preventDefault();
  }, {
    bindGlobal: true
  });
  useShortcut('core/editor/save', function (event) {
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
  return createElement(Fragment, null, createElement(BlockEditorKeyboardShortcuts, null), createElement(SaveShortcut, null));
}

export default VisualEditorGlobalKeyboardShortcuts;
export function EditorGlobalKeyboardShortcuts() {
  deprecated('EditorGlobalKeyboardShortcuts', {
    alternative: 'VisualEditorGlobalKeyboardShortcuts',
    plugin: 'Gutenberg'
  });
  return createElement(VisualEditorGlobalKeyboardShortcuts, null);
}
//# sourceMappingURL=visual-editor-shortcuts.js.map