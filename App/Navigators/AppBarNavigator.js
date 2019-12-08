import * as React from 'react';
import { Appbar } from 'react-native-paper';
import NavigationService from '../Services/NavigationService'

export default  MyComponent = props => {
  
  const { 
    navigateTo,
    submit,
    remove,
    title,
    subtitle,
    iconSecond,
    iconFirst
  } = props

  const goBack = () => NavigationService.navigateBack()

  const handleSaving = () => {
    submit()
    NavigationService.navigate(navigateTo)
  }

  const handleRemove = () => {
    remove()
    NavigationService.navigate(navigateTo)
  }
    
  return (
    <Appbar.Header
      style={{backgroundColor:'#303030'}}>
      <Appbar.BackAction
        onPress={goBack}
      />
      <Appbar.Content
        title={title || ''}
        subtitle={subtitle || ''}
        titleStyle={{fontFamily:'BalooBhai-Regular'}}
        subtitleStyle={{fontFamily:'PalanquinDark-Regular'}}
      />
      <Appbar.Action icon={iconSecond} onPress={handleRemove} />
      <Appbar.Action icon={iconFirst} onPress={handleSaving} />


    </Appbar.Header>
  ) 
}
