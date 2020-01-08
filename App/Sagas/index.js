import { takeLatest, all } from 'redux-saga/effects';

import { userFetching } from '../../App/Containers/WelcomeScreen/Saga';
import { FETCH_USER } from '../Containers/WelcomeScreen/Constants';

import { userRegistering } from '../../App/Containers/Register/Saga';
import { REGISTER_USER } from '../Containers/Register/Constants';

import { userUpdating } from '../../App/Containers/Update/Saga';
import { UPDATE_USER } from '../Containers/Update/Constants';

import { passwordForgetting } from '../Containers/ForgotPassword/Saga';
import { FORGOT_PASSWORD } from '../Containers/ForgotPassword/Constants';

import { passwordReseting } from '../Containers/ResetPassword/Saga';
import { RESET_PASSWORD } from '../Containers/ResetPassword/Constants';

import { tokenVerifying } from '../Containers/VerifyResetToken/Saga';
import { VERIFY_TOKEN } from '../Containers/VerifyResetToken/Constants';

import {
  FETCH_ALL_CUSTOMERS,
  ADD_CUSTOMER,
  REMOVE_CUSTOMER,
  UPDATE_CUSTOMER,
} from '../Containers/Customers/Constants';

import {
  customersFetching,
  AddCustomer,
  customerDeleting,
  customerUpdating,
} from '../Containers/Customers/saga';

import {
  itemAddingToStock,
  itemsFetchingFromStock,
  itemUpdatingToStock,
  itemRemovingFromStock,
  updatingStockAvailable
} from '../Containers/Stock/saga';

import {
  ADD_ITEM_TO_STOCK,
  UPDATE_STOCK_ITEM,
  REMOVE_STOCK_ITEM,
  FETCH_ALL_STOCK,
  UPDATE_STOCK_BATCH
} from '../Containers/Stock/Constants';

export default function* root() {
  yield all([
    takeLatest(UPDATE_STOCK_BATCH, updatingStockAvailable),
    takeLatest(VERIFY_TOKEN, tokenVerifying),
    takeLatest(RESET_PASSWORD, passwordReseting),
    takeLatest(FORGOT_PASSWORD, passwordForgetting),
    takeLatest(FETCH_ALL_STOCK, itemsFetchingFromStock),
    takeLatest(REMOVE_STOCK_ITEM, itemRemovingFromStock),
    takeLatest(UPDATE_STOCK_ITEM, itemUpdatingToStock),
    takeLatest(ADD_ITEM_TO_STOCK, itemAddingToStock),
    takeLatest(UPDATE_USER, userUpdating),
    takeLatest(UPDATE_CUSTOMER, customerUpdating),
    takeLatest(REMOVE_CUSTOMER, customerDeleting),
    takeLatest(ADD_CUSTOMER, AddCustomer),
    takeLatest(FETCH_ALL_CUSTOMERS, customersFetching),
    takeLatest(FETCH_USER, userFetching),
    takeLatest(REGISTER_USER, userRegistering),
  ])
};
