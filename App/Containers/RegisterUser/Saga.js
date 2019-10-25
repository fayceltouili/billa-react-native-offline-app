import { put, call, select } from 'redux-saga/effects'
import { userRegisterError, userRegistred } from './Actions'
import { userfetched } from '../Startup/Actions'
import { userService } from '../../Services/UserService'
import NavigationService from '../../Services/NavigationService'
import { makeSelectRegisterUser } from './Selectors'



export function* userRegistering() {

  const user = yield select(makeSelectRegisterUser());
  // try to post user informations to the database
  try {
    let response = yield userService.userRegister(user);
    if(response.result){
      yield put(userfetched(user))
      yield put(userRegistred())
      NavigationService.navigateAndReset('HomeScreen')
    }
    else {
      yield put(userRegisterError(response.message))
    }
  }
  catch(err) {
    yield put(userRegisterError(err))
  }
}



