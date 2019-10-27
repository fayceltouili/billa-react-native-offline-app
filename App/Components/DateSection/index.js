import * as React from 'react'
import { List, Caption, Divider } from 'react-native-paper'
import DatePicker from './DatePicker'
import { View, Text, Switch, TextInput } from 'react-native'
import DateContext from '../../Services/DateSectionContext'
import HrLine from '../../Components/HrLine'
import Styles from './Styles'
import InputerrorMsg from '../../Components/InputErrorMsg' 

class MyComponent extends React.Component {
  static contextType = DateContext
  state = {
    expanded: true,
    isSwitchOn: false,
    switchText: 'Remove Due Date',
    borderBottomWidth: 0,
    }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    })


  render() {
    const { dueDate, todayDate, changeIsDueDate, isDueDate, errors } = this.context
    const { isSwitchOn } = this.state;

    return (
      
        <List.Accordion
          title={todayDate}
          titleStyle={{color: '#383838'}}
          description={`Due on ${dueDate}`}
          expanded={this.state.expanded}
          onPress={this._handlePress}
        >
          <Divider />

          <Caption style={{marginLeft: 15}}>Date</Caption>
          <DatePicker dateType={'TodayDate'}/>
          { errors.todayDate && <InputerrorMsg msg={errors.todayDate}/>}
          <HrLine />

          { !this.state.isSwitchOn &&
            <View>
            <Caption style={{marginLeft: 15}}>Due date</Caption>
            <DatePicker dateType={'dueDate'}/>
            { errors.dueDate && <InputerrorMsg msg={errors.dueDate}/>}
            <HrLine/>
            </View>
          }
          <View style={{flexDirection:'row', flexWrap:'wrap', margin: 15}}>
            <Text style={{ flex: 1, color: '#383838'}}> {isSwitchOn? 'Add Due Date' :'Remove Due Date'}</Text>
            <Switch
            value={ isSwitchOn }
            onValueChange={() =>
              { this.setState({ isSwitchOn: !isSwitchOn })
               changeIsDueDate(!isDueDate)
               }}
            />

          </View>
         

          </List.Accordion>
    );
  }
}

export default MyComponent;
