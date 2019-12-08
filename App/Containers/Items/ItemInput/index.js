/**
 * Custom item adding form
 */
import React, { useState } from 'react'
import {
  View,
  TextInput,
  Text,
  Switch,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Styles from './Styles'
import SingleAppBarNavigator from '../../../Navigators/SingleAppBarNavigator'
import { connect } from 'react-redux'
import { AddingItem } from '../Actions'
import { taxPercentSelector } from '../../../Selectors'

const ItemInputForm = props => {

  const { submit, taxPercent } = props

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [discount, setDiscount] = useState('')
  const [description, setDescription] = useState('')
  const [taxed, setTaxed] = useState(false)


  const handleSubmit = () => { 
    let newItem = {}
    newItem[name] = {
      name,
      price,
      quantity,
      discount,
      description,
      amount: clacAmount(),
      taxed,
     }
    submit(newItem) 
  }

  const Validate = () => name.length > 1 && price.length > 0

  const toggle = () => taxed? setTaxed(false) : setTaxed(true)

  const clacAmount = () => quantity.length > 0 ? +price * +quantity : +price

  const doNothing = () => null

  return(
    <>
      <SingleAppBarNavigator
      title='Add new item'
      iconFirst= { Validate() ? 'checkbox-marked-circle-outline': 'cancel'}
      submit={Validate() ? handleSubmit: doNothing}
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
                placeholder='(required)'
                style={Styles.textInput} 
                onChangeText={name => setName(name) }
              />
              <Text style={Styles.inputTitle}>Price</Text>
              <TextInput 
                returnKeyType='done'
                value={price}
                keyboardType='numeric'
                style={Styles.textInput} 
                onChangeText={price => setPrice(price) }
              />
              <Text style={Styles.inputTitle}>Quantity</Text>
              <TextInput
                returnKeyType='done'
                value={quantity}
                keyboardType='numeric'
                style={Styles.textInput} 
                onChangeText={quantity => setQuantity(quantity) }
                  
              />
              <Text style={Styles.inputTitle}>Discount</Text>
              <TextInput 
                returnKeyType='done'
                value={discount}
                keyboardType='numeric'
                style={Styles.textInput} 
                onChangeText={discount => setDiscount(discount) }
              />

              <Text style={Styles.inputTitle}>Description</Text>
              <TextInput 
                value={description}
                placeholder='Item Description'
                style={Styles.textInput} 
                onChangeText={description => setDescription(description) }
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
                  (clacAmount() + (clacAmount() * +taxPercent)/100 - discount).toFixed(2)
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
const mapDispatchToProps = dispatch => ({
  submit: newItem => 
    dispatch(AddingItem(newItem))  
})

const mapStateToProps = state => {
  return {
    taxPercent: taxPercentSelector(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(ItemInputForm)
