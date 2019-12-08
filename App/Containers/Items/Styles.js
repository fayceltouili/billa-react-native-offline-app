import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  addItem: {
    fontFamily:'PalanquinDark-Regular',
  },
  items : {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    backgroundColor: '#dedef0',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: .9, 
    fontFamily:'BalooBhai-Regular',
    alignItems: 'flex-end'
  },
  container:{
    fontFamily:'BalooBhai-Regular',
    marginTop: 40,
    marginLeft: 15
  },
  button: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonText: {
    flex: 1,
    fontFamily:'PalanquinDark-Regular',
  },
  itemName: {
    alignSelf: 'flex-start',
    fontFamily:'PalanquinDark-Regular',
  },
  details:{
    fontFamily:'PalanquinDark-Regular',
    marginBottom: -6
  }
})
