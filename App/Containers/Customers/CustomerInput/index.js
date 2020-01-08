/**
 * Form To register a new customer
 */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Alert
} from 'react-native';
import Styles from './Styles';
import SingleAppBarNavigator from '../../../Navigators/SingleAppBarNavigator';
import { connect } from 'react-redux';
import { AddingCustomer } from '../Actions';
import{ errorSelector, loadingSelector } from '../Selectors';
import RNPickerSelect from 'react-native-picker-select';
import { statesList } from '../../../Services/StatesList';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CustomerInputForm = ({ submit }) => {

  const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    note: '',
  }
  const [customerState, setCustomerState] = useState(initialState);

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
  };
  
  const handleSubmit = () => {
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
      submit({ ...customerState })
  } 
  const doNothing = () => null;

  
  return(
    <>
      <SingleAppBarNavigator
        title='Add new customer'
        iconFirst={ name.length ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline' }
        submit={name.length ? handleSubmit: doNothing}
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
              placeholder='(required)'
              autoCapitalize='words'
              style={Styles.textInput} 
              onChangeText={name => setCustomerState({ ...customerState, name }) }/>

            <Text style={Styles.inputTitle}>Email</Text>
            <TextInput 
              value={email}
              autoCapitalize ='none'
              returnKeyType='done'
              keyboardType='email-address'
              style={Styles.textInput} 
              onChangeText={email => setCustomerState({ ...customerState, email }) }/>

            <Text style={Styles.inputTitle}>Phone</Text>
            <TextInput 
              value={phone}
              returnKeyType='done'
              keyboardType='phone-pad'
              style={Styles.textInput} 
              onChangeText={phone => setCustomerState({ ...customerState, phone }) }/>

            <Text style={Styles.inputTitle}>Address</Text>
            <TextInput 
              value={address}
              style={Styles.textInput} 
              onChangeText={address => setCustomerState({ ...customerState, address }) }/>

            <Text style={Styles.inputTitle}>City</Text>
            <TextInput 
              value={city}
              style={Styles.textInput} 
              onChangeText={city => setCustomerState({ ...customerState, city }) }
            />

            <Text style={Styles.inputTitle}>Zip Code</Text>
            <TextInput 
              returnKeyType='done'
              keyboardType='number-pad'
              value={zip_code}
              style={Styles.textInput} 
              onChangeText={zip_code => setCustomerState({ ...customerState, zip_code }) }
            />

            <Text style={Styles.inputTitle}>State</Text>
            <View  style={Styles.textInput} >
              <RNPickerSelect
                placeholder={placeholder}
                onValueChange={ state => setCustomerState({ ...customerState, state }) }
                items={statesList}/>
            </View>

            <Text style={Styles.inputTitle}>Note</Text>
            <TextInput 
              value={note}
              style={Styles.textInput} 
              onChangeText={note => setCustomerState({ ...customerState, note }) }
            />
      
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  submit: customer => dispatch(AddingCustomer(customer)) 
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
  )(CustomerInputForm);
