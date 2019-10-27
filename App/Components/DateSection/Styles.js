import { StyleSheet } from 'react-native'
import Fonts from '../../Theme/Fonts'
import ApplicationStyles from '../../Theme/ApplicationStyles'
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  textInput: {
    ...ApplicationStyles.screen.textInput,
    padding: 10,
    marginLeft: 15,
    marginRight:15,
    borderBottomColor: 'black',

  }
})
