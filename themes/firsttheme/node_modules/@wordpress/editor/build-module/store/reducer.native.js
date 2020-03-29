/**
 * External dependencies
 */
import optimist from 'redux-optimist';
/**
 * WordPress dependencies
 */

import { combineReducers } from '@wordpress/data';
/**
 * Internal dependencies
 */

import { postId, postType, preferences, saving, postLock, postSavingLock, reusableBlocks, template, isReady, editorSettings } from './reducer.js';
import { EDITOR_SETTINGS_DEFAULTS } from './defaults.js';
EDITOR_SETTINGS_DEFAULTS.autosaveInterval = 0; // This is a way to override default behavior on mobile, and make it ping the native save at each keystroke

export * from './reducer.js';
/**
 * Reducer returning the post title state.
 *
 * @param {Object}  state  Current state.
 * @param {Object}  action Dispatched action.
 *
 * @return {Object} Updated state.
 */

export var postTitle = combineReducers({
  isSelected: function isSelected() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case 'TOGGLE_POST_TITLE_SELECTION':
        return action.isSelected;
    }

    return state;
  }
});
export default optimist(combineReducers({
  postId: postId,
  postType: postType,
  postTitle: postTitle,
  preferences: preferences,
  saving: saving,
  postLock: postLock,
  postSavingLock: postSavingLock,
  reusableBlocks: reusableBlocks,
  template: template,
  isReady: isReady,
  editorSettings: editorSettings
}));
//# sourceMappingURL=reducer.native.js.map