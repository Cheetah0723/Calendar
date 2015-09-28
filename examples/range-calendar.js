import 'rc-calendar/assets/index.less';

import RangeCalendar from 'rc-calendar/src/RangeCalendar';
import GregorianCalendarFormat from 'gregorian-calendar-format';
import React from 'react';
var formatter = new GregorianCalendarFormat('yyyy-MM-dd HH:mm:ss');
import GregorianCalendar from 'gregorian-calendar';
import zhCn from 'gregorian-calendar/lib/locale/zh-cn';
import CalendarLocale from 'rc-calendar/src/locale/zh-cn';
import Picker from 'rc-calendar/src/Picker';

var value = new GregorianCalendar(zhCn);
value.setTime(Date.now());

function disabledDate(current) {
  var date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return current.getTime() < date.getTime();  //can not select days before today
}

function onChange(value) {
  console.log('onChange');
  console.log(value[0] && formatter.format(value[0]), value[1] && formatter.format(value[1]))
}

function onSelect(value) {
  console.log('onSelect');
  console.log(formatter.format(value[0]), formatter.format(value[1]))
}

function onOk(value) {
  console.log('onOk');
  console.log(formatter.format(value[0]), formatter.format(value[1]))
}

const Test = React.createClass({
  getInitialState(){
    const end = value.clone();
    end.addDayOfMonth(5);
    return {
      value: [value, end]
    };
  },

  onChange(value){
    if ((value[1].getTime() - value[0].getTime()) > 60 * 24 * 60 * 1000 * 10) {
      console.log('only last no more than 10 days');
      value[1] = value[0].clone();
      value[1].addDayOfMonth(10);
    }
    this.setState({value});
  },

  render(){
    const state = this.state;
    const calendar = <RangeCalendar showWeekNumber={false}
                                    locale={CalendarLocale}
      //defaultValue={[value]}
                                    formatter={formatter}
                                    disabledDate={disabledDate}
                                    showTime={true}/>;
    return (<Picker value={state.value} onChange={this.onChange} calendar={calendar}
                    style={{border:'1px solid red',cursor:'pointer'}}>
      {
        ({value}) => {
          return value ? <span>{formatter.format(value[0])} - {formatter.format(value[1])}</span> : '';
        }
      }
    </Picker>);
  }
});

React.render(
  <div>
    <h2>calendar (zh-cn)</h2>

    <div style={{margin:10}}>
      <RangeCalendar showWeekNumber={false}
                     locale={CalendarLocale}
        //defaultValue={[value]}
                     formatter={formatter}
                     onChange={onChange}
                     onSelect={onSelect}
                     onOk={onOk}
                     disabledDate={disabledDate}
                     showTime={true}/>
    </div>
    <br/>

    <div style={{margin:20}}>
      <Test />
    </div>
  </div>, document.getElementById('__react-content'));

