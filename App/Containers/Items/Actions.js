/*
 * cart items Actions
 * 
 */
import {
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
  ADD_TAX,
  CLEAR_ITEMS,
} from './Constants';


/**
 * Dispatched when adding new item
 * @return {object}       An action object with a type of ADD_ITEM 
 */
export const AddingItem = newItem => {
  return {
    type: ADD_ITEM,
    newItem,
  };
};

/**
 * Dispatched when updating an item
 * @param {object, array} 
 * @return {object}       An action object with a type of UPDATE_ITEM  
 */
export const updatingItem = (updatedItem, names) => {
  return {
    type: UPDATE_ITEM,
    updatedItem,
    names,
  };
};

/**
 * Dispatched when removing item
 * @return {object}       An action object with a type of REMOVE_ITEM 
 */
export const removingItem = itemName => {
  return {
    type: REMOVE_ITEM,
    itemName,
  };
};

/**
 * Dispatched when adding or modefying tax
 * @param number
 * @return {object}       An action object with a type of ADD_TAX 
 */
export const AddingTax = tax => {
  return {
    type: ADD_TAX,
    tax,
  };
};

/**
 * Dispatched when clearing items reducer
 * @return {object}       An action object with a type of CLEAR_ITEMS 
 */
export const clearingItems = () => {
  return {
    type: CLEAR_ITEMS,
  };
};
