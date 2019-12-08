
/**
 * forgotPassword state selectors
 * @param {*} state 
 * 
 */
const forgotEmailSelector = state => state.forgotPassword.email
const forgotLoadingSelector = state => state.forgotPassword.loading
const forgotErrorsSelector = state => state.forgotPassword.error

export { 
  forgotEmailSelector,
  forgotLoadingSelector,
  forgotErrorsSelector,
}
