/*
 * Startup Actions
 * 
 */

import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from './Constants';

/**
 * Load user data, this action starts the request saga
 *
 * @return {object} An action object with a type of FETCH_USER
 */
export function fetchUser() {
  return {
    type: FETCH_USER,
  };
}

/**
 * Dispatched when the user info is loaded by the request saga
 *
 * @param  {object} user
 *
 * @return {object}      An action object with a type of FETCH_USER_SUCCESS passing data
 */
export function userfetched(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
}

/**
 * Dispatched when fetching the user fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FETCH_USER_ERROR passing the error
 */
export function userFetchingError(error) {
  return {
    type: FETCH_USER_ERROR,
    error,
  };
}