
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
const Immutable  = require('immutable');

//import {setDeliveryAddressStreet1, setDeliveryAddressStreet2, setDeliveryAddressCity, setDeliveryAddressState, setDeliveryAddressZipcode} from './actions/order_delivery_address.ts';



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

class DeliveryAddress extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        street1: "",
        street2: "",
        city: "",
        state: "",
        zipcode: "",
        zipcodes: [90012, 90012, 90013, 90014, 90015, 90017, 90021, 90053, 90055, 90071, 90074, 90079, 90081, 90086, 90291, 90401, 90402, 90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411]
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

    this.setState({street1: this.props.deliveryAddress.street1})
    this.setState({street2: this.props.deliveryAddress.street2})

  }

  
  setDeliveryAddressStreet1(e: any){

      this.setState({street1: e.target.value});
      this.props.setDeliveryAddressStreet1(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

  setDeliveryAddressStreet2(e: any){

      this.setState({street2: e.target.value});
      this.props.setDeliveryAddressStreet2(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }
  

  setDeliveryAddressCity(e: any){

      this.setState({city: e.target.value});
      this.props.setDeliveryAddressCity(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }


  setDeliveryAddressState(e: any){

      this.setState({state: e.target.value});
      this.props.setDeliveryAddressState(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

  setDeliveryAddressZipcode(e: any){

      this.setState({zipcode: e.target.value});
      //this.props.setDeliveryAddressZipcode(e.target.value);

      let dtla = [90012, 90014, 90017, 90074, 90071, 90081, 90012, 90013, 90017, 90012, 90053, 90014, 90015, 90021, 90079, 90055, 90012, 90014, 90071, 90012, 90015, 90017, 90021, 90086]

      let sm = [90291, 90401, 90402, 90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411]

      console.log("e" + e.target.value);
      console.log("dtla" + dtla.indexOf(parseInt(e.target.value)));
      console.log("sm" + sm.indexOf(parseInt(e.target.value)));


      if(dtla.indexOf(parseInt(e.target.value)) > -1){

          this.props.setDeliveryCost(0);

      }else if(sm.indexOf(parseInt(e.target.value)) > -1){

          this.props.setDeliveryCost(10);

      }

      //this.props.setDeliveryAddressZipcode(e);
      //set location for delivery time

      //if street1 street2 city state
      //this.props.setdeliveryAddressValidated();

  }

  
  
  render(): JSX.Element{

    let delivery_address:any = "";

    console.log("delivery address " + this.props.order.order_type);

    if(this.props.order.order_type == "sconely_yours"){

        delivery_address = <div>
                              <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-sm-3">
                                    Pickup
                                    <br/>
                                    <select className="form-control">
                                      <option></option>
                                      <option>Crafted Kitchen</option>
                                    </select>
                                  </div>
                                </div>
                              </form>
                          </div>

    }else{

        delivery_address = <div>
                          {this.props.session.session_id != "" &&
                           <form className="form-horizontal">
                              <div className="form-group">
                                <div className="col-sm-3">
                                    <b>Delivery Address</b>
                                    <br/>
                                      <select className="form-control">
                                          {this.props.user.delivery_address_names.map(function(address: any){
                                            return(<option>{address.name}</option>)
                                          })}
                                      </select>
                                </div>
                              </div>
                           </form>}
                           <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-sm-3">
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Street" value={this.state.street1} onChange={(e) => this.setDeliveryAddressStreet1(e)} style={{borderRadius: 0, fontSize: 16}}/>
                                  </div>
                                  <div className="col-sm-3">
                                    <input type="text" value={this.state.street2} onChange={(e: any) => this.setDeliveryAddressStreet2(e)} className="form-control" id="exampleInputName2" placeholder="Street 2" style={{borderRadius: 0, fontSize: 16}}/>
                                  </div>
                                </div>
                           </form>
                          <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-sm-3">
                                    <select className="form-control" onChange={(value) => this.setDeliveryAddressCity(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                      <option>City</option>
                                      <option value="los_angeles">Los Angeles</option>
                                      <option value="santa_monica">Santa Monica</option>
                                    </select>
                                  </div>
                                  <div className="col-sm-3">
                                    <select className="form-control" onChange={(value) => this.setDeliveryAddressState(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                      <option>State</option>
                                      <option value="ca">CA</option>
                                    </select>
                                  </div>
                                  <div className="col-sm-3">
                                    <select className="form-control" onChange={(value) => this.setDeliveryAddressZipcode(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                      <option>Zipcode</option>
                                      <option>Free</option>
                                      
                                      {this.state.zipcodes.map(function(zipcode: any){

                                          return(<option value={zipcode}>{zipcode}</option>)

                                      })}
                                    
                                    </select>
                                  </div>
                                </div>
                              </form>
                          </div>

    }
   
    return ( <div>
                {this.props.order_type}
                <br/>
                {delivery_address}
                <br/>
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
  console.log("delivery address component/state" + JSON.stringify(state));
  return {
   order: state.Order,
   delivery_address: state.delivery_address,
   user_delivery_addresses: state.user_delivery_addresses
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //setDeliveryAddressStreet1: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setDeliveryAddressStreet1(e.target.value));
    //},
    //setDeliveryAddressStreet2: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setLastName(e.target.value));
    //},
    //setDeliveryAddressCity: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    //},
    //deliveryAddressValidated: () => {
    //  console.log(e.target.value);
    //  //dispatch(deliveryAddressValidated(e.target.value));
    //}
  }
}

const DeliveryAddress1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryAddress)

export default DeliveryAddress;

