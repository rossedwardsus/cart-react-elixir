
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import {datetimeValidated} from './actions/order_validations.ts';
//remove
//import {setDate, setTime} from './actions/order_delivery_datetime.ts';
//import { getPublicMenu } from './reducers/menu';
import {getMenuItems} from './actions/menu.ts';

//const Immutable  = require('immutable');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var DayPickerInput = require("react-day-picker/DayPickerInput");

import "react-day-picker/lib/style.css"

require('react-datepicker/dist/react-datepicker.css');

import CollectionSidebarCart from './collection_order_sidebar_cart.tsx';
//import NameContact from './collection_name_contact.tsx';
import CollectionNameContact from './collection_name_contact.tsx';
import DeliveryContactAddress from './delivery_address.tsx';
import CollectionDeliveryContactAddressNameContact from './collection_delivery_contact_address_name_contact.tsx';
import CollectionDeliveryContactAddressAddress from './collection_delivery_contact_address_address.tsx';
import CollectionDeliveryNote from './collection_delivery_note.tsx';
import CollectionGiftNote from './collection_gift_note.tsx';
import CollectionDeliveryDateTime from './collection_delivery_datetime.tsx';

import {setUserFirstName, setUserLastName, setUserEmail, setUserMobile} from './actions/user.ts';

import {setPoolName, setOrderDeliveryDatetimeDate, setOrderDeliveryDatetimeSpecificTime, setOrderNote, setGiftOrder, setGiftNote, setPickupLocation, setDeliveryCost} from './actions/order.ts';

//import {setDeliveryContactAddressFirstName, setDeliveryContactAddressLastName, setDeliveryContactAddressEmail, setDeliveryContactAddressMobile, setDeliveryContactAddressCompanyName, setDeliveryContactAddressStreet1, setDeliveryContactAddressStreet2, setDeliveryContactAddressCity, setDeliveryContactAddressState, setDeliveryContactAddressZipcode, setDeliveryContactAddressNote} from './actions/order_delivery_contact_address.ts';

import {setUserDeliveryContactAddressFirstName, setUserDeliveryContactAddressLastName, setUserDeliveryContactAddressEmail, setUserDeliveryContactAddressMobile, setUserDeliveryContactAddressCompanyName, setUserDeliveryContactAddressStreet1, setUserDeliveryContactAddressStreet2, setUserDeliveryContactAddressCity, setUserDeliveryContactAddressState, setUserDeliveryContactAddressZipcode, setUserDeliveryContactAddressNote} from './actions/user_delivery_contact_address.ts';

import {userNameEmailMobileValidated, userFirstNameValidated, userFirstNameInvalidated, userLastNameValidated, userContactEmailValidated, userContactEmailAgainValidated, userContactMobileValidated, deliveryContactAddressValidated, dateValidated, timeValidated} from './actions/order_validations.ts';
//import {contactValidated} from './actions/order_validations.ts';

import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/order.ts';

import {updateOrderSession} from './actions/session.ts';

import PublicTopNavbar from './public/public_top_navbar.tsx';
import PublicBottomNavbar from './public/public_bottom_navbar.tsx';
import PublicPrivacyTermsNavbar from './public/public_privacy_terms_navbar.tsx';


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

