/*
 * Invoice status Actions
 * 
 */

import {
  SET_STATUS,
  SET_AMOUNT_PAID,
  SET_TAX_PERCENT,
  CLEAR_STATUS,
} from './Constants';

/**
 * Dispatched when update invoice status
 * @param string
 * @return {object} An action object with a type of SET_STATUS
 */
export const settingStatus = invoiceStatus => {
  return {
    type: SET_STATUS,
    invoiceStatus,
  };
};

/**
 * Dispatched when  update paid amount
 * @param number
 * @return {object} An action object with a type of SET_AMOUNT_PAID
 */
export const settingPaidAmount = amountPaid => {
  return {
    type: SET_AMOUNT_PAID,
    amountPaid,
  };
};


/**
 * Dispatched when adding new item
 *  @param number
 * @return {object}       An action object with a type of SET_TAX_PERCENT 
 */
export const settingTax = taxPercent => {
  return {
    type: SET_TAX_PERCENT,
    taxPercent,
  };
};

/**
 * Dispatched when clearing status
 * @return {object}       An action object with a type of CLEAR_STATUS 
 */
export const clearingStatus = () => {
  return {
    type: CLEAR_STATUS,
  };
};
