/*
 * Customers Actions
 * 
 */

import {
  CUSTOMER_SELECT,
  FETCH_ALL_CUSTOMERS,
  FETCH_ALL_CUSTOMERS_SUCCESS,
  REMOVE_CUSTOMER,
  REMOVE_CUSTOMER_SUCCESS,
  ADD_CUSTOMER,
  ADD_CUSTOMER_SUCCESS, 
  UPDATE_CUSTOMER,
  UPDATE_CUSTOMER_SUCCESS, 
  CUSTOMER_ERROR,
  CLEAR_CUSTOMER,
} from './Constants';

customerSelect

/**
 * Select customer in reducer state
 * *@param  {object}  customer
 * @return {object} An action object with a type of CUSTOMER_SELECT
 */
export const customerSelect = customer => {
  return {
    type: CUSTOMER_SELECT,
    customer,
  };
}

/**
 * Load customers data, this action starts the request saga
 *
 * @return {object} An action object with a type of FETCH_ALL_CUSTOMERS
 */
export const fetchAllCustomers = () => {
  return {
    type: FETCH_ALL_CUSTOMERS,
  };
}


/**
 * Dispatched when the customers infos are loaded by the request saga
 *
 * @param  {object} customers
 *
 * @return {object}      An action object with a type of FETCH_ALL_CUSTOMERS_SUCCESS passing data
 */
export const customersfetched = customers => {
  return {
    type: FETCH_ALL_CUSTOMERS_SUCCESS,
    customers,
  };
}



/**
 * Dispatched when registring new customer
 *
 * @param  {object}  customer

 * @return {object}  An action object with a type of ADD_CUSTOMER 
 */
export const AddingCustomer = customer => {
  return {
    type: ADD_CUSTOMER,
    customer,
  };
}

/**
 * Dispatched when registring the customer success
 *
 * @param  {object}  customer
 *
 * @return {object}       An action object with a type of ADD_CUSTOMER_SUCCESS
 */
export const customerAdded = customer => {
  return {
    type: ADD_CUSTOMER_SUCCESS,
    customer,
  };
}


/**
 * Dispatched when removing a customer
 *
 * * @param  {object}  customer_id

 * @return {object}       An action object with a type of REMOVE_CUSTOMER 
 */
export const removingCustomer = customer_id => {
  return {
    type: REMOVE_CUSTOMER,
    customer_id,
  };
}

/**
 * Dispatched when customer successfully removed
 *
 * @param  {object}  customer_id
 *
 * @return {object}       An action object with a type of REMOVE_CUSTOMER_SUCCESS 
 */
export const customerRemoved = customer_id => {
  return {
    type: REMOVE_CUSTOMER_SUCCESS,
    customer_id,
  };
}

/**
 * Dispatched when updating a customer
 *
 * *@param  {object}  customer

 * @return {object}       An action object with a type of UPDATE_CUSTOMER
 */
export const updatingCustomer = customer => {
  return {
    type: UPDATE_CUSTOMER,
    customer,
  };
}

/**
 * Dispatched when updating the customer success
 *
 * @param  {object}  customer
 *
 * @return {object}       An action object with a type of UPDATE_CUSTOMER_SUCCESS 
 */
export const customerUpdated = customer => {
  return {
    type: UPDATE_CUSTOMER_SUCCESS,
    customer,
  };
}

/**
 * Dispatched when saga returns  fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_CUSTOMER_ERROR passing the error
 */
export const customerError = error => {
  return {
    type: CUSTOMER_ERROR,
    error,
  };
}

/**
 * Dispatched when clearing  the customer object from reducer state 
 * *
 * @return {object}       An action object with a type of CLEAR_CUSTOMER
 */
export const clearingCustomer = () => {
  return {
    type: CLEAR_CUSTOMER,
  };
}
