/**
 * WordPress dependencies
 */
import { useShortcut } from '@wordpress/keyboard-shortcuts';
import { useDispatch, useSelect } from '@wordpress/data';

function SaveShortcut() {
  var _useDispatch = useDispatch('core/editor'),
      savePost = _useDispatch.savePost;

  var isEditedPostDirty = useSelect(function (select) {
    return select('core/editor').isEditedPostDirty;
  }, []);
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
  return null;
}

export default SaveShortcut;
//# sourceMappingURL=save-shortcut.js.map