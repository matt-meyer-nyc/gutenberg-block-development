/**
 * WordPress dependencies
 */
import { createContext } from '@wordpress/element';
var SlotFillContext = createContext({
  slots: {},
  fills: {},
  registerSlot: function registerSlot() {},
  unregisterSlot: function unregisterSlot() {},
  registerFill: function registerFill() {},
  unregisterFill: function unregisterFill() {}
});
export default SlotFillContext;
//# sourceMappingURL=slot-fill-context.js.map