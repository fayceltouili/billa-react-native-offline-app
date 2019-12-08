
/**
 * Stock reducer state selectors
 */
import { createSelector } from 'reselect';
const selectStockItem = state => state.stock.item
const stockSelector = state => state.stock.stock
const itemCodeSelector = state => state.stock.itemCode
const stockErrorsSelector = state => state.stock.error
const stockLoadingSelector = state => state.stock.loading
const cartSelector = state => state.stock.cart

const itemToUpdateSelector = createSelector(
  stockSelector,
  selectStockItem,
  (stock, item) =>  stock[item.itemCode]
)

const stockArraySelector = createSelector(
  stockSelector,
  stock => Object.values(stock)
)

const stockOrderByNameSelectorAsc = createSelector(
  stockSelector,
  stock => Object.values(stock).sort((a, b) => (a.name > b.name) ? 1 : -1)
)

const stockOrderByNameSelectorDsc = createSelector(
  stockSelector,
  stock => Object.values(stock).sort((a, b) => (a.name < b.name) ? 1 : -1)
) 
const stockOrderByAvailableAsc = createSelector(
  stockSelector,
  stock => Object.values(stock).sort((a, b) => (a.available > b.available) ? 1 : -1)
)
const stockOrderByAvailableDsc = createSelector(
  stockSelector,
  stock => Object.values(stock).sort((a, b) => (a.available < b.available) ? 1 : -1)
)

const stockOrderByPriceAsc = createSelector(
  stockSelector,
  stock => Object.values(stock).sort((a, b) => (a.price > b.price) ? 1 : -1)
)
const stockOrderByPriceDsc = createSelector(
  stockSelector,
  stock => Object.values(stock).sort((a, b) => (a.price < b.price) ? 1 : -1)
)
export {
  selectStockItem,
  cartSelector,
  stockSelector,
  itemCodeSelector,
  stockErrorsSelector,
  stockLoadingSelector,
  itemToUpdateSelector,
  stockOrderByNameSelectorAsc,
  stockOrderByNameSelectorDsc,
  stockOrderByAvailableAsc,
  stockOrderByAvailableDsc,
  stockOrderByPriceAsc,
  stockOrderByPriceDsc,
  stockArraySelector,
}
