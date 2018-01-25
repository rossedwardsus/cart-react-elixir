
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import {deliveryAddressValidated} from './actions/cart_validations.ts';

//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//const Immutable  = require('immutable');

//import {setDeliveryAddressStreet1, setDeliveryAddressStreet2, setDeliveryAddressCity, setDeliveryAddressState, setDeliveryAddressZipcode} from './actions/order_delivery_address.ts';

var DayPickerInput = require("react-day-picker/DayPickerInput");

var moment = require('moment');


function addTodoWithDispatch() {
  const action = {
    type: "VIEW_PUBLIC_MENU",
    //text
  }
  //dispatch(action)
}

export interface HelloProps { 
    compiler: string; 
    framework: string; 
}

declare var module: { Order: any };

interface Order {
  state: any,
  props: any,
  //completed: boolean
}

class CollectionDeliveryDateTime extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        deliveryDate: "",
        deliveryTime: "",
    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
   
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount(){

    /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
    this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
    this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
    this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});
    this.setState({street1: this.props.User.deliveryContactsAddresses[0].street1});
    this.setState({street2: this.props.User.deliveryContactsAddresses[0].street2});
    this.setState({city: this.props.User.deliveryContactsAddresses[0].city});
    this.setState({state: this.props.User.deliveryContactsAddresses[0].state});
    this.setState({zipcode: this.props.User.deliveryContactsAddresses[0].zipcode});*/
    //this.setState({street2: this.props.User.orders[0].deliverydate.street2});

  }

  componentWillReceiveProps = () => {

    //if(this.props.User.orders[0].giftOrder == false){
      
      //check if props.giftOrder: true or false

      /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
      this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
      this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
      this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});
      //this.setState({street1: this.props.deliveryAddress.street1})
      //this.setState({street2: this.props.deliveryAddress.street2})*/

    /*}else{

      this.setState({contact_first_name: ""});
      this.setState({contact_last_name: ""});
      this.setState({contact_email: ""});
      this.setState({contact_mobile: ""});

      this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
      this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
      this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
      this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});
    

    }*/

  }

  /*setDeliveryContactAddressFirstName = (e: any) => {

      //strip out -
      //check if only number

      //if larger then 3 append "-"

      this.setState({contact_first_name: e.target.value});
      this.props.setDeliveryContactAddressFirstName(e);


      // /^[a-zA-Z]*$/
      let first_name_result = (/^[a-zA-Z]*$/.test(e.target.value));
      console.log(first_name_result);

      if(first_name_result){

          this.setState({first_name_border_color: "grey"});
          
      }else{
          
          this.setState({first_name_border_color: "red"});

      }
         
          //this.props.setDeliveryContactAddressFirstName(e);
          
  }

  setDeliveryContactAddressLastName = (e: any) => {

      //strip out -
      //check if only number

      this.setState({contact_last_name: e.target.value});
      this.props.setDeliveryContactAddressLastName(e);


     // /^[a-zA-Z]*$/
      let last_name_result = (/^[a-zA-Z]*$/.test(e.target.value));

      if(last_name_result){

          this.setState({last_name_border_color: "grey"});

          this.props.setDeliveryContactAddressLastName(e);

      }else{
          
          this.setState({last_name_border_color: "red"});

      }
         
          //this.props.setDeliveryContactAddressFirstName(e);

  }

  setDeliveryContactAddressEmail = (e: any) => {

      //this.setState({contact_email: e.target.value})
      //this.props.setOrderDeliveryContactAddressEmail(e);
      //complete order gets the information from user
      
      this.props.setDeliveryContactAddressEmail(e);
      this.setState({contact_email: e.target.value});
                        


      //let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      let number_res = (/[0-9]/.test(e.target.value));

      //let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //return re.test(email);

      //console.log(/[0-9]/.test(e.target.value));

      //larger then 0
      //no symbols
      //no numbers

      //if(e.target.value.length > 0){

          //can only have _ .
          //after @ at least one characted . then domain

          //if(symbol_res == false){
            let address = e.target.value.split("@")[0];
            let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
            let symbol_result = symbol_patt.test(address);

            if(!symbol_result){

                //if(e.target.value.split("@")[1].split(".")[0].length > 0){

                  //  if(e.target.value.split("@")[1].split(".")[1].length > 1){

                        //cant enter symbols????  or numbers
          
          
                        //if email contains @ and at least one character and 2 character domain
                        //validate contact and emails are same
                    
                        this.setState({email_border_color: "grey"});

                        //this.props.setContactEmail(e);
                        //this.props.setDeliveryContactAddressEmail

                        console.log("delivery contact email ok")

                  //  }

                //}

            //}

            }else{

                //console.log("email ok")

              this.setState({contact_email: e.target.value})
              this.setState({"email_border_color": "red"});

            }
      
      //}

  }

  setDeliveryContactAddressEmailAgain = (e: any) => {

      this.setState({contact_email_again: e.target.value});

      //strip out -
      //check if only number

      //if larger then 3 append "-"*/

      /*let mobile_number = e.target.value.replace("_", "");
      let number_res = (/[0-9]/.test(mobile_number));

            //this.props.setContactMobile(e);

      if(number_res == true){

          //validate contact
          //else invalatidate

      }*/

      //this.props.setDeliveryContactAddressEmail(e);

  /*}

  setDeliveryContactAddressMobile = (e: any) => {

      //strip out -
      //check if only number

      //if larger then 3 append "-"

      let mobile_number = e.target.value.replace("-", "");
      let number_result = (/[0-9]/.test(mobile_number));

      this.props.setDeliveryContactAddressMobile(e);

      if(number_result){

        this.setState({user_mobile_border_color: "grey"});


        if(e.target.value.length == 3){

            //console.log("here1");

            this.setState({contact_mobile_displayed: e.target.value + "-"});
            
        }else if(e.target.value.length == 7){

            this.setState({contact_mobile_displayed: e.target.value + "-"});

        }else if(e.target.value.length == 12){

            console.log("delivery email/mobile validated");
            this.setState({contact_mobile_displayed: e.target.value});

            //this.props.userNameEmailMobileValidated();

        }else{

            //console.log("here3 " + e.target.value);

            this.setState({contact_mobile_displayed: e.target.value});

        }

      }else{

          this.setState({contact_mobile_displayed: e.target.value});
          this.setState({user_mobile_border_color: "red"});

      }


      //this.props.setDeliveryContactAddressMobile(e);

  }

  setDeliveryContactAddressCompanyName = (e: any) => {

      this.props.setDeliveryContactAddressCompanyName(e);

      // /^[a-zA-Z]*$/
      //let company_name_result = (/^[a-zA-Z]*$/.test(e.target.value));

      //if(company_name_result){

      //    this.setState({company_name_border_color: "grey"});

          //this.props.setDeliveryContactAddressCompanyName(e);

      //}else{
          
      //    this.setState({company_name_border_color: "red"});

      //}
         
          //this.props.setDeliveryContactAddressFirstName(e);

  }
  
  setDeliveryContactAddressStreet1 = (e: any) => {

      this.setState({street1: e.target.value});
      this.props.setDeliveryContactAddressStreet1(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();*/

      // /^[a-zA-Z]*$/
      /*let street1_result = (/^[0-9a-zA-Z\s]+$/.test(e.target.value));

      if(street1_result){

          this.setState({street1_border_color: "grey"});

          //this.props.setDeliveryContactAddressStreet1(e);

      }else{
          
          this.setState({street1_border_color: "red"});

      }*/
         
          //this.props.setDeliveryContactAddressFirstName(e);

  /*}

  setDeliveryContactAddressStreet2 = (e: any) => {

      this.setState({street2: e.target.value});
      this.props.setDeliveryContactAddressStreet2(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();*/

      /*let street2_result = (/^[a-zA-Z]*$/.test(e.target.value));

      if(street2_result){

          this.setState({street2_border_color: "grey"});

          //this.props.setDeliveryContactAddressStreet2(e);

      }else{
          
          this.setState({street2_border_color: "red"});

      }*/

  /*}
  

  setDeliveryContactAddressCity = (e: any) => {

      this.setState({city: e.target.value});
      this.props.setDeliveryContactAddressCity(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }


  setDeliveryContactAddressState = (e: any) => {

      this.setState({state: e.target.value});
      this.props.setDeliveryContactAddressState(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

  setDeliveryContactAddressZipcode = (e: any) => {

      this.setState({zipcode: e.target.value});
      this.props.setDeliveryContactAddressZipcode(e);

      let dtla = [90012, 90014, 90017, 90074, 90071, 90081, 90012, 90013, 90017, 90012, 90053, 90014, 90015, 90021, 90079, 90055, 90012, 90014, 90071, 90012, 90015, 90017, 90021, 90086]

      let sm = [90291, 90401, 90402, 90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411]

      //console.log("e" + e.target.value);
      //console.log("dtla" + dtla.indexOf(parseInt(e.target.value)));
      //console.log("sm" + sm.indexOf(parseInt(e.target.value)));


      /*if(dtla.indexOf(parseInt(e.target.value)) > -1){

          this.props.setDeliveryCost(0);

      }else if(sm.indexOf(parseInt(e.target.value)) > -1){

          this.props.setDeliveryCost(10);

      }*/

      //this.props.setDeliveryAddressZipcode(e);
      //set location for delivery time

      //if street1 street2 city state*/
  //    this.props.deliveryContactAddressValidated();

  //}

  zipcodeAutocomplete = (e: any) => {

      let sm = ["90291", "90401", "90402", "90403", "90404", "90405", "90406", "90407", "90408", "90409", "90410", "90411"]

      //function matchPeople(e.target.value: any) {
        let reg = new RegExp(e.target.value.split('').join('\\w*').replace(/\W/, ""), 'i');
        let result = sm.filter((s: any) => {
          if (s.match(reg)) {

            return s;

            //console.log("ok ");
            //console.log("yes");

            //this.setState({zipcode_border_color: "grey"});

          //}else{

            //console.log("no");

            //this.setState({zipcode_border_color: "red"});

          }
        });

        console.log(JSON.stringify(result));

      //}

  }

  setOrderNote = (e: any) => {

      this.setState({order_note: e.target.value});
      this.props.setOrderNote(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

  setGiftOrder = (e: any) => {

      if(this.state.gift_order_checked == ""){

          console.log("hello");

          this.setState({gift_order_checked: "checked"});
          this.setState({delivery_contact_label: "Recipient Delivery Contact"});
          this.setState({delivery_address_label: "Recipient Delivery Address"});

          //this.props.setGiftOrder(true);
          //this.props.setDeliveryContactAddressFirstName("");
      
          //this.setState({contact_first_name: ""});
          //this.setState({contact_last_name: ""});
          //this.setState({contact_email: ""});
          //this.setState({contact_mobile: ""});

          /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
          this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
          this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
          this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});*/
          
          
      
      }else{

          //this.setState({contact_first_name: ""});
          //this.setState({contact_last_name: ""});
          //this.setState({contact_email: ""});
          //this.setState({contact_mobile: ""});

          /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
          this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
          this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
          this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});*/
          
          this.setState({gift_order_checked: ""});
          this.props.setGiftOrder(false);

      }

      //this.props.setOrderNote(e);

      //if street1 street2 city state

      //this.props.deliveryAddressInvalidated();

  }

  setGiftNote = (e: any) => {

      this.setState({gift_note: e.target.value});
      this.props.setGiftNote(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

  setPickupLocation = (e: any) => {

      this.setState({pickupLocation: e.target.value});
      this.props.setPickupLocation(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

   setDate(date: any){

    //console.log("date " + moment(date).toISOString());

    //moment().format('MMMM Do YYYY")

    this.setState({selectedDate: moment(date).format("MMMM Do, YYYY")});
    //this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    this.props.setDate(moment(date).format("YYYY-MM-DD"));
    //this.props.setOrderDeliveryDatetime(moment(date).toISOString());
    //this.props.setOrderDeliveryDatetimeDate(moment(date).format("YYYY-MM-DD"));    

    //this.props.cartValidated();
    //this.props.dateValidated();

  }

  setSpecificTime(e: any){

    //console.log("time " + moment(e.target.value).toISOString());
    console.log("time " + e.target.value);

    //this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    //this.props.setSpecificTime();

    this.setState({selectedTime: e.target.value});
    this.props.setOrderDeliveryDatetimeSpecificTime(e.target.value);

    this.props.timeValidated();
    
  }

 
  
  render(): JSX.Element{

    let delivery_address:any = "";

    return ( <div>

                  <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-sm-12">
                                      Delivery Date Time
                                  </div>
                                </div>
                            </form>
                            <form className="form-horizontal" style={{border: 0}}>
                              <div className="form-group show-lg" style={{borderRadius: 0}}>
                                <div className="col-md-3">
                                  <DayPickerInput onDayChange={(e: any) => this.setDate(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16, zIndex: -1}} value={this.state.selectedDate} dayPickerProps={{enableOutsideDays: false, fixedWeeks: false, disabledDays: [{before: new Date(new Date().setDate(new Date().getDate()+2))}, {daysOfWeek: [0, 1]}]}}/>
                                </div>
                                <div className="col-md-3">
                                  <select onChange={(e: any) => this.props.setSpecificTime(e)} className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                      <option>Time</option>
                                      <option value="800-830">8:00 am - 8:30 am</option>
                                      <option value="830-900">8:30 am - 9:00 am</option>
                                      <option value="900-930">9:00 am - 9:30 am </option>
                                      <option value="930-1000">9:30 am - 10:00 am</option>
                                      <option value="1000-1030">10:00 am - 10:30 am</option>
                                      <option value="1030-1100">10:30 am - 11:00 am</option>
                                      <option value="1100-1130">11:00 am - 11:30 am</option>
                                      <option value="1130-1200">11:30 am - 12:00 pm</option>
                                  </select>
                                </div>
                                <div className="col-md-3">
                                    For other times please email eat@sconely.com
                                </div>
                              </div>
                            </form>
                            
                
            </div>
                  
    )
  }

  /*render(){
    alert(JSON.stringify(this.props.menu_items));
    return (  
          <div>here{this.state.here}</div>
    )
  }*/

}




export default CollectionDeliveryDateTime;

