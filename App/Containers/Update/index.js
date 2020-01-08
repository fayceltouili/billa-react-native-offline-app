/**
 * RegisterUser form to register 
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Styles from './Styles';
import { updateUser } from './Actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';
import { statesList } from '../../Services/StatesList';
import { errorsUpdateSelector, loadingUpdateSelector } from './Selectors';
import { userSelector } from '../WelcomeScreen/Selectors';
import SingleAppBarNavigator from '../../Navigators/SingleAppBarNavigator';
import NavigationService from '../../Services/NavigationService';
import { setMessages } from '../MainScreen/Actions';


const  UpdateUser = props => {

  const { submitUser, loading, errors, user, successMessages } = props;

  const [userState, setUserState] = useState({ ...user, websiteErr: false, emailErr: false });
  const {
    first_name,
    last_name,
    buisness_name,
    phone,
    address,
    city,
    state,
    zip_code,
    logo,
    website,
    websiteErr,
    token,
    email,
    id,
    emailErr,
    } = { ...userState };

  const placeholder = {
    label: 'Select a state...',
    value: null,
  }
  const options = {
    title: 'Select Logo',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  }

  const validateEmail = () => 
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const ValidateWebsite = () =>
    website && website.length > 0 ?
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(website)
      : true

  const handleSubmit = () => {
    if(!validateEmail())
      setUserState({ ...userState, emailErr: 'Invalid email address' });
    else{
      let user = {
        first_name,
        last_name,
        buisness_name,
        phone,
        address,
        city,
        state,
        zip_code,
        logo,
        website,
        _token: token,
        email,
        id,
      }
      submitUser(user);
      if(!errors){
        successMessages(['Success', 'You have successfully update your account!']);
        NavigationService.navigate('MainScreen');
      }
    }
  }
  if(loading) return (
    <View style={Styles.container}>
        <ActivityIndicator size="large" color="#353232" />
    </View>)

  return(
    <>
      <SingleAppBarNavigator
        title='Edit your informations'
        iconFirst='checkbox-marked-circle-outline'
        submit={handleSubmit} />

      
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true} >
        <SafeAreaView >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Styles.inner}>
              <View style={Styles.input}>
                <Icon 
                  name="email-outline"
                  color={validateEmail() ? 'green': "#9d0b0b"}
                  size={25} />
                <TextInput
                  autoCapitalize='none'
                  keyboardType='email-address'
                  placeholder='email@exemple.com'
                  value={email}
                  style={Styles.textInput} 
                  onChangeText={email => setUserState({ ...userState, email, emailErr: false }) }
                />
                </View>
                { emailErr && <Text style={Styles.errorMsg}> {emailErr} </Text>}

                <View style={Styles.input}>
                  <Icon 
                    name="account-circle-outline"
                    color={ first_name ? first_name.length > 1 ? 'green' : "#353232" : '#353232'}
                    size={25} />
                  <TextInput
                    placeholder='First Name'
                    value={first_name}
                    style={Styles.textInput} 
                    onChangeText={first_name => setUserState( { ...userState, first_name } )}/>  
                </View>
                <View style={Styles.input}>
                  <Icon 
                    name="account-circle-outline"
                    color={ last_name ? last_name.length > 1 ? 'green' : "#353232" : '#353232'}
                    size={25} />
                  <TextInput
                    placeholder='Last Name'
                    value={last_name}
                    style={Styles.textInput} 
                    onChangeText={last_name => setUserState( { ...userState, last_name } )}/>  
                </View>

                <View style={Styles.input}>
                  <Icon 
                    name="domain"
                    color={ buisness_name ? buisness_name.length > 1 ? 'green' : "#353232" : "#353232"}
                    size={25} />
                  <TextInput
                    placeholder='Buisness name'
                    value={buisness_name}
                    style={Styles.textInput} 
                    onChangeText={buisness_name => setUserState( { ...userState, buisness_name } )}/>  
                </View>

                <View style={Styles.input}>
                  <Icon 
                    name="phone"
                    color={ phone ? phone.length >= 10 ? 'green' : "#353232" : "#9d0b0b"}
                    size={25} />
                  <TextInput
                    placeholder='Phone number'
                    keyboardType='phone-pad'
                    returnKeyType='done'
                    value={phone}
                    style={Styles.textInput} 
                    onChangeText={phone => setUserState( { ...userState, phone } )}/>  
                </View>
                  
                <View style={Styles.input}>
                  <Icon 
                    name="home-outline"
                    color={ address? address.length > 1 ? 'green' : "#353232" : "#353232"}
                    size={25} />
                  <TextInput
                    placeholder='Address'
                    returnKeyType='done'
                    keyboardType='numeric'
                    value={address}
                    style={Styles.textInput} 
                    onChangeText={address => setUserState( { ...userState, address } )}/>  
                </View>
                <View style={Styles.input}>
                  <TextInput
                    placeholder='City'
                    value={city}
                    style={Styles.textInput} 
                    onChangeText={city => setUserState( { ...userState, city } )}/>  
                </View>
                <View style={Styles.input}>
                  <RNPickerSelect
                  textInputProps={Styles.PickerSelect}
                  style={Styles.textInput}
                  placeholder={placeholder}
                  value={state}
                  onValueChange={ state => setUserState( { ...userState, state } ) }
                  items={statesList}
                />
                </View>
                <View style={Styles.input}>
                  <TextInput
                    returnKeyType='done'
                    keyboardType='number-pad'
                    value={zip_code}
                    placeholder='Zip code'
                    style={Styles.textInput} 
                    onChangeText={zip_code => setUserState( { ...userState, zip_code } ) }
                  />
                </View>
                <View style={Styles.input}>
                  <Icon 
                    name="web"
                    color={ ValidateWebsite() ? 'green' : "#353232"}
                    size={25} />
                  <TextInput
                    placeholder='https://www.example.com/'
                    returnKeyType='done'
                    keyboardType='url'
                    autoCapitalize='none'
                    value={website}
                    style={Styles.textInput} 
                    onChangeText={website => {
                      setUserState( { ...userState, website, setWebsiteErr: false } )
                      }}/>  
                  </View>
                  { websiteErr && <Text style={Styles.errorMsg}> {websiteErr} </Text>}

                  { errors && <Text style={Styles.errorMsg}> {errors.toString()} </Text> }
              </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
   </>
  )
}


const mapDispatchToProps = dispatch => ({
  submitUser: user => 
    dispatch(updateUser(user)),
  successMessages: messages =>
    dispatch(setMessages(messages))
});

const mapStateToProps = state => {
  return {
    loading: loadingUpdateSelector(state),
    errors: errorsUpdateSelector(state),
    user: userSelector(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(UpdateUser);
