
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

class MobileCheckoutButton extends React.Component<any, any> {
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

  completeOrder(){

    let that = this;

     //if(this.state.first_name_validated === false){

          //this.props.order_datetime;
          //this.props.order_delivery_address
          //this.props.order_payment_method
          //this.props.cart_items

          axios.post('/api/graphql', {
          //axios.post('http://localhost:4000/api/graphql', {
                 query: 'mutation {completeOrder (order_type: "social", order_delivery_address_street1: "' + this.props.order_delivery_address.street1 + '", order_delivery_address_city: "' + this.props.order_delivery_address.city + '", order_delivery_address_state: "' + this.props.order_delivery_address.state + '", order_delivery_address_zipcode: "' + this.props.order_delivery_address.zipcode + '", order_datetime_date: "' + this.props.order_datetime.date + '", order_first_name: "' + that.props.order_name.first_name + '", order_last_name: "' + that.props.order_name.last_name + '", order_contact_email: "' + this.props.order_contact.email + '", order_contact_mobile: "' + this.props.order_contact.mobile + '", order_payment_name_on_card: "' + this.props.order_payment_method.name_on_card + '", order_payment_card_number: "' + this.props.order_payment_method.card_number + '", order_payment_expiry_month: "' + this.props.order_payment_method.expiry_month + '", order_payment_expiry_year: "' + this.props.order_payment_method.expiry_year + '", order_payment_security_code: "' + this.props.order_payment_method.security_code + '") { status, order_id }}'
          })
          .then((response: any) => {

                console.log("graphql response" + JSON.stringify(response));

                //that.props.history.push('/user');
                //context.router

                that.props.setOrderId(1);

                this.context.router.push('/order/complete');
      

          })
          .catch((error: any) => {

                console.log("error" + error);
                //go to code/payment screen
        //        this.props.loadView();


                //display errror to user - payment

         //if (!error.status) {
            // network error
          //}

          })
    //}

  }

  
  render(): JSX.Element{

    //please enter a valid name
    //please enter a valid date
    //please enter a valid contact

    return ( <div>
                <Link to="/order/checkout" className="btn btn-default">Checkout</Link>
              </div>
    )
  }

 

}

export default MobileCheckoutButton;


