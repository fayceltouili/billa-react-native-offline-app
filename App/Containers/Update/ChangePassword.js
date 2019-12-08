/**
 * Change user password
 */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Styles from './Styles'
import { updateUser } from './Actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { errorsUpdateSelector, loadingUpdateSelector } from './Selectors'
import SingleAppBarNavigator from '../../Navigators/SingleAppBarNavigator'
import NavigationService from '../../Services/NavigationService'
import { userSelector } from '../WelcomeScreen/Selectors'
import { setMessages } from '../MainScreen/Actions'


const passwordErrorMsg = 'Password must contain at least 6 characters, one numeric digit, one uppercase and one lowercase letter'


const  UpdatePassword = props => {

  const { updateUserPassword, loading, errors, user, successMessages } = props

  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [passwordErr, setPasswordErr] = useState(false)




  const doNothing = () => null

  const passwordStrength = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)
  const validatePassword = () => password === confirmPassword && passwordStrength(password)


  const handleSubmit = () => {
    if(!validatePassword()) setPasswordErr(passwordErrorMsg)
    else {  
      updateUserPassword({ 
        _token: user.token,
        email: user.email,
        id: user.id,
        password,
      })
      if(!errors){
        successMessages(['Success', 'You have successfully update your password!'])
        NavigationService.navigate('MainScreen')
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
        title='Change password'
        iconFirst='checkbox-marked-circle-outline'
        submit={validatePassword? handleSubmit: doNothing }
       />

      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true} >
        <SafeAreaView >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Styles.inner}>
              <View style={Styles.input}>
                <Icon 
                  name="lock-reset"
                  color={ validatePassword()? 'green': "#9d0b0b"}
                  size={25} />
                <TextInput
                  placeholder='Password'
                  secureTextEntry={true}
                  value={password}
                  style={Styles.textInput} 
                  onChangeText={password => {setPassword(password)
                    setPasswordErr(false)}}
                />  
              </View>
              <View style={Styles.input}>
                <Icon 
                  name="lock-reset"
                  color={ validatePassword()? 'green': "#9d0b0b"}
                  size={25} />
                <TextInput
                  placeholder='Confirm Password'
                  secureTextEntry={true}
                  value={confirmPassword}
                  style={Styles.textInput} 
                  onChangeText={confirmPassword => {
                    setConfirmPassword(confirmPassword)
                    setPasswordErr(false)
                  }}
                />  
              </View>
              { passwordErr && <Text style={Styles.errorMsg}> {passwordErr} </Text>}                
              { errors && <Text style={Styles.errorMsg}> {errors.toString()} </Text> }
              </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
   </>
  )
}


const mapDispatchToProps = dispatch => ({
  updateUserPassword: data => dispatch(updateUser(data)),
  successMessages: messages => dispatch(setMessages(messages))
})

const mapStateToProps = state => {
  return {
    loading: loadingUpdateSelector(state),
    errors: errorsUpdateSelector(state),
    user: userSelector(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(UpdatePassword)
