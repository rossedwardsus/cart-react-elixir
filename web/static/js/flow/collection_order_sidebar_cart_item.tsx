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

class CollectionOrderSidebarCartItem extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        itemName: "",
        itemNameText: "",
        itemQuantityText: ""

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

      console.log("collectiom cart item cwm " + JSON.stringify(this.props));

      let item = this.props.collectionMenuItems.filter((item: any) => item.menu_item_id === this.props.item.menu_item_id);

      console.log("item " + JSON.stringify(item));

      //if item is not empty

      if(item.length !== 0){

        this.setState({itemName: item[0].collection_name});

      }
      
      //this.setState({itemNameText: item[0].collection_name});
      //this.setState({itemQuantityText: "1 1/2 dz"});

      //console.log(this.props.item.quantity/12);
      //if remainder == .5 then remainder_text == "1/2"

      //if this.props.item.size == "four" else size == "six"

      let quotient = Math.floor(this.props.item.quantity/12);
      let remainder = this.props.item.quantity % 12;
      let quotient_text = "";
      let remainder_text = "";

      console.log(quotient + " " + remainder);

      if(quotient === 0){

          quotient_text = "";

      }else{

          quotient_text = "" + quotient;

      }

      if(remainder === 6){

          remainder_text = "1/2";

      }

      //this.setState({itemQuantityText: quotient_text + "" + remainder_text + " dz"});
      let item_size = 0;

      if(this.props.item.size === "four"){

          item_size = 4;
          this.setState({itemQuantityText: "" + this.props.item.quantity})

      }else{

          item_size = 6;
          this.setState({itemQuantityText: "" + this.props.item.quantity})

      }

      /*if(this.props.item.quantity == 6){

          this.setState({itemQuantityText: "1/2 dz"});

      }else if(nextProps.item.quantity == 12){

          this.setState({itemQuantityText: "1 dz"});

      }else if(nextProps.item.quantity == 18){

          this.setState({itemQuantityText: "1 1/2 dz"});

      }*/


  }

  componentWillReceiveProps = (nextProps: any) => {

      console.log("collectiom cart item cwrp" + JSON.stringify(nextProps));
      //console.log("collectiom cart item cwrp " + JSON.stringify(this.props));

      let item = nextProps.collectionMenuItems.filter((item: any) => item.menu_item_id === this.props.item.menu_item_id);

      console.log("item cwrp " + JSON.stringify(item));

      //if item is not empty

      if(item.length !== 0){

        this.setState({itemName: item[0].collection_name});

      }

      /*let quotient = Math.floor(this.props.item.quantity/12);
      let remainder = this.props.item.quantity % 12;
      let quotient_text = "";
      let remainder_text = "";

      console.log(quotient + " " + remainder);

      if(quotient === 0){

          quotient_text = "";

      }else{

          quotient_text = "" + quotient;

      }

      if(remainder === 6){

          remainder_text = "1/2";

      }*/

      //this.setState({itemQuantityText: quotient_text + "" + remainder_text + " dz"});

      let item_size = 0;

      if(this.props.item.size === "four"){

          item_size = 4;
          this.setState({itemQuantityText: "" + nextProps.item.quantity})

      }else{

          item_size = 6;
          this.setState({itemQuantityText: "" + nextProps.item.quantity})

      }

      //this.setState({itemQuantityText: "" + this.props.item.quantity * item_size})
      this.setState({itemQuantityText: "" + nextProps.item.quantity})





      //let item = nextProps.collectionMenuItems.filter((item: any) => item.id === nextProps.item.menu_item_id);

      //console.log("item " + JSON.stringify(item));

      //this.setState({itemName: item.collection_name});

      /*if(nextProps.item.quantity == 6){

          this.setState({itemQuantityText: "1/2 dz"});

      }else if(nextProps.item.quantity == 12){

          this.setState({itemQuantityText: "1 dz"});

      }else if(nextProps.item.quantity == 18){

          this.setState({itemQuantityText: "1 1/2 dz"});

      }*/

  }


  

  render(){

    
    return (<form className="form-horizontal" style={{position: "static", paddingLeft: 20}}>
                      <div className="form-group">
                        <div className="col-md-6 col-xs-6" style={{fontType: "helvetica", fontSize: 12}}>{this.state.itemName}<br/>(Box of {this.props.item.size})</div>
                        <div className="col-xs-1" style={{fontType: "helvetica", fontSize: 12}}><a onClick={() => this.props.increaseCartItemQuantity(this.props.index)}>+</a></div>
                        <div className="col-xs-1" style={{fontType: "helvetica", fontSize: 12}}>{this.state.itemQuantityText}</div>
                        <div className="col-xs-1" style={{fontType: "helvetica", fontSize: 12}}><a onClick={(index: any) => this.props.decreaseCartItemQuantity(this.props.index)}>-</a></div>
                        <div className="col-xs-1" style={{fontType: "helvetica", fontSize: 12}}><a onClick={() => this.props.removeCartItem(this.props.index)}>X</a></div>
                      </div>
                </form>)
  }

 
}




export default CollectionOrderSidebarCartItem;
