import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import NavigationService from '../Services/NavigationService'

export default class FabGroup extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
      <Provider>
         <Portal>
           <FAB.Group
           fabStyle={{ backgroundColor: '#315b96'}}
            style={{ backgroundColor: '#dddddd'}}
             open={this.state.open}
             icon={this.state.open ? 'close-circle' :'arrow-up-drop-circle'}
             actions={[
               { icon: 'star', label: 'Star', onPress: () => console.log('Pressed ')},
               { icon: 'star', label: 'Email', onPress: () => console.log('Pressed ') },
               { icon: 'settings', label: 'Settings', onPress: () => console.log('Pressed ') },
               { icon: 'format-line-weight', label: 'New invoice', onPress: () => NavigationService.navigate('Invoice') },

             ]}
             onStateChange={({ open }) => this.setState({ open })}
             onPress={() => {
               if (this.state.open) {
                 // do something if the speed dial is open
               }
             }}
           />
         </Portal>
      </Provider>
    );
  }
}
