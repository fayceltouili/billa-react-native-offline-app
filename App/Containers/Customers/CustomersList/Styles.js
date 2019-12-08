import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../../Theme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.baseMargin
  },
  centered: {
    alignItems: 'center'
  }
})
