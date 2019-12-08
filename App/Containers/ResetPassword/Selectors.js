
import { createSelector } from 'reselect';

const resetPasswordSelector = state => state.resetPassword.data
const resetPasswordLoadingSelector = state => state.resetPassword.loading
const resetPasswordErrorsSelector = state => state.resetPassword.error


export { 
  resetPasswordSelector,
  resetPasswordLoadingSelector,
  resetPasswordErrorsSelector,
}






