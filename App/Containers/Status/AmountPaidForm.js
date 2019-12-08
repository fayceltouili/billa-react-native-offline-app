/**
 *  Form to update paid amount
 */
import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import Styles from './Styles'
import SingleAppBarNavigator from '../../Navigators/SingleAppBarNavigator'
import { connect } from 'react-redux'
import { settingPaidAmount } from './Actions'
import { amountPaidSelector } from './Selectors'


const AmountPaidForm = props => {

  const { preAmount, submit } = props
  const [amountPaid, setAmountPaid] = useState(preAmount.toString())

  const handleSubmit = () => submit(amountPaid)

  return (
    <>
      <SingleAppBarNavigator
        title='Paid amount'
        iconFirst='checkbox-marked-circle-outline'
        submit={handleSubmit}
        navigateTo='MainScreen'
        />

      <View style={Styles.input}>
        <TextInput 
          value={amountPaid}
          returnKeyType='done'
          keyboardType='numeric'
          style={Styles.textInput} 
          onChangeText={amountPaid => setAmountPaid(amountPaid) }
        />
      </View>
    </>
  )
}
const mapDispatchToProps = dispatch => ({
  submit: amountPaid =>
    dispatch(settingPaidAmount(amountPaid)) 
});

const mapStateToProps = state => {
  return {
    preAmount: amountPaidSelector(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AmountPaidForm)
