import { StyleSheet } from 'react-native'
import ApplicationStyles from '../../Theme/ApplicationStyles'
export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    marginTop: 40,
    marginLeft: 15
  },
  inputTitle: {
    color: '#5f6769',
    margin: 15,
  },
  amountContainer: {
    marginTop: 20,
  },
amount: {
  textAlign: 'right',
  marginRight: 15
},
orderOptions: {
  backgroundColor: '#3f4d71',
  padding: 10,
  flexDirection: 'row',
},
textInput: {
  fontSize: 14,
  marginLeft: 15,
  color: '#353232'
},

input: {
  flexDirection: 'row',
  margin: 15,
  borderBottomColor: '#353232',
  borderBottomWidth: 1,
}
})
