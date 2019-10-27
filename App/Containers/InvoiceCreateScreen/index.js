/** Create Invoice Main screen */
import React from 'react'
import InvoiceDateSection from '../InvoiceDateSection'
import AppBarNavigator from '../../Navigators/AppBarNavigator'
import styles from './Styles'
import { ScrollView, View } from 'react-native'

export default function MyComponent(){
  return(
    <>
     <AppBarNavigator />
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <InvoiceDateSection />
        </ScrollView>
      </View>
    </>
  )
}