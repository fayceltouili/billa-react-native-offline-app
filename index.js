/**
 * @format
 */
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App/Containers/App';
import {name as appName} from './app.json';

 const Main = () => {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main)

export default Main
