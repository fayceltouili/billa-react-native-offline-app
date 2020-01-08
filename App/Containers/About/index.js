/**
 * About Component
 */

import React from 'react';
import { Divider} from 'react-native-paper';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import BackAppBarNavigator from '../../Navigators/BackAppBarNavigator';


const About = () => {

  return(
    <View> 
     <BackAppBarNavigator title='About'/>

      <View style={Styles.container}>
        <View style={Styles.titleView}>
          <Image
          style={Styles.image}
          source={require('../../../assets/images/billalogo_whiiteBK.png')}
          resizeMode="contain"
          />
          <Text style={Styles.logoText}>Billa</Text>
        </View>
        <Divider />

        <TouchableOpacity style={Styles.list}>
          <Text style={Styles.listText}>
            Developed with ❤️ in San Francisco, by Faycel Touili
          </Text>
          <Text style={Styles.listText}>
            fayceltouili@gmail.com
          </Text>
        </TouchableOpacity>
        <Divider />
      </View>    
    </View>
  )
}

export default About;
