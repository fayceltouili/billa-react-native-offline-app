/*Home Screen With buttons to navigate to different options*/
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import NavigationService from '../../Services/NavigationService'
import DottomNavigation from '../../Navigators/TabNavigation'
import FabGroup from '../../Navigators/FabGroup'
import Style from './HomeScreenStyle'
import { PropTypes } from 'prop-types'

function HomeScreen({user}){
  useEffect(() => {
    if(!user){
      NavigationService.navigateAndReset('Register')
    }}, [])

  return (
   <View style={Style.container}>
     <FabGroup />
   </View>
    );
}
HomeScreen.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = (state) => ({
  user: state.fetchUser.user,
})

export default connect(
  mapStateToProps,
  )(HomeScreen)