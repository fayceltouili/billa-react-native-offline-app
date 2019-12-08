/*
 *  Update user Actions
 */
import {
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,

} from './Constants';

/**
 * Dispatched when user submit the form
 *

 * @return {object} An action object with a type of UPDATE_USER
 */
export const updateUser = user => {
  return {
    type: UPDATE_USER,
    user,
  }
}



/**
 * Dispatched when user updating success
 * @param  {object} user
 * 
 * @return {object} An action object with a type of UPDATE_USER_SUCCESS
 */
export const userUpdated = () => {
  return {
    type: UPDATE_USER_SUCCESS,
  }
}


/**
 * Dispatched when updating the user fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of UPDATE_USER_ERROR passing the error
 */
export const userUpdateError = error => {
  return {
    type: UPDATE_USER_ERROR,
    error,
  };
}
