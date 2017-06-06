
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
const Immutable  = require('immutable');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var DayPickerInput = require("react-day-picker/DayPickerInput");

import "react-day-picker/lib/style.css"

require('react-datepicker/dist/react-datepicker.css');



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

        startDate: moment(),
        selected_time: "",
        selected_specific_time: "",
        
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

    //alert();
  
  }

  
  setDate(date: any){

    console.log("date " + moment(date).toISOString());

    this.setState({startDate: date});
    this.props.setDate(moment(date).format("YYYY/MM/DD"));
    //this.props.setDate(moment(date).toISOString());

    //this.props.cartValidated();
    this.props.datetimeValidated();

  }

  setDay(day: any){

    console.log("date " + moment(day).format("YYYY/MM/DD"));

    //this.setState({startDate: date});
    //this.props.setDate(moment(date).format("YYYY/MM/DD"));
    //this.props.setDate(moment(date).toISOString());

    //this.props.cartValidated();
    //this.props.datetimeValidated();

  }
  
  
  render(): JSX.Element{

    let delivery_address_pickup_datetime:any = "";

    if(this.props.order.order_type == "sconely_yours"){

        delivery_address_pickup_datetime = <b>Pickup Date and Time</b>;

    }else{

        delivery_address_pickup_datetime = <b>Delivery Date and Time</b>;

    }
   
    return ( <div>
                <div className="hidden-xs">
                    <form className="form-horizontal">
                        <div className="form-group">
                          <div className="col-sm-12">
                          {delivery_address_pickup_datetime}
                          </div>
                        </div>
                    </form>
                    <form className="form-horizontal" style={{border: 0}}>
                      <div className="form-group show-lg" style={{borderRadius: 0}}>
                        <div className="col-md-3">
                          <DayPickerInput onDayChange={(e: any) => this.setDay(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 10, zIndex: -1}}/>
                        </div>
                        <div className="col-md-3">
                          <select className="form-control" id="exampleInputEmail2" value={this.props.selectedTime} onChange={(e: any) => this.props.setTime(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 10}}>
                              <option value="">Free</option>
                              <option value="9-11">9:00 am - 11:00 am</option>
                              <option value="1-3">1:00 pm - 3:00 pm</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-control" value={this.props.selectedSpecificTime}  onChange={(e: any) => this.props.setSpecificTime(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 26, fontSize: 10}}>
                                <option value="">Extra</option>
                                <option value="900">9:00</option>
                                <option value="930">9:30</option>
                            </select>
                        </div>
                      </div>
                    </form>
                </div>
                <div className="hidden-lg">
                  <form className="form-horizontal">
                        <div className="form-group">
                          <div className="col-sm-12">
                          {delivery_address_pickup_datetime}
                          </div>
                        </div>
                  </form>
                  <form className="form-horizontal" style={{border: 0}}>
                    <div className="form-group show-xs" style={{borderRadius: 0}}>
                      <div className="col-md-3">
                        <DayPickerInput onDayChange={(e: any) => this.setDay(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 10, zIndex: -1}}/>
                      </div>
                    </div>
                    <div className="form-group show-xs" style={{borderRadius: 0}}>
                      <div className="col-md-3">
                        <select className="form-control" id="exampleInputEmail2" value={this.props.selectedTime} onChange={(e: any) => this.props.setTime(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 10}}>
                            <option value="">Free</option>
                            <option value="9-11">9:00 am - 11:00 am</option>
                            <option value="1-3">1:00 pm - 3:00 pm</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group show-xs" style={{borderRadius: 0}}>
                      <div className="col-md-3">
                          <select className="form-control" value={this.props.selectedSpecificTime}  onChange={(e: any) => this.props.setSpecificTime(e)} style={{borderRadius: 0, WebkitAppearance: "none", height: 26, fontSize: 10}}>
                              <option value="">Extra</option>
                              <option value="900">9:00</option>
                              <option value="930">9:30</option>
                          </select>
                      </div>
                    </div>
                  </form>
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
  console.log("datetime component/state" + JSON.stringify(state));
  return {
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //setDate: (e: any) => {
    //  console.log("setdate" + moment(e).format('MMMM Do YYYY, h:mm:ss a'));
    //  dispatch(setDate(e));
    //},
    //setTime: (e: any) => {
    //  console.log("settime" + e.target.value);
    //  dispatch(setTime(e.target.value));
    //},
    //datetimeValidated: () => {
      //console.log(e.target.value);
    //  dispatch(datetimeValidated());
    //}
  }
}

const DateTime1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateTime)

export default DateTime;

