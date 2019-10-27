/** Main Container for date section */

import React, { Component } from 'react'
import DateSection from '../../Components/DateSection'
import moment from 'moment'
import DateContext from '../../Services/DateSectionContext'


export default class MyComponent extends Component {
  constructor(props) {
    super(props)
      this.state = {
        todayDate: '',
        dueDate: '',
        isDueDate: true,
        errors: {
          todayDate: false,
          dueDate: false,
        },
      }
  }
  
  componentDidMount() { 
    this.setState({ 
    todayDate: moment(new Date()).format('ll'),
    dueDate: moment(new Date()).format('ll')
  })
}
  
  changeIsDueDate = isDueDate => { 
    !isDueDate,
    this.setState( prevState => ({
      errors: {                   
          ...prevState.errors,    
          todayDate: false,
      }
    }))
   }

  changeDueDate = dueDate => { 
   let  checkDates = moment(this.state.todayDate).isBefore(dueDate)
   checkDates
    ? this.setState( prevState => ({
      dueDate,
      errors: {                   
          ...prevState.errors,    
          dueDate: false      
      }
    })) 
    : this.setState( prevState => ({
      errors: {                   
          ...prevState.errors,    
          dueDate: 'Due Date should be after Invoice date'      
      }
    }))
      
    return checkDates
  }

  

  changeTodayDate = todayDate => { 
    let checkDates = moment(this.state.dueDate).isAfter(todayDate)
    checkDates
      ? tthis.setState( prevState => ({
        todayDate,
        errors: {                   
            ...prevState.errors,    
            todayDate: false      
        }
      })) 
      : this.setState( prevState => ({
        errors: {                   
            ...prevState.errors,    
            todayDate: 'Invoice Date should be before Due Date' 
        }
      }))

    return checkDates
    }  

  render () {
    const contextValue = {
      errors: this.state.errors,
      isDueDate: this.state.isDueDate,
      changeIsDueDate: this.changeIsDueDate,
      todayDate: this.state.todayDate,
      dueDate: this.state.dueDate,
      changeDueDate: this.changeDueDate,
      changeTodayDate: this.changeTodayDate,
      };
    
    return (
      <DateContext.Provider value={ contextValue }>
        <DateSection />
      </DateContext.Provider>
    )
  }
}

