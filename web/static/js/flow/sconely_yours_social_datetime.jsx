// @flow

import React from 'react'
import { Link, browserHistory } from 'react-router'
//require('react-datepicker/dist/react-datepicker.css');
//import 'react-date-picker/index.css';
//import { DateField, Calendar } from 'react-date-picker';

var DatePicker = require('react-datepicker');
var moment = require('moment');

type Props = {
  //title: string,
  //visited: boolean,
  setDate: () => void,
  setTime: () => void,
};


export default class DateTime extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        selected_date: ""
        
    };
  }
   
  render(): React.Element {
    return (
      <div>
          <form className="form-horizontal">
            <div className="form-group">
              <label for="inputEmail3" className="col-sm-2 control-label"></label>
              <br/>
              <div className="col-sm-10">
                <b>Date Time</b>
                <br/>
                <DatePicker selected={this.props.selected_date} onChange={(value) => this.props.setDate(value)} />
                <br/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputEmail3" className="col-sm-2 control-label"></label>
              <br/>
              <div className="col-sm-10">
                <select onChange={(e) => this.props.setTime(e.target.value)}>
                    <option></option>
                    <option>9-11</option>
                    <option>3-5</option>
                </select>
                <br/>
              </div>
            </div>
        </form>
      </div>
    )
  }
}