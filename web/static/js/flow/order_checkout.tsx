
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import {datetimeValidated} from './actions/order_validations.ts';
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
import DeliveryContactAddress from './order_delivery_address.tsx';

import {setUserFirstName, setUserLastName, setUserEmail, setUserMobile} from './actions/user.ts';
import {setDeliveryContactAddressFirstName, setDeliveryContactAddressLastName, setDeliveryContactAddressEmail, setDeliveryContactAddressMobile, setDeliveryContactAddressCompanyName, setDeliveryContactAddressStreet1, setDeliveryContactAddressStreet2, setDeliveryContactAddressCity, setDeliveryContactAddressState, setDeliveryContactAddressZipcode} from './actions/order_delivery_contact_address.ts';
import {setUserDeliveryContactAddressFirstName, setUserDeliveryContactAddressLastName, setUserDeliveryContactAddressEmail, setUserDeliveryContactAddressMobile, setUserDeliveryContactAddressCompanyName, setUserDeliveryContactAddressStreet1, setUserDeliveryContactAddressStreet2, setUserDeliveryContactAddressCity, setUserDeliveryContactAddressState, setUserDeliveryContactAddressZipcode} from './actions/user_delivery_contact_address.ts';


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
    this.setState({daysOfWeek: [0, 1, 2, 3, 4, 5, 6]});

    //}

    //if yours disable selectable days until zipcode is selected and set delivery dates on zipcode selection
    //
    
  }

  componentWillReceiveProps = () => {

      //this.setState({delivery_times: "9-11am"});

  }

  
  setDate(date: any){

    console.log("date " + moment(date).toISOString());

    this.setState({selectedDate: moment(date).format("YYYY/MM/DD")});
    this.props.setDate(moment(date).format("YYYY/MM/DD"));
    //this.props.setDate(moment(date).toISOString());

    //this.props.cartValidated();
    this.props.datetimeValidated();

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

    if(this.props.User.orders[0].order_type == "pool"){
      
      screen = <NameContact setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)}/>
    
    }else{ 

      screen = <div>
                      <NameContact setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)}/>
                      <DeliveryContactAddress session={this.props.session} order={this.props.order} deliveryAddress={this.props.order_delivery_address} 
                            setDeliveryContactAddressFirstName={(e: any) => this.props.setUserDeliveryContactAddressFirstName(e)} setDeliveryContactAddressLastName={(e: any) => this.props.setUserDeliveryContactAddressLastName(e)}
                            setDeliveryContactAddressEmail={(e: any) => this.props.setUserDeliveryContactAddressEmail(e)} 
                            setDeliveryContactAddressMobile={(e: any) => this.props.setUserDeliveryContactAddressMobile(e)} 
                            setDeliveryContactAddressCompanyName={(e: any) => this.props.setUserDeliveryContactAddressCompanyName(e)}  
                            setDeliveryContactAddressStreet1={(e: any) => this.props.setUserDeliveryContactAddressStreet1(e)} setDeliveryContactAddressStreet2={(e: any) => this.props.setUserDeliveryContactAddressStreet2(e)} 
                            setDeliveryContactAddressCity={(e: any) => this.props.setUserDeliveryContactAddressCity(e)} 
                            setDeliveryContactAddressState={(e: any) => this.props.setUserDeliveryContactAddressState(e)} 
                            setDeliveryContactAddressZipcode={(e: any) => this.setUserDeliveryContactAddressZipcode(e)} 
                            deliveryAddressValidated={() => this.props.deliveryAddressValidated()} deliveryAddressInvalidated={() => this.props.deliveryAddressInvalidated()}/>

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
                                  <DayPickerInput onDayChange={(e: any) => this.setDate(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16, zIndex: -1}} value={this.state.selectedDate} dayPickerProps={{disabledDays: {daysOfWeek: this.state.daysOfWeek,}}}/>
                                </div>
                                <div className="col-md-3">
                                  {this.props.User.orders[0].order_type === "social" ? this.state.delivery_times : 
                                    (<select className="form-control" id="exampleInputEmail2" value={this.props.selectedTime} onChange={this.props.setTimeRange} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 12}}>
                                      <option value="">Free</option>
                                      <option value="9-11">9:00 am - 11:00 am</option>
                                      <option value="1-3">1:00 pm - 3:00 pm</option>
                                  </select>)}
                                </div>
                                <div className="col-md-3">
                                    {delivery_times}
                                    <select className="form-control" value={this.props.selectedSpecificTime}  onChange={(e: any) => this.props.setSpecificTime(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 12}}>
                                        <option value="">Extra</option>
                                        <option value="900">9:00</option>
                                        <option value="930">9:30</option>
                                    </select>
                                </div>
                              </div>
                            </form></div>
    }
   
    return ( <div>
                <PublicTopNavbar/>
                <div className="row">
                      <div className="hidden-xs col-md-3">
                        <br/>
                        <br/>
                        Sconely Yours
                        <br/>
                        <br/>
                        <SidebarCart User={this.props.User} menuItems={this.props.menuItems}/>
                        <br/>
                      </div>
                      <div className="col-xs-12 col-md-9">
                            {screen}
                            <br/>
                            <br/>
                            <NameContact setUserFirstName={(e:any) => this.props.setUserFirstName(e)} setUserLastName={(e:any) => this.props.setUserLastName(e)} setUserEmail={(e:any) => this.props.setUserEmail(e)} setUserMobile={(e:any) => this.props.setUserMobile(e)}/>
                            <br/>
                            <br/>
                            <DeliveryContactAddress session={this.props.session} order={this.props.order} deliveryAddress={this.props.order_delivery_address} 
                            setDeliveryContactAddressFirstName={(e: any) => this.props.setUserDeliveryContactAddressFirstName(e)} setDeliveryContactAddressLastName={(e: any) => this.props.setUserDeliveryContactAddressLastName(e)}
                            setDeliveryContactAddressEmail={(e: any) => this.props.setUserDeliveryContactAddressEmail(e)} 
                            setDeliveryContactAddressMobile={(e: any) => this.props.setUserDeliveryContactAddressMobile(e)} 
                            setDeliveryContactAddressCompanyName={(e: any) => this.props.setUserDeliveryContactAddressCompanyName(e)}  
                            setDeliveryContactAddressStreet1={(e: any) => this.props.setUserDeliveryContactAddressStreet1(e)} setDeliveryContactAddressStreet2={(e: any) => this.props.setUserDeliveryContactAddressStreet2(e)} 
                            setDeliveryContactAddressCity={(e: any) => this.props.setUserDeliveryContactAddressCity(e)} 
                            setDeliveryContactAddressState={(e: any) => this.props.setUserDeliveryContactAddressState(e)} 
                            setDeliveryContactAddressZipcode={(e: any) => this.setUserDeliveryContactAddressZipcode(e)} 
                            deliveryAddressValidated={() => this.props.deliveryAddressValidated()} deliveryAddressInvalidated={() => this.props.deliveryAddressInvalidated()}/>

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
                                  <DayPickerInput onDayChange={(e: any) => this.setDate(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16, zIndex: -1}} value={this.state.selectedDate} dayPickerProps={{disabledDays: {daysOfWeek: this.state.daysOfWeek,}}}/>
                                </div>
                                <div className="col-md-3">
                                  {this.props.User.orders[0].order_type === "social" ? this.state.delivery_times : 
                                    (<select className="form-control" id="exampleInputEmail2" value={this.props.selectedTime} onChange={this.props.setTimeRange} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 12}}>
                                      <option value="">Free</option>
                                      <option value="9-11">9:00 am - 11:00 am</option>
                                      <option value="1-3">1:00 pm - 3:00 pm</option>
                                  </select>)}
                                </div>
                                <div className="col-md-3">
                                    {delivery_times}
                                    <select className="form-control" value={this.props.selectedSpecificTime}  onChange={(e: any) => this.props.setSpecificTime(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 12}}>
                                        <option value="">Extra</option>
                                        <option value="900">9:00</option>
                                        <option value="930">9:30</option>
                                    </select>
                                </div>
                              </div>
                            </form>
                            <Link to="/order/preview">Preview</Link>  
                            <br/>
                            <br/>
                            <Link to="/order/payment">Payment</Link>
                            <br/>
                            <br/>
                            <Link to="/order/menu">Back to Menu</Link>  
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>  
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
    setDate: (e: any) => {
    //  console.log("setdate" + moment(e).format('MMMM Do YYYY, h:mm:ss a'));
    //  dispatch(setDate(e));
    },
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
      dispatch(setUserLastName(e.target.value))
    },
    setUserMobile: (e: any) => {
      dispatch(setUserLastName(e.target.value))
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
  
  }
}

const DateTimeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateTime)

export default DateTimeConnected;

