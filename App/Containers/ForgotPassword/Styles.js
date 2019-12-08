import { StyleSheet, Dimensions } from 'react-native'


var {height, width} = Dimensions.get('window')

export default StyleSheet.create({

  container: {
    position: 'absolute',
    left: 15,
    top: height*.3,
    right: 15,
 
  },
  errorMsg: {
    color: '#9d0b0b',
    fontSize: 16,
    textAlign: 'center',
  },
  nextIcon: {
    marginTop: 30,
    left: width*.37,
  },
  textInput: {
    padding: 5,
    fontSize: 18,
    marginLeft: 10,
    color: '#353232'
  },

  input: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'rgba(53, 50, 50, .03)',
    borderBottomColor: '#353232',
    borderBottomWidth: 1,
  }
})
