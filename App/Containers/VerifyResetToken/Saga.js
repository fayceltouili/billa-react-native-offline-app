import { put, select, call } from 'redux-saga/effects'
import { verifyTokenSuccess, verifyTokenErrors } from './Actions'
import request from '../../Services/request'
import { verifyTokenSelector } from './Selectors'
import { BASE_URL } from '../../Services/baseUrl'
import NavigationService from '../../Services/NavigationService'

/**
 * Get request to the server to verify password reset token
 */

export function* tokenVerifying() {

  const token = yield select(verifyTokenSelector)
  const requestURL = `${BASE_URL}/password/${token}`;

  try {
    const response = yield call(request, requestURL, null, 'GET')
    yield put(verifyTokenSuccess())
    
    if(response.data){
      NavigationService.navigate('Reset', 
        { data: { ...response.data } } )
    }
  }
  catch(err) {
    yield put(verifyTokenErrors(err))
  }
}
