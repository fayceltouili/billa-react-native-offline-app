

import {
  SET_LOADING,
  SET_MESSAGES,
} from './Constants'

/**
 * Dispatched when adding new item
 * @return {object}       An action object with a type of ADD_ITEM 
 */
export const setLoading = value => {
  return {
    type: SET_LOADING,
    value,
  };
}

export const setMessages = messages => {
  return {
    type: SET_MESSAGES,
    messages,
  };
}