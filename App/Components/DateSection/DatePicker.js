/** Render date [icker] */

import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import DateContext from '../../Services/DateSectionContext'

export default class MyDatePicker extends Component {
  static contextType = DateContext
  constructor(props){
    super(props)
    this.state = {
      date: moment(Date.now()).format('YYYY-MM-DD'),
    }
  }

  render(){
    const dateProps = this.context
    return (
      <DatePicker
        style={{width: 200, marginLeft: 15}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: {
            marginLeft: -120,
            borderWidth: 0,
            color: 'red'
          },
          dateText: {
          }
        }}
        onDateChange={(date) => {
          this.props.dateType === 'dueDate'
            ? dateProps.changeDueDate(date)
                ? this.setState({ date })
                : null
            : dateProps.changeTodayDate(date)
                ? this.setState({ date })
                : null
        }}
      />
    )
  }
}
