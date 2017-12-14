'use strict';

import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_social_menu.tsx';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addCartItem, removeCartItem} from './actions/cart_items.ts';
//import { getPublicMenu } from './reducers/menu';

const Immutable  = require('immutable');
//import _ from 'lodash';

import axios from 'axios';


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

class PoolSidebarCart extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        menuItemNames: [],
        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 3, title: "freedom", description: "let freedom ring!"}, {item_id: 4, title: "freedom", description: "let freedom ring!"}, {item_id: 5, title: "freedom", description: "let freedom ring!"}, {item_id: 6, title: "freedom", description: "let freedom ring!"}, {item_id: 7, title: "freedom", description: "let freedom ring!"}],
        cartItems: [],
        pool_message_viewed: false,
        cost_text: ""

    };

     
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentWillMount(){

    console.log("psc" + JSON.stringify(this.props.path));

    //get menu items
    //this.setState({pool_message: "this.props.menuItems"})

    //console.log("sbc menu items " + JSON.stringify(this.props.menuItems));
    //console.log("sidebarcart user " + JSON.stringify(this.props.User));

    //this.setState({menuItemNames: this.props.menuItems})
    this.setState({cartItems: this.props.User.orders[0].cartItems})

    
    //this.props;


  }

  componentWillReceiveProps(nextProps: any){

      //console.log("sbc menu items cwrp " + JSON.stringify(this.props.menuItems));
      //console.log("sbc cart items cwrp " + JSON.stringify(this.props.User));
      //console.log("<b>sidebar cart props</b> " + JSON.stringify(nextProps));

      //this.setState({menuItemNames: this.props.menuItems})
      //this.setState({cartItems: this.props.User.orders[0].cartItems})

  }


  

  render(){

 
    return (<div> 
                  <form className="form-horizontal" style={{border: 1, position: "static"}}>
                        <div className="form-group" style={{border: 1}}>
                        <div className="col-md-5 col-xs-5">{this.props.item_name}</div>
                        <div className="col-xs-1"><a onClick={() => this.props.increaseCartItemQuantity(this.props.index)}>+</a></div>
                        <div className="col-xs-2">{this.props.item_quantity_text}</div>
                        <div className="col-xs-1"><a onClick={() => this.props.decreaseCartItemQuantity(this.props.index)}>-</a></div>
                        <div className="col-xs-1"><a onClick={() => this.props.removeCartItem(this.props.index)}>X</a></div>
                    </div>
                  </form>
                  <br/>     
            </div>
    )
  }


}




export default PoolSidebarCart;
