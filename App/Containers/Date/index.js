/** Main Container for date section */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { List, Divider, Caption } from 'react-native-paper';
import {  dueDateSelector, issueDateSelector } from '../../Selectors';
import { removeDueDate, setInvoiceDate, setDueDate } from './Actions';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const  DateComponent = props => {

  const { 
    issueDate,
    dueDate,
    handleRemoveDueDate,
    handleIssueDate,
    handleDueDate,
  } = props;

  const [expanded, setExpanded] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateType, setDayType] = useState('');


  const toggle = () => isSwitchOn ? setIsSwitchOn(false) : setIsSwitchOn(true);

  const showDatePicker = () => setDatePickerVisibility(true);
  
  !isSwitchOn ? handleRemoveDueDate() : null;


  return (
    <List.Accordion
      title={ moment.parseZone(issueDate).format('ll')}
      titleStyle={{fontFamily:'PalanquinDark-Regular'}}
      descriptionStyle={{fontFamily:'PalanquinDark-Regular'}}
      description={dueDate && `Due on ${moment.parseZone(dueDate).format('ll')}`}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}
    >
      <Divider />
      <Text
      style={{marginLeft: 15, fontFamily: 'PalanquinDark-Regular',}}
      > EDIT THE DATES</Text>
      <TouchableOpacity
      
        onPress={() => {
        setDayType('issueDate')
        showDatePicker()}}>
      <Caption style={{margin: 15}}>
      <Icon 
        name="calendar-edit"
        color="#851de0"
        size={15} />
         ISSUED DATE  {moment.parseZone(issueDate).format('ll').toUpperCase()}
      </Caption>
      </TouchableOpacity>


      { isSwitchOn &&
        <TouchableOpacity onPress={() => {
          setDayType('dueDate')
          showDatePicker()}}>
        <Caption style={{marginLeft: 15}}>
          <Icon 
          name="calendar-edit"
          color="#851de0"
          size={15} />
          DUE DATE       {moment.parseZone(dueDate).format('ll').toUpperCase()}</Caption>
        </TouchableOpacity>

      }
      <View style={{flexDirection:'row', flexWrap:'wrap', margin: 15}}>
        <Text style={{ flex: 1, color: '#383838'}}> {isSwitchOn? 'Remove Due Date' :'Add Due Date'}</Text>
        
        <Switch
        trackColor={{false: '#53759E', true: '#53759E'}}
        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
        value={isSwitchOn}
        onValueChange={() => toggle()}
        />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        headerTextIOS={dateType === 'dueDate'? 'Pick due date': 'Pick issue date'}
        onConfirm={date => {
              setDate(date)
              dateType === 'dueDate'
                ? handleDueDate(date)
                : handleIssueDate(date)
                setDatePickerVisibility(false)
            }}
        onCancel={() => setDatePickerVisibility(false)}
      />
    </List.Accordion>

  )
}

const mapDispatchToProps = dispatch=> ({
  handleRemoveDueDate: () => dispatch(removeDueDate()),
  handleIssueDate: date => dispatch(setInvoiceDate(date)),
  handleDueDate: date => dispatch(setDueDate(date)),
});

const mapStateToProps = state => {
  return {
    dueDate: dueDateSelector(state),
    issueDate: issueDateSelector(state),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DateComponent);
