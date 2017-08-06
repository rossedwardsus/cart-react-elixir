
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
//import {setFirstName, setLastName, setCompanyName} from './actions/order_name.ts';
import axios from 'axios';


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

class ProcessOrderButton extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

       first_name: "",
       last_name: "",
       validated: "btn btn-default"
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

   
  }

  componentWillReceiveProps(){

    console.log("checkout button componentwillreceiveprops" + JSON.stringify(this.props.validations));

    //if(this.props.validations.datetime_validated && this.props.validations.name_validated){

        this.setState({validated: "btn btn-default"});

    //}

  }

  saveOrder(){

    let that = this;

    this.props.saveOrder();

     //if(this.state.first_name_validated === false){

          //this.props.event_name
          //this.props.code
          //this.props.guest_count
          //this.props.order_datetime;
          //this.props.order_delivery_address
          //this.props.order_payment_method
          //this.props.additional_items

          /*axios.post('/api/graphql', {
          //axios.post('http://localhost:4000/api/graphql', {
                 query: 'mutation {createSconelySignatureOrder (event_name: "signature") { status, order_id }}'
          })
          .then((response: any) => {

                console.log("graphql response" + JSON.stringify(response));

                //that.props.history.push('/user');
                //context.router

          //      that.props.setOrderId(1);

            //    this.context.router.push('/order/complete');
      

          })
          .catch((error: any) => {

                console.log("error" + error);
                //go to code/payment screen
        //        this.props.loadView();


                //display errror to user - payment

         //if (!error.status) {
            // network error
          //}

          })*/
    //}

  }

  //order name invited guest count delivery date time address required
  //as well as payment
  //save button

  render(): JSX.Element{

    //please enter a valid name
    //please enter a valid date
    //please enter a valid contact

    return ( <div>

                <button className={this.state.validated} onClick={() => this.props.processSignatureOrder()}>Process Order</button>
              </div>
    )
  }

 

}

export default ProcessOrderButton;


