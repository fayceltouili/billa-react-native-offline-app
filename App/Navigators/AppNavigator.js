import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from '../Containers/HomeScreen';
import RegisterUser from '../Containers/RegisterUser';
import SplashScreen from  '../Containers/SplashScreen/SplashScreen'
import CreateInvoice from '../Containers/InvoiceCreateScreen'

const Navigator = createStackNavigator({
  SplashScreen: SplashScreen,

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Invoice: {
    screen: CreateInvoice,
    navigationOptions: {
      title: 'Create Invoice',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    }
  },
},
{
  // By default the application will show the splash screen
  initialRouteName: 'SplashScreen',
  // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
  headerMode: 'none',
});
export default createAppContainer(Navigator);
