import * as React from 'react';
import { Appbar } from 'react-native-paper';
import NavigationService from '../Services/NavigationService'

export default class MyComponent extends React.Component {
  _goBack = () => NavigationService.navigateBack()

  _handleSaving= () => console.log('_handleSaving');

  _handleRemove = () => console.log('_handleRemove');

  render() {
    return (

        <Appbar.Header
          style={{backgroundColor: '#315b96'}}>
          <Appbar.BackAction
            onPress={this._goBack}
          />
          <Appbar.Content
            title="INVOICE"
            subtitle="Create new one"
          />
          <Appbar.Action icon="bookmark-plus" onPress={this._handleSaving} />
          <Appbar.Action icon="file-remove" onPress={this._handleRemove} />

        </Appbar.Header>

    );
  }
}