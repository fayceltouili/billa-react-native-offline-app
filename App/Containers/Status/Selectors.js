
import { createSelector } from 'reselect';

const invoiceStatusSelector = state =>
  state.status.invoiceStatus;

const itemsSelector = state =>
  state.items.items;

const taxPercentSelector = state =>
  state.status.taxPercent;

const amountPaidSelector = state =>
  state.status.amountPaid;

const dueDateSelector = state =>
  state.date.dueDate;

const issueDateSelector = state =>
  state.date.issueDate;

const allCustomersSelector = state =>
  state.customers.customers;

const userSelector = state =>
  state.user.user;

const customerIdSelector = state =>
  state.customers.customer_id;


  
const customerSelector = createSelector(
  customerIdSelector,
  allCustomersSelector,
  (customer_id, customers) => 
    customers[customer_id]
);

const subTotalSelector = createSelector(
  itemsSelector,
  (items) => 
    Object.values(items).reduce((acc, item) => 
      acc + item.amount, 0)
);

const taxSelector = createSelector(
  taxPercentSelector,
  itemsSelector,
  (taxPercent, items) => 
    Object.values(items).reduce((acc, item) =>
      acc + item.taxed? ((item.amount * taxPercent ) / 100) : 0 , 0)
);

const totalSelector = createSelector(
  subTotalSelector,
  taxSelector,
  (subtotal, tax) => 
    subtotal + tax
);

const amountDueSelector = createSelector(
  totalSelector,
  amountPaidSelector,
  (total, amountPaid) => 
    total - amountPaid
);

const discountsSelector = createSelector(
  itemsSelector,
  (items) => 
    Object.values(items).reduce((acc,item) =>
      acc + +item.discount, 0)
);


export {
  invoiceStatusSelector,
  taxPercentSelector,
  subTotalSelector,
  taxSelector,
  totalSelector,
  itemsSelector,
  amountPaidSelector,
  amountDueSelector,
  discountsSelector,
  dueDateSelector,
  issueDateSelector,
  customerSelector,
  userSelector,
}