class CollectionCheckout extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        poolName: "",
        pickupLocation: "",
        selectedDate: "",
        selected_time: "",
        selected_specific_time: "",
        delivery_dates: [],
        delivery_times: "",
        daysOfWeek: [],
        collectionMenuItems: [],
        User: [],
        payment_button_classname: "btn btn-default disabled btn-block",
        payment_button_disabled: true,
        
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

  componentDidMount = () => {

    window.scrollTo(0, 0);

  }

  componentWillMount = () => {

    //window.scrollTo(0, 0);

    console.log("checkout User " + JSON.stringify(this.props.User));
    console.log("checkout collectionMenuItems " + JSON.stringify(this.props.collectionMenuItems));

    this.setState({User: this.props.User});
    this.setState({collectionMenuItems: this.props.collectionMenuItems});        

    //this.props.getMenuItems();
    //this.setState({delivery_times: "1-3am"});

    //if(this.props.User.orders[0].order_type == "social"){

    console.log(moment().daysInMonth());
    console.log(moment().day(31));
    //if today is the last of the month and tomorrow is not wednesday then move to the next month
    //or if two days from now arent tuesday
    
  }

  componentWillReceiveProps = (nextProps: any) => {

      console.log(nextProps);
      //console.log("order checkout cwrp" + JSON.stringify(this.props.User.orderSession.validations["userNameEmailMobileValidated"]))

      this.setState({User: nextProps.User});
      this.setState({collectionMenuItems: nextProps.collectionMenuItems});


      if(this.props.User.orderSession.validations["firstNameValidated"] == true && this.props.User.orderSession.validations["lastNameValidated"] == true && this.props.User.orderSession.validations["contactEmailValidated"] == true && this.props.User.orderSession.validations["contactEmailAgainValidated"] == true && this.props.User.orderSession.validations["contactMobileValidated"] == true && this.props.User.orderSession.validations["deliveryContactAddressValidated"] == true && this.props.User.orderSession.validations["timeValidated"] == true){

        console.log("checkout validated");
      
        this.setState({payment_button_classname: "btn btn-default btn-block"});
        this.setState({payment_button_disabled: false})
      
      }

      


      //if(this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 0){

        //if cart items total quantity = 0 then disable payment button
        
        //this.setState({payment_button_classname: "btn btn-default btn-block disabled"});
        //this.setState({payment_button_disabled: "disabled"})

      //}
        

      //this.setState({delivery_times: "9-11am"});

      //if nameValidated and contactValidated then payment_button_classname

  }


  setDate(date: any){

    //console.log("date " + moment(date).toISOString());

    //moment().format('MMMM Do YYYY")

    this.setState({selectedDate: moment(date).format("MMMM Do, YYYY")});
    //this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    //this.props.setDate(moment(date).format("YYYY/MM/DD"));
    //this.props.setOrderDeliveryDatetime(moment(date).toISOString());
    this.props.setOrderDeliveryDatetimeDate(moment(date).format("YYYY-MM-DD"));    

    //this.props.cartValidated();
    this.props.dateValidated();

  }


  setTimeRange(date: any){

    console.log("date " + moment(date).toISOString());

    //this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    //this.props.setTime();
    //this.props.setDeliveryCost

    //this.props.cartValidated();
    //this.props.datetimeValidated();

  }

  setSpecificTime(e: any){

    //console.log("time " + moment(e.target.value).toISOString());
    console.log("time " + e.target.value);

    //this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    //this.props.setSpecificTime();

    this.setState({selected_specific_time: e.target.value});
    this.props.setOrderDeliveryDatetimeSpecificTime(e.target.value);

    this.props.timeValidated();
    
  }

  setUserDeliveryContactAddressZipcode = (e: any) => {

      
      let dtla_zipcodes = [90013, 90014, 90015, 90021, 90071];
      let santa_monica_zipcodes = ["90401", "90402", "90403", "90404", "90405", "90406", "90407", "90408", "90409", "90410", "90411", "90291", "90292", "90293", "90294", "90295", "90296"]
      let venice_zipcodes = ["90291", "90292", "90293"];

      //let order_type = this.props.User.orders[0].order_type;

      //console.log(order_type === "social");
      console.log("dtla zipcode" + dtla_zipcodes.includes(parseInt(e.target.value)));

      //this.props.setDeliveryAddressZipcode(e.target.value)


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
  
  
  render(): JSX.Element{

    let delivery_address_pickup_datetime:any = "";

    let delivery_times = "";

    //console.log(typeof(this.state.delivery_times));

  


    //if pool then only show name and then link to

    let screen = null;
    let today = new Date();
    let yesterday = today.setDate(today.getDate() - 1); 

    console.log("order type " + this.props.User.orders[0].order_type);

   

    /*<DayPickerInput onDayChange={(e: any) => this.setDate(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16, zIndex: -1}} value={this.state.selectedDate} dayPickerProps={{enableOutsideDays: false, fixedWeeks: false, disabledDays: [{before: new Date(new Date().setDate(new Date().getDate()+2))}, {daysOfWeek: [0, 1, 2]}]}}/>*/


    //change to "pool_response"
   
    /*{this.props.User.orders[0].order_type == "social" &&
                                  <div className="col-md-3">
                                    <select onChange={(e: any) => this.setSpecicTimeRange(e)} className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                        <option>8:00</option>
                                        <option>8:30</option>
                                    </select>
                                  </div>}*/

                
          return ( <div>
                <PublicTopNavbar/>
                <div className="row">
                      <div className="hidden-xs col-md-3" style={{paddingLeft: 50}}>
                        <br/>
                        <br/>
                        Sconely Collection
                        <br/>
                        <CollectionSidebarCart User={this.state.User} collectionDetails={this.props.collectionDetails} path={this.props.path} collectionMenuItems={this.state.collectionMenuItems} increaseCartItemQuantity={(item_index: any) => this.props.increaseCartItemQuantity(item_index)} decreaseCartItemQuantity={(item_index: any) => this.props.decreaseCartItemQuantity(item_index)} removeCartItem={(item_index: any) => this.props.removeCartItem(item_index)} updateOrderSession={(screen: any) => this.props.updateOrderSession(screen)}/>
                        <br/>
                        <br/>
                      </div>
                      <div className="col-xs-12 col-md-9" style={{paddingLeft: 70}}>
                            <br/>
                            <br/>
                            <CollectionNameContact User={this.props.User} setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserDeliveryContactAddressFirstName={(e:any) => this.props.setUserDeliveryContactAddressFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserDeliveryContactAddressLastName={(e:any) => this.props.setUserDeliveryContactAddressLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserDeliveryContactAddressEmail={(e:any) => this.props.setUserDeliveryContactAddressEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)} setUserDeliveryContactAddressMobile={(e:any) => this.props.setUserDeliveryContactAddressMobile(e)} firstNameValidated={() => this.props.firstNameValidated()} userNameEmailMobileValidated={(e:any) => this.props.userNameEmailMobileValidated(e)} userFirstNameValidated={() => this.props.userFirstNameValidated()} userLastNameValidated={() => this.props.userLastNameValidated()} userContactEmailValidated={() => this.props.userContactEmailValidated()}
                            userContactEmailAgainValidated={() => this.props.userContactEmailAgainValidated()}  
                            userContactMobileValidated={() => this.props.userContactMobileValidated()}/>
                            <br/>
                            <form className="form-horizontal">
                              <div className="form-group">
                                <div className="col-xs-12 col-md-9">
                                    <div className="checkbox">
                                      <input type="checkbox" value="" checked={this.state.gift_order_checked} onChange={(e: any) => this.setGiftOrder(e)}/>This is a gift
                                    </div>
                                </div>
                              </div>
                            </form>
                            <br/>
                            <CollectionDeliveryContactAddressNameContact User={this.props.User} session={this.props.session} order={this.props.order} deliveryAddress={this.props.order_delivery_address} 
                            setDeliveryContactAddressFirstName={(e: any) => this.props.setUserDeliveryContactAddressFirstName(e)} setDeliveryContactAddressLastName={(e: any) => this.props.setUserDeliveryContactAddressLastName(e)}
                            setDeliveryContactAddressEmail={(e: any) => this.props.setUserDeliveryContactAddressEmail(e)} 
                            setDeliveryContactAddressMobile={(e: any) => this.props.setUserDeliveryContactAddressMobile(e)} 
                            setDeliveryContactAddressCompanyName={(e: any) => this.props.setUserDeliveryContactAddressCompanyName(e)}  
                            setDeliveryContactAddressStreet1={(e: any) => this.props.setUserDeliveryContactAddressStreet1(e)} setDeliveryContactAddressStreet2={(e: any) => this.props.setUserDeliveryContactAddressStreet2(e)} 
                            setDeliveryContactAddressCity={(e: any) => this.props.setUserDeliveryContactAddressCity(e)} 
                            setDeliveryContactAddressState={(e: any) => this.props.setUserDeliveryContactAddressState(e)} 
                            setDeliveryContactAddressZipcode={(e: any) => this.props.setUserDeliveryContactAddressZipcode(e)} 
                            setOrderNote={(e: any) => this.props.setOrderNote(e)} 
                            setGiftOrder={(e: any) => this.props.setGiftOrder(e)} setGiftNote={(e: any) => this.props.setGiftNote(e)} setPickupLocation={(e: any) => this.props.setPickupLocation(e)}
                            deliveryContactAddressValidated={() => this.props.deliveryContactAddressValidated()} deliveryContactAddressInvalidated={() => this.props.deliveryContactAddressInvalidated()}/>
                            <br/>
                            {this.state.gift_order_checked == "checked" && <CollectionGiftNote />}
                            <br/>
                            <CollectionDeliveryContactAddressAddress User={this.props.User} session={this.props.session} order={this.props.order} deliveryAddress={this.props.order_delivery_address} 
                            setDeliveryContactAddressFirstName={(e: any) => this.props.setUserDeliveryContactAddressFirstName(e)} setDeliveryContactAddressLastName={(e: any) => this.props.setUserDeliveryContactAddressLastName(e)}
                            setDeliveryContactAddressEmail={(e: any) => this.props.setUserDeliveryContactAddressEmail(e)} 
                            setDeliveryContactAddressMobile={(e: any) => this.props.setUserDeliveryContactAddressMobile(e)} 
                            setDeliveryContactAddressCompanyName={(e: any) => this.props.setUserDeliveryContactAddressCompanyName(e)}  
                            setDeliveryContactAddressStreet1={(e: any) => this.props.setUserDeliveryContactAddressStreet1(e)} setDeliveryContactAddressStreet2={(e: any) => this.props.setUserDeliveryContactAddressStreet2(e)} 
                            setDeliveryContactAddressCity={(e: any) => this.props.setUserDeliveryContactAddressCity(e)} 
                            setDeliveryContactAddressState={(e: any) => this.props.setUserDeliveryContactAddressState(e)} 
                            setDeliveryContactAddressZipcode={(e: any) => this.props.setUserDeliveryContactAddressZipcode(e)} 
                            setOrderNote={(e: any) => this.props.setOrderNote(e)} 
                            setGiftOrder={(e: any) => this.props.setGiftOrder(e)} setGiftNote={(e: any) => this.props.setGiftNote(e)} setPickupLocation={(e: any) => this.props.setPickupLocation(e)} setDeliveryCost={(amount: any) => this.props.setDeliveryCost(amount)}
                            deliveryContactAddressValidated={() => this.props.deliveryContactAddressValidated()} deliveryContactAddressInvalidated={() => this.props.deliveryContactAddressInvalidated()}/>
                            <br/>
                            <br/>
                            <CollectionDeliveryDateTime setDate={(e: any) => this.setDate(e)} setSpecificTime={(e: any) => this.setSpecificTime(e)} timeValidated={(e: any) => this.props.timeValidated(e)}/>
                            <br/>
                            <br/>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-9">
                                    <div className="col-md-3">
                                      <Link to="/collections/order/payment" className={this.state.payment_button_classname} disabled={this.state.payment_button_disabled} style={{borderRadius: 0}}>Payment</Link>
                                    </div>
                                    <div className="col-md-3">
                                      <Link to="/collections/order/menu" className="btn btn-default btn-block" style={{borderRadius: 0}}>Back to Menu</Link>  
                                    </div>
                                  </div>
                                </div>
                            </form>
                            <br/>
                            <br/>
                        </div>
                        <PublicBottomNavbar/>
                        <PublicPrivacyTermsNavbar/>
                    </div>  
              </div>)

        
  }

  //<button type="button" className={this.state.payment_button_classname} disabled={this.state.button_payment_disabled} style={{borderRadius: 0}} onClick={(screen: any) => this.props.updateOrderSession("payment")}>Payment</button> 

  /*render(){
    alert(JSON.stringify(this.props.menu_items));
    return (  
          <div>here{this.state.here}</div>
    )
  }*/

}


function mapStateToProps(state: any) {
  console.log("checkout state" + JSON.stringify(state));
  return {
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()

   collectionMenuItems: state.collections.collectionMenuItems,
   collectionDetails: state.collections.collectionDetails,
   //guestOrder: state.guestOrder,
   //cartItems: state.guestOrder.cart_items, //computed

   User: state.User,
        
   
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    setTime: (e: any) => {
    //  console.log("settime" + e.target.value);
    //  dispatch(setTime(e.target.value));
    },
    dateValidated: () => {
      //console.log(e.target.value);
      dispatch(dateValidated());
    },
    timeValidated: () => {
      console.log("e.target.value");
      dispatch(timeValidated());
    },
    getMenuItems: () => {
      dispatch(getMenuItems(""));
    },

    setUserFirstName: (e: any) => {
      dispatch(setUserFirstName(e.target.value))
    },
    setUserLastName: (e: any) => {
      dispatch(setUserLastName(e.target.value))
    },
    setUserEmail: (e: any) => {
      dispatch(setUserEmail(e.target.value))
    },
    setUserMobile: (e: any) => {
      dispatch(setUserMobile(e.target.value))
    },
    userFirstNameValidated: (e: any) => {
      dispatch(userFirstNameValidated());
    },
    userLastNameValidated: (e: any) => {
      dispatch(userLastNameValidated());
    },
    userNameEmailMobileValidated: () => {
      dispatch(userNameEmailMobileValidated());
    },
    userContactEmailValidated: () => {
      dispatch(userContactEmailValidated());
    },
    userContactEmailAgainValidated: () => {
      dispatch(userContactEmailAgainValidated());
    },
    userContactMobileValidated: () => {
      dispatch(userContactMobileValidated());
    },
    setUserDeliveryContactAddressFirstName: (e: any) => {
      dispatch(setUserDeliveryContactAddressFirstName(e.target.value, ""))
    },
    setUserDeliveryContactAddressLastName: (e: any) => {
      dispatch(setUserDeliveryContactAddressLastName(e.target.value, ""))
    },
    setUserDeliveryContactAddressCompanyName: (e: any) => {
      dispatch(setUserDeliveryContactAddressCompanyName(e.target.value))
    },
    setUserDeliveryContactAddressEmail: (e: any) => {
      dispatch(setUserDeliveryContactAddressEmail(e.target.value, ""))
    },
    setUserDeliveryContactAddressMobile: (e: any) => {
      dispatch(setUserDeliveryContactAddressMobile(e.target.value, ""))
    },
    setUserDeliveryContactAddressStreet1: (e: any) => {
      dispatch(setUserDeliveryContactAddressStreet1(e.target.value, ""))
    },
    setUserDeliveryContactAddressStreet2: (e: any) => {
      dispatch(setUserDeliveryContactAddressStreet2(e.target.value, ""))
    },
    setUserDeliveryContactAddressCity: (e: any) => {
      dispatch(setUserDeliveryContactAddressCity(e.target.value, ""))
    },
    setUserDeliveryContactAddressState: (e: any) => {
      dispatch(setUserDeliveryContactAddressState(e.target.value, ""))
    },
    setUserDeliveryContactAddressZipcode: (e: any) => {
      dispatch(setUserDeliveryContactAddressZipcode(e.target.value, ""))
    },
    setDeliveryCost: (amount: any) => {
      dispatch(setDeliveryCost(amount));
    },
    setUserDeliveryContactAddressNote: (e: any) => {
      dispatch(setUserDeliveryContactAddressNote(e.target.value, ""))
    },
    setPoolName: (e: any) => {
      dispatch(setPoolName(e.target.value));
    },
    setOrderNote: (e: any) => {
      dispatch(setOrderNote(e.target.value));
    },
    setGiftOrder: (value: any) => {
      dispatch(setGiftOrder(value));
    },
    setGiftNote: (e: any) => {
      dispatch(setGiftNote(e.target.value));
    },
    setPickupLocation: (e: any) => {
      dispatch(setPickupLocation(e.target.value));
    },
    deliveryContactAddressValidated: () => {
      dispatch(deliveryContactAddressValidated());
    },
    setOrderDeliveryDatetimeDate: (value: any) => {
      dispatch(setOrderDeliveryDatetimeDate(value));
    },
    setOrderDeliveryDatetimeSpecificTime: (value: any) => {
      dispatch(setOrderDeliveryDatetimeSpecificTime(value));
    },
    increaseCartItemQuantity: (index: any) => {
      dispatch(increaseCartItemQuantity(index));
    },
    decreaseCartItemQuantity: (index: any) => {
      dispatch(decreaseCartItemQuantity(index));
    },
    removeCartItem: (index: any) => {
      dispatch(removeCartItem(index));
    },
    updateOrderSession: (screen: any) => {
      dispatch(updateOrderSession(screen));
    }
  }
}

const CollectionCheckoutConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionCheckout)

export default CollectionCheckoutConnected;

