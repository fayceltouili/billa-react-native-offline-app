/*
 * Register user reducer

 */

import produce from 'immer'
import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from './Constants'

// The initial state
export const initialState = {
  email: false,
  loading: false,
  error: false,
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      
    case FORGOT_PASSWORD:
      draft.email = action.email
      draft.loading = true
      draft.error = false
      break

    case FORGOT_PASSWORD_SUCCESS:
      draft.email = false
      draft.loading = false
      draft.error = false
      break;

    case FORGOT_PASSWORD_ERROR:
      draft.email = false
      draft.error = action.error
      draft.loading = false
      break
    }
  });

export default reducer
