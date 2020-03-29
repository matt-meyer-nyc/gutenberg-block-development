"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  postTitle: true
};
exports.default = exports.postTitle = void 0;

var _reduxOptimist = _interopRequireDefault(require("redux-optimist"));

var _data = require("@wordpress/data");

var _reducer = require("./reducer.js");

Object.keys(_reducer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reducer[key];
    }
  });
});

var _defaults = require("./defaults.js");

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
_defaults.EDITOR_SETTINGS_DEFAULTS.autosaveInterval = 0; // This is a way to override default behavior on mobile, and make it ping the native save at each keystroke

/**
 * Reducer returning the post title state.
 *
 * @param {Object}  state  Current state.
 * @param {Object}  action Dispatched action.
 *
 * @return {Object} Updated state.
 */
var postTitle = (0, _data.combineReducers)({
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
exports.postTitle = postTitle;

var _default = (0, _reduxOptimist.default)((0, _data.combineReducers)({
  postId: _reducer.postId,
  postType: _reducer.postType,
  postTitle: postTitle,
  preferences: _reducer.preferences,
  saving: _reducer.saving,
  postLock: _reducer.postLock,
  postSavingLock: _reducer.postSavingLock,
  reusableBlocks: _reducer.reusableBlocks,
  template: _reducer.template,
  isReady: _reducer.isReady,
  editorSettings: _reducer.editorSettings
}));

exports.default = _default;
//# sourceMappingURL=reducer.native.js.map