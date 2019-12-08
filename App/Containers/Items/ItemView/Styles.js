import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../../Theme/ApplicationStyles'
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    marginTop: 40
  },
  textInput: {
    ...ApplicationStyles.screen.textInput,
    padding: 10,
    marginLeft: 8,
    marginRight:15,
    marginTop: 10,
    borderBottomColor: '#5f6769',
    borderBottomWidth: .2,
    // backgroundColor: '#f2f5f7'
  },
  inputTitle: {
    ...ApplicationStyles.screen.inputTitle,
    color: '#5f6769'
  },
  titleText: {
    ...ApplicationStyles.screen.titleText,
    textAlign: 'right',
    marginRight: 15
  },

  amountContainer: {
    marginTop: 20,
  },
  amount: {
    textAlign: 'right',
    marginRight: 15
  },
  inner: {
    padding: 24,
    justifyContent: 'flex-end',
},

})
