import { StyleSheet } from 'react-native';
import Fonts from '../../Theme/Fonts';
import Colors from '../../Theme/Colors';
import ApplicationStyles from '../../Theme/ApplicationStyles';

export default StyleSheet.create({
  mainContainer: {
    ...ApplicationStyles.screen.mainContainer,
    backgroundColor: Colors.silver

  },
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  }
});
