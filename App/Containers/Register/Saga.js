import { put, select, call } from 'redux-saga/effects';
import { userRegistred, userRegisterError } from './Actions';
import request from '../../Services/request';
import { userRegisterSelector } from './Selectors';
import { BASE_URL } from '../../Services/baseUrl';
import { userfetched } from '../WelcomeScreen/Actions';
import NavigationService from '../../Services/NavigationService';
import { userService } from '../../DatabaseApi/UserService';


/**
 * POST request to the server to register the user
 */
export function* userRegistering() {

  const user = yield select(userRegisterSelector);
  const requestURL = `${BASE_URL}/users/`;

  try {
    const response = yield call(request, requestURL, user, 'POST');
    yield put(userRegistred());
    yield put(userfetched(response.data));
    
    if(response.data){
      yield userService.userRegister(response.data);
      NavigationService.navigateAndReset('MainScreen', 
        { message: ['Congratulation', 'Your account has been created successfully!'] } );
    }
  }
  catch(err) {
    yield put(userRegisterError(err));
  }
}
