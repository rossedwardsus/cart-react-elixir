// @flow

import React from 'react'
import { Link, browserHistory } from 'react-router'
require('react-datepicker/dist/react-datepicker.css');
import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';

export default class DateTime extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        items: [{item_id: 1}]
        
    };
  }
   
  render(): React.Element {
    return (
      <div>
          <form className="form-horizontal">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">Date Time</label>
            <label for="inputEmail3" className="col-sm-2 control-label">
                <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
            </label>
            <label for="inputEmail3" className="col-sm-2 control-label">Time<input type="radio" name="time"/>
            </label>
            <div className="col-sm-5">
                <select>
                    <option></option>
                    <option>9-11</option>
                    <option>3-5</option>
                </select>
                <br/>
            </div>
            <br/>
          </div>
        </form>
      </div>
    )
  }
}