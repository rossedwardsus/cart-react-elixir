// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

export default class User extends React.Component {
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
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  render(): React.Element {
    return (
      <ul>
        links to create order
        <br/>
        <a onClick={this.createOrder.bind(this, "sconely_yours")}>Sconely Social</a>
        <br/>
        orders
      </ul>
    )
  }
}