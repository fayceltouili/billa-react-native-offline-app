

const userSelector = state =>
  state.user.user;

const loadingSelector = state =>
  state.user.loading;

const errorsSelector = state =>
  state.user.error;


export { 
  userSelector,
  loadingSelector,
  errorsSelector,
};






