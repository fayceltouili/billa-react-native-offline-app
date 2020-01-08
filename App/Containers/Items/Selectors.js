
/**
 *  items reducer state selectors
 * @param {*} state 
 */
const selectItems = state => state.items.items;
const makeSelectTax = state => state.items.tax;



export {
  selectItems,
  makeSelectTax,
};
