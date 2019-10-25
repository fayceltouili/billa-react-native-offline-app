import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View } from 'react-native'
import HomeScreen from '../Containers/HomeScreen'


const HomeRoute = () => <View><HomeScreen /></View>;

export default class DottomNavigation extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({

    home: HomeRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}