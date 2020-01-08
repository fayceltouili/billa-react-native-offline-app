/**
 *  Component to view and Edit items in the cart
 */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  Switch,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import Styles from './Styles';
import AppBarNavigator from '../../../Navigators/AppBarNavigator';
import { connect } from 'react-redux';
import { updatingItem, removingItem } from '../Actions';
import { taxPercentSelector } from '../../Status/Selectors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { updateCart } from '../../Stock/Actions';
import { stockSelector, cartSelector } from '../../Stock/Selectors';

const ItemView = props => {

  const { navigation, update, remove, taxPercent, updateStock, stock } = props

  const item = navigation.getParam('item');
  const oldName = item.name ;
  const oldQuantity = item.quantity;

  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price.toString());
  const [quantity, setQuantity] = useState(item.quantity.toString());
  const [discount, setDiscount] = useState(item.discount.toString());
  const [description, setDescription] = useState(item.description);
  const [taxed, setTaxed] = useState(item.taxed);

  const names = [oldName, name];


  if(item.itemCode){
    if(+quantity > +stock[item.itemCode].available){
      
      Alert.alert(
        `Warning!`,
        ` Only ${stock[item.itemCode].available} available in stock`,
        [
          { text: 'Ok',},
        ],
        {cancelable: false},
      ); 
    }
  }

  handleUpdate = () => { 

    if(item.itemCode && oldQuantity !== quantity){
      let itemCode = item.itemCode;
      let itemToUpdate = { itemCode, quantity: (+oldQuantity - +quantity) * -1 }; 
      updateStock(itemToUpdate);
    }

    let newItem = {
      itemCode: item.itemCode,
      name,
      price,
      quantity,
      discount,
      description,
      amount: clacAmount(),
      taxed,
     }

    update(newItem, names);
  }

  const handleRemove = () => {
    
    if(item.itemCode){
      let itemCode = item.itemCode;
      let itemToUpdate = { itemCode, quantity: +oldQuantity * -1  };
      updateStock(itemToUpdate);
     }

    remove(oldName);
  }
  const Validate = () => name.length > 1 && price.length > 0;

  const clacAmount = () => (+price * +quantity);

  const doNothing = () => null;

  const toggle = () => taxed? setTaxed(false) : setTaxed(true);

  return(
    <>
      <AppBarNavigator
      title={`${name}`}
      subtitle='Edit Item'
      iconFirst= { Validate() ? 'checkbox-marked-circle-outline': 'cancel'}
      iconSecond='delete-circle'
      submit={Validate() ? handleUpdate: doNothing}
      remove={handleRemove}
      navigateTo='MainScreen'
      />

      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={Styles.container}
        scrollEnabled={true}
        >
        <SafeAreaView style={Styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={Styles.inner}>
              <Text style={Styles.inputTitle}>Name</Text>
              <TextInput 
                value={name}
                returnKeyType='done'
                placeholder='(required)'
                style={Styles.textInput} 
                onChangeText={name => setName(name) }
              />
              <Text style={Styles.inputTitle}>Price</Text>
              <TextInput 
                value={price}
                returnKeyType='done'
                keyboardType='numeric'
                style={Styles.textInput} 
                onChangeText={price => setPrice(price) }
              />
              <Text style={Styles.inputTitle}>Quantity</Text>
              <TextInput 
                value={quantity}
                returnKeyType='done'
                keyboardType='numeric'
                style={Styles.textInput} 
                onChangeText={quantity => setQuantity(quantity) } 
              />
              <Text style={Styles.inputTitle}>Discount</Text>

              <TextInput 
                value={discount}
                returnKeyType='done'
                keyboardType='numeric'
                style={Styles.textInput} 
                onChangeText={discount => setDiscount(discount) }
              />

              <Text style={Styles.inputTitle}>Description</Text>
              <TextInput 
                value={description}
                placeholder='Item Description'
                style={Styles.textInput} 
                onChangeText={note => setDescription(description) }
              />
              <View style={{flexDirection:'row', flexWrap:'wrap', margin: 15}}>
                <Text style={{ flex: 1, color: '#383838'}}> Apply Tax </Text>          
                <Switch
                  trackColor={{false: '#53759E', true: '#53759E'}}
                  style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                  value={taxed}
                  onValueChange={() => toggle()}
                />
              </View>

              <View style={Styles.amountContainer}>
                <Text style={Styles.titleText}>AMOUNT</Text>
                <Text style={Styles.amount}>{ taxed?
                  (clacAmount() + (clacAmount() * taxPercent)/100 - discount).toFixed(2)
                  :(clacAmount() - discount).toFixed(2) }
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </>
  )
}

const mapDispatchToProps = dispatch  => ({
  update: (updatedItem, names) => dispatch(updatingItem(updatedItem, names)), 
  remove: itemName =>  dispatch(removingItem(itemName)),
  updateStock: item => dispatch(updateCart(item))
});

const mapStateToProps = state => {
  return {
    taxPercent: taxPercentSelector(state),
    stock: stockSelector(state),
    cart: cartSelector(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ItemView);
