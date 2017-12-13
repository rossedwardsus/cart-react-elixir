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

class SocialSidebarCartItem extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        item_name: "",
        item_quantity_text: ""

    };

     
  }

  //let menu_item = this.props.menuItems.find((menu_item: any) => {

      //console.log(JSON.stringify(menu_item) + " " + JSON.stringify(item));

  //    return menu_item.menu_item_id === item.menu_item_id;

  //});

  //console.log("index " + JSON.stringify(menu_item.name));

  //let result = this.state.menuItemNames.find(function(item_name: any){return item_name.id === item.id;});
  
  //let item_name = this.props.menuItems[item.menu_item_id - 1].name;

  //let item_name = "menu_item.name";

  //if(menu_item != undefined){
    
  //  item_name = menu_item.name;

  //}

  componentWillMount = (nextProps: any) => {

      console.log("sosci cwm" + JSON.stringify(this.props));

      this.setState({item_quantity_text: ((this.props.item.quantity/12) + "dz")});


  }

  componentWillReceiveProps = (nextProps: any) => {

      console.log("sosci cwrp" + JSON.stringify(nextProps));

  }


  

  render(){

    
    return (<form className="form-horizontal" style={{border: 1, position: "static"}}>
                      <div className="form-group" style={{border: 1}}>
                      {this.props.item.size == "mini" ? <div className="col-md-5 col-xs-5">{this.props.item_name} mini</div> : <div className="col-md-5 col-xs-5">{"this.props.item_name"}</div>}
                      <div className="col-xs-1"><a onClick={() => this.props.increaseCartItemQuantity(this.props.index)}>+</a></div>
                      <div className="col-xs-2">{this.state.item_quantity_text}</div>
                      <div className="col-xs-1"><a onClick={() => this.props.decreaseCartItemQuantity(this.props.index)}>-</a></div>
                      <div className="col-xs-1"><a onClick={() => this.props.removeCartItem(this.props.index)}>X</a></div>
                      </div>
                </form>)
  }

 
}




export default SocialSidebarCartItem;
