import { put, select, call } from 'redux-saga/effects'
import { userfetched, userError } from './Actions'
import request from '../../Services/request'
import { userSelector } from './Selectors'
import { BASE_URL } from '../../Services/baseUrl'
import NavigationService from '../../Services/NavigationService'

/**
 * POST request to the server to login and get the user information
 */
export function* userFetching() {

  const user = yield select(userSelector)
  const requestURL = `${BASE_URL}/login/`;
   
  try {
    const response = yield call(request, requestURL, user, 'POST')
    yield put(userfetched(response.data))
    if(response.data) NavigationService.navigateAndReset('MainScreen')
  }
  catch(err) {
    yield put(userError(err))
  }}
