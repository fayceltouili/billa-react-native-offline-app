/*
 * Verify reset token reducer
 */

import produce from 'immer';
import {
  VERIFY_TOKEN,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_ERROR,
} from './Constants';

// The initial state
export const initialState = {
  token: false,
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      
    case VERIFY_TOKEN:
      draft.token = action.token
      draft.loading = true
      draft.error = false
      break

    case VERIFY_TOKEN_SUCCESS:
      draft.loading = false
      draft.error = false
      break;

    case VERIFY_TOKEN_ERROR:
      draft.error = action.error
      draft.token = false
      draft.loading = false
      break
    }
  });

export default reducer;
