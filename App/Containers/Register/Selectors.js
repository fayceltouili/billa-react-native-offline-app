/**
 *  register user reducer state selectors
 * @param {*} state 
 */

const userRegisterSelector = state => state.registerUser.user;
const loadingRegisterSelector = state => state.registerUser.loading;
const errorsRegisterSelector = state => state.registerUser.error;


export { 
  userRegisterSelector,
  loadingRegisterSelector,
  errorsRegisterSelector,
}
