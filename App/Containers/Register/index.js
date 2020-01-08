/**
 * Register User form  
 */

import React, {useState } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Styles from './Styles';
import { userRegister } from './Actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { loadingRegisterSelector, errorsRegisterSelector } from './Selectors';
import BackAppBarNavigator from '../../Navigators/BackAppBarNavigator';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-paper';


const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  buisness_name: '',
  passwordErr: false,
  emailErr: false,
}

const passwordErrorMsg = 'Password must contain at least 6 characters, one numeric digit, one uppercase and one lowercase letter';

const  RegisterUser = props => {

  const { submitUser, loading, errors } = props;
  const [ state, setState ] = useState(initialState);

  const {
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
    buisness_name,
    passwordErr,
    emailErr
  } = state ;

  const validateEmail = () => 
     /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const passwordStrength = () =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);

  const validatePassword = () =>
    password === confirmPassword && passwordStrength(password);

  const handleSubmit = () => {

    if(!validateEmail())
      setState({ ...state, emailErr: 'Invalid email address' });

    else if(!validatePassword())
    setState({ ...state, passwordErr: passwordErrorMsg })

    else {
      const user = {
        first_name,
        last_name,
        password,
        buisness_name,
        email,
      }
      submitUser(user)
    }
  }

  return(
    <LinearGradient colors={['#fffdf9', '#696868']} style={{flex: 1}} >

      <BackAppBarNavigator title='Register' />

      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={Styles.container}
        scrollEnabled={true}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Styles.inner}>
              <View style={Styles.input}>
                <Icon 
                  name="email-outline"
                  color={ validateEmail() ? 'green': "#9d0b0b"}
                  size={25} />
                <TextInput
                  autoCapitalize='none'
                  keyboardType='email-address'
                  placeholder='Email'
                  value={email}
                  style={Styles.textInput} 
                  onChangeText={email => setState({ ...state, email, emailErr: false }) }
                />
 
                </View>
                { emailErr && <Text style={Styles.errorMsg}> {emailErr} </Text>}
                <View style={Styles.input}>
                <Icon 
                  name="account-circle-outline"
                  color={ first_name.length > 1 ? 'green' : "#353232"}
                  size={25} />
                <TextInput
                  placeholder='First Name'
                  value={first_name}
                  style={Styles.textInput} 
                  onChangeText={first_name => setState({ ...state, first_name })}/>  
              </View>
              <View style={Styles.input}>
                <Icon 
                  name="account-circle-outline"
                  color={ last_name.length > 1 ? 'green' : "#353232"}
                  size={25} />
                <TextInput
                  placeholder='Last Name'
                  value={last_name}
                  style={Styles.textInput} 
                  onChangeText={last_name => setState({...state, last_name})}/>  
              </View>

              <View style={Styles.input}>
                <Icon 
                  name="briefcase-outline"
                  color={ buisness_name.length > 1 ? 'green' : "#353232"}
                  size={25} />
                <TextInput
                  placeholder='Buisness name'
                  value={buisness_name}
                  style={Styles.textInput} 
                  onChangeText={buisness_name => setState({...state, buisness_name})}/>  
              </View>
             
              <View style={Styles.input}>
                <Icon 
                  name="lock-reset"
                  color={ validatePassword()? 'green' : "#9d0b0b"}
                  size={25} />
                <TextInput
                  placeholder='Password'
                  secureTextEntry={true}
                  value={password}
                  style={Styles.textInput} 
                  onChangeText={password => setState({ ...state, password, passwordErr: false }) }
                /> 

              </View>
              <View style={Styles.input}>
                <Icon 
                  name="lock-reset"
                  color={ validatePassword()? 'green' : "#9d0b0b"}
                  size={25} />
                <TextInput
                  placeholder='Confirm Password'
                  secureTextEntry={true}
                  value={confirmPassword}
                  style={Styles.textInput} 
                  onChangeText={confirmPassword => setState({ ...state, confirmPassword, passwordErr: false }) }
                /> 
              </View>
              <Button
                mode="contained"
                loading={loading}
                color='#53759E'
                style={{margin: 15}}
                onPress={() => handleSubmit()}>
                  SIGN UP
                </Button>
              { passwordErr && <Text style={Styles.errorMsg}> {passwordErr} </Text>}                
              { errors && <Text style={Styles.errorMsg}> {errors.toString()} </Text> }
            </View>
          </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </LinearGradient>
  )
}


const mapDispatchToProps = dispatch => ({
  submitUser: user => dispatch(userRegister(user)),
});

const mapStateToProps = state => {
  return {
    loading: loadingRegisterSelector(state),
    errors: errorsRegisterSelector(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(RegisterUser);
