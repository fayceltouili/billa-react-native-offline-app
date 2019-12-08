import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Portal } from 'react-native-paper';

import Styles from './Styles'


const Loading = () => {

  return(
    <Portal style={Styles.loading}>
        <ActivityIndicator size="large" color="#303030" />
    </Portal>
  )
}

export default Loading
