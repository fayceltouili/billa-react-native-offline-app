/**
 * Verify reset token form 
 */

import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper'
import Styles from './Styles'
import { verifyToken } from './Actions'
import { verifyTokenLoadingSelector, verifyTokenErrorsSelector } from './Selectors'
import BackAppBarNavigator from '../../Navigators/BackAppBarNavigator'


const  VerifyResetToken = props => {

  const { submitToken, loading, errors } = props

  const [token, setToken] = useState('')
  const [tokenErr, setTokenErr] = useState(false)

  const validatetokenLength = () => token.length === 6


  return(
    <>
      <BackAppBarNavigator 
        title="Verify code sent"
        subtitle="Please enter 6 degits code"/>
      <View style={Styles.container}>

        <View style={Styles.input}>
          <TextInput 
            placeholder='Enter code here'
            keyboardType='decimal-pad'
            returnKeyType='done'
            value={token}
            style={Styles.textInput} 
            onChangeText={token => {
              setTokenErr(false)
              setToken(token) }}
          />
          </View>
          <Button
          mode="contained"
          loading={loading}
          color='#53759E'
          style={{margin: 15}}
          onPress={() => {  
            if(!validatetokenLength()) setTokenErr('Please enter 6 digits number')
            else submitToken(token)
            }}>
            VERIFY
          </Button>
          { tokenErr && <Text style={Styles.errorMsg}> {tokenErr} </Text>}
          { errors && <Text style={Styles.errorMsg}> {errors.toString()} </Text> }
      </View>
    </>
  )
}


const mapDispatchToProps = dispatch => ({
  submitToken: token => dispatch(verifyToken(token)),
});

const mapStateToProps = state => {
  return {
    loading: verifyTokenLoadingSelector(state),
    errors: verifyTokenErrorsSelector(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(VerifyResetToken)
