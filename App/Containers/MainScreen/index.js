/** Billa Main screen */

import React, { useState, useEffect } from 'react';
import Date from '../Date';
import CustomerInvoice from '../Customers';
import AddingItem from '../Items';
import AppBarNavigatorCreate from '../../Navigators/AppBarNavigatorCreate';
import { ScrollView, View, Alert } from 'react-native';
import { Divider, Portal } from 'react-native-paper';
import GenerateInvoice from '../../Containers/GenerateInvoice';
import Status from '../Status';
import { connect } from 'react-redux';
import { itemsSelector, customerSelector } from '../../Selectors';
import { clearingCustomer } from '../Customers/Actions';
import { clearingItems } from '../Items/Actions';
import { clearingStatus } from '../Status/Actions';
import { userSelector } from '../WelcomeScreen/Selectors';
import DropdownAlert from 'react-native-dropdownalert';
import { updateCart } from '../Stock/Actions';
import { stockSelector, cartSelector } from '../Stock/Selectors';
import { allCustomersSelector } from '../Customers/Selectors';
import { messagesSelectors } from './Selectors';
import { setMessages } from './Actions';


const  MainScreen = props => {
  
  const {
    items,
    customer,
    clearInvoice,
    updatingCart,
    cart,
    successMessages,
    messages,
  } = props

  const[visible, setVisible] = useState(false)

  const handleSaveinvoice = () => {
    if(!customer){
      Alert.alert('Customer Required' )
    }
    else if(Object.entries(items).length === 0){
      Alert.alert('Items Required' )
    }
    else {
      setVisible(true)
    }
  }

  const handleClearInvoice = () => {
    Alert.alert(
      'Clear Cart',
      'Do you want to clear all the rows',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => {
          setVisible(false)
          clearInvoice()
          Object.keys(cart).map( itemCode => 
            updatingCart( { itemCode, quantity: - +cart[itemCode] } ))
        }},
      ],
      {cancelable: false},
    );
    
  }
  useEffect(() => {
    // handle password reset success, user info update success, ...
    if(messages){
      this.dropDownAlertRef.alertWithType('success', messages[0], messages[1])
      successMessages(false)
    }
  })

  return(
    <Portal.Host>
      <View style={{ backgroundColor: 'rgba(237, 237, 237, .6)', flex: 1}}>
      <AppBarNavigatorCreate
          title='BILLA'
          subtitle='Create new Invoice'
          iconFirst='export-variant' 
          iconSecond='cart-remove'
          submit={handleSaveinvoice}
          remove={handleClearInvoice}
          />
          <ScrollView>
            <Date />
            <Divider />
            <CustomerInvoice />
            <Divider />
            <AddingItem />
            <Status />

          </ScrollView>
          {visible && <GenerateInvoice />}

          <DropdownAlert 
          successImageSrc={null}
          ref={ref => this.dropDownAlertRef = ref} />

      </View>
    </Portal.Host>

  )
}

const mapDispatchToProps = dispatch => ({

  saveItems: updatedItems => dispatch(savingItems(updatedItems)),
  saveInvoiceDetails: invoiceDetails => 
    dispatch(savingInvoiceDetails(invoiceDetails)),

  clearInvoice: () => {
    dispatch(clearingCustomer())
    dispatch(clearingItems())
    dispatch(clearingStatus())
  },

  updatingCart: item => 
    dispatch(updateCart(item)),

  successMessages: messages => dispatch(setMessages(messages))

});

const mapStateToProps = state => {
  return {
    items: itemsSelector(state),
    customer: customerSelector(state),
    user: userSelector(state),
    cart: cartSelector(state),
    stock: stockSelector(state),
    allCustomers : allCustomersSelector(state),
    messages: messagesSelectors(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(MainScreen);
