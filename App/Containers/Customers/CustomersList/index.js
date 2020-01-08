/** Component to render the customers list and a button to add a new customer */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, IconButton, Colors, Searchbar } from 'react-native-paper';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { allCustomersSelector } from '../Selectors';
import BackAppBarNavigator from '../../../Navigators/BackAppBarNavigator';
import Styles from './Styles';
import { Divider } from 'react-native-paper';
import NavigationService from '../../../Services/NavigationService';
import { customerSelect } from '../Actions';

const AddCustomer = () => {
  return(
    <View >
      <List.Item
        style={{backgroundColor: '#315b96'}}
        titleStyle={{color:'white'}}
        title="Add new customer"
        onPress={ () => NavigationService.navigate('CustomerInputForm')}
        right={props => <List.Icon {...props} color="white" icon="plus-box" />}
      />
      <Divider />
    </View>
  )
}

const CustomersList = props => {

  const { allCustomers, selectCustomer } = props
  const [query, setQuery] = useState('')

  const searchedQuery = () => 
    Object.values(allCustomers).filter(customer =>
      customer.name.toLowerCase().includes(query))

  const noSearchResults = () =>
    query.length > 0  && searchedQuery().length == 0

  return(
    <View style={{backgroundColor: 'rgba(237, 237, 237, .6)', flex: 1}}>
      <BackAppBarNavigator 
        title="Customers list"
      />
       <Searchbar
        placeholder="Search customer"
        value={query}
        onChangeText={query => setQuery(query.toLowerCase())}
        />

       { noSearchResults() && <Text style={{margin: 15, color: '#315b96'}}>
         We're sorry, no customers were found for your search "{query}"
         </Text>}

      <View style={{backgroundColor: 'rgba(237, 237, 237, .6)', flex: 1}}>
        {AddCustomer()}
        
        <ScrollView style={Styles.container}>
        {( query? searchedQuery() : Object.values(allCustomers) ).map(customer => (
          <TouchableOpacity key={customer.customer_id}
          onPress={ () => {
            selectCustomer(customer)
            NavigationService.navigate('MainScreen')
          }}
          >
          <List.Item
            title={customer.name}
            description={customer.note}
            right={props => <IconButton
              color={Colors.blue900}
              size={20}
              onPress={() =>
                NavigationService.navigate('CustomerInfo', { 'customer': customer })}
                icon="dots-vertical" />}
          />
          </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>      
  )
}


const mapDispatchToProps = dispatch => ({
  selectCustomer: customer => 
    dispatch(customerSelect(customer)),
});

const mapStateToProps = state => {
  return {
    allCustomers: allCustomersSelector(state),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CustomersList);
