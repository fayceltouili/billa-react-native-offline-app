/*
 *  Forgot Password Actions
 */
import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
} from './Constants';

/**
*
@param  {string} password
 * @return {object} An action object with a type of FORGOT_PASSWORD, this action starts the request saga
 */
export const forgotPassword = email => {
  return {
    type: FORGOT_PASSWORD,
    email,
  };
};



/**
 * Dispatched when PASSWORD verifying success, 
 * 
 * @return {object} An action object with a type of FORGOT_PASSWORD_SUCCESS
 */
export const forgotPasswordSuccess = () => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
};


/**
 * Dispatched when verifying the PASSWORD fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of FORGOT_PASSWORD_ERROR passing the error
 */
export const forgotPasswordErrors = error => {
  return {
    type: FORGOT_PASSWORD_ERROR,
    error,
  };
};
