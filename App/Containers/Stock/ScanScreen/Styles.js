import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1
  },
  flashIcon:{
    top: height*1.5,
    left: width*.2
  },
  preview: {
    flex: 1,
  }
});
