/**
 *  Scan add products to stock
 */

import React, { useState } from 'react'
import { View, TextInput, Text, Alert } from 'react-native'
import Styles from '../Styles'
import AppBarNavigator from '../../../Navigators/AppBarNavigator'
import { connect } from 'react-redux'
import { AddingItemToStock } from '../Actions'
import NavigationService from '../../../Services/NavigationService'
import {
  stockErrorsSelector,
  stockLoadingSelector,
  itemToUpdateSelector
} from '../Selectors'


const AddItemToStock = props => {
  
  const { submit, navigation, itemToUpdate, error, loading } = props

  const values = navigation.getParam('values')
  const { codeType, itemCode } = values 
  
  const initialState = {
    itemCode,
    codeType,
    name: '',
    price: '',
    available: '',
    description: '',
  }
  const [itemState, setItemState] = useState(initialState)

  const { name, price, available, description } = itemState

  const handleSubmit = () => {
    submit(itemState)

    if(error){
      Alert.alert(
        `${itemToUpdate.name}`,
        'This product already registred in your stock, do you want to update it?',
        [
          { text: 'Yes', onPress: () =>
            NavigationService.navigate('EditStock', { item: itemToUpdate } ) },
          { text: 'Cancel',
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );       
    }
    NavigationService.navigateBack()
  }

  return(
    <>
      <AppBarNavigator
        title='Add to stock'
        iconFirst='checkbox-marked-circle-outline'
        submit={handleSubmit}
      />

      <View style={Styles.container}>
        <Text style={Styles.inputTitle}>Code</Text>
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
          onChangeText={name => setItemState({ ...itemState, name })}
        />
        <Text style={Styles.inputTitle}>Price</Text>
        <TextInput 
          value={price}
          returnKeyType='done'
          keyboardType='numeric'
          placeholder='00.00'
          style={Styles.textInput} 
          onChangeText={price => setItemState({ ...itemState, price })}
        />
        <Text style={Styles.inputTitle}>Available</Text>
        <TextInput 
          value={available}
          returnKeyType='done'
          keyboardType='number-pad'
          placeholder='1'
          style={Styles.textInput} 
          onChangeText={available => setItemState({ ...itemState, available })}   
        />
        
        <Text style={Styles.inputTitle}>Description</Text>
        <TextInput 
          value={description}
          placeholder='Item Description'
          style={Styles.textInput} 
          onChangeText={description => setItemState({ ...itemState, description })}
        />
      </View>
    </>
  )
}

const mapDispatchToProps = dispatch  => ({
  submit: newItem => {
    dispatch(AddingItemToStock(newItem))  }
})

const mapStateToProps = state => {
  return {
    error: stockErrorsSelector(state),
    loading: stockLoadingSelector(state),
    itemToUpdate: itemToUpdateSelector(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddItemToStock)
