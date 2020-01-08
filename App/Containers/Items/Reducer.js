/*
 * items reducer
 *
 */
import produce from 'immer';
import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  ADD_TAX,
  CLEAR_ITEMS
} from './Constants';

// The initial state of the ITEMS
export const initialState = {
  items: {},
  tax: 0,
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case ADD_ITEM:
        let itemsCopy = { ...draft.items, ...action.newItem }
        draft.items = { ...itemsCopy }
        break

      case UPDATE_ITEM:
        itemsCopy = {...draft.items }
        delete itemsCopy[action.names[0]]
        let newItem = {}
        newItem[action.names[1]] = action.updatedItem
        itemsCopy = {...newItem, ...itemsCopy}
        draft.items = { ...itemsCopy }
        break


      case REMOVE_ITEM:
        itemsCopy = { ...draft.items }
        delete itemsCopy[action.itemName]
        draft.items = { ...itemsCopy }
        break

      case ADD_TAX:
        draft.tax = action.tax
        break

      case CLEAR_ITEMS:
        itemsCopy = { ...draft.items }
        itemsCopy = {}
        draft.items = { ...itemsCopy } 
        return draft
  }
  });

export default reducer;
