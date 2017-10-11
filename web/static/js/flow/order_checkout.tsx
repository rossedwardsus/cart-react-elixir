
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

const Immutable  = require('immutable');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var DayPickerInput = require("react-day-picker/DayPickerInput");

import "react-day-picker/lib/style.css"

require('react-datepicker/dist/react-datepicker.css');

import SidebarCart from './order_sidebar_cart.tsx';
import PublicTopNavbar from './public/public_top_navbar.tsx';
import NameContact from './name.tsx';
import DeliveryContactAddress from './delivery_address.tsx';

import {setUserFirstName, setUserLastName, setUserEmail, setUserMobile} from './actions/user.ts';

import {setOrderDeliveryDatetimeDate, setOrderNote, setGiftOrder, setGiftNote} from './actions/order.ts';

//import {setDeliveryContactAddressFirstName, setDeliveryContactAddressLastName, setDeliveryContactAddressEmail, setDeliveryContactAddressMobile, setDeliveryContactAddressCompanyName, setDeliveryContactAddressStreet1, setDeliveryContactAddressStreet2, setDeliveryContactAddressCity, setDeliveryContactAddressState, setDeliveryContactAddressZipcode, setDeliveryContactAddressNote} from './actions/order_delivery_contact_address.ts';

import {setUserDeliveryContactAddressFirstName, setUserDeliveryContactAddressLastName, setUserDeliveryContactAddressEmail, setUserDeliveryContactAddressMobile, setUserDeliveryContactAddressCompanyName, setUserDeliveryContactAddressStreet1, setUserDeliveryContactAddressStreet2, setUserDeliveryContactAddressCity, setUserDeliveryContactAddressState, setUserDeliveryContactAddressZipcode, setUserDeliveryContactAddressNote} from './actions/user_delivery_contact_address.ts';

import {userNameEmailMobileValidated, deliveryContactAddressValidated} from './actions/order_validations.ts';
//import {contactValidated} from './actions/order_validations.ts';

import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/order.ts';

import {updateOrderSession} from './actions/session.ts';


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

