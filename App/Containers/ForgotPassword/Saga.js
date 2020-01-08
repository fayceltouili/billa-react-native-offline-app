import { put, select, call } from 'redux-saga/effects';
import { forgotPasswordSuccess, forgotPasswordErrors } from './Actions';
import request from '../../Services/request';
import { forgotEmailSelector } from './Selectors';
import { BASE_URL } from '../../Services/baseUrl';
import NavigationService from '../../Services/NavigationService';


/**
 *  Post request to the server to verify the email address
 */
export function* passwordForgetting() {

  const email = yield select(forgotEmailSelector);
  const requestURL = `${BASE_URL}/password/`;

  try {
    const response = yield call(request, requestURL, { email }, 'POST');

    yield put(forgotPasswordSuccess());
    NavigationService.navigate('VerifyToken',
    { message: ['Reset instructions sent', response.data.message] } );

  }
  catch(err) {
    yield put(forgotPasswordErrors(err));
  }
}
