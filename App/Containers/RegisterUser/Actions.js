/*
 * Register user Actions
 */
import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from './Constants';

/**
 * Dispatched when user submit the form
 *
 * @param  {object} user The new text of the input field
 *
 * @return {object} An action object with a type of REGISTER_USER
 */
export function userRegister(user) {
  return {
    type: REGISTER_USER,
    user,
  };
}


/**
 * Dispatched when user registring success
 * @param  {object} user
 * 
 * @return {object} An action object with a type of REGISTER_USER_SUCCESS
 */
export function userRegistred(user) {
  return {
    type: REGISTER_USER_SUCCESS,
    user,
  };
}

/**
 * Dispatched when registring the user fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_STRING_ERROR passing the error
 */
export function userRegisterError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
}
