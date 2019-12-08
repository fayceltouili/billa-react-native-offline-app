import { StyleSheet, Dimensions } from 'react-native'


var { height, width } = Dimensions.get('window')

export default StyleSheet.create({

  container: {
    position: 'absolute',
    left: 15,
    top: height*.20,
    right: 15,
  },
  nameInput: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  errorMsg: {
    color: '#9d0b0b',
    fontSize: 16,
    textAlign: 'center',
  },
  textInput: {
    paddingBottom:10,
    fontFamily: 'BalooBhai-Regular',
    fontSize: 16,
    marginLeft: 10,
    color: '#353232'
  },
  PickerSelect: {
    fontFamily: 'BalooBhai-Regular',
    marginLeft: 10,
    fontSize: 16,
  },
  input: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'rgba(53, 50, 50, .03)',
    borderBottomColor: '#353232',
    borderBottomWidth: 1,
  },
  phone :{
    margin: 15,
    backgroundColor: 'rgba(53, 50, 50, .03)',
    borderBottomColor: '#353232',
    borderBottomWidth: 1,
  },
  imgContainer: {
    left: width*.3,
    marginLeft: 8,
    height: 100,
    width: 100,
    borderColor: '#353232',
    borderWidth: 1,
    overflow: 'hidden',
  },
  logo: {
    borderRadius: 40,
    height: 150,
    width: 150,
    zIndex: 0, position: 'absolute'
  },
  uploadLogoText: {
    opacity: 0.6,
    backgroundColor: 'rgba(255, 255, 255, .1)',
    fontSize: 14,
    marginTop: 0,
    zIndex: 1,
    paddingLeft: 35,
    paddingRight: 20,
    fontFamily:'PalanquinDark-Regular',
  },
  inner: {
    padding: 24,
    justifyContent: 'flex-end',
},
})
