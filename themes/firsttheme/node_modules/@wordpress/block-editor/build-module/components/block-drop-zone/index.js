import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * WordPress dependencies
 */
import { __unstableUseDropZone as useDropZone } from '@wordpress/components';
import { pasteHandler, getBlockTransforms, findTransform } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState, useCallback } from '@wordpress/element';

var parseDropEvent = function parseDropEvent(event) {
  var result = {
    srcRootClientId: null,
    srcClientId: null,
    srcIndex: null,
    type: null
  };

  if (!event.dataTransfer) {
    return result;
  }

  try {
    result = Object.assign(result, JSON.parse(event.dataTransfer.getData('text')));
  } catch (err) {
    return result;
  }

  return result;
};

export default function useBlockDropZone(_ref) {
  var element = _ref.element,
      rootClientId = _ref.rootClientId;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      clientId = _useState2[0],
      setClientId = _useState2[1];

  function selector(select) {
    var _select = select('core/block-editor'),
        getBlockIndex = _select.getBlockIndex,
        getClientIdsOfDescendants = _select.getClientIdsOfDescendants,
        getSettings = _select.getSettings,
        getTemplateLock = _select.getTemplateLock;

    return {
      getBlockIndex: getBlockIndex,
      blockIndex: getBlockIndex(clientId, rootClientId),
      getClientIdsOfDescendants: getClientIdsOfDescendants,
      hasUploadPermissions: !!getSettings().mediaUpload,
      isLockedAll: getTemplateLock(rootClientId) === 'all'
    };
  }

  var _useSelect = useSelect(selector, [rootClientId, clientId]),
      getBlockIndex = _useSelect.getBlockIndex,
      blockIndex = _useSelect.blockIndex,
      getClientIdsOfDescendants = _useSelect.getClientIdsOfDescendants,
      hasUploadPermissions = _useSelect.hasUploadPermissions,
      isLockedAll = _useSelect.isLockedAll;

  var _useDispatch = useDispatch('core/block-editor'),
      insertBlocks = _useDispatch.insertBlocks,
      updateBlockAttributes = _useDispatch.updateBlockAttributes,
      moveBlockToPosition = _useDispatch.moveBlockToPosition;

  var onFilesDrop = useCallback(function (files) {
    if (!hasUploadPermissions) {
      return;
    }

    var transformation = findTransform(getBlockTransforms('from'), function (transform) {
      return transform.type === 'files' && transform.isMatch(files);
    });

    if (transformation) {
      var blocks = transformation.transform(files, updateBlockAttributes);
      insertBlocks(blocks, blockIndex, rootClientId);
    }
  }, [hasUploadPermissions, updateBlockAttributes, insertBlocks, blockIndex, rootClientId]);
  var onHTMLDrop = useCallback(function (HTML) {
    var blocks = pasteHandler({
      HTML: HTML,
      mode: 'BLOCKS'
    });

    if (blocks.length) {
      insertBlocks(blocks, blockIndex, rootClientId);
    }
  }, [insertBlocks, blockIndex, rootClientId]);
  var onDrop = useCallback(function (event) {
    var _parseDropEvent = parseDropEvent(event),
        srcRootClientId = _parseDropEvent.srcRootClientId,
        srcClientId = _parseDropEvent.srcClientId,
        srcIndex = _parseDropEvent.srcIndex,
        type = _parseDropEvent.type;

    var isBlockDropType = function isBlockDropType(dropType) {
      return dropType === 'block';
    };

    var isSameLevel = function isSameLevel(srcRoot, dstRoot) {
      // Note that rootClientId of top-level blocks will be undefined OR a void string,
      // so we also need to account for that case separately.
      return srcRoot === dstRoot || !srcRoot === true && !dstRoot === true;
    };

    var isSameBlock = function isSameBlock(src, dst) {
      return src === dst;
    };

    var isSrcBlockAnAncestorOfDstBlock = function isSrcBlockAnAncestorOfDstBlock(src, dst) {
      return getClientIdsOfDescendants([src]).some(function (id) {
        return id === dst;
      });
    };

    if (!isBlockDropType(type) || isSameBlock(srcClientId, clientId) || isSrcBlockAnAncestorOfDstBlock(srcClientId, clientId || rootClientId)) {
      return;
    }

    var dstIndex = clientId ? getBlockIndex(clientId, rootClientId) : undefined;
    var positionIndex = blockIndex; // If the block is kept at the same level and moved downwards,
    // subtract to account for blocks shifting upward to occupy its old position.

    var insertIndex = dstIndex && srcIndex < dstIndex && isSameLevel(srcRootClientId, rootClientId) ? positionIndex - 1 : positionIndex;
    moveBlockToPosition(srcClientId, srcRootClientId, rootClientId, insertIndex);
  }, [getClientIdsOfDescendants, getBlockIndex, clientId, blockIndex, moveBlockToPosition, rootClientId]);

  var _useDropZone = useDropZone({
    element: element,
    onFilesDrop: onFilesDrop,
    onHTMLDrop: onHTMLDrop,
    onDrop: onDrop,
    isDisabled: isLockedAll,
    withPosition: true
  }),
      position = _useDropZone.position;

  useEffect(function () {
    if (position) {
      var y = position.y;
      var rect = element.current.getBoundingClientRect();
      var offset = y - rect.top;
      var target = Array.from(element.current.children).find(function (blockEl) {
        return blockEl.offsetTop + blockEl.offsetHeight / 2 > offset;
      });

      if (!target) {
        return;
      }

      var targetClientId = target.id.slice('block-'.length);

      if (!targetClientId) {
        return;
      }

      setClientId(targetClientId);
    }
  }, [position]);

  if (position) {
    return clientId;
  }
}
//# sourceMappingURL=index.js.map