// @flow

import React from 'react';

import { Link } from 'react-router';

import OrdersList from './orders_list';

import request from 'superagent';


export default class Events extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        
    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  createOrder(order_type) {

    window.event = {order_id: 1234, type: "social", address: "", event_name: "", guest_chooses: false, number_of_guests: 0, menu: [], status: "new", links: [{link: "event_details", text: "Event Details"}]};

    /*request
      .post('/api/order/new')
      .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .end(function(err, res){
        // Calling the end function will send the request
        //this.setState({payment_complete: true});
  
      });*/


    //alert(order_type);
    
    this.context.router.push('/order/12345/event_details');
    
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  render(): React.Element {
    return (
      <ul>
        links to create order
        <br/>
        <a onClick={this.createOrder.bind(this, "sconely_yours")}>Sconely Social1</a>
        <br/>
        <OrdersList />
      </ul>
    )
  }
}