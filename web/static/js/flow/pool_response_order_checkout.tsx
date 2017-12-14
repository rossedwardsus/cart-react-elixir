
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

import PoolSidebarCart from './pool_response_sidebar_cart.tsx';
import PoolResponsePoolName from './pool_response_pool_name.tsx';
import PoolNameContact from './pool_response_name_contact.tsx';
import PoolOrderContactAddressAddress from './pool_order_contact_address_address.tsx';

import {setUserFirstName, setUserLastName, setUserEmail, setUserMobile} from './actions/user.ts';

import {setPoolName, setOrderDeliveryDatetimeDate, setOrderNote, setGiftOrder, setGiftNote, setPickupLocation} from './actions/order.ts';

//import {setDeliveryContactAddressFirstName, setDeliveryContactAddressLastName, setDeliveryContactAddressEmail, setDeliveryContactAddressMobile, setDeliveryContactAddressCompanyName, setDeliveryContactAddressStreet1, setDeliveryContactAddressStreet2, setDeliveryContactAddressCity, setDeliveryContactAddressState, setDeliveryContactAddressZipcode, setDeliveryContactAddressNote} from './actions/order_delivery_contact_address.ts';

import {setUserDeliveryContactAddressFirstName, setUserDeliveryContactAddressLastName, setUserDeliveryContactAddressEmail, setUserDeliveryContactAddressMobile, setUserDeliveryContactAddressCompanyName, setUserDeliveryContactAddressStreet1, setUserDeliveryContactAddressStreet2, setUserDeliveryContactAddressCity, setUserDeliveryContactAddressState, setUserDeliveryContactAddressZipcode, setUserDeliveryContactAddressNote} from './actions/user_delivery_contact_address.ts';

import {userNameEmailMobileValidated, userFirstNameValidated, userFirstNameInvalidated, userLastNameValidated, userContactEmailValidated, userContactEmailAgainValidated, userContactMobileValidated, deliveryContactAddressValidated, dateValidated} from './actions/order_validations.ts';
//import {contactValidated} from './actions/order_validations.ts';

import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/order.ts';

import {updateOrderSession} from './actions/session.ts';

import PublicTopNavbar from './public/public_top_navbar.tsx';
import PublicBottomNavbar from './public/public_bottom_navbar.tsx';
import PublicPrivacyTermsNavbar from './public/public_privacy_terms_navbar.tsx';


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

class PoolResponseOrderCheckout extends React.Component<any, any> {
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
        menuItems: [],
        User: [],
        payment_button_classname: "btn btn-default disabled btn-block",
        payment_button_disabled: "disabled"
        
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

    //window.scrollTo(0, 0);

  }

  componentWillMount = () => {

    window.scrollTo(0, 0);

    console.log("checkout User " + JSON.stringify(this.props.User));
    //console.log("checkout menuItems " + JSON.stringify(this.props.menuItems));

    
  }

  componentWillReceiveProps = () => {

      console.log("order checkout cwrp" + JSON.stringify(this.props.User.orderSession.validations["userNameEmailMobileValidated"]))

      //if order type == "pool"
      //else validate name contact
      //delivery contact and address
      //also date time

      //add cart validated checked
      //if order type == pool then only validate name

      if(this.props.User.orders[0].order_type == "pool"){

          if(this.props.User.orderSession.validations["firstNameValidated"] == true && this.props.User.orderSession.validations["lastNameValidated"] == true && this.props.User.orderSession.validations["contactEmailValidated"] == true && this.props.User.orderSession.validations["contactEmailAgainValidated"] == true && this.props.User.orderSession.validations["contactMobileValidated"] == true){

              this.setState({payment_button_classname: "btn btn-default btn-block"});
              this.setState({payment_button_disabled: ""})
          
          }

      }/*else{

          if(this.props.User.orderSession.validations["firstNameValidated"] == true && this.props.User.orderSession.validations["lastNameValidated"] == true && this.props.User.orderSession.validations["contactEmailValidated"] == true && this.props.User.orderSession.validations["contactEmailAgainValidated"] == true && this.props.User.orderSession.validations["contactMobileValidated"] == true && this.props.User.orderSession.validations["deliveryContactAddressValidated"] == true && this.props.User.orderSession.validations["dateValidated"] == true){

            console.log("validated");
          
            this.setState({payment_button_classname: "btn btn-default btn-block"});
            this.setState({payment_button_disabled: ""})
          
          }

      }*/


      //if(this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 0){

        //if cart items total quantity = 0 then disable payment button
        
        //this.setState({payment_button_classname: "btn btn-default btn-block disabled"});
        //this.setState({payment_button_disabled: "disabled"})

      //}
        

      //this.setState({delivery_times: "9-11am"});

      //if nameValidated and contactValidated then payment_button_classname

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
    if(this.props.User.orders[0].order_type == "pool"){

          return(<div>
                    <PublicTopNavbar/>
                    <div className="row">
                          <div className="hidden-xs col-md-3"style={{paddingLeft: 55}}>
                            <br/>
                            <br/>
                            SCONELY POOL}
                            <br/>
                            <PoolSidebarCart User={this.props.User} menuItems={this.props.menuItems} increaseCartItemQuantity={(menu_item_id: any) => this.props.increaseCartItemQuantity(menu_item_id)} decreaseCartItemQuantity={(item_index: any) => this.props.decreaseCartItemQuantity(item_index)} removeCartItem={(item_index: any) => this.props.removeCartItem(item_index)}/>
                            <br/>
                          </div>
                          <div className="col-xs-12 col-md-9" style={{paddingLeft: 70}}>
                                <PoolResponsePoolName/>
                                <br/>
                                <PoolNameContact User={this.props.User} setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserDeliveryContactAddressFirstName={(e:any) => this.props.setUserDeliveryContactAddressFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserDeliveryContactAddressLastName={(e:any) => this.props.setUserDeliveryContactAddressLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserDeliveryContactAddressEmail={(e:any) => this.props.setUserDeliveryContactAddressEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)} setUserDeliveryContactAddressMobile={(e:any) => this.props.setUserDeliveryContactAddressMobile(e)} userFirstNameValidated={() => this.props.userFirstNameValidated()} userLastNameValidated={() => this.props.userLastNameValidated()} contactValidated={() => this.props.contactValidated()} userNameEmailMobileValidated={() => this.props.userNameEmailMobileValidated()} userContactEmailValidated={() => this.props.userContactEmailValidated()} userContactEmailAgainValidated={() => this.props.userContactEmailAgainValidated()} userContactMobileValidated={() => this.props.userContactMobileValidated()}/>
                                <br/>
                                <br/>
                                <br/>
                                <form className="form-horizontal">
                                  <div className="form-group">
                                    <div className="col-md-2">
                                      <Link to="/pool_response/weworkdtla/12-14-2017/order/payment" className={this.state.payment_button_classname} disabled={this.state.button_payment_disabled}  style={{borderRadius: 0}}>Payment</Link>  
                                    </div>
                                    <div className="col-md-2">
                                      <Link to="/pool_response/order/menu" className="btn btn-default btn-block" style={{borderRadius: 0}}>Back to Menu</Link>  
                                    </div>
                                  </div>
                              </form>
                          </div>
                    </div>
                </div>)
   
    }
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

   menuItems: state.menuItems.items,
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
    updateOrderSession: (screen: any) => {
      dispatch(updateOrderSession(screen));
    }
  }
}

const PoolResponseOrderCheckoutConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PoolResponseOrderCheckout)

export default PoolResponseOrderCheckoutConnected;

