'use strict';

import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_social_menu.tsx';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import PoolResponseSidebarCartItem from './pool_response_sidebar_cart_item.tsx';

import { Link } from 'react-router'
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addCartItem, removeCartItem} from './actions/cart_items.ts';
//import { getPublicMenu } from './reducers/menu';

//const Immutable  = require('immutable');
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
      this.setState({cartItems: this.props.User.orders[0].cartItems})

  }


  render(){

    let body: any = "";
    let { removeCartItem } = this.props;
    

    let order_type = this.props.User.orders[0].order_type;
    let regular_items = [];
    //let mini_items = [];
    let total_items_cost = 0;
    let total_regular_items = 0;
    let total_regular_items_cost = 0;
    let total_items = 0;
    let item_limit = "";
    let item_cost = 0;
    let item_quantity_text = null;
    let total_items_text = null;

    //alert(JSON.stringify(this.props.order.toJS()));
   

    //this.props.order.toJS().cart.map(function(item: any){

    //    item_count = item.dozens * item.quantity;
              
    //});

    let cart = "";

    //console.log("length order" + JSON.stringify(this.props.cart));
    //console.log("order type" + JSON.stringify(this.props.order));


    if(cart != ""){

        cart = "There are no items in your cart.";

    }else{

        //console.log("order " + JSON.stringify(this.props.cart));

        let that = this;

        //let cart_items = [{item_id: 1, quantity: 2}];

        regular_items = this.state.cartItems.filter((item: any) => {

            //console.log(JSON.stringify(item));

            if(item.size == "regular"){

                return item;

            }

            return

        });


        console.log("regular items " + JSON.stringify(regular_items));
        
        //1 doz/12 - 5/60 doz regular sized scones, $5 each
        //6 doz/72 - 15/174 doz regular sized scones, $4.75 each
        //16 doz/192 - 20/240 doz regular sized scones, $4.50 each

    

       //if(social_regular_items.length != 0){


        total_regular_items_cost = regular_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.00; }, 0)

        //}


        total_items_cost = total_regular_items_cost;

        //total_items = this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0);

        total_items = (regular_items.reduce((amount: any, item: any) => amount + item.quantity, 0));
        
         
        

   
    //alert(total_cost);

        cart = this.state.cartItems.map(function(item: any, index: any){

                      console.log("cart menuitems " + JSON.stringify(item));

                      let menu_item = this.props.menuItems.find((menu_item: any) => {

                          //console.log(JSON.stringify(menu_item) + " " + item.item_id);

                          return menu_item.menu_item_id === item.menu_item_id;

                      });

                      //console.log("index " + JSON.stringify(menu_item.name));

                      //let result = this.state.menuItemNames.find(function(item_name: any){return item_name.id === item.id;});
                      
                      //let item_name = this.props.menuItems[item.menu_item_id - 1].name;

                      let item_name = "menu_item.name";

                      //code is here to check for minis existing???
                      //if item.size == "" then pool or yours

                               
                          //if(item.size == "mini"){

                              //item_quantity_text = null;

                              /*if(this.props.User.orders[0].order_type == "yours"){

                                  item_quantity_text = item.quantity;

                              }else if(this.props.User.orders[0].order_type == "yours1" || this.props.User.orders[0].order_type == "social"){

                              //if(item.quantity % 12 == 0){

                                  item_quantity_text = (item.quantity/12) + "dz";

                              }else{*/

                                  item_quantity_text = item.quantity;

                              //}


                          
                              return(
                                        <form className="form-horizontal" style={{border: 1, position: "static"}}>
                                              <div className="form-group" style={{border: 1}}>
                                              <div className="col-md-5 col-xs-5">{item_name}</div>
                                              <div className="col-xs-1"><a onClick={() => this.props.increaseCartItemQuantity(index)}>+</a></div>
                                              <div className="col-xs-2">{item_quantity_text}</div>
                                              <div className="col-xs-1"><a onClick={() => this.props.decreaseCartItemQuantity(index)}>-</a></div>
                                              <div className="col-xs-1"><a onClick={() => this.props.removeCartItem(index)}>X</a></div>
                                          </div>
                                        </form>
                              )





                          //}else{

                          /*    return(
                                            <form className="form-horizontal" style={{border: 1, position: "static"}}>
                                              <div className="form-group" style={{border: 1}}>
                                                <div className="col-md-5">{item_name}</div>
                                                <div className="col-md-4">{12 * item.quantity}</div>
                                              </div>
                                            </form>
                                    )

                          }*/
                      //}
                  
                }.bind(this))

    }

    


    if(this.props.User.orders[0].order_type =="pool_order" && total_items == 11){

        item_limit = "You have reached your item limit";

    }else if(this.props.User.orders[0].order_type =="pool_response" && total_items == 11){

        item_limit = "You have reached your item limit";

    }


    //{this.props.params.repoName}

    //this.props.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0)


    //message if pool

    let item_quantity_message = "";

    /*if(this.props.User.orders[0].order_type == "pool_create_pool"){
        //if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 0 || this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 11){

            item_quantity_message = "Please choose between 1 and 11 scones";

        //}

    }else*/

    if(this.props.User.orders[0].order_type == "pool_response"){
        //if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 0 || this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 11){

            item_quantity_message = "Please choose between 1 and 11 scones";

        //}

    }
                  

    //console.log("message");

    let checkoutButton = null;


    if(this.props.User.orders[0].order_type == "pool_response"){

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 0){

          //{this.props.path == "/order/menu" && 

          //checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

          checkoutButton = <Link to="/pool_response/checkout" className={this.state.payment_button_classname} disabled={this.state.button_payment_disabled}  style={{borderRadius: 0}}>Checkout</Link> 

      }

    }//else pool guest create order
    
    total_items_text = "" + total_items;

    //pool response
      let message = <div>
                      <form className="form-horizontal">
                        <div className="col-md-4">
                            <b>Address</b> 
                        </div>
                        <div className="col-md-8" style={{fontSize: 13}}>
                            {this.state.delivery_address_street1}<br/>{this.state.delivery_address_city},&nbsp;{this.state.delivery_address_state}
                        </div>
                      </form>
                      <form className="form-horizontal">
                        <div className="col-md-4">
                            <b>Location</b> 
                        </div>
                        <div className="col-md-8" style={{fontSize: 13}}>
                            {this.state.delivery_address_pickup_location}
                        </div>
                      </form>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <form className="form-horizontal">
                        <div className="col-md-12" style={{paddingLeft: 10}}>
                            <b>Delivery</b> 
                        </div>
                      </form>
                      <form className="form-horizontal">
                        <div className="col-md-4">
                            <b>Date</b> 
                        </div>
                        <div className="col-md-8" style={{fontSize: 13}}>
                            {this.state.delivery_date_formatted}
                        </div>
                      </form>
                      <br/>
                      <br/>
                      <form className="form-horizontal">
                        <div className="col-md-4">
                            <b>Time</b> 
                        </div>
                        <div className="col-md-8" style={{fontSize: 13}}>
                            {this.state.delivery_time_range}
                        </div>
                      </form>
                      <br/>
                      <br/>
                      <form className="form-horizontal">
                        <div className="col-md-12" style={{paddingLeft: 10}}>
                            <b>Order By</b>
                        </div>
                      </form>
                      <form className="form-horizontal">
                          <div className="col-md-4">
                              <b>Date</b>
                          </div>
                      </form>
                      <br/>
                      <form className="form-horizontal">
                          <div className="col-md-8" style={{fontSize: 13}}>
                              {this.state.order_by_date_formatted}
                          </div>
                      </form>
                      <br/>
                      <form className="form-horizontal">
                          <div className="col-md-4">
                              <b>Time</b>
                          </div>
                      </form>
                      <form className="form-horizontal">
                          <div className="col-md-8" style={{fontSize: 13}}>
                              6:00 pm
                          </div>
                      </form>
                      <form className="form-horizontal">
                          <div className="col-md-12">
                              <br/>
                              <br/>
                              Choose between 1-11 scones
                              <br/>
                              $5 each
                              <br/>
                              <br/>
                              <b>Freshly baked artisanal scones</b>
                              <br/>
                              <b>Perfect for breakfast, lunch or a snack</b>
                              <br/>
                              <br/>
                              <b>Free Delivery</b>
                          </div>
                      </form>
                  </div>


    return (<div> 
                  {item_limit}
                  <br/>
                  {item_quantity_message}
                  <br/>
                  if pool response
                  <br/>
                  if pool create pool
                  <br/>
                  <br/>
                  {this.state.cartItems.map((item: any, index: any) => <PoolResponseSidebarCartItem index={"index"} item={item} item_quantity_text={""} item_name={""} increaseCartItemQuantity={() => this.props.increaseCartItemQuantity("index")} descreaseCartItemQuantity={() => this.props.decreaseCartItemQuantity("index")} removeCartItem={() => this.props.increaseCartItemQuantity("index")}/>)}
                  <br/>
                  {cart}
                  <br/>
                  {this.state.cartItems.length == 0 ? 'cart is empty' :

                    (<div>
                        <form className="form-horizontal" style={{border: 1}}>
                          <div className="form-group" style={{border: 1}}>
                            <div className="col-md-5 col-xs-5" style={{fontType: "helvetica", fontSize: "14"}}>Total Items</div>
                            <div className="col-md-1 col-xs-1"></div>
                            <div className="col-md-1 col-xs-3" style={{fontType: "helvetica", fontSize: "14"}}>{total_items_text}</div>
                          </div>
                        </form>
                        <br/>
                        <form className="form-horizontal" style={{border: 1}}>
                          <div className="form-group" style={{border: 1}}>
                            <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}>Delivery</div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1" style={{fontType: "helvetica", fontSize: "14"}}>$0.00</div>
                          </div>
                        </form>
                        <form className="form-horizontal" style={{border: 1}}>
                          <div className="form-group" style={{border: 1}}>
                            <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}>Total Cost</div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1" style={{fontType: "helvetica", fontSize: "14"}}>${total_items_cost.toFixed(2)}</div>
                          </div>
                        </form>
                      </div>)
                  }
                  {checkoutButton}
                  <br/>
                  <br/>
            </div>
    )
  }

  /*render(){
    alert(JSON.stringify(this.props.menu_items));
    return (  
          <div>here{this.state.here}</div>
    )
  }*/

}




export default PoolSidebarCart;
