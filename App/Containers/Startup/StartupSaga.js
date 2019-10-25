
import { put } from 'redux-saga/effects'
import { userfetched, userFetchingError, } from './Actions'
import { userService } from '../../Services/UserService'
import NavigationService from '../../Services/NavigationService'


export function* userFetching() {

  // Fetch user informations from database
  try {
    let response = yield userService.fetchUser()
    if(response.result){
      yield put(userfetched(response.result))
    }
    else {
      yield put(userFetchingError(response.message))
    }
  }
  catch(err) {
    yield put(userFetchingError(err))
  }
  // When those operations are finished we redirect to the HomeScreen
  NavigationService.navigateAndReset('HomeScreen')
}

