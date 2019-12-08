/**
 * display stock items
 */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DataTable, Searchbar } from 'react-native-paper';
import { View, Text, ScrollView } from 'react-native'
import Styles from '../Styles'
import NavigationService from '../../../Services/NavigationService'
import AppBarNavigator from '../../../Navigators/AppBarNavigator'
import RNPickerSelect from 'react-native-picker-select'
import {
  stockOrderByNameSelectorAsc,
  stockOrderByNameSelectorDsc,
  stockOrderByAvailableAsc,
  stockOrderByAvailableDsc,
  stockOrderByPriceAsc,
  stockOrderByPriceDsc,
  stockArraySelector,
  cartSelector,
 } from '../Selectors'

const stockList = props => {

  const { sobad, sobaa, sobna, sobnd, sobpa, sobpd, stock, cart } = props

  const [orderOption, setOrderOption] = useState()
  const [query, setQuery ] = useState('')

  const placeholder = {
    label: 'Select an option',
    value: null,
    color: '#9EA0A4',
  }

  const searchedQuery = () => 
    Object.values(stock).filter(item =>
      item.name ? item.name.toLowerCase().includes(query) : null
      )

      //helper function verify if there is no search results
  const noSearchResults = () =>
    query.length > 0  && searchedQuery().length == 0

    // return an array of items to display
  const stockView = () =>
    query.length > 0  ? searchedQuery() : (orderOption ? orderOption : stock)

  const addItem = () => NavigationService.navigate('Scan', { operation : 'AddToStock' })
  const doNothing = () => NavigationService.navigate('MainScreen')

  return(
    <View>
      <AppBarNavigator
        title='Manage stock'
        subtitle='Still available after adding to cart'
        iconFirst="barcode-scan"
        iconSecond="home"
        submit={addItem}
        remove={doNothing}
        />

      <Searchbar
        placeholder="Search stock"
        value={query}
        onChangeText={query => setQuery(query.toLowerCase())}
        />
        { noSearchResults() && <Text style={{margin: 15, color: '#315b96'}}>
              We're sorry, no product were found for your search "{query}"
            </Text>}

      <View style={Styles.orderOptions}> 
        <Text style={{color: 'white'}}> ORDER BY: {" "} </Text>
        <RNPickerSelect
            style={{color: 'green'}}
            placeholder={placeholder}
            onValueChange={ value => setOrderOption(value) }
            items={[
              {
                  label: "Name A - Z",
                  value: sobna
              },
              {
                label: "Name Z - A",
                value: sobnd
              },
              {
                  label: "Available ▼",
                  value: sobad
              },
              {
                  label: "Available ▲",
                  value: sobaa
              },
              {
                  label: "Price ▼",
                  value: sobpd
              },
              {
                  label: "Price ▲",
                  value: sobpa
              }
            ]}/>

      </View>
      <DataTable>
        <DataTable.Header stye={{backgroundColor: '#f5f5f5'}}>
          <DataTable.Title>Product name</DataTable.Title>
          <DataTable.Title numeric>Available</DataTable.Title>
          <DataTable.Title numeric>Price</DataTable.Title>
        </DataTable.Header>

        <ScrollView>
          {stockView().map( item =>
              <DataTable.Row
                key={item.itemCode}
                style={{backgroundColor: item.available - (cart[item.itemCode] || 0 ) > 0 ?'#f7f7f7': 'rgba(218, 45, 45,.2)'}}
                onPress={() => NavigationService.navigate('EditStock',{ item: item })}>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell numeric >{item.available - (cart[item.itemCode] || 0 ) > 0 ?
                  item.available - (cart[item.itemCode] || 0 ): 'Not Available' }
                </DataTable.Cell>
                <DataTable.Cell numeric>${Number(item.price).toFixed(2) || '00.00'}</DataTable.Cell>
              </DataTable.Row>
            )}
        </ScrollView>

      </DataTable>
    </View>
  )
}


const mapStateToProps = state => {
  return {
    sobad: stockOrderByAvailableDsc(state),
    sobaa: stockOrderByAvailableAsc(state),
    sobna: stockOrderByNameSelectorAsc(state),
    sobnd: stockOrderByNameSelectorDsc(state),
    sobpa: stockOrderByPriceAsc(state),
    sobpd: stockOrderByPriceDsc(state),
    stock: stockArraySelector(state),
    cart:  cartSelector(state)
  }
}

export default connect(
  mapStateToProps,
  )(stockList)
