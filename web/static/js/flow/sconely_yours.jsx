import React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';

//const onChange = (dateString, { dateMoment, timestamp }) => {
  //console.log(dateString)

//  alert();
//}

export default class SconelyYours extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        event_name: "",
        event_datetime: "",
        event_address: "",
        number_of_guests: 0,
        guest_choose: "",
        additiobal_items: {},
        code: 0,
        startDate: moment()

    };

    this.changeEventName = this.changeEventName.bind(this);
    this.changeNumberOfGuests = this.changeNumberOfGuests.bind(this);
    this.changeDeliveryAddress = this.changeDeliveryAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}

  changeEventName(e){

    //alert();

    this.setState({event_name: e.target.value})

  }

  changeDeliveryAddress(e){

    this.setState({delivery_address: e.target.value})

  }

  changeNumberOfGuests(e){

    this.setState({number_of_guests: e.target.value})

  }

  handleChange(dateString) {

    alert(dateString);

    //this.setState({
      //startDate: date
    //});
  }

  next(){

    alert("next" + this.state.event_name);

  }

  render(): React.Element {
    return (
      <ul>
        Welcome to Sconely Yours.  With sconely yours you can order scones for an event.
        <br/>
        To get start please tell us about your event:
        <br/>
        Event Name
        <br/>
        <input type= "text" onChange={this.changeEventName}/>
        <br/>
        Event datetime:
        <br/>
        <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
        <br/>
        Or
        <br/>
        <Calendar dateFormat="YYYY-MM-DD" date={'2017-04-24'} onChange={this.handleChange}/>
        <br/>
        Event Time
        <br/>
        Delivery Time
        <br/>
        To get start please enter an address:
        <br/>
        Select from existing address or add a new one
        <br/>
        <input type= "text" onChange={this.changeDeliveryAddress}/>
        <br/>
        <br/>
        <br/>
        Please tell us about your guests:
        <br/>
        Enter an event code to send to your guests:
        <br/>
        <input type= "text"/>
        <br/>
        To get start please enter number of guests:
        <br/>
        <input type= "text" onChange={this.changeNumberOfGuests}/>
        <br/>
        To get start please decide if guests choose item:
        <br/>
        <input type= "text"/>
        <br/>
        <br/>
        Extra items
        <br/>
        To get start please choose extra items:
        <br/>
        <input type= "text"/>
        <br/>
        <br/>
        Now choose a payment
        <br/>
        To get start please enter a payment method:
        <br/>
        <input type= "text"/>
        <br/>
        <button onClick={this.next.bind(this)}>Next</button>
      </ul>
    )
  }
}