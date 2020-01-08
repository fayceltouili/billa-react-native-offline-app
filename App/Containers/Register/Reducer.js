/*
 * Register user reducer

 */

import produce from 'immer';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './Constants';

// The initial state
export const initialState = {
  user: false,
  loading: false,
  error: false,
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      
    case REGISTER_USER:
      draft.user = action.user
      draft.loading = true
      draft.error = false
      break

    case REGISTER_USER_SUCCESS:
      draft.user = false
      draft.loading = false
      draft.error = false
      break

    case REGISTER_USER_ERROR:
      draft.user = false
      draft.error = action.error
      draft.loading = false
      break
    }
  });

export default reducer;
