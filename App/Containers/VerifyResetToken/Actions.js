/*
 *  Verify PASSWORD Actions
 */
import {
  VERIFY_TOKEN,
  VERIFY_TOKEN_SUCCESS,
  VERIFY_TOKEN_ERROR,
} from './Constants';

/**
] *

 * @return {object} An action object with a type of VERIFY_TOKEN
 */
export const verifyToken = token => {
  return {
    type: VERIFY_TOKEN,
    token,
  };
};



/**
 * Dispatched when PASSWORD registring success
 * @param  {object} password
 * 
 * @return {object} An action object with a type of VERIFY_TOKEN_SUCCESS
 */
export const verifyTokenSuccess = () => {
  return {
    type: VERIFY_TOKEN_SUCCESS,
  };
};


/**
 * Dispatched when fetching the PASSWORD fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of VERIFY_TOKEN_ERROR passing the error
 */
export const verifyTokenErrors = error => {
  return {
    type: VERIFY_TOKEN_ERROR,
    error,
  };
};
