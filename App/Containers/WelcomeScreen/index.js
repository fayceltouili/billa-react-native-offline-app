/**
 * Welcome screen and Login user form 
 */

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, TextInput, TouchableOpacity, Switch } from 'react-native'
import AsyncStorage  from '@react-native-community/async-storage'
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NavigationService from '../../Services/NavigationService'
import { fetchUser } from './Actions'
import { userSelector, loadingSelector, errorsSelector } from './Selectors'
import Styles from './Styles'
import LinearGradient from 'react-native-linear-gradient';


const WelcomeScreen = props => {

  const { loginUser, errors, loading } = props

  const initialState = {
    email: '',
    password: '',
    emailErr: false,
    isSwitchOn: false,
  }

  const [loginState, setLoginState] = useState(initialState)
  const  { email, password, emailErr, isSwitchOn } = loginState

  // store login credentials from AsyncStorage

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@login', JSON.stringify({ email, password, isSwitchOn: true }) ) 
    } catch (error) {
    }
  };

  // retrieve login credentials from AsyncStorage

  const retrieveData = async () => {
    try {
      const response = await AsyncStorage.getItem('@login')
      if(response){
        const loginCredentials = JSON.parse(response)
        setLoginState(loginCredentials)
      }
    } catch (error) {}
  }

    // remove login credentials from AsyncStorage

   const removedata = async () => {
    try {
      await AsyncStorage.removeItem('@login')
      return true;
    }
    catch(error) {}
  }

  // when component did mount we try to retrieve credentials from AsyncStorage if exist
  useEffect(() => {
    const loadCredentials = async () =>
      await retrieveData()

    loadCredentials()
}, [])

  // Validate email address

  const validateEmail = () => 
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)

  // toggle switch state and storing/removing login credentials from asyncStorage

  const toggle = () => 
    isSwitchOn ?
      [setLoginState({ ...loginState, isSwitchOn: false }), removedata()]
      : [setLoginState({ ...loginState, isSwitchOn: true }), storeData()]


  const handleLogin = () => 
    !validateEmail() ? setLoginState({ ...loginState, emailErr: 'Invalid email address' }) 
      : loginUser({ email, password })
    


  return (

    <LinearGradient colors={['#53759E', '#696868', '#fffdf9']} style={{flex: 1}} >
      <View style={Styles.container}> 
        <Image
          style={Styles.billaLogo}
          source={require('../../../assets/images/logo-white.png')}
          resizeMode="contain"
        />

        <Text style={Styles.welcomeText}> Welcome to Billa !</Text>
        <Text style={Styles.welcomeDescription}>
          Scan, make, print and send invoices, Login or Create an account to get started.
        </Text>

        <View style={Styles.input}>
          <Icon 
            name="email"
            color="white"
            size={25} />
          <TextInput
            keyboardType='email-address'
            placeholder='Email'
            autoCapitalize='none'
            placeholderTextColor="#e8e8e8" 
            value={email}
            style={Styles.textInput} 
            onChangeText={email =>  setLoginState({ ...loginState, email, emailErr: false }) }
          />  
        </View>
        { emailErr && <Text style={Styles.errorMsg}> {emailErr} </Text>}

        <View style={Styles.input}>
          <Icon 
            name="lock-reset"
            color="#e8e8e8"
            size={25} />
          <TextInput
            placeholder='Password'
            secureTextEntry={true}
            placeholderTextColor="#e8e8e8" 
            value={password}
            style={Styles.textInput} 
            onChangeText={password => setLoginState({ ...loginState, password }) }
          />  
        </View>
          <Button
          mode="contained"
          loading={loading}
          color='#53759E'
          style={{margin: 15}}
          onPress={() => handleLogin()}>
            LOGIN
          </Button>
 
          <Button
          mode="contained"
          color='#53759E'
          style={{margin: 15}}
          onPress={() => NavigationService.navigate('Register')}>
            SIGN UP
          </Button>
          <View style={{flexDirection:'row', flexWrap:'wrap', margin: 15}}>
            <Text style={{ flex: 1, color: '#fffdf9', fontSize: 16}}> Remember me</Text>  
            <Switch
            trackColor={{false: '#53759E', true: '#53759E'}}
            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            value={isSwitchOn}
            onValueChange={() => toggle()}
            />
          </View>
      </View>

      { errors && 
        <View style={Styles.ErrorContainer}> 
    
          <Text style={Styles.errorMsg}> {errors.toString().toUpperCase()} </Text> 
          <Text style={Styles.forgot}> Forgot your password? </Text>
          <Button
            mode="contained"
            color='#53759E'
            style={{margin: 15}}
            onPress={() => NavigationService.navigate('Forgot')}>
              PRESS HERE
          </Button>
        </View>
      }

    </LinearGradient>
  )
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(fetchUser(user)),
})

const mapStateToProps = state => {
  return {
    loading: loadingSelector(state),
    errors: errorsSelector(state),
    user: userSelector(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(WelcomeScreen)
