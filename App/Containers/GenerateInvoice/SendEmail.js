import Mailer from 'react-native-mail';
import React from 'react';
import { Alert } from 'react-native';
import HtmlEmailTemplate from './HtmlEmailTemplate'
const sendEmail = ( {customer, user, filePath }) => {
  Mailer.mail({
      subject: 'Invoice',
      recipients: [customer.email],
      ccRecipients: [user.email],
      body: HtmlEmailTemplate(customer, user),
      isHTML: true,
      attachment: {
        path: `${filePath}`, 
        type: 'pdf', 
        name: 'Invoice',
      }
    }, (error, event) =>   Alert.alert(
      'Your invoice',
      `${event}`,
      [
        {text: 'ok'},      
      ],
      {cancelable: false},
    )
    )
  
}
export default sendEmail
