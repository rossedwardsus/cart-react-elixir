import React from 'react'

import { connect } from 'react-redux'
//import { increase, decrease } from '../actions/count'


var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';

import { Link } from 'react-router';

import EventDetails from './sconely_social_event_details';
import Guests from './sconely_social_guests';
import ChooseMenu from './sconely_social_choose_menu';
import AdditionalItems from './sconely_social_additional_items';
import Code from './sconely_social_code';
import Payment from './sconely_social_payment';

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

export default class SconelySocial extends React.Component {
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
        guest_chooses: "",
        guest_responses: [],
        menu: [],
        additional_items: {},
        code: 0,
        order_total: 0,
        startDate: moment(),
        payment_method: ""

    };

    window.guest_chooses = "yes";

    this.changeEventName = this.changeEventName.bind(this);
    this.changeNumberOfGuests = this.changeNumberOfGuests.bind(this);
    this.changeDeliveryAddress = this.changeDeliveryAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.createCode = this.createCode.bind(this);

    //autosave
    //if event name has been added then start autosaving

    //myTimer;
    //var myVar = setInterval(
    //    () => 
            //get the data from state and upload to server
    //        console.log("hello")
    //, 10000);

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

    //alert("guests" + e.target.value);

    var total = e.target.value * 5;

    //alert(total);

    this.setState({number_of_guests: e.target.value});
    this.setState({order_total: total});

  }

  handleChange(dateString) {

    alert(dateString);

    //this.setState({
      //startDate: date
    //});
  }

  selectMenuItems(e){

    alert(e);

  }

  selectAdditionalItems(e){

    //alert(e);
    //order.menu.push({e});

  }

  saveAddress(e){

    //alert(e);
    //order.menu.push({e});

  }

  savepayment(e){

    //alert(e);
    //order.menu.push({e});

  }

  completeOrder(e){

    //alert(e);
    //order.menu.push({e});

    //check if event name and address and menu have been added

  }

  validateEventName(e){

    //20 charaters in length no spaces

    //alert(e);
    //order.menu.push({e});

  }

  createCode(custom_code){

    alert("create code" + custom_code);

    this.setState({custom_code: custom_code});

    //order.menu.push({e});
    //this code has akeary been taken

  }

  guestChooses(value){

    this.setState({guest_chooses: value});

  }


  next(){

    alert("next" + this.state.event_name);

  }

  render(): React.Element {
    return (
      <div>
        Welcome to Sconely Social.  
        <br/>
        <br/>
        <br/>
        With sconely Social you can order scones for an event.  Allow guests to choose as well.  A minimum of 16 scones is required.  You can change these details up to three days prior to the delivery date. 
        <br/>
        <br/>
        <br/>
        <EventDetails />
        <br/>
        <br/>
        <Guests changeNumberOfGuests={this.changeNumberOfGuests.bind(this)}/>
        <br/>
        <b>Choose items for the menu</b>
        <br/>
        <ChooseMenu selectMenuItems={this.selectMenuItems.bind(this)}/>
        <br/>
        <AdditionalItems />
        <br/>
        <br/>
        <Code createCode={this.createCode.bind(this)}/ >
        <br/>
        <br/>
        <b>Total</b>
        <br/>
        { this.state.order_total }
        <br/>
        <br/>
        <Payment total={this.state.order_total}/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

//export default connect(
//  state => ({ 
//       event_id: state.count.number 
//             
//
//
//   }),
//  { increase, decrease }
//)(Home)