/*
 *  PASSWORD reset Actions
 */
import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,

} from './Constants';

/**
 * @return {object} An action object with a type of RESET_PASSWORD
 */
export const resetPassword = data => {
  return {
    type: RESET_PASSWORD,
    data,
  }
}



/**
 * Dispatched when PASSWORD reset success
 * @param  {object} password
 * 
 * @return {object} An action object with a type of RESET_PASSWORD_SUCCESS
 */
export const resetPasswordSuccess = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  }
}


/**
 * Dispatched when password reseting fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of RESET_PASSWORD_ERROR passing the error
 */
export const resetPasswordErrors = error => {
  return {
    type: RESET_PASSWORD_ERROR,
    error,
  };
}
