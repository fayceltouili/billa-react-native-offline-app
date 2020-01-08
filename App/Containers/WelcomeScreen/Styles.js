import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({

  container: {
    alignContent: 'center',
    position: 'absolute',
    top: height*.1,
    right: 40,
    left: 40,
  },
  ErrorContainer: {
    right: 40,
    left: 40,
    bottom: 40,
    position: 'absolute',
    backgroundColor: 'rgba(230, 230, 230,.5)',
    padding: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3, 
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'PalanquinDark-Regular',
    textAlign: 'center',
    color: 'white',
  },
  welcomeDescription: {
    textAlign: 'center',
    flexShrink: 1 ,
    color:'white',
    marginBottom: 30,
  },
  billaLogo: {
    height: 150,
    width: 150,
    left: width*.2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3, 
  },
  errorMsg: {
    color: '#da2d2d',
    fontSize: 16,
    textAlign: 'center',
  },
  forgot:{
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'PalanquinDark-Regular',
    color: 'white'
  },
  textInput: {
    padding: 5,
    fontSize: 16,
    marginLeft: 10,
    color: 'white'
  },
  input: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'rgba(53, 50, 50, .1)',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  portal: {
    bottom: 10,
    position: 'absolute',
  },
});
