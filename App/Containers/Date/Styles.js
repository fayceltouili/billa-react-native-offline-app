import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Theme'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingTop: Metrics.baseMargin,
    marginLeft: 15,
  },
  todayDate: {
    fontSize: 16,
    fontFamily: 'BalooBhai-Regular'
  },
  dueDate: {
    fontSize: 12,
    color: 'grey'
  },
  dateContainer: {
    margin: 15,
  }
})
