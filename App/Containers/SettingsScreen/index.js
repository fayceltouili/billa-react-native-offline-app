/**
 * Settings screen
 */
import React from 'react';
import { connect } from 'react-redux';
import { Divider } from 'react-native-paper';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Styles from './Styles';
import NavigationService from '../../Services/NavigationService';
import BackAppBarNavigator from '../../Navigators/BackAppBarNavigator';
import { userSelector } from '../../Selectors';
import { userLogout } from '../WelcomeScreen/Actions';
import Mailer from 'react-native-mail';


const SettingsScreen = ({ logout }) => {

  return(
    <View>
     
     <BackAppBarNavigator title="Settings"/>
      <View style={Styles.container}>
        <TouchableOpacity
          onPress={ () => NavigationService.navigate('UserUpdate')}
          style={Styles.list}>
          <Text style={Styles.listText}>Edit user informations</Text>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity
          onPress={ () => NavigationService.navigate('ItemsList')}
          style={Styles.list}>
          <Text style={Styles.listText}>Mannage stock</Text>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity 
        onPress={()=> Mailer.mail({
          subject: 'Support',
          recipients: ['fayceltouili@gmail.com'],
          body: '<h3>Hello</h3>',
          isHTML: true,
          }, (error, event) => Alert.alert(
          'Mail',
          `${event}`,
          [
            {text: 'ok'},      
          ],
          {cancelable: false},
        ))
        }
        style={Styles.list}>
          <Text style={Styles.listText}>Support</Text>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity
          onPress={ () => NavigationService.navigate('About')}
          style={Styles.list}>
          <Text style={Styles.listText}>About</Text>
        </TouchableOpacity>
        <Divider />

        <TouchableOpacity
          onPress={ () => NavigationService.navigate('UpdatePassword')}
          style={Styles.list}>
          <Text style={Styles.listText}>Change Password</Text>
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
        onPress={() => logout()}
        style={Styles.list}>
          <Text style={Styles.listText}>Logout</Text>
        </TouchableOpacity>
        <Divider />
      </View>
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(userLogout());
    NavigationService.navigate('Welcome');
  },
});

const mapStateToProps = state => {
  return {
    user: userSelector(state),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(SettingsScreen);
