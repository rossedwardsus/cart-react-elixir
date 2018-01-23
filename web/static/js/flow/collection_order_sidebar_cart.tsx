'use strict';

import * as React from 'react';

import CollectionOrderSidebarCartItem from './collection_order_sidebar_cart_item.tsx';

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
        cost_text: "",
        collectionMenuItems: [],
        payment_button_classname: "btn btn-default",
        payment_button_disabled: false,
        User: {},
        deliveryCost: 0.00,
        deliveryCostFormatted: ""

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

    console.log("sbc menu items cwm" + JSON.stringify(this.props.collectionMenuItems));
    console.log("sidebarcart user ");

    this.setState({collectionMenuItems: this.props.collectionMenuItems})
    this.setState({cartItems: this.props.User.orders[0].cartItems})

    //let delivery_cost_formatted = "";

    if(this.props.User.orders[0].deliveryCost === ""){

        this.setState({deliveryCost : 0.00});
        this.setState({deliveryCostFormatted : "$0.00"});

    }else{

        this.setState({deliveryCost : parseInt(this.props.User.orders[0].deliveryCost).toFixed(2)});
        this.setState({deliveryCostFormatted : "" + parseInt(this.props.User.orders[0].deliveryCost).toFixed(2)});

    }

    
  }

  componentWillReceiveProps(nextProps: any){

      //console.log("collection sidebar cart collection menu items cwrp " + JSON.stringify(nextProps.collectionMenuItems));
      console.log("collection sidebar cart user cwrp " + JSON.stringify(nextProps.User));
      //console.log("<b>sidebar cart props</b> " + JSON.stringify(nextProps));

      this.setState({User: nextProps.User})
      this.setState({collectionMenuItems: nextProps.collectionMenuItems})
      this.setState({cartItems: nextProps.User.orders[0].cartItems})

    if(nextProps.User.orders[0].deliveryCost === ""){

        this.setState({deliveryCost : 0.00});
        this.setState({deliveryCostFormatted : "$0.00"});

    //}if(nextProps.User.orders[0].deliveryCost === 0){

     //   this.setState({deliveryCost : 0.00});
     //   this.setState({deliveryCostFormatted : "$0.00"});

    }else{

        this.setState({deliveryCost: nextProps.User.orders[0].deliveryCost});
        this.setState({deliveryCostFormatted : "$" + parseInt(nextProps.User.orders[0].deliveryCost).toFixed(2)});

    }

  }

  

  render(){

    let body: any = "";
    let { removeCartItem } = this.props;
    

    
    let order_type = this.props.User.orders[0].order_type;
    let four_items = [];
    let six_items = [];
    let subtotal = 0;
    let subtotal_items_cost = 0;
    let total_items_cost = 0;
    let total_four_items = 0;
    let subtotal_four_items = 0;
    let total_regular_items_cost = 0;
    let total_six_items = 0;
    let subtotal_six_items = 0;
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

        four_items = this.state.cartItems.filter((item: any) => {

            //console.log(JSON.stringify(item));

            if(item.size == "four"){

                return item;

            }

            return

        });

        console.log("four items" + JSON.stringify(four_items));

        six_items = this.state.cartItems.filter((item: any) => {

            //console.log(JSON.stringify(item));

            if(item.size == "six"){

                return item;

            }

            return

        });

        console.log("four items" + JSON.stringify(four_items));


        //console.log("regular items " + JSON.stringify(four_items));
        
        //1 doz/12 - 5/60 doz regular sized scones, $5 each
        //6 doz/72 - 15/174 doz regular sized scones, $4.75 each
        //16 doz/192 - 20/240 doz regular sized scones, $4.50 each

        
        //total_items = (four_items.reduce((amount: any, item: any) => amount + item.quantity, 0)) + (four_items.reduce((amount: any, item: any) => amount + item.quantity, 0));
        total_four_items = four_items.reduce((amount: any, item: any) => amount + item.quantity, 0);
        total_six_items = six_items.reduce((amount: any, item: any) => amount + item.quantity, 0);

        console.log("total four items" + total_four_items);
        console.log("total six items" + total_six_items);

        total_items = total_four_items + total_six_items;
        total_items_text = "" + (total_four_items + total_six_items);

        //half_dozens = total_items/6;

        //size == "six"

        //how many of "four" and "six" items did you order.  take that number and multiply it by the price for those.

        subtotal_four_items = (total_four_items * 14); 
        subtotal_six_items = (total_six_items * 22);     
        
        subtotal_items_cost = (total_items/6 * 22);  

        
        subtotal = subtotal_four_items + subtotal_six_items;

        console.log("subtotal" + subtotal);

        //subtotal = subtotal_four_items + subtotal_six_items


        total_items_cost = subtotal + parseInt(this.state.deliveryCost);
        console.log(subtotal_items_cost + this.state.deliveryCost);

        //move to a lib

        let totalItemsText = "";

        if(total_items > 0){

            let quotient = Math.floor(total_items/12);
            let remainder = total_items % 12;
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

            //total_items_text = quotient_text + "" + remainder_text + " dz";
        }



        /*if(total_items == 6){

          total_items_cost = 22           

        }else if(total_items == 12){

          total_items_cost = 44           

        }else if(total_items == 18){

          total_items_cost = 66           

        }else if(total_items == 24){

          total_items_cost = 88           

        }else if(total_items == 30){

          total_items_cost = 110           

        }else if(total_items == 36){

          total_items_cost = 132          

        }*/

        //total_items_cost = 6
        

 

    //alert(total_cost);

        /*cart = this.state.cartItems.map(function(item: any, index: any){

                      console.log("cartitems " + JSON.stringify(item));

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


                  
                }.bind(this))*/

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

      

      //if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity * 12, 0) > 11){
      if(total_items >= 6){
          //checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

           checkoutButton = <Link to="/collections/order/checkout" className={this.state.payment_button_classname} disabled={this.state.payment_button_disabled}  style={{borderRadius: 0}}>Checkout</Link> 

      }

    //}

    //if(total_items % 12 == 0){

    //    total_items_text = (total_items/12) + "dz";

    //}else{

     //   total_items_text = "" + total_items;

    //}

    

    return (<div> 
                  <br/>
                  {(this.state.cartItems.length == 0) &&
                        (<div>
                            <br/>
                            Box of 4 for $14
                            <br/>
                            Box of 6 for $22
                            <br/>
                            </div>)}
                  <br/>
                  {this.state.cartItems.map((item: any, index: any) => <CollectionOrderSidebarCartItem index={index} collectionMenuItems={this.state.collectionMenuItems}  item={item} item_quantity_text={""} item_name={""} increaseCartItemQuantity={() => this.props.increaseCartItemQuantity(index)} decreaseCartItemQuantity={(index: any) => this.props.decreaseCartItemQuantity(index)} removeCartItem={() => this.props.removeCartItemQuantity(index)}/>)}
                  <br/>
                  {this.state.cartItems.length == 0 ? 'cart is empty' :

                    (<div>
                        <form className="form-horizontal" style={{border: 1}}>
                          <div className="form-group" style={{border: 1}}>
                            <div className="col-md-5 col-xs-5" style={{fontType: "helvetica", fontSize: "14"}}>Total Items</div>
                            <div className="col-md-1 col-xs-1"></div>
                            <div className="col-md-3 col-xs-1" style={{fontType: "helvetica", fontSize: "14"}}>{total_items_text}</div>
                          </div>
                        </form>
                        <br/>
                        
                        <form className="form-horizontal" style={{border: 1}}>
                          <div className="form-group" style={{border: 1}}>
                            <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}>Subtotal</div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1" style={{fontType: "helvetica", fontSize: "14"}}>${subtotal.toFixed(2)}</div>
                          </div>
                        </form>
                        <form className="form-horizontal" style={{border: 1}}>
                          <div className="form-group" style={{border: 1}}>
                            <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}>Delivery Cost</div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1" style={{fontType: "helvetica", fontSize: "14"}}>{this.state.deliveryCostFormatted}</div>
                          </div>
                        </form>
                        <form className="form-horizontal" style={{border: 1}}>
                          <div className="form-group" style={{border: 1}}>
                            <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}>Total Cost</div>
                            <div className="col-md-1"></div>
                            <div className="col-md-1" style={{fontType: "helvetica", fontSize: "14"}}>${total_items_cost.toFixed(2)}</div>
                          </div>
                        </form>
                        <br/>
                        <br/>
                        <Link to="/collections/order/checkout" className={this.state.payment_button_classname} disabled={this.state.payment_button_disabled}  style={{borderRadius: 0}}>Checkout</Link> 
                      </div>)
                  }
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
