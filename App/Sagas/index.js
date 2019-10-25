import { takeLatest, all } from 'redux-saga/effects'
import { REGISTER_USER } from '../Containers/RegisterUser/Constants'
import { FETCH_USER } from '../Containers/Startup/Constants'
import { userFetching } from '../../App/Containers/Startup/StartupSaga'
import { userRegistering } from '../../App/Containers/RegisterUser/Saga'
export default function* root() {
  yield all([
    takeLatest(FETCH_USER, userFetching),
    takeLatest(REGISTER_USER, userRegistering),
  ])
}
