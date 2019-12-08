
import { put, select } from 'redux-saga/effects'
import {
  customersfetched,
  customerAdded,
  customerRemoved,
  customerUpdated,
  customerError,
} from './Actions'
import { customerApi } from '../../DatabaseApi/CustomerApi'
import { customerIdSelector, customerSelector } from './Selectors'
import NavigationService from '../../Services/NavigationService'


// Fetch all customers from database

export function* customersFetching() {

  try {
    let response = yield customerApi.fetchAllCustomers()
    if(response.result) {

      let object = response.result.reduce((obj, customer) => 
        (obj[customer.customer_id] = customer, obj) ,{})

       yield put(customersfetched(object))
    } 
    else { 

      yield put(customerError(response.message))
    }
  } catch (err){
      yield put(customerError(err))
    }
}

// add customer new customer to database

export function* AddCustomer() {

  const customer = yield select(customerSelector)
  
    try {
      let response = yield customerApi.addCustomer(customer)
      if(response.result){

        let object = {}
        object[response.result] = { ...customer, customer_id: response.result }
        yield put(customerAdded(object))
      } 
      else { 
        yield put(customerError(response.message))
      }
    } 
    catch (err){
        yield put(customerError(err))
    }
    NavigationService.navigate('CustomersList')
}


// Delete customer from database

export function* customerDeleting() {

  const customer_id = yield select(customerIdSelector)

  try {
    let response = yield customerApi.deleteCustomer(customer_id)
    if(response.result){
       yield put(customerRemoved(customer_id))
    } 
    else { 
      yield put(customerError(response.message))
    }
  } catch (err){
      yield put(customerError(err))
    }
    NavigationService.navigate('CustomersList')
}


// update customer in database

export function* customerUpdating() {

  const customer = yield select(customerSelector)
  try {
    let response = yield customerApi.updateCustomer(customer)
    if(response.result){
       yield put(customerUpdated(customer))
       NavigationService.navigate('CustomersList')
    } 
    else { 
      yield put(customerError(response.message))
    }
  } catch (err){
      yield put(customerError(err))
    }
}
