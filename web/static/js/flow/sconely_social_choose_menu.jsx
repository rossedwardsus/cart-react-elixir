// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

export default class Items extends React.Component {
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
      <div>
        <b>Choose Items</b>
        <br/> 
        total items
        <br/>
        <br/>
        item1 photo
        <br/>
        <input type="checkbox"/>
        <br/>
        item2 photo
        <br/>
        <input type="checkbox"/>
        <br/>   
        <br/>
      </div>
    )
  }
}