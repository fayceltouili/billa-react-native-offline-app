import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Styles from './Styles'
import SingleAppBarNavigator from '../../Navigators/SingleAppBarNavigator'
import { connect } from 'react-redux'
import { settingTax } from './Actions'
import { taxPercentSelector } from './Selectors'

const TaxForm = props  => {

  const { preTax, submit } = props

  const [taxPercent, setTTaxPercent] = useState(preTax.toString())
  
  const handleSubmit = () => submit(taxPercent) 

  return (
    <>
      <SingleAppBarNavigator
      title='Tax Percent'
      iconFirst='checkbox-marked-circle-outline'
      submit={handleSubmit}
      navigateTo='MainScreen'/>

      <View style={Styles.input}>
        <TextInput 
          returnKeyType='done'
          keyboardType='numeric'
          value={taxPercent}
          style={Styles.textInput} 
          onChangeText={taxPercent => setTTaxPercent(taxPercent) }
        />
      </View>
    </>
  )
}
const mapDispatchToProps = (dispatch)  => ({
  submit: (taxPercent) => dispatch(settingTax(taxPercent)) 
});

const mapStateToProps = (state) => {
  return {
    preTax: taxPercentSelector(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TaxForm)
