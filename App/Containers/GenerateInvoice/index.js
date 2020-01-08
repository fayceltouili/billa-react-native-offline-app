/**
 *  Component responsible to generate, send and prind invoices
 */

import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { IconButton, Portal } from 'react-native-paper';
import Styles from './Styles';
import NavigationService from '../../Services/NavigationService';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import generateHTML from './InvoiceHTML';
import { connect } from 'react-redux';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { clearingItems } from '../Items/Actions';
import RNPrint from 'react-native-print';
import Loading from './Loading';
import Mailer from 'react-native-mail';
import HtmlEmailTemplate from './HtmlEmailTemplate';
import { clearCart, updateStockBatch } from '../Stock/Actions';
import { stockSelector, cartSelector } from '../Stock/Selectors';
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
  dueDateSelector,
  issueDateSelector,
  customerSelector,
  userSelector,
} from '../../Selectors';



const InvoiceTools = props => {

  const { customer, user, updatingStock, clearInvoice } = props;

  const [selectedPrinter, setSelectedPrinter] = useState()
  const [loading, setLoading] = useState(false)

  const createPDF = async (flag) => {
    let options = {
      html: `${generateHTML(props)}`,
      fileName: 'invoice',
      directory: 'Documents',
      height: 841,
      width: 595,
      fonts: [resolveAssetSource(require('../../../assets/fonts/PalanquinDark-Regular.ttf')).uri],
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath)

    if(flag === 'preview')
      NavigationService.navigate('PreviewPdf', { source: file.filePath });


    else if (flag === 'send'){
      Mailer.mail({
        subject: 'Invoice',
        recipients: [customer.email],
        ccRecipients: [user.email],
        body: HtmlEmailTemplate(customer, user),
        isHTML: true,
        attachment: {
          path: `${file.filePath}`, 
          type: 'pdf', 
          name: 'Invoice',
        }
      }, (error, event) => Alert.alert(
        'Mail',
        `${event}`,
        [
          {text: 'ok'},      
        ],
        {cancelable: false},
      ))
      clearInvoice()
    }
    else if ( flag === 'print'){

      try{
        const selectedPrinter = await RNPrint.selectPrinter({ x: 100, y: 100 })
        setSelectedPrinter(selectedPrinter)
        await RNPrint.print({ filePath: file.filePath })
        updatingStock()
        clearInvoice()
        
      } catch(err){}
    }
  }
  if (loading) return( <Loading/> )
  return(
    <Portal style={Styles.portal}>
      <View style={Styles.container}>

        <View style={Styles.icon}>
          <IconButton
            icon="eye"
            color='white'
            size={15}
            animated={true}
            onPress={() => {
              setLoading(true)
              createPDF('preview')
              setLoading(false)
            }}/>
          <Text style={Styles.text}>Preview</Text>
        </View>

        <View style={Styles.icon}>
          <IconButton
            icon="send"
            color='white'
            size={15}
            onPress={() => {
              setLoading(true)
              createPDF('send')
              setLoading(false)
            }}/>
          <Text style={Styles.text}>Send</Text>
        </View>

        <View style={Styles.icon}>
          <IconButton
            icon="printer-wireless"
            color='white'
            size={15}
            onPress={() => {
              setLoading(true)
              createPDF('print')
              setLoading(false)
            }}/>
          <Text style={Styles.text}>Print</Text>
        </View>

      </View>
    </Portal>
  )
}
const mapDispatchToProps = dispatch => ({
  clearInvoice: () =>  {
    dispatch(updateStockBatch())
    dispatch(clearCart())
    dispatch(clearingItems())
  }
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
    dueDate: dueDateSelector(state),
    issueDate: issueDateSelector(state),
    customer: customerSelector(state),
    user: userSelector(state),
    cart: cartSelector(state),
    stock: stockSelector(state),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(InvoiceTools);
