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

//var myTimer = () => console.log("hello");

/*setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);*/

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

    //autosave
    //if event name has been added then start autosaving

    //myTimer;
    var myVar = setInterval(
        () => 
            //get the data from state and upload to server
            console.log("hello")
    , 10000);

    //myVar;
    //myTimer;

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
        Welcome to Sconely Social.  With sconely Social you can order scones for an event.  Allow guests to choose as well.  A minimum of 16 scones is required.  You can change these details up to three days prior to the delivery date. 
        <br/>
        To get start please tell us about your event:
        <br/>
        Event Name
        <br/>
        <input type= "text" onChange={this.changeEventName}/>
        <br/>
        Event datetime:
        <br/>
        <DatePicker inline selected={this.state.startDate} onChange={this.handleChange} />
        <br/>
        Or
        <br/>
        <Calendar dateFormat="YYYY-MM-DD" date={'2017-04-24'} onChange={this.handleChange}/>
        <br/>
        Event Time
        <br/>
        Delivery Time
        <br/>
        Event address:
        <br/>
        Select from existing address or add a new one
        <br/>
        <input type= "text" onChange={this.changeDeliveryAddress}/>
        <br/>
        <br/>
        Add an image for this event:
        <br/>
        <br/>
        Guests-You will be given a code to share with your guests.  You must tell your guests about any updates to the order:
        <br/>
        Enter an event code to send to your guests:
        <br/>
        <input type= "text"/>
        <br/>
        Number of guests:
        <br/>
        <input type= "text" onChange={this.changeNumberOfGuests}/>
        <br/>
        <br/>
        Guests choose item:
        <br/>
        <input type= "text"/>
        <br/>
        What guests have chosen
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
        <br/>
        <input type= "text"/>
        <br/>
        <button onClick={this.next.bind(this)}>Next</button>
      </ul>
    )
  }
}