/*
 * Date Actions
 * 
 */

import {
  SET_ISSUE_DATE,
  SET_DUE_DATE,
  REMOVE_DUE_DATE,
} from './Constants';


/**
 *  Dispatched to set Isdued date
 * @param  {object} date
 * @return {object} An action object with a type of SET_ISSUE_DATE
 */
export const setInvoiceDate = date => {
  return {
    type: SET_ISSUE_DATE,
    date,
  };
};

/**
 * Dispatched to set Due date date
 *
 * @param  {object} date
 *
 * @return {object}      An action object with a type of SET_DUE_DATE 
 */
export const setDueDate = date => {
  return {
    type: SET_DUE_DATE,
    date,
  };
};


/**
 * Dispatched to remove Due date
 *
 * @return {object} An action object with a type of REMOVE_DUE_DATE
 */
export const removeDueDate = () => {
  return {
    type: REMOVE_DUE_DATE,
  };
};
