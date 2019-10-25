import React, { useState, useEffect } from 'react'
import NavigationService from '../../Services/NavigationService'
import AppNavigator from '../../Navigators/AppNavigator'
import { View, Text } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import { fetchUser } from './Actions'
import { PropTypes } from 'prop-types'

function RootScreen ( { startup }) {
  useEffect(() => {
    startup()
}, [])
    return (
      <View style={styles.container}>
        <AppNavigator
          // Initialize the NavigationService
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user: state.fetchUser.user,
  userIsLoading: state.fetchUser.loading,
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
