/*
 * Date reducer
 *
 */
import produce from 'immer';

import {
  SET_ISSUE_DATE,
  SET_DUE_DATE,
  REMOVE_DUE_DATE,
} from './Constants';

// The initial state of the date
export const initialState = {
  issueDate: new Date(),
  dueDate: new Date(),
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ISSUE_DATE:
        draft.issueDate = action.date
        break

      case SET_DUE_DATE:
        draft.dueDate = action.date
        break

      case REMOVE_DUE_DATE:        
        draft.dueDate = undefined
        break
    }
  });

export default reducer;
