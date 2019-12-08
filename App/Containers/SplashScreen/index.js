import React from 'react'
import { View, Image } from 'react-native'
import Styles from './Styles'

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.logo}>
      <Image
      style={Styles.logo}
      source={require('../../../assets/images/billa-logo.png')}
      resizeMode="contain"
    />
      </View>
    </View>
  )
}

export default SplashScreen
