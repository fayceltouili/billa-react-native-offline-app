import * as React from 'react';
import { Appbar } from 'react-native-paper';
import NavigationService from '../Services/NavigationService';

export default  MyComponent = props => {

  const { title, subtitle } = props;
  
  const goBack = () =>
    NavigationService.navigateBack();

  return (
    <Appbar.Header
      style={{backgroundColor:'#303030'}}>
    <Appbar.BackAction
    onPress={goBack} />
    <Appbar.Content
      title={title }
      subtitle={subtitle}
      titleStyle={{fontFamily:'BalooBhai-Regular'}}
      subtitleStyle={{fontFamily:'PalanquinDark-Regular'}}
    />
    </Appbar.Header>
  )
}
