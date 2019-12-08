import { put, select, call } from 'redux-saga/effects'
import { resetPasswordSuccess, resetPasswordErrors } from './Actions'
import request from '../../Services/request'
import { resetPasswordSelector } from './Selectors'
import { BASE_URL } from '../../Services/baseUrl'
import NavigationService from '../../Services/NavigationService'
import { userfetched } from '../../Containers/WelcomeScreen/Actions'
import { verifyTokenSelector } from '../VerifyResetToken/Selectors'

/**
 * PATCH request to the server to reset the password and get user information
 */
export function* passwordReseting() {

  const data = yield select(resetPasswordSelector)
  const { id, password } = { ...data }
  const resetPasswordToken = yield select(verifyTokenSelector)
  const requestURL = `${BASE_URL}/password/${id}`;

  try {
    const response = yield call(request, requestURL, { resetPasswordToken, password }, 'PATCH')
    yield put(resetPasswordSuccess())

    if(response.data)
      yield put(userfetched(response.data))
    
  }
  catch(err) {
    yield put(resetPasswordErrors(err))
  }
}
