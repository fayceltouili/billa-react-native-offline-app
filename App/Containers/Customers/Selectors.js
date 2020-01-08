/**
 * customers reducer state selectors
 * @param {*} state 
 */
const loadingSelector = state => state.customers.loadingSelector;
const errorSelector = state => state.customers.error;
const customerIdSelector = state => state.customers.customer_id;
const customerSelector = state => state.customers.customer;
const allCustomersSelector = state => state.customers.customers;


export {
  loadingSelector,
  errorSelector,
  customerIdSelector,
  customerSelector,
  allCustomersSelector,
}
