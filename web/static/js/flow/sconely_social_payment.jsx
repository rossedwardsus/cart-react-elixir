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

        payment_complete: false
        
    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  completePayment(order_type) {

    //make payent through stripe
    
    this.setState({payment_complete});
  
  }

  render(): React.Element {
    return (
      <div>
        <b>Payment</b>
        <br/>
        Subtotal: {this.props.total}
        <br/>
        Delivery Cost: 
        <br/>
        Radio
        <br/>
        <select>
          <option>Personal</option>
        </select>
        <br/>
        Add another
        <br/>
        Name this card:
        <br/>
        Card Number
        <br/>
        Expiration
        <br/>
        Security Code
        <br/>
        <button>Complete order</button>
        <br/>
        If Payment complete.  You can now invite your guests to view the menu with the code.
      </div>
    )
  }
}