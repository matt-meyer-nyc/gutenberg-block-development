/**
 * WordPress dependencies
 */
import { createSlotFill } from '@wordpress/components';
/**
 * Internal dependencies
 */

import { ifBlockEditSelected } from '../block-edit/context';
var name = 'InspectorAdvancedControls';

var _createSlotFill = createSlotFill(name),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var InspectorAdvancedControls = ifBlockEditSelected(Fill);
InspectorAdvancedControls.slotName = name;
InspectorAdvancedControls.Slot = Slot;
export default InspectorAdvancedControls;
//# sourceMappingURL=index.js.map