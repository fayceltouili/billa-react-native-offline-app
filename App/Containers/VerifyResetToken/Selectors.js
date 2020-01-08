
/**
 *  verifyToken reducer state selectors
 * 
 * @param {*} state 
 */
const verifyTokenSelector = state =>
  state.verifyToken.token;

const verifyTokenLoadingSelector = state =>
  state.verifyToken.loading;

const verifyTokenErrorsSelector = state =>
  state.verifyToken.error;


export { 
  verifyTokenSelector,
  verifyTokenLoadingSelector,
  verifyTokenErrorsSelector,
};
