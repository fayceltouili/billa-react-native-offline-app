import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  loading:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    color: '#9d0b0b',
    fontSize: 16,
    textAlign: 'center',
  },

  textInput: {
    padding: 5,
    fontSize: 16,
    marginLeft: 10,
    color: '#353232'
  },

  input: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'rgba(255, 255, 255, .05)',
    borderBottomColor: '#353232',
    borderBottomWidth: .4,
  },
  inner: {
    padding: 30,
    justifyContent: 'flex-end',
},
});
