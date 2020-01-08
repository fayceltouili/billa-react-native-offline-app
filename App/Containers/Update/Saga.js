import { put, select, call } from 'redux-saga/effects';
import { userUpdated, userUpdateError } from './Actions';
import request from '../../Services/request';
import { userUpdateSelector } from './Selectors';
import { BASE_URL } from '../../Services/baseUrl';
import { userfetched } from '../WelcomeScreen/Actions';


export function* userUpdating() {

  const user = yield select(userUpdateSelector);
  const id = user.id;
  delete user.id;
  
  const requestURL = `${BASE_URL}/users/${id}`;
  
  try {
    const response = yield call(request, requestURL, user, 'PATCH');
    yield put(userfetched(response.data));
    yield put(userUpdated());
  }
  catch(err) {
    yield put(userUpdateError(err));
  }
}
