/** Invoice status picker */

import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import {
  invoiceStatusSelector,
  taxPercentSelector,
  subTotalSelector,
  taxSelector,
  totalSelector,
  itemsSelector,
  amountPaidSelector,
  amountDueSelector,
  discountsSelector,
} from '../../Selectors';
import NavigationService from '../../Services/NavigationService';
import {
  settingStatus,
  settingPaidAmount,
  settingDuemount,
} from './Actions';
import RNPickerSelect from 'react-native-picker-select';

const  InvoiceStatus = props => {

  const {
    invoiceStatus,
    amountPaid,
    amountDue,
    discounts,
    taxPercent,
    tax,
    subTotal,
    handleChangingStatus,
    total
  } = props;
  
  const placeholder = {
    label: 'Select Status',
    value: 'Select Status',
    fontFamily:'BalooBhai-Regular',
  };
 
  return (
    <View >

      {/* amounts section */}
      <TouchableOpacity style={Styles.paidAmountContainer}
        onPress={() => NavigationService.navigate('PaidAmount')}>
        <Text style={Styles.title}> PAID AMOUNT [ tap to edit ]</Text>
        <Text style={Styles.values}>${amountPaid.toFixed(2)}</Text>
        </TouchableOpacity>


    {/* total section */}
      <View style={Styles.total}>
        <View  style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={Styles.totalTitle}>SUBTOTAL</Text>
          <Text style={Styles.totalValues}>${subTotal.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={{flexDirection:'row', flexWrap:'wrap'}}
          onPress={() => NavigationService.navigate('TaxInput')}>

          <Text style={Styles.totalTitle} icon='pencil-outline'>TAX (%{taxPercent}) [ tap to edit ]</Text>
          <Text style={Styles.totalValues}>${tax.toFixed(2)}</Text>

        </TouchableOpacity>

        <View  style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={Styles.totalTitle}>DISCOUNTS</Text>
          <Text style={Styles.totalValues}>${discounts.toFixed(2)}</Text>
        </View>

        <View  style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={Styles.totalTitle}>TOTAL</Text>
          <Text style={Styles.totalValues}>(USD) ${(total - discounts ).toFixed(2)}</Text>
        </View>

        <View  style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={Styles.totalTitle}>PAID</Text>
          <Text style={Styles.totalValues}>${amountPaid.toFixed(2)}</Text>
        </View>

        <View  style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text style={Styles.totalTitle}>AMOUNT DUE</Text>
          <Text style={Styles.totalValues}>(USD) ${amountDue.toFixed(2)}</Text>
        </View>
      </View>  

      {/* // bill status section */}

      <View style={Styles.paidAmountContainer}>
        <Text style={Styles.title}>BILL STATUS ✎</Text>
        <View style={{marginBottom: 100}}>
          <RNPickerSelect
            placeholder={placeholder}
            value={amountDue === 0 ? 'Paid' : invoiceStatus}
            style={Styles.values}
            onValueChange={ status => {
              handleChangingStatus(status)
              }
            }
            items={[
              { label: 'Paid', value: 'Paid' },
              { label: 'Due', value: 'Due' },
              { label: 'OverDue', value: 'OverDue' },
              { label: 'On Hold', value: 'On Hold' },
            ]}/>
        </View>
      </View>
    </View>
    
  )
}

const mapDispatchToProps = dispatch => ({
  handleChangingStatus: invoiceStatus => 
    dispatch(settingStatus(invoiceStatus)),
  handleChangingPaidAmount: amountPaid => 
    dispatch(settingPaidAmount(amountPaid)),
  handleChangingPaidAmount: amountDue => 
    dispatch(settingDuemount(amountDue)),
});

const mapStateToProps = state => {
  return {
    invoiceStatus: invoiceStatusSelector(state),
    amountPaid: amountPaidSelector(state),
    amountDue: amountDueSelector(state),
    items: itemsSelector(state),
    taxPercent: taxPercentSelector(state),
    tax: taxSelector(state),
    total: totalSelector(state),
    subTotal: subTotalSelector(state),
    discounts: discountsSelector(state),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(InvoiceStatus);
