
import { put, select } from 'redux-saga/effects'
import {
  itemAddedToStock,
  stockItemUpdated,
  stockItemRemoved,
  stockError,
  allStockFetched,
} from './Actions'
import { stockApi } from '../../DatabaseApi/StockApi'
import { selectStockItem, itemCodeSelector } from './Selectors'
import { stockSelector, cartSelector } from '../Stock/Selectors'

// batch update items in stock database

export function* updatingStockAvailable() {

  const cart = yield select(cartSelector)
  const stock = yield select(stockSelector)

  // helper function to create a query to batch update database
  const UpdateQueryHelper = (cart, stock) => 
    Object.keys(cart).reduce((acc, itemCode) => {
      acc.push([stock[itemCode].available - cart[itemCode], itemCode])
        return acc
      }, [])

  const query = UpdateQueryHelper(cart, stock)

  try {
    let response = yield stockApi.updateAvailable(query)
    if(response.result){
      itemsFetchingFromStock()      
    } 
    else { 
      yield put(stockError(response.message))
    }
  } 
  catch (err){
    yield put(stockError(err))
  }
}

// update item in stock database
export function* itemUpdatingToStock() {
  let item = yield select(selectStockItem)

  try {
    let response = yield stockApi.updateItem(item)
    if(response.result){
      let object = {} 
      object[item.itemCode] = { ...item }
      yield put(stockItemUpdated(object))
    } 
    else { 
      yield put(stockError(response.message))
    }
  } 
  catch (err){
      yield put(stockError(err))
  }
}

 // removing item from database
export function* itemRemovingFromStock() {
  // remove item from stock
  try {
    let itemCode = yield select(itemCodeSelector)
    let response = yield stockApi.deleteItem(itemCode)
    if(response.result){
      yield put(stockItemRemoved(itemCode))
    } 
    else { 
      yield put(stockError(response.message))
    }
  } 
  catch (err){
      yield put(stockError(err))
  }
}

// add iten informations to stock database
export function* itemAddingToStock() {
  let newItem = yield select(selectStockItem)
    try {
      let response = yield stockApi.addItem(newItem)
      if(response.result){
        let object = {} 
        object[newItem.itemCode] = { ...newItem}
        yield put(itemAddedToStock(object))
      } 
      else { 
        yield put(stockError(response.message))
      }
    } 
    catch (err){
      yield put(stockError(err))
    }
}

  // fetch items from database
export function* itemsFetchingFromStock() {
  try {
    let response = yield stockApi.fetchAllItems()
    if(response.result){

      let object = response.result.reduce((obj, item) =>
        (obj[item.itemCode] = item, obj) ,{})
        
      yield put(allStockFetched(object))
    } 
    else { 
      yield put(stockError(response.message))
    }
  } 
  catch (err){
      yield put(stockError(err))
  }
}

// export function* clearingStock() {
//   try {
//      yield stockApi.clearStock()
//   } 
//   catch (err){
//       yield put(stockError(err))
//   }
// }

// export function* creatingTable() {
//   try {
//      yield stockApi.createTable()
//   } 
//   catch (err){
//       yield put(stockError(err))
//   }
// }
