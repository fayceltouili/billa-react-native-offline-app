
import { createSelector } from 'reselect';
import { initialState } from './Reducer';

const selectRegisterUser = state => state.registerUser|| initialState;

const makeSelectRegisterUser = () =>
  createSelector(
    selectRegisterUser,
    selectRegisterUser => selectRegisterUser.user,
  );


const makeSelectRegisterUserError = () =>
  createSelector(
    selectRegisterUser,
    selectRegisterUser => selectRegisterUser.error,
  );

const makeSelectRegisterUserLoading = () =>
createSelector(
  selectRegisterUser,
  selectRegisterUser => selectRegisterUser.loading,
);

const makeSelectRegisterUserRegistred = () =>
createSelector(
  selectRegisterUser,
  selectRegisterUser => selectRegisterUser.registred,
);

export { 
  selectRegisterUser, 
  makeSelectRegisterUser, 
  makeSelectRegisterUserError, 
  makeSelectRegisterUserLoading, 
  makeSelectRegisterUserRegistred
};
