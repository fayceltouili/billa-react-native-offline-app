import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  total: {
    padding: 15,
    margin: 15,
    backgroundColor: '#53759E',
    fontFamily:'BalooBhai-Regular',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3, 
  },
  paidAmountContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    padding: 15,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    borderWidth: .2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#fffdf9',
    borderColor: '#f8f8f8',
  },
  amountDueContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    padding: 15,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderLeftWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3, 
    backgroundColor: 'rgba(211, 33, 33, .2)',
    borderLeftColor: '#D32121',
  },
  statusContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    padding: 15,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    borderLeftWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: 'rgba(0, 107, 201, .2)',
    borderLeftColor: '#006BC9',
  },
  totalTitle:{
    fontFamily: 'PalanquinDark-Regular',
    color: '#dee0e0',
    flex: 1,
    fontSize: 14,
    marginBottom: 5,
  },
  title: { 
    fontFamily: 'PalanquinDark-Regular',
    flex: 1,
    fontSize: 14,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10
  },
  totalValues: {
    color: '#dee0e0',
    fontFamily:'BalooBhai-Regular',
  },
  values: {
    fontFamily:'BalooBhai-Regular',
  },
  input: {
    margin: 15,
    backgroundColor: 'rgba(206, 208, 206, .2)',
    borderBottomColor: '#adadad',
    borderBottomWidth: 2,
  }
});
