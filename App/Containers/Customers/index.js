import React from 'react'
import { connect } from 'react-redux'
import { List, Divider } from 'react-native-paper';
import { View, Text } from 'react-native'
import Styles from './Styles'
import NavigationService from '../../Services/NavigationService'
import { customerSelector } from './Selectors'

const Customers = ({ customer }) => {

  return(
    <View style={Styles.container}>
      <Text style={Styles.titleText}>BILL TO</Text>
      <List.Section style={{marginTop: -10, marginBottom: -10}}>
        <List.Item
          title={  customer ? customer.name: "Select Customer" }
          titleStyle={{fontFamily:'PalanquinDark-Regular'}}
          description= { customer? customer.note: ""  }
          onPress={ () => NavigationService.navigate('CustomersList')}
        />
      </List.Section>
      <Divider />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    customer: customerSelector(state),    
  }
}

export default connect(
  mapStateToProps,
  )(Customers)
