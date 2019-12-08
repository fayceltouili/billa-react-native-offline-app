/*
 * Reset password reducer

 */

import produce from 'immer'
import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './Constants'

// The initial state
export const initialState = {
  data: false,
  loading: false,
  error: false,
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      
    case RESET_PASSWORD:
      draft.data = action.data
      draft.loading = true
      draft.error = false
      break

    case RESET_PASSWORD_SUCCESS:
      draft.data = false
      draft.loading = false
      draft.error = false
      break;

    case RESET_PASSWORD_ERROR:
      draft.data = false
      draft.error = action.error
      draft.loading = false
      break
    }
  });

export default reducer