class DateTime extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        selectedDate: moment().format("YYYY/MM/DD"),
        selected_time: "",
        selected_specific_time: "",
        delivery_dates: [],
        delivery_times: "",
        daysOfWeek: [],
        menuItems: [],
        User: [],
        payment_button_classname: "btn btn-default btn-block",
        payment_button_disabled: ""
        
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

    window.scrollTo(0, 0);

    console.log("checkout User " + JSON.stringify(this.props.User));
    //console.log("checkout menuItems " + JSON.stringify(this.props.menuItems));

    //this.setState({User: this.props.User});
    //this.setState({menuItems: this.props.menuItems});        

    //alert();

    //this.props.getMenuItems();
    //this.setState({delivery_times: "1-3am"});

    //if(this.props.User.orders[0].order_type == "social"){

    //delivery_dates == all
    //delivery start day three days from now
    //this.setState({daysOfWeek: [0, 1, 2, 3, 4, 5, 6]});

    //}

    //if yours disable selectable days until zipcode is selected and set delivery dates on zipcode selection
    //
    
  }

  componentWillReceiveProps = () => {

      console.log("order checkout cwrp" + JSON.stringify(this.props.User.orderSession.validations))

      //if order type == "pool"
      //else validate name contact
      //delivery contact and address
      //also date time

      if(this.props.User.orderSession.validations.userNameEmailMobilValidated == true && this.props.User.orderSession.validations.deliveryContactAddressValidated == true){
      
        //this.setState({payment_button_classname: "btn btn-default btn-block"});
        //this.setState({payment_button_disabled: ""})
      
      }

      if(this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 0){

        //if cart items total quantity = 0 then disable payment button
        
        this.setState({payment_button_classname: "btn btn-default btn-block disabled"});
        this.setState({payment_button_disabled: "disabled"})

      }
        

      //this.setState({delivery_times: "9-11am"});

      //if nameValidated and contactValidated then payment_button_classname

  }

  
  setDate(date: any){

    //console.log("date " + moment(date).toISOString());

    this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    //this.props.setDate(moment(date).format("YYYY/MM/DD"));
    //this.props.setOrderDeliveryDatetime(moment(date).toISOString());
    this.props.setOrderDeliveryDatetimeDate(moment(date).format("YYYY-MM-DD"));    

    //this.props.cartValidated();
    //this.props.datetimeValidated();

  }

  //setDay(day: any){

    //console.log("date " + moment(day).format("YYYY/MM/DD"));

    //this.setState({selectedDate: date});
    //this.props.setDate(moment(date).format("YYYY/MM/DD"));
    //this.props.setDate(moment(date).toISOString());

    //this.props.cartValidated();
    //this.props.datetimeValidated();

  //}

  setTimeRange(date: any){

    console.log("date " + moment(date).toISOString());

    //this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    //this.props.setTime();
    //this.props.setDeliveryCost

    //this.props.cartValidated();
    //this.props.datetimeValidated();

  }

  setSpecificTime(date: any){

    console.log("date " + moment(date).toISOString());

    //this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    //this.props.setSpecificTime();
    
  }

  setUserDeliveryContactAddressZipcode = (e: any) => {

      
      let dtla_zipcodes = [90013, 90014, 90015, 90021, 90071];
      let santa_monica_zipcodes = ["90401", "90402", "90403", "90404", "90405", "90406", "90407", "90408", "90409", "90410", "90411", "90291", "90292", "90293", "90294", "90295", "90296"]
      let venice_zipcodes = ["90291", "90292", "90293"];

      let order_type = this.props.User.orders[0].order_type;

      console.log(order_type === "social");
      console.log(dtla_zipcodes.includes(parseInt(e.target.value)));

      //this.props.setDeliveryAddressZipcode(e.target.value)


      if(this.props.User.orders[0].order_type === "yours" && dtla_zipcodes.includes(parseInt(e.target.value))){

          console.log("here000");


      //    days == monday friday
      //    9-11
      //    
      //    setUserDeliveryContactAddressZipcode
      //    this.props.setDeliveryAvaliableTime("9-11am")
      //    this.setstate date_values
      //    this.setState({delivery_time: "9-11am"});
      //    
            this.setState({delivery_time: ["9:00", "9:30"]});

      //    this.props.setDeliveryCost("15.00")   

      
      }else if(this.props.User.orders[0].order_type === "yours" && santa_monica_zipcodes.includes(e.target.value)){

          console.log("here00");


      //    days == monday friday
      //    9-11

      //    this.props.setDeliveryAvaliableTime("1-3pm")
      //    this.setState({delivery_time: "9-11am"});
     
      //    this.props.deliveryCost      

      }else if(this.props.User.orders[0].order_type === "yours" && venice_zipcodes.includes(e.target.value)){

      console.log("here0");


      //    days == monday friday
      //    9-11

      //    this.props.setDeliveryAvaliableTime("1-3pm")
      
      //    this.setState({delivery_time: "9-11am"});
      //    this.props.deliveryCost      
     

      }else if(this.props.User.orders[0].order_type === "social" && santa_monica_zipcodes.includes(e.target.value)){

          console.log("here1");


      //    days == anyday
      //    anytime
            this.setState({delivery_times: "1-3pm"});
      //    this.props.deliveryCost      
     
      }else if(this.props.User.orders[0].order_type === "social" && dtla_zipcodes.includes(parseInt(e.target.value))){

          console.log("here2");

          //    days == anyday
          //    anytime
          //      this.setState({time_value: ["8:00", "9:00"]});
          //      this.setState({delivery_times: "9-11pm"});
          //    this.props.deliveryCost     

          this.setState({delivery_times: "1-3pm"}); 
         

      }else if(this.props.User.orders[0].order_type === "social" && venice_zipcodes.includes(e.target.value)){

          console.log("here3");


      //    days == anyday
      //    anytime
      //    this.props.deliveryCost      
     
      }





      //var numOfDays = new Date(2012, 10, 0).getDate();
      //var date = new Date();
      //getDay()
      //var date = new Date(year, month, 1);
      // var days = [];
      // while (date.getMonth() === month) {
      //    days.push(new Date(date));
      //    date.setDate(date.getDate() + 1);
      // }
      // return days;

      //yours
      //dtla
      //if zipcode == 90015, 90014, 90013, 90021, 90071
      //days == monday friday
      //9-11
      //cost == free

      //yours
      //90401, 90402, 90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411
      //90291. CA.  90292. CA.  90293. 90294. 90295. 90296. CA. 
      //days == monday friday
      //9-11
      //cost == free

      //social
      //three days in advance
      //everyday
      //9-11 dtla, 1-3, west side
  }

  
  
  render(): JSX.Element{

    let delivery_address_pickup_datetime:any = "";

    let delivery_times = "";

    //console.log(typeof(this.state.delivery_times));

    /*if(this.props.User.orders[0].order_type === "social"){

        //console.log("array");

        delivery_times = <select><option>9:30</option></select>

    }else{

        //console.log("array");

        delivery_times = this.state.delivery_times;

    }*/


    /*if(this.props.order.order_type == "sconely_yours"){

        delivery_address_pickup_datetime = <b>Pickup Date and Time</b>;

    }else{

        delivery_address_pickup_datetime = <b>Delivery Date and Time</b>;

    }*/


    //if pool then only show name and then link to

    let screen = null;

    console.log("order type " + this.props.User.orders[0].order_type);

    /*if(this.props.User.orders[0].order_type == "pool"){
      
      screen = <NameContact User={this.props.User} setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)}/>
    
    }else{ 

      screen = <div>
                      <NameContact User={this.props.User} setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)}/>
                      <DeliveryContactAddress session={this.props.session} order={this.props.order} deliveryAddress={this.props.order_delivery_address} 
                            setDeliveryContactAddressFirstName={(e: any) => this.props.setUserDeliveryContactAddressFirstName(e)} setDeliveryContactAddressLastName={(e: any) => this.props.setUserDeliveryContactAddressLastName(e)}
                            setDeliveryContactAddressEmail={(e: any) => this.props.setUserDeliveryContactAddressEmail(e)} 
                            setDeliveryContactAddressMobile={(e: any) => this.props.setUserDeliveryContactAddressMobile(e)} 
                            setDeliveryContactAddressCompanyName={(e: any) => this.props.setUserDeliveryContactAddressCompanyName(e)}  
                            setDeliveryContactAddressStreet1={(e: any) => this.props.setUserDeliveryContactAddressStreet1(e)} setDeliveryContactAddressStreet2={(e: any) => this.props.setUserDeliveryContactAddressStreet2(e)} 
                            setDeliveryContactAddressCity={(e: any) => this.props.setUserDeliveryContactAddressCity(e)} 
                            setDeliveryContactAddressState={(e: any) => this.props.setUserDeliveryContactAddressState(e)} 
                            setDeliveryContactAddressZipcode={(e: any) => this.props.setUserDeliveryContactAddressZipcode(e) setOrderNote(e: any) => this.props.setOrderNote(e)} setGiftOrder(e: any) => this.props.setGiftOrder(e)}
                            deliveryAddressValidated={() => this.props.deliveryAddressValidated()} deliveryAddressInvalidated={() => this.props.deliveryAddressInvalidated()}/>

                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-sm-12">
                                      <b/>Delivery Date Time</b>
                                  </div>
                                </div>
                            </form>
                            <form className="form-horizontal" style={{border: 0}}>
                              <div className="form-group show-lg" style={{borderRadius: 0}}>
                                <div className="col-md-3">
                                  <DayPickerInput onDayChange={(e: any) => this.setDate(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16, zIndex: -1}} value={this.state.selectedDate} dayPickerProps={{disabledDays: {daysOfWeek: this.state.daysOfWeek,}}}/>
                                </div>
                                <div className="col-md-3">
                                  9:00 am - 11:00 am
                                </div>
                            </form>
                        </div>
    }*/


    if(this.props.User.orders[0].order_type == "pool"){

          return(<div>
                    <PublicTopNavbar/>
                    <div className="row">
                          <div className="hidden-xs col-md-3"style={{paddingLeft: 55}}>
                            <br/>
                            <br/>
                            Sconely {this.props.User.orders[0].order_type[0].toUpperCase() + this.props.User.orders[0].order_type.substring(1)}
                            <br/>
                            <br/>
                            <SidebarCart User={this.props.User} menuItems={this.props.menuItems}/>
                            <br/>
                          </div>
                          <div className="col-xs-12 col-md-9" style={{paddingLeft: 70}}>
                                <br/>
                                <NameContact User={this.props.User} setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserDeliveryContactAddressFirstName={(e:any) => this.props.setUserDeliveryContactAddressFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)} nameValidated={() => this.props.nameValidated()} contactValidated={() => this.props.contactValidated()} userNameEmailMobileValidated={this.props.userNameEmailMobileValidated()}/>
                                <br/>
                                <br/>
                                <br/>
                                <form className="form-horizontal">
                                  <div className="form-group">
                                    <div className="col-md-2">
                                      <Link to="/order/payment" className="btn btn-default btn-block" style={{borderRadius: 0}}>Payment</Link>  
                                    </div>
                                    <div className="col-md-2">
                                      <Link to="/order/menu" className="btn btn-default btn-block" style={{borderRadius: 0}}>Back to Menu</Link>  
                                    </div>
                                    <div className="col-md-2">
                                      <Link to="/order/cart" className="btn btn-default btn-block" style={{borderRadius: 0}}>Cart</Link>  
                                    </div>
                                  </div>
                              </form>
                          </div>
                    </div>
                </div>)
   
    }else{
          
          return ( <div>
                <PublicTopNavbar/>
                <div className="row">
                      <div className="hidden-xs col-md-3" style={{paddingLeft: 50}}>
                        <br/>
                        <br/>
                        Sconely {this.props.User.orders[0].order_type[0].toUpperCase() + this.props.User.orders[0].order_type.substring(1)}
                        <br/>
                        <br/>
                        <SidebarCart User={this.props.User} menuItems={this.props.menuItems} increaseCartItemQuantity={(item_index: any) => this.props.increaseCartItemQuantity(item_index)} decreaseCartItemQuantity={(item_index: any) => this.props.decreaseCartItemQuantity(item_index)} removeCartItem={(item_index: any) => this.props.removeCartItem(item_index)}/>
                        <br/>
                      </div>
                      <div className="col-xs-12 col-md-9" style={{paddingLeft: 70}}>
                            <br/>
                            <br/>
                            <NameContact User={this.props.User} setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserDeliveryContactAddressFirstName={(e:any) => this.props.setUserDeliveryContactAddressFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserDeliveryContactAddressLastName={(e:any) => this.props.setUserDeliveryContactAddressLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserDeliveryContactAddressEmail={(e:any) => this.props.setUserDeliveryContactAddressEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)} setUserDeliveryContactAddressMobile={(e:any) => this.props.setUserDeliveryContactAddressMobile(e)} userNameEmailMobileValidated={(e:any) => this.props.userNameEmailMobileValidated(e)}/>
                            <br/>
                            <br/>
                            <DeliveryContactAddress User={this.props.User} session={this.props.session} order={this.props.order} deliveryAddress={this.props.order_delivery_address} 
                            setDeliveryContactAddressFirstName={(e: any) => this.props.setUserDeliveryContactAddressFirstName(e)} setDeliveryContactAddressLastName={(e: any) => this.props.setUserDeliveryContactAddressLastName(e)}
                            setDeliveryContactAddressEmail={(e: any) => this.props.setUserDeliveryContactAddressEmail(e)} 
                            setDeliveryContactAddressMobile={(e: any) => this.props.setUserDeliveryContactAddressMobile(e)} 
                            setDeliveryContactAddressCompanyName={(e: any) => this.props.setUserDeliveryContactAddressCompanyName(e)}  
                            setDeliveryContactAddressStreet1={(e: any) => this.props.setUserDeliveryContactAddressStreet1(e)} setDeliveryContactAddressStreet2={(e: any) => this.props.setUserDeliveryContactAddressStreet2(e)} 
                            setDeliveryContactAddressCity={(e: any) => this.props.setUserDeliveryContactAddressCity(e)} 
                            setDeliveryContactAddressState={(e: any) => this.props.setUserDeliveryContactAddressState(e)} 
                            setDeliveryContactAddressZipcode={(e: any) => this.props.setUserDeliveryContactAddressZipcode(e)} setGiftOrder={(e: any) => this.props.setGiftOrder(e)} setGiftNote={(e: any) => this.props.setGiftNote(e)}
                            deliveryContactAddressValidated={() => this.props.deliveryContactAddressValidated()} deliveryContactAddressInvalidated={() => this.props.deliveryContactAddressInvalidated()}/>

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
                                  <DayPickerInput onDayChange={(e: any) => this.setDate(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16, zIndex: -1}} value={this.state.selectedDate} dayPickerProps={{enableOutsideDays: false, fixedWeeks: false, disabledDays: {daysOfWeek: [0, 1, 2],}}}/>
                                </div>
                                <div className="col-md-3">
                                  9:00 am - 12:00 am
                                </div>
                                {this.props.User.orders[0].order_type == "social" &&
                                  <div className="col-md-3">
                                    For other times please email eat@sconely.com
                                  </div>}
                              </div>
                            </form>
                            <br/>
                            <br/>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-9">
                                    <div className="col-md-3">
                                      <button type="button" className="btn btn-default btn-block" style={{borderRadius: 0}} onClick={(screen: any) => this.props.updateOrderSession("preview")}>Preview</button>  
                                    </div>
                                    <div className="col-md-3">
                                      <button type="button" className={this.state.payment_button_classname} disabled={this.state.button_payment_disabled} style={{borderRadius: 0}} onClick={(screen: any) => this.props.updateOrderSession("payment")}>Payment</button>  
                                    </div>
                                    <div className="col-md-3">
                                      <Link to="/order/menu" className="btn btn-default btn-block" style={{borderRadius: 0}}>Back to Menu</Link>  
                                    </div>
                                    <div className="col-md-3">
                                      <Link to="/order/cart" className="btn btn-default btn-block" style={{borderRadius: 0}}>Cart</Link>  
                                    </div>
                                  </div>
                                </div>
                            </form>
                            <br/>
                            <br/>
                        </div>
                    </div>  
              </div>)

        }
  }

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
    //datetimeValidated: () => {
      //console.log(e.target.value);
    //  dispatch(datetimeValidated());
    //}

    getMenuItems: () => {
      dispatch(getMenuItems());
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
    //nameValidated: (e: any) => {
    //  dispatch(nameValidated());
    //},
    userNameEmailMobileValidated: () => {
      dispatch(userNameEmailMobileValidated());
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
    setUserDeliveryContactAddressNote: (e: any) => {
      dispatch(setUserDeliveryContactAddressNote(e.target.value, ""))
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
    deliveryContactAddressValidated: () => {
      dispatch(deliveryContactAddressValidated());
    },
    setOrderDeliveryDatetimeDate: (value: any) => {
      dispatch(setOrderDeliveryDatetimeDate(value));
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

const DateTimeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateTime)

export default DateTimeConnected;

