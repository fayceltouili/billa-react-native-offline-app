/*
 * user reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './Constants';

// The initial state of the user
export const initialState = {
  user: {},
  loading: false,
  error: false,
  registred: false,
};

/* eslint-disable default-case, no-param-reassign */
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_USER:
        draft.user = action.user
        draft.loading = true;
        draft.error = false;
        break;

      case REGISTER_USER_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.registred = true;
        break;

      case REGISTER_USER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        draft.registred = false;
        break;
    }
  });

export default reducer;
