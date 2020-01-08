import { combineReducers } from 'redux';
import configureStore from './CreateStore';

import rootSaga from '../Sagas';
import userLogin  from '../Containers/WelcomeScreen/Reducer';
import customersReducer from '../Containers/Customers/Reducer';
import itemsReducer from '../Containers/Items/Reducer';
import reducerDate from '../Containers/Date/Reducer';
import statusreducer from '../Containers/Status/Reducer';
import stockReducer from '../Containers/Stock/Reducer';
import registerReducer from '../Containers/Register/Reducer';
import updateReducer from '../Containers/Update/Reducer';
import forgotPasswordReducer from '../Containers/ForgotPassword/Reducer';
import resetPasswordReducer from '../Containers/ResetPassword/Reducer';
import verifyTokenReducer from '../Containers/VerifyResetToken/Reducer';
import MainScreenReducer from '../Containers/MainScreen/Reducer';


export default () => {
  const rootReducer = combineReducers({
    mainScreen: MainScreenReducer,
    verifyToken: verifyTokenReducer,
    resetPassword: resetPasswordReducer,
    forgotPassword: forgotPasswordReducer,
    stock: stockReducer,
    status: statusreducer,
    date: reducerDate,
    items: itemsReducer,
    customers: customersReducer,
    updateUser: updateReducer,
    registerUser: registerReducer,
    user: userLogin,
  })
  return configureStore(rootReducer, rootSaga);
}
