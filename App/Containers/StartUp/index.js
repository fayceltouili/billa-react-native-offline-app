import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NavigationService from '../../Services/NavigationService'
import AppNavigator from '../../Navigators/AppNavigator'
import { fetchAllCustomers } from '../Customers/Actions'
import { fetchingAllStock } from '../Stock/Actions'


const RootScreen = props => {

  const { loadItems, loadCustomers } = props
  
  useEffect(() => {
    NavigationService.navigateAndReset('Welcome')
    loadCustomers()
    loadItems()

}, [])

  return (
    <AppNavigator
      // Initialize the NavigationService
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  )
}
const mapDispatchToProps = dispatch => ({
  loadCustomers: () => dispatch(fetchAllCustomers()),
  loadItems: () => dispatch(fetchingAllStock()),
})

export default connect(
  null,
  mapDispatchToProps
  )(RootScreen)
