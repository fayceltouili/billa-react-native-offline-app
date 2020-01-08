/**
 * View and edit stock items
 */
import React, { useState } from 'react';
import { View, TextInput, Text, Alert } from 'react-native';
import Styles from './Styles';
import AppBarNavigator from '../../../Navigators/AppBarNavigator';
import { connect } from 'react-redux';
import { updatingStockItem, removingStockItem } from '../Actions';
import NavigationService from '../../../Services/NavigationService';


const ItemInputForm = props => {

  const { navigation, update, remove } = props;

  const item = navigation.getParam('item');
  const itemCode = item.itemCode;

  const [itemState, setItemState] = useState({ 
    ...item,
    price: item.price.toString(),
    available: item.available.toString() 
  });

  const { name, price, available, description } = itemState;

  handleUpdate = () => { 
    update(itemState);
    NavigationService.navigate('ItemsList');
  }

  const handleRemove = () => {
    Alert.alert(
      'Delete Product',
      `Delete ${item.name}?`,
      [
        {
          text: 'Yes', onPress: () => {
            remove(itemCode)
            NavigationService.navigate('ItemsList')
          }
        },      
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    ); 
  }

  return(
    <>
      <AppBarNavigator
      title={`${item.name}`}
      subtitle={`${item.description}`}
      iconFirst='checkbox-marked-circle-outline'
      iconSecond='delete-circle'
      submit={handleUpdate}
      remove={handleRemove}
      />

      <View style={Styles.container}>
      <Text style={Styles.inputTitle}>Item code</Text>
        <TextInput 
          editable={false}
          value={itemCode}
          style={Styles.textInput} 
        />
        <Text style={Styles.inputTitle}>Name</Text>
        <TextInput 
          value={name}
          placeholder='(required)'
          style={Styles.textInput} 
          onChangeText={name => setItemState({ ...itemState, name }) }
        />
        <Text style={Styles.inputTitle}>Price</Text>
        <TextInput 
          value={price}
          keyboardType='numeric'
          style={Styles.textInput} 
          onChangeText={price => setItemState({ ...itemState, price }) }
        />
        <Text style={Styles.inputTitle}>Available</Text>
        <TextInput 
          value={available}
          keyboardType='numeric'
          style={Styles.textInput} 
          onChangeText={available => setItemState({ ...itemState, available }) } 
        />

        <Text style={Styles.inputTitle}>Description</Text>
        <TextInput 
          value={description}
          placeholder='Item Description'
          style={Styles.textInput} 
          onChangeText={description => setItemState({ ...itemState, description }) }
        />  
      </View>       
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  update: updatedItem => dispatch(updatingStockItem(updatedItem)), 
  remove: itemCode => dispatch(removingStockItem(itemCode))
});

export default connect(
  null,
  mapDispatchToProps
  )(ItemInputForm);
