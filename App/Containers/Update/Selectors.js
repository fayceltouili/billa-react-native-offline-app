
/**
 * updateUser reducer state selectors
 * @param {*} state 
 */
const userUpdateSelector = state =>
  state.updateUser.user;

const loadingUpdateSelector = state =>
  state.updateUser.loading;

const errorsUpdateSelector = state =>
  state.updateUser.error;


export { 
  userUpdateSelector,
  loadingUpdateSelector,
  errorsUpdateSelector,
}
