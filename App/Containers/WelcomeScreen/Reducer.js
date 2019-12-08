/*
 * Register user reducer

 */

import produce from 'immer'
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  LOGOUT_USER,
} from './Constants'

// The initial state of the user
export const initialState = {
  user: false,
  loading: false,
  error: false,
}

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      
    case FETCH_USER:
        draft.user = action.user
        draft.loading = true
        draft.error = false
        break;

    case FETCH_USER_SUCCESS:
      draft.user = action.user
      draft.loading = false
      draft.error = false
      break

    case FETCH_USER_ERROR:
      draft.user = false
      draft.error = action.error
      draft.loading = false
      break

    case LOGOUT_USER:
      draft.user = false
      draft.error = false
      draft.loading = false
      break

    }
  });

export default reducer
