/*
 * startup reducer
 *
 */

import produce from 'immer';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from './Constants';

// The initial state of the user
export const initialState = {
  user: {},
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_USER:
        draft.loading = true;
        draft.error = false;
        break;

      case FETCH_USER_SUCCESS:
        draft.user = action.user;
        draft.loading = false;
        draft.error = false;
        break;

      case FETCH_USER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default reducer;
