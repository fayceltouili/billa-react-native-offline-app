/*
 * STOCK Actions
 */

import {
  ADD_ITEM_TO_STOCK,
  ADD_ITEM_TO_STOCK_SUCCESS,
  STOCK_ERROR,
  FETCH_ALL_STOCK,
  FETCH_ALL_STOCK_SUCCESS,
  UPDATE_CART,
  CLEAR_CART,
  UPDATE_STOCK_ITEM,
  UPDATE_STOCK_ITEM_SUCCESS,
  REMOVE_STOCK_ITEM,
  REMOVE_STOCK_ITEM_SUCCESS,
  UPDATE_STOCK_BATCH,
  UPDATE_STOCK_BATCH_SUCCESS,
} from './Constants'

/**
 * Dispatched when removng item
 * @param {string} itemCode
 * @return {object}       An action object with a type of REMOVE_STOCK_ITEM 
 */
export const removingStockItem = itemCode => {
  return {
    type: REMOVE_STOCK_ITEM,
    itemCode,
  };
};


/**
 * Dispatched when removng item success
 * @param {string} itemCode
 * @return {object}       An action object with a type of REMOVE_STOCK_ITEM_SUCCESS 
 */
export const stockItemRemoved = itemCode => {
  return {
    type: REMOVE_STOCK_ITEM_SUCCESS,
    itemCode,
  }
};

updateStockBatch

/**
 * Dispatched when updating item
 * @param {object} item
 * @return {object}       An action object with a type of UPDATE_STOCK_ITEM 
 */
export const updatingStockItem = item => {
  return {
    type: UPDATE_STOCK_ITEM,
    item,
  };
};

/**
 * Dispatched to update stock in database after invoice exported
 * @return {object}       An action object with a type of UPDATE_STOCK_BATCH 
 */
export const updateStockBatch = () => {
  return {
    type: UPDATE_STOCK_BATCH,
  };
};

/**
 * Dispatched when stock in database been updated successfully
 * @return {object}       An action object with a type of UPDATE_STOCK_BATCH_SUCCESS 
 *  @param {object} stock
 */
export const stockBatchUpdated = stock => {
  return {
    type: UPDATE_STOCK_BATCH_SUCCESS,
    stock,
  };
};
/**
 * Dispatched when updating single item in database
 * @param {object} item
 * @return {object}       An action object with a type of UPDATE_STOCK_ITEM_SUCCESS 
 */
export const stockItemUpdated = item => {
  return {
    type: UPDATE_STOCK_ITEM_SUCCESS,
    item,
  }
};


/**
 * Dispatched to update cart 
 * @param {object} item
 * @return {object}       An action object with a type of UPDATE_CART 
 */
export const updateCart = item => {
  return {
    type: UPDATE_CART,
    item,
  };
};

/**
 * Dispatched to clear the cart after invoice exported
 * @return {object}       An action object with a type of CLEAR_CART 
 */
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  }
};
/**
 * Dispatched when fetching the stock from database
 * @return {object}       An action object with a type of FETCH_ALL_STOCK 
 */
export const fetchingAllStock = () => {
  return {
    type: FETCH_ALL_STOCK,
  }
};

/**
 * Dispatched when all stock fetched from database
 * @param {object} stock
 * @return {object}       An action object with a type of FETCH_ALL_STOCK_SUCCESS 
 */
export const allStockFetched = stock => {
  return {
    type: FETCH_ALL_STOCK_SUCCESS,
    stock,
  }
};


/**
 * Dispatched when adding new item to stock
 * @param {object} newitem
 * @return {object}       An action object with a type of ADD_ITEM_TO_STOCK 
 */
export const AddingItemToStock = newItem => {
  return {
    type: ADD_ITEM_TO_STOCK,
    newItem,
  }
};

/**
 * Dispatched when adding new item to stock success
 * @param {object} item
 * @return {object}       An action object with a type of ADD_ITEM_TO_STOCK_SUCCESS 
 */
export const itemAddedToStock = item => {
  return {
    type: ADD_ITEM_TO_STOCK_SUCCESS,
    item,
  }
};

/**
 * Dispatched when any stock operations fail
 * @param {object} error
 * @return {object}       An action object with a type of STOCK_ERROR 
 */
export const stockError = error => {
  return {
    type: STOCK_ERROR,
    error,
  }
};
