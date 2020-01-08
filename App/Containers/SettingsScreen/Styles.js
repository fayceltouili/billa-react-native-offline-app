import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: '#f8f8f8',
    height: height,
  },
  title:{
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    fontFamily: 'PalanquinDark-Regular',
    color: 'white',
  },
  titleView: {
    height: 100,
    backgroundColor: '#393e46',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  list: {
    padding: 15,
    backgroundColor: '#fffdf9',
  },
  listText: {
    fontFamily: 'PalanquinDark-Regular',
    color: '#393e46',
    fontSize: 16,
  },
});

