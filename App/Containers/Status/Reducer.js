/*
 * Invoice status reducer
 *
 */

import produce from 'immer';

import {
  SET_STATUS,
  SET_AMOUNT_PAID,
  SET_TAX_PERCENT,
  CLEAR_STATUS,
} from './Constants';

// The initial state of the status
export const initialState = {
  invoiceStatus: '',
  amountPaid: 0,
  taxPercent: 0,
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_STATUS:
        draftCopy = { ...draft }
        draftCopy.invoiceStatus = action.invoiceStatus
        draft = { ...draftCopy }
        return draft

      case SET_AMOUNT_PAID:
        draftCopy = { ...draft }
        draftCopy.amountPaid = +action.amountPaid
        draft = { ...draftCopy }
        return draft

      case SET_TAX_PERCENT:
        draftCopy = { ...draft }
        draftCopy.taxPercent = +action.taxPercent
        draft = {...draftCopy} 
        return draft

      case CLEAR_STATUS:
        draftCopy ={
          ...draft,
          invoiceStatus: '', 
          amountPaid: 0,
          taxPercent: 0
        }
        draft = {...draftCopy} 
        return draft
    }
  });

export default reducer;
