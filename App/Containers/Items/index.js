import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List, Divider } from 'react-native-paper';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import NavigationService from '../../Services/NavigationService';
import { itemsSelector, taxPercentSelector } from '../../Selectors'

const  displayItems = ({ items, taxPercent }) => {

const [expanded, setExpanded] = useState(false);

return(
    <View >
       <List.Accordion
        title="Add items to Cart"
        titleStyle={{fontFamily:'PalanquinDark-Regular'}}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}

      >
        <List.Item title="Scan products"
          style={{marginTop: -20}}
          titleStyle={Styles.buttonText}
          onPress={() => NavigationService.navigate('Scan', { operation : 'AddToCart' })}
          left={props => <List.Icon {...props} icon="barcode-scan"  color="#315b96"/>}
          />

        <List.Item title="Add a custom product or service"
          style={{marginTop: -20}}
          titleStyle={Styles.buttonText}
          onPress={() => NavigationService.navigate('AddItem')}
          left={props => <List.Icon {...props} icon="plus-circle-outline"  color="#315b96"/>}
          />


      </List.Accordion>
      <Divider style={{marginBottom: 20, marginTop:10}}/>


      {Object.values(items).map( item =>
        <TouchableOpacity
        key={item.name}
        onPress={() => NavigationService.navigate('EditItem', { item: item })}>

          <View style={Styles.items}> 
            <Text style={Styles.itemName}>{item.name}</Text>
            <Text style={Styles.details}>{item.quantity} x ${(+item.price).toFixed(2)}</Text>
            <Text style={Styles.details}>Discount: ${(+item.discount).toFixed(2) || 0}</Text>
            <Text style={Styles.details}>Tax: ${item.taxed? (+(item.amount * taxPercent)/100).toFixed(2) : 0}</Text>
            <Text style={Styles.details}>
              Subtotal: ${(+item.amount - item.discount + (item.taxed? (item.amount * taxPercent)/100 : 0)).toFixed(2)}
            </Text>
          </View> 
        </TouchableOpacity>
        )}
    </View>
  )
}


const mapDispatchToProps = dispatch  => ({
  handleClick: itemName => {
    dispatch(fetchCustomer(itemName))
    NavigationService.navigate('CustomerInfo')
  },
});

const mapStateToProps = state => {
  return {
    items: itemsSelector(state),
    taxPercent: taxPercentSelector(state),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(displayItems);
