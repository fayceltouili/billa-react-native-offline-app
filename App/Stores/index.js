import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas'
import fetchUserReducer  from '../Containers/Startup/Reducer'
import registerUserReducer  from '../Containers/RegisterUser/Reducer'


export default () => {
  const rootReducer = combineReducers({
    fetchUser: fetchUserReducer,
    registerUser: registerUserReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
