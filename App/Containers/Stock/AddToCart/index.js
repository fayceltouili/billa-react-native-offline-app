/**
 *  component to add items to cart
 */
import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, Switch, Alert } from 'react-native'
import Styles from '../Styles'
import AppBarNavigator from '../../../Navigators/AppBarNavigator'
import { connect } from 'react-redux'
import NavigationService from '../../../Services/NavigationService'
import { AddingItem } from '../../Items/Actions'
import { stockSelector, cartSelector } from '../../Stock/Selectors'
import { DataTable } from 'react-native-paper'
import { updateCart } from '../Actions'


const ScannedItemToCart = props => {

  const { submit, navigation, stock, updateStock, cart } = props

  const values = navigation.getParam('values')
  const { codeType, itemCode } = values

  const { name, price, description, available } = { ...stock[itemCode] }
  const cartQuantity = cart[itemCode]

  const initialState = {
    availably: cartQuantity ? +available - +cartQuantity: available,
    quantity: '',
    taxed: false,
    discount: ''
  }

  const [itemState, setItemState] = useState(initialState)
  const { availably, quantity, taxed, discount } = itemState

  const clacAmount = () => (+price * +quantity) 


  const handleSubmit = () => { 
    let newItem = {}
    newItem[name] = {
      itemCode,
      name,
      price,
      quantity,
      discount,
      description,
      taxed,
      amount: clacAmount(),
     }

     if(cart[itemCode]){
      Alert.alert(
        `${name} already in cart`,
        'please edit its quantity in the cart',
        [
          {text: 'Ok', onPress: () =>
            NavigationService.navigate('MainScreen')
          },
        ],
        {cancelable: false},
      );       
     }
    else{ 
      submit(newItem) 
      updateStock({ itemCode, quantity: quantity })
    }
  }


  useEffect(() => {
    
    if(!stock[itemCode]){
     
      Alert.alert(
        'Not found in stock',
        'This product not found in your stock',
        [
          {text: 'Add it to stock', onPress: () =>
            NavigationService.navigate('AddToStock', { values: values } )},
          {text: 'Add it to cart as custom item', onPress: () =>
            NavigationService.navigate('AddItem')},
          {
            text: 'Cancel',
            onPress: () =>
              NavigationService.navigate('MainScreen'),
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );       
    }
  }, [])

  const doNothing = () => Alert.alert(
    'Wrong input',
    `Please set quantity`,
    [ {text: 'Ok'}],
    {cancelable: false},
  ) 

  const checkAvailability = () =>  +available >=  +quantity && +quantity >= 1
 
    return(
      <>
        <AppBarNavigator
          title={name || 'Not found'}
          subtitle={description || 'No description'}
          iconFirst={checkAvailability () ?'cart-plus': 'cart-off'}
          submit={checkAvailability()? handleSubmit: doNothing}
          navigateTo={checkAvailability()? 'MainScreen': null} />

        <View style={{ margin: 10 }}>
      
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title numeric>Available</DataTable.Title>
              <DataTable.Title numeric>Price</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row style={{backgroundColor: +available >  +quantity ?'#85e378': '#da2d2d'}}>
              <DataTable.Cell>{name}</DataTable.Cell>
              <DataTable.Cell numeric>{availably}</DataTable.Cell>
              <DataTable.Cell numeric>{price}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>

          <View style={ {marginTop: 50}}>
          
            <Text style={Styles.textInput}>Quantity</Text>
            <TextInput 
              value={quantity}
              placeholder='1'
              returnKeyType='done'
              keyboardType={'number-pad'}
              style={Styles.input} 
              onChangeText={quantity => {
                setItemState({ ...itemState, quantity, availably: available - quantity })
                if(available === '0'){
                  Alert.alert(
                    'Out of Stock',
                    ` '${name}' is out of stock!`,
                    [ {text: 'Ok'}],
                    {cancelable: false},
                  )}
                else if (+quantity > +available){
                  Alert.alert(
                    'Out of Stock',
                    `Please set Quantity less than or equal ${available}`,
                    [ {text: 'Ok'}],
                    {cancelable: false},
                  )       
                }
              }} 
            />

            <Text style={Styles.textInput}>Discount</Text>
            <TextInput 
              value={discount}
              placeholder={'00.00'}
              returnKeyType='done'
              keyboardType={'decimal-pad'}
              style={Styles.input} 
              onChangeText={discount => setItemState({ ...itemState, discount }) }/>

            <View style={{flexDirection:'row', flexWrap:'wrap', margin: 15}}>
              <Text style={{ flex: 1, color: '#383838'}}> Apply Tax </Text>          
              <Switch
              value={ taxed }
              onValueChange={() => setItemState({ ...itemState, taxed: !taxed }) }
              />
            </View>
        </View> 
      </View>
    </>
  )

}
const mapDispatchToProps = dispatch => ({
  submit: newItem => dispatch(AddingItem(newItem)),
  updateStock: item => dispatch(updateCart(item))
})

const mapStateToProps = state => {
  return {
    stock: stockSelector(state),
    cart: cartSelector(state),
  }}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ScannedItemToCart)
