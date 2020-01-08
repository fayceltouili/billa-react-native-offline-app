/**
 * View and edit customer
 */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text
} from 'react-native';
import Styles from './Styles';
import AppBarNavigator from '../../../Navigators/AppBarNavigator';
import { connect } from 'react-redux';
import { updatingCustomer, removingCustomer } from '../Actions';
import { loadingSelector, errorSelector } from '../Selectors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import { statesList } from '../../../Services/StatesList';


const CustomerEditForm = props => {

  const { update, remove, navigation } = props;
  const customer = navigation.getParam('customer') ;

  const [customerState, setCustomerState] = useState(customer);

  const {
    name,
    email,
    phone,
    address,
    city,
    state,
    zip_code,
    note,
  } = customerState;

  const placeholder = {
    label: 'Select a state...',
    value: null,
  }

  
  const handleUpdate = () => {
    if(name.length < 1)
    Alert.alert(
      'Wrong input',
      `Please enter customer name`,
      [
        {text: 'ok'},      
      ],
      {cancelable: false},
    )
    else
      update({ ...customerState }) 
  }

  const handleRemove = () => {

    Alert.alert(
      'Delete Customer',
      `${customer.name}?`,
      [
        {text: 'Yes', onPress: () => remove(customer.customer_id) },      
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );       
  }

  return(
    <>
      <AppBarNavigator 
        submit={handleUpdate}
        remove={handleRemove}
        iconFirst={ name.length ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline' }
        iconSecond='delete-circle-outline'
        title={`${name}`}
        subtitle="Edit customer"
      />
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={Styles.container}
        scrollEnabled={true}
        >
        <SafeAreaView style={Styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Styles.inner}>
          <Text style={Styles.inputTitle}>Name</Text>
            <TextInput 
              value={name}
              returnKeyType='done'
              autoCapitalize='words'
              placeholder='Customer Name (required)'
              style={Styles.textInput} 
              onChangeText={name => setCustomerState({ ...customerState, name }) }/>

            <Text style={Styles.inputTitle}>email</Text>
            <TextInput 
              value={email}
              returnKeyType='done'
              autoCapitalize ='none'
              keyboardType='email-address'
              placeholder='Email'
              style={Styles.textInput} 
              onChangeText={email => setCustomerState({ ...customerState, email }) }/>

            <Text style={Styles.inputTitle}>Phone</Text>
            <TextInput 
              value={phone}
              placeholder='Phone'
              keyboardType='phone-pad'
              style={Styles.textInput} 
              onChangeText={phone => setCustomerState({ ...customerState, phone }) }/>

            <Text style={Styles.inputTitle}>Address</Text>
            <TextInput 
              value={address}
              placeholder='Address'
              style={Styles.textInput} 
              onChangeText={address => setCustomerState({ ...customerState, address }) }/>

            <Text style={Styles.inputTitle}>City</Text>
            <TextInput 
              value={city}
              placeholder='City'
              returnKeyType='done'
              style={Styles.textInput} 
              onChangeText={city => setCustomerState({ ...customerState, city }) }/>

            <Text style={Styles.inputTitle}>Zip code</Text>
            <TextInput 
              value={zip_code}
              returnKeyType='done'
              keyboardType='number-pad'
              placeholder='Zip Code'
              style={Styles.textInput} 
              onChangeText={zip_code => setCustomerState({ ...customerState, zip_code }) }/>

            <Text style={Styles.inputTitle}>State</Text>
            <View style={Styles.textInput}>
              <RNPickerSelect
              textInputProps={Styles.PickerSelect}
              style={Styles.textInput}
              placeholder={placeholder}
              value={state}
              onValueChange={ state => setCustomerState({ ...customerState, state }) }
              items={statesList}
            />
            </View>

            <Text style={Styles.inputTitle}>Note</Text>
            <TextInput 
              value={note}
              returnKeyType='done'
              placeholder='Note'
              style={Styles.textInput} 
              onChangeText={note => setCustomerState({ ...customerState, note }) }/>
          
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  ) 

}
const mapDispatchToProps = dispatch => ({
  update: customer =>  dispatch(updatingCustomer(customer)),
  remove: customer_id => dispatch(removingCustomer(customer_id)),
});

const mapStateToProps = state => {
  return {
    loading: loadingSelector(state),
    error: errorSelector(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CustomerEditForm);
  