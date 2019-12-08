/**
 * Reset password form  
 */

import React, {useState} from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput,  } from 'react-native'
import { Button } from 'react-native-paper'
import Styles from './Styles'
import { resetPassword } from './Actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import BackAppBarNavigator from '../../Navigators/BackAppBarNavigator'
import { resetPasswordLoadingSelector, resetPasswordErrorsSelector } from './Selectors'
import { setMessages } from '../MainScreen/Actions'
import NavigationService from '../../Services/NavigationService'

const ResetPassword = props => {
  
  const { submitPassword, loading, errors, navigation, successMessages  } = props
  const data = navigation.getParam('data')
  const { id } = { ...data }

  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [passwordErr, setPasswordErr] = useState(false)


  // helper function to check password strength
  const passwordStrength = password => 
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)

  // helper function to chech if passwords matches
  const validatePassword = () => 
    password === confirmPassword && passwordStrength(password)

  const handleSubmit = () => { 
      if(!validatePassword()) setPasswordErr('Password must contain at least 6 characters, one numeric digit, one uppercase and one lowercase letter')
      else submitPassword({ id, password }) 

      if(!errors){
        successMessages(['Success', 'You have successfully reset your password!'])
        NavigationService.navigate('MainScreen')
      }
    }

  return(
    <>
      <BackAppBarNavigator 
        title="Enter a new password"
        subtitle=""/>
      <View style={Styles.container}>
        <View style={Styles.input}>
          <Icon 
            name="lock-reset"
            color={ validatePassword()? 'green' : "red"}
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
            color={ validatePassword()? 'green' : "red"}
            size={25} />
          <TextInput
            placeholder='Confirm Password'
            secureTextEntry={true}
            value={confirmPassword}
            style={Styles.textInput} 
            onChangeText={confirmPassword => {setConfirmPassword(confirmPassword)
              setPasswordErr(false)}}
          />  
        </View>
          { passwordErr && <Text style={Styles.errorMsg}> {passwordErr} </Text>}
          <Button
          mode="contained"
          loading={loading}
          color='#53759E'
          style={{margin: 15}}
          onPress={() => handleSubmit()}>
            VERIFY
          </Button>
          { errors && <Text style={Styles.errorMsg}> {errors.toString()} </Text> }
      </View>
    </>
  )

}


const mapDispatchToProps = dispatch => ({
  submitPassword: data => dispatch(resetPassword(data)),
  successMessages: messages => dispatch(setMessages(messages))
});

const mapStateToProps = state => {
  return {
    loading: resetPasswordLoadingSelector(state),
    errors: resetPasswordErrorsSelector(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ResetPassword)
