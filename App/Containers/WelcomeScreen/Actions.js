/*
 *  User login Actions
 */
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  LOGOUT_USER
} from './Constants';


/**
 * Load user data, this action starts the request saga
 *@param {object} user
 * @return {object} An action object with a type of FETCH_USER
 */
export const fetchUser = user => {
  return {
    type: FETCH_USER,
    user,
  };
};

/**
 * Dispatched when the user info is loaded by the request saga
 *
 * @param  {object} user
 *
 * @return {object}      An action object with a type of FETCH_USER_SUCCESS passing user data
 */
export const userfetched = user => {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
};

/**
 * Dispatched when fetching the user fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_USER_ERROR passing the error
 */
export const userError = error => {
  return {
    type: FETCH_USER_ERROR,
    error,
  };
};


/**
 * Dispatched when fetching the user fails
 *
 *
 * @return {object}       An action object with a type of LOGOUT_USER 
 */
export const userLogout = () => {
  return {
    type: LOGOUT_USER,
  };
};
