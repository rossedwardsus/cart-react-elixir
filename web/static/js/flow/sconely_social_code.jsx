// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

export default class Payment extends React.Component {
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
        <b>Payment</b>
        <br/>
        <select>
          <option>Personal</option>
        </select>
        <br/>
        Add another
        <br/>
        <button>submit</button>
        <br/>
        Payment complete.  You can now invite your guests to view the menu with the code.
      </ul>
    )
  }
}