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


  const handleSaving = () => {
    submit()
    NavigationService.navigate(navigateTo)
  }

  const handleRemove = () => {
    remove()
    NavigationService.navigate(navigateTo)
  }
  const handleSettings = () => {
    NavigationService.navigate('Settings')
  }
  return (
    <Appbar.Header
      style={{backgroundColor:'#303030'}}>
  
      <Appbar.Content
        title={title}
        subtitle={subtitle}
        titleStyle={{fontFamily:'BalooBhai-Regular'}}
        subtitleStyle={{fontFamily:'PalanquinDark-Regular'}}
      />
      <Appbar.Action icon={iconSecond || ''} onPress={handleRemove} />
      <Appbar.Action icon={iconFirst || ''} onPress={handleSaving} />
      <Appbar.Action icon='dots-vertical' onPress={handleSettings} />

    </Appbar.Header>
  )
}
