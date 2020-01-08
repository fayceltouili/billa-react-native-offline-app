/**
 * RegisterUser form to register 
 */

import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import Styles from './Styles';
import { forgotPassword } from './Actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackAppBarNavigator from '../../Navigators/BackAppBarNavigator';
import { forgotLoadingSelector, forgotErrorsSelector } from './Selectors';

const  ForgotPassword = props => {

  const { submitEmail, loading, errors  } = props;

  const [email, setEmail] = useState();
  const [emailErr, setEmailErr] = useState(false);

  const validateEmail = () => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);


  return(
    <>
      <BackAppBarNavigator 
      title="Verify Email address"
      subtitle="Please enter your email address"/>
      <View style={Styles.container}>
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
            onChangeText={email => {setEmail(email) 
              setEmailErr(false)} }
          />  
        </View>
        { emailErr && <Text style={Styles.errorMsg}> {emailErr} </Text>}
        <Button
        mode="contained"
        loading={loading}
        color='#53759E'
        style={{margin: 15}}
        onPress={() => {  
          if(!validateEmail()) setEmailErr('Invalid email address')
          else submitEmail(email)}}>
          VERIFY
        </Button>

        { errors && <Text style={Styles.errorMsg}> {errors.toString()} </Text> }
      </View>
    </>
  )
}


const mapDispatchToProps = dispatch  => ({
  submitEmail: email => dispatch(forgotPassword(email)),
});

const mapStateToProps = state => {
  return {
    loading: forgotLoadingSelector(state),
    errors: forgotErrorsSelector(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ForgotPassword);
