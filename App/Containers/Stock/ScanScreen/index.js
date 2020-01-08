/** open camera snd scan products barcode */

import React, { useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Styles from './Styles';
import NavigationService from '../../../Services/NavigationService';
import BackAppBarNavigator from '../../../Navigators/BackAppBarNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BarcodeMask from 'react-native-barcode-mask';
import { withNavigationFocus } from 'react-navigation'; 


const ScanScreen = props => {

  const { isFocused, navigation } = props;

   /**
    * operation  = 'AddToStock' || 'AddToCart'
    * navigate to stock add form or cart add form 
    */
  const operation = navigation.getParam('operation')

  const [flash, setFlash] = useState('off');
  const [type, setType] = useState('back');
  const cameraRef = useRef(null);


  const onBarCodeRead = scanResult =>   
    (scanResult.data  && isFocused)?
      NavigationService.navigate(operation, 
        { values: { codeType: scanResult.type, itemCode: scanResult.data } })
      : null
  
  
  const isTorch = () => 
    flash === 'torch' ? true : false;

  const isCameraBack = () =>
    type === 'back' ? true : false;


  return (

    <View style={Styles.container}>

      <BackAppBarNavigator 
      title="Scan Product"/>
      <RNCamera
        ref={cameraRef}
        style={Styles.preview}
        type={type}
        flashMode={flash}
        onBarCodeRead={data => onBarCodeRead(data)}
        >
        <BarcodeMask />

        <TouchableOpacity
          style={Styles.flashIcon}
          onPress={()=> {
            isTorch() ? setFlash('off')
              : setFlash('torch')
          }}>
          <Icon 
          name={isTorch() ? 'flash-off': "flash"}
          color="white"
          size={35} />
        </TouchableOpacity>

        <TouchableOpacity
        style={{ margin: 20}}
        onPress={()=> {
          isCameraBack() ? setType('front')
            : setType('back')
        }}>
          <Icon 
          name="camera-party-mode"
          color="white"
          size={35} />
        </TouchableOpacity>

      </RNCamera>

    </View>
  )
}

export default withNavigationFocus(ScanScreen);
