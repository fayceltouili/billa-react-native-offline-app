/**
 * RegisterUser form to register the single app user
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput, Headline, Button, ActivityIndicator, Colors } from 'react-native-paper'
import Style from './RegisterUserStyle'
import { View, Text, Alert } from 'react-native'
import { 
  makeSelectRegisterUserError, 
  makeSelectRegisterUserLoading, 
  makeSelectRegisterUserRegistred} from './Selectors'
import { createStructuredSelector } from 'reselect'
import { userRegister, userRegistred } from './Actions'
import NavigationService from '../../Services/NavigationService'
import { PropTypes } from 'prop-types'



class RegisterUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      company_name: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      language: '',
    };
  }
  // Boolean return if inputs are filled
  inputsFilled = () => {
    return !Object.values(this.state).every( e => e.length > 0 )
  }

  // handle success registring
  successHandling = () =>{
    return this.props.registred && Alert.alert(
      `${this.state.username} `,
      'Registred successfully!',
      [ 
        { text: 'OK', onPress: () => NavigationService.navigateAndReset('HomeScreen') }
      ]
    ) 
  }

  // handle failure registring
  errorHandling = () => {
    return this.props.error && Alert.alert(
      'Something Wrong!',
      `${this.props.error}`,
      [
        { text: 'OK' }
      ]
    );
  } 

  render(){
    const { submitUser, loading, error } = this.props

    return (
      <View style={{ margin: 50}}>
      { loading  && <ActivityIndicator animating={true} color={Colors.red800} />}

        <TextInput
          mode='outlined'
          label='Username*'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <TextInput
          mode='outlined'
          label='Company name*'
          value={this.state.company_name}
          onChangeText={company_name => this.setState({ company_name })}
        />
        <TextInput
          mode='outlined'
          label='Phone*'
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <TextInput
          mode='outlined'
          label='Address*'
          value={this.state.address}
          onChangeText={address => this.setState({ address })}
        />
         <TextInput
          mode='outlined'
          label='City*'
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
        />
         <TextInput
          mode='outlined'
          label='State*'
          value={this.state.city}
          onChangeText={state => this.setState({ state })}
        />
         <TextInput
          mode='outlined'
          label='Zip Code*'
          value={this.state.zip}
          onChangeText={zip => this.setState({ zip })}
        />
        <Button
        style={{marginTop: 12}}
          disabled={!this.inputsFilled()}
          mode='text'
          icon="checkbox-marked-circle"
          mode="contained" 
          onPress={() => submitUser(this.state)}>
          Register
        </Button>
        {/* { this.successHandling() } */}
        { this.errorHandling() }
      </View>
    );
  }
}
RegisterUser.propTypes = {
  submitUser: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  registred: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectRegisterUserLoading(),
  error: makeSelectRegisterUserError(),
  registred: makeSelectRegisterUserRegistred(),
});

const mapDispatchToProps = (dispatch)  => ({
  submitUser: (inputs) => dispatch(userRegister(inputs)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(RegisterUser)
