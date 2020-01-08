/*
 *  register user Actions
 */
import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './Constants';

/**
 * Dispatched when user submit the form
 *@param {object} user
 * @return {object} An action object with a type of REGISTER_USER
 */
export const userRegister = user => {
  return {
    type: REGISTER_USER,
    user,
  };
};



/**
 * Dispatched when user registring success
 * @param  {object} user
 * 
 * @return {object} An action object with a type of REGISTER_USER_SUCCESS
 */
export const userRegistred = () => {
  return {
    type: REGISTER_USER_SUCCESS,
  };
};


/**
 * Dispatched when registring the user fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_USER_ERROR passing the error
 */
export const userRegisterError = error => {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
};
