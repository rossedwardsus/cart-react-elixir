
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//import { getPublicMenu } from './reducers/menu';
const Immutable  = require('immutable');

import {setDeliveryAddressStreet1, setDeliveryAddressStreet2, setDeliveryAddressCity, setDeliveryAddressState, setDeliveryAddressZipcode} from './actions/order_delivery_address.ts';



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

        street: ""
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

    this.setState({street: this.props.delivery_address.street1})


  }

  
  setDeliveryAddressStreet1(e: any){

      this.setState({street1: e.target.value});
      this.props.setDeliveryAddressStreet1(e);

  }

  setDeliveryAddressStreet2(e: any){


  }
  

  setDeliveryAddressCity(e: any){


  }


  setDeliveryAddressState(e: any){


  }

  setDeliveryAddressZipcode(e: any){


  }

  
  
  render(): JSX.Element{

   
    return ( <div>
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-sm-3">
                        <b>Address</b>
                        <br/>
                          <select className="form-control">
                              <option>Home</option>
                              <option>Office</option>
                          </select>
                        <br/>
                    </div>
                  </div>
               </form>
               <form className="form-inline">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputName2" placeholder="Street" onChange={(e) => this.setDeliveryAddressStreet1(e)}/>
                    </div>
                    <div className="form-group">
                      <input type="text" onChange={(e: any) => this.setDeliveryAddressStreet2(e)} className="form-control" id="exampleInputName2" placeholder="Street 2"/>
                    </div>
               </form>
              <form className="form-inline">
                    <div className="form-group">
                      <select className="form-control" onChange={(value) => this.setDeliveryAddressCity(value)}>
                          <option></option>
                          <option>Los Angeles</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control" onChange={(value) => this.setDeliveryAddressState(value)}>
                          <option></option>
                          <option>CA</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <select className="form-control" onChange={(value) => this.setDeliveryAddressZipcode(value)}>
                          <option></option>
                          <option>90025</option>
                      </select>
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


function mapStateToProps(state: any) {
  console.log("delivery address component/state" + JSON.stringify(state.delivery_address));
  return {
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
    setDeliveryAddressStreet1: (e: any) => {
      console.log(e.target.value);
      dispatch(setDeliveryAddressStreet1(e.target.value));
    },
    //setLastName: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setLastName(e.target.value));
    //},
    //setBusinessName: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    //}
  }
}

const DeliveryAddress1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryAddress)

export default DeliveryAddress1;

