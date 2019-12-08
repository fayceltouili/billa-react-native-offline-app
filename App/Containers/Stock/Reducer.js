/*
 * stock reducer
 */
import produce from 'immer';
import {
  ADD_ITEM_TO_STOCK,
  ADD_ITEM_TO_STOCK_SUCCESS,
  STOCK_ERROR,
  FETCH_ALL_STOCK,
  FETCH_ALL_STOCK_SUCCESS,
  UPDATE_CART,
  UPDATE_STOCK_ITEM,
  UPDATE_STOCK_ITEM_SUCCESS,
  REMOVE_STOCK_ITEM,
  REMOVE_STOCK_ITEM_SUCCESS,
  CLEAR_CART,
  UPDATE_STOCK_BATCH,
} from './Constants';

// The initial state of the STOCK
export const initialState = {
  stock: false,
  cart: {},
  item: false,
  itemCode: false,
  error: false,
  loading: false,
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {

    switch (action.type) {

      case UPDATE_CART:
        const { itemCode, quantity } = action.item 
        let cartCopy = { ...draft.cart }
        !cartCopy[itemCode] ?
          cartCopy[itemCode] = +quantity
          : cartCopy[itemCode] += +quantity
        draft.cart = { ...cartCopy }
        break

      case CLEAR_CART:
        cartCopy = {}
        draft.cart = { ...cartCopy }
        break

      case UPDATE_STOCK_BATCH:
        loading = true
        error = false
        break

      case ADD_ITEM_TO_STOCK:
        draft.item = action.newItem
        draft.error = false
        draft.loading = true
        break
          
      case ADD_ITEM_TO_STOCK_SUCCESS:
        let stockCopy = { ...draft.stock, ...action.item }
        draft.stock = { ...stockCopy }
        draft.item = false
        draft.loading = false
        draft.error = false
        break

      case UPDATE_STOCK_ITEM:
        draft.item = action.item
        draft.error = false
        draft.loading = true
        break
        
      case UPDATE_STOCK_ITEM_SUCCESS:
        stockCopy = { ...draft.stock, ...action.item }
        draft.stock = { ...stockCopy }
        draft.item = false
        draft.itemCode = false
        draft.loading = false
        draft.error = false
        break

      case REMOVE_STOCK_ITEM:
        draft.itemCode = action.itemCode
        draft.error = false
        draft.loading = true
        break
          
      case REMOVE_STOCK_ITEM_SUCCESS:
        stockCopy = { ...draft.stock }
        delete stockCopy[action.itemCode]
        draft.stock = { ...stockCopy }
        draft.item = false
        draft.itemCode = false
        draft.error = false
        draft.loading = false
        break

      case FETCH_ALL_STOCK:
        draft.stock = false
        draft.error = false
        draft.loading = true
        break
  
      case FETCH_ALL_STOCK_SUCCESS:
        draft.stock = action.stock
        draft.error = false
        draft.loading = false
        break

      case STOCK_ERROR:
        draft.error = action.error
        draft.loading = false
        break
  }
  });

export default reducer;
