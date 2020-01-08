/*
 * customers reducer
 */

import produce from 'immer';
import {
  FETCH_ALL_CUSTOMERS,
  FETCH_ALL_CUSTOMERS_SUCCESS,
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS, 
  REMOVE_CUSTOMER,
  REMOVE_CUSTOMER_SUCCESS, 
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_SUCCESS, 
  CLEAR_CUSTOMER,
  CUSTOMER_ERROR,
  CUSTOMER_SELECT,
} from './Constants';

// The initial state of the customers
export const initialState = {
  customers: {},
  customer: false,
  customer_id: false,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case CUSTOMER_SELECT:
        draft.customer = action.customer
        break

      case FETCH_ALL_CUSTOMERS:
        draft.loading = true
        draft.error = false
        break

      case FETCH_ALL_CUSTOMERS_SUCCESS:
        draft.customers = action.customers
        draft.loading = false
        draft.error = false
        break

      case ADD_CUSTOMER:  
        draft.customer = action.customer
        draft.loading = true
        draft.error = false 
        break

      case ADD_CUSTOMER_SUCCESS:
        customersCopy = { ...draft.customers, ...action.customer }
        draft.customers = { ...customersCopy }
        draft.loading = false
        draft.error = false
        break

      case REMOVE_CUSTOMER:
        draft.customer_id = action.customer_id
        draft.loading = true
        draft.error = false
        break
  
      case REMOVE_CUSTOMER_SUCCESS:
        customersCopy = { ...draft.customers }
        delete customersCopy[action.customer_id]
        draft.customers = { ...customersCopy }
        draft.customer = false
        draft.customer_id = false
        draft.error = false
        draft.loading = false
        break

      case UPDATE_CUSTOMER:
        draft.customer = action.customer
        draft.loading = true
        draft.error = false
        break

      case UPDATE_CUSTOMER_SUCCESS:
        customersCopy = { ...draft.customers }
        customersCopy[action.customer.customer_id] = action.customer
        draft.customers = { ...customersCopy }
        draft.loading = false
        draft.error = false
        break

      case CUSTOMER_ERROR:
        draft.error = action.error
        draft.loading = false
      break

      case CLEAR_CUSTOMER:
        draft.customer = false
        break
    }
  });

export default reducer;
