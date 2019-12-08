import produce from 'immer'
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SET_MESSAGES
} from './Constants'

// The initial state
export const initialState = {
  user: false,
  loading: false,
  error: false,
  messages: false
}

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_MESSAGES:
        draft.messages = action.messages
    }
  });

export default reducer