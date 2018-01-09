'use strict';

import * as React from 'react';

import SocialSidebarCartItem from './social_order_sidebar_cart_item.tsx';

//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
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

class CollectionSidebarCart extends React.Component<any, any> {
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


    //get menu items
    //this.setState({pool_message: "this.props.menuItems"})

    console.log("sbc menu items cwm" + JSON.stringify(this.props.menuItems));
    console.log("sidebarcart user ");

    //this.setState({menuItemNames: this.props.menuItems})

    this.setState({cartItems: this.props.User.orders[0].cartItems})

    
  }

  componentWillReceiveProps(nextProps: any){

      console.log("sbc menu items cwrp " + JSON.stringify(this.props.menuItems));
      console.log("sbc user cwrp " + JSON.stringify(this.props.User));
      //console.log("<b>sidebar cart props</b> " + JSON.stringify(nextProps));

      this.setState({menuItem: this.props.menuItems})
      this.setState({cartItems: this.props.User.orders[0].cartItems})

  }

  

  render(){

    let body: any = "";
    let { removeCartItem } = this.props;
    

    
    let order_type = this.props.User.orders[0].order_type;
    let regular_items = [];
    let mini_items = [];
    let total_items_cost = 0;
    let total_regular_items = 0;
    let total_regular_items_cost = 0;
    let total_mini_items = 0;
    let total_mini_items_cost = 0;
    let total_items = 0;
    let item_limit = "";
    let item_cost = 0;
    let item_quantity_text = "";
    let total_items_text = "";

    //alert(JSON.stringify(this.props.order.toJS()));
   


    let cart = "";

    //console.log("length order" + JSON.stringify(this.props.cart));
    //console.log("order type" + JSON.stringify(this.props.order));


    if(cart != ""){

        cart = "There are no items in your cart.";

    }else{

        //console.log("order " + JSON.stringify(this.props.cart));

        let that = this;

        //let cart_items = [{item_id: 1, quantity: 2}];


        //turn this into a function

        regular_items = this.state.cartItems.filter((item: any) => {

            //console.log(JSON.stringify(item));

            if(item.size == "regular"){

                return item;

            }

            return

        });

        mini_items = this.state.cartItems.filter((item: any) => {

            //console.log(JSON.stringify(item));

            if(item.size == "mini"){

                return item;

            }

            return

        });

        console.log("regular items " + JSON.stringify(regular_items));
        
        //1 doz/12 - 5/60 doz regular sized scones, $5 each
        //6 doz/72 - 15/174 doz regular sized scones, $4.75 each
        //16 doz/192 - 20/240 doz regular sized scones, $4.50 each

        /*if(regular_items.length > 0){

            //console.log("regular items " + JSON.stringify(regular_items));
        
            total_regular_items = regular_items.reduce((amount: any, item: any) => {console.log(JSON.stringify(item));amount + item.quantity * 6.00}, 0);

            //if((total_social_regular_items >= 12) && (total_social_regular_items <= 60)){

            if(this.props.User.orders[0].order_type == "social"){

                item_cost = 5.00;

            }else{

                item_cost = 5.00;

            }

            //}else if(total_social_regular_items >= 72 && total_social_regular_items <= 174){

            //    item_cost = 4.75;

            //}else if(total_social_regular_items >= 186 && total_social_regular_items <= 200){

            //    item_cost = 4.50;

            //}
            
        }*/

        //if(mini_items.length > 0){

            //console.log("mini items " + JSON.stringify(mini_items));
        
            //total_mini_items = mini_items.reduce((amount: any, item: any) => {console.log(JSON.stringify(item));amount + item.quantity * 6.0}, 0);

            //if((total_social_mini_items >= 12) && (total_social_regular_items <= 60)){

            //    item_cost = 2.25;

            //}else if(total_social_mini_items >= 72 && total_social_regular_items <= 174){

            //    item_cost = 4.75;

            //}else if(total_social_mini_items >= 186 && total_social_regular_items <= 200){

            //    item_cost = 4.50;

            //}
            
        //}
        



        //social_mini_items = this.state.cartItems.map((item: any) => {

            //if(item.twelveortwentyfourminis == "24_minis"){

            //    return item;

            //}

        //});

        //if(social_regular_items.length != 0){


        total_regular_items_cost = regular_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.00; }, 0)

        total_mini_items_cost = mini_items.reduce((amount: any, item: any) => { return amount + item.quantity * 2.25; }, 0)

        //}


        total_items_cost = total_regular_items_cost + total_mini_items_cost;


        total_items = (regular_items.reduce((amount: any, item: any) => amount + item.quantity, 0)) + (mini_items.reduce((amount: any, item: any) => amount + item.quantity, 0));
        
         
        

 

    //alert(total_cost);

        cart = this.state.cartItems.map(function(item: any, index: any){

                      console.log("cart menuitems " + JSON.stringify(item));

                      //let menu_item = this.props.menuItems.find((menu_item: any) => {

                          //console.log(JSON.stringify(menu_item) + " " + JSON.stringify(item));

                      //    return menu_item.menu_item_id === item.menu_item_id;

                      //});

                      //console.log("index " + JSON.stringify(menu_item.name));

                      //let result = this.state.menuItemNames.find(function(item_name: any){return item_name.id === item.id;});
                      
                      //let item_name = this.props.menuItems[item.menu_item_id - 1].name;

                      let item_name = "menu_item.name";

                      //if(menu_item != undefined){
                        
                      //  item_name = menu_item.name;

                      //}

                      //let item_name = "";

                      //console.log("sidebar cart " + JSON.stringify(that.Order));

                      //console.log(order_type);


                      //code is here to check for minis existing???
                      //if item.size == "" then pool or yours

                             
                          //if(item.size == "mini"){

                              //item_quantity_text = null;

                              //if(this.props.User.orders[0].order_type == "yours"){

                              //    item_quantity_text = item.quantity;

                              //}else if(this.props.User.orders[0].order_type == "yours1" || this.props.User.orders[0].order_type == "social"){

                              //if(item.quantity % 12 == 0){

                                  item_quantity_text = (item.quantity/12) + "dz";

                              //}else{

                              //    item_quantity_text = item.quantity;

                              //}

                              //<SocialSidebarCartItem index={index} item={item} item_quantity_text={""} item_name={""} increaseCartItemQuantity={this.props.increaseCartItemQuantity(index)}} descreaseCartItemQuantity={this.props.decreaseCartItemQuantity(index)} removeCartItem={this.props.increaseCartItemQuantity(index)} />
                          
                              return(
                                        <form className="form-horizontal" style={{border: 1, position: "static"}}>
                                              <div className="form-group" style={{border: 1}}>
                                              {item.size == "mini" ? <div className="col-md-5 col-xs-5">{item_name} mini</div> : <div className="col-md-5 col-xs-5">{item_name}</div>}
                                              <div className="col-xs-1"><a onClick={() => this.props.increaseCartItemQuantity(index)}>+</a></div>
                                              <div className="col-xs-2">{item_quantity_text}</div>
                                              <div className="col-xs-1"><a onClick={() => this.props.decreaseCartItemQuantity(index)}>-</a></div>
                                              <div className="col-xs-1"><a onClick={() => this.props.removeCartItem(index)}>X</a></div>
                                          </div>
                                        </form>
                              )


                  
                }.bind(this))

    }

    
    if(total_items == 150){

        item_limit = "You have reached your item limit";

    }



    let item_quantity_message = "Please choose between 6 and 10 scones";

    
    console.log("message");

    let checkoutButton = null;


    /*if(this.props.User.orders[0].order_type == "pool_order"){

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 0){

          //{this.props.path == "/order/menu" && 

          checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

      }

    }if(this.props.User.orders[0].order_type == "pool"){

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 0){

          //{this.props.path == "/order/menu" && 

          checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

      }

    }else if(this.props.User.orders[0].order_type == "yours"){

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 1){

          checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

      }

    }else if(this.props.User.orders[0].order_type == "social"){*/

      

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity * 12, 0) > 11){

          //checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

           checkoutButton = <Link to="/social/order/checkout" className={this.state.payment_button_classname} disabled={this.state.button_payment_disabled}  style={{borderRadius: 0}}>Checkout</Link> 

      }

    //}

    if(total_items % 12 == 0){

        total_items_text = (total_items/12) + "dz";

    }else{

        total_items_text = "" + total_items;

    }

    return (<div> 
                  <br/>
                  {(this.state.cartItems.length == 0) ?
                        (<div>
                            <br/>
                            cart
                            <br/>
                            Choose between a 1/2 dozen and 6 regular size scones.
                            <br/>
                            <br/>
                            Plan ahead, order at least 48 hours in advance
                            <br/>
                            <br/>
                            <b>Perfect for a meal or a snack!</b>
                            <br/>
                            <br/>
                            <br/>
                            </div>) : cart}
                  <br/>
                  {this.state.cartItems.map((item: any, index: any) => <SocialSidebarCartItem index={"index"} item={item} item_quantity_text={""} item_name={""} increaseCartItemQuantity={() => this.props.increaseCartItemQuantity("index")} descreaseCartItemQuantity={() => this.props.decreaseCartItemQuantity("index")} removeCartItem={() => this.props.increaseCartItemQuantity("index")}/>)}
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




export default CollectionSidebarCart;
