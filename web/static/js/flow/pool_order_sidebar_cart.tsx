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


    //get menu items
    //this.setState({pool_message: "this.props.menuItems"})

    //console.log("sbc menu items " + JSON.stringify(this.props.menuItems));
    console.log("sidebarcart user " + JSON.stringify(this.props.User));

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

  increaseCartItemQuantity = (item_index:any) => {

      //alert(item_id);

      console.log("item_index" + item_index)

      //console.log("total cart item quantity " + this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0));

      if(this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) < 13){

        this.props.increaseCartItemQuantity(item_index);

      }


      /*let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.map(function(item: any) {

          let new_item: any = "";

          if(item.item_id == item_id){

              new_item = {item_id: item.item_id, item_title: item.item_title, quantity: quantity};

          }else{

              new_item = {item_id: item.item_id, item_title: item.item_title, quantity: item.quantity};

          }

          return new_item;

      });

      //cart_items_temp.

      //alert(JSON.stringify(cart_items_temp_updated));

      this.setState({cart_items: cart_items_temp_updated});*/

  }

  decreaseCartItemQuantity = (item_index:any) => {

      //alert(item_id);

      this.props.decreaseCartItemQuantity(item_index);


      /*let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.map(function(item: any) {

          let new_item: any = "";

          if(item.item_id == item_id){

              new_item = {item_id: item.item_id, item_title: item.item_title, quantity: quantity};

          }else{

              new_item = {item_id: item.item_id, item_title: item.item_title, quantity: item.quantity};

          }

          return new_item;

      });

      //cart_items_temp.

      //alert(JSON.stringify(cart_items_temp_updated));

      this.setState({cart_items: cart_items_temp_updated});*/

  }

  removeItemFromCart = (item_id:any) => {

      //alert(item_id);

      /*let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.filter(function(item: any) {
          return item.item_id !== item_id;
      });

      this.setState({cart_items: cart_items_temp_updated});*/

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
    //let total_mini_items = 0;
    //let total_mini_items_cost = 0;
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

        /*if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){
        
          total_regular_items_cost = regular_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.00; }, 0)

        }else{*/

          total_regular_items_cost = regular_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.00; }, 0)

        //}

        //total_mini_items_cost = mini_items.reduce((amount: any, item: any) => { return amount + item.quantity * 2.25; }, 0)

        //}


        //total_social_mini_items_cost = social_mini_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.4; }, 0)

        //total_social_mini_items_cost = this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity * 6.0, 0);


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

                      let item_name = menu_item.name;

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

    }else if(this.props.User.orders[0].order_type =="yours" && total_items == 11){

        item_limit = "You have reached your item limit";

    }else if(this.props.User.orders[0].order_type =="social" && total_items == 500){

        item_limit = "You have reached your item limit";

    }

    



    //{this.props.params.repoName}

    //this.props.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0)


    //message if pool

    let item_quantity_message = "";

    /*if(this.props.User.orders[0].order_type == "pool_order"){
        //if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 0 || this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 11){

            item_quantity_message = "Please choose between 1 and 11 scones";

        //}

    }else*/if(this.props.User.orders[0].order_type == "pool"){
        //if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 0 || this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) == 11){

            item_quantity_message = "Please choose between 1 and 11 scones";

        //}

    }/*else if(this.props.User.orders[0].order_type == "yours"){

        item_quantity_message = "Please choose between 2 and 11 scones";

    }*/
                  
    /*{this.props.User.orders[0].order_type == "yours" && "a minimum of 2 items is required"}
    <br/>
    <br/>
    {this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 9 && 'You have reached the item limit for this order'}*/

    //let message = this.props.User.orders[0].pool_message.split("\n").map((item: any, key: any) => {return <span key={key}>{item}<br/></span>});

    //let message = this.props.User.orders[0].pool_message.split('\n').map((item: any, i: any) => {
    //    return <p key={i}>{item}</p>;
    //});

    console.log("message");

    let checkoutButton = null;


    /*if(this.props.User.orders[0].order_type == "pool_order"){

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 0){

          //{this.props.path == "/order/menu" && 

          checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

      }

    }*/if(this.props.User.orders[0].order_type == "pool"){

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 0){

          //{this.props.path == "/order/menu" && 

          //checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

          <Link to="/pool_response/order/payment" className={this.state.payment_button_classname} disabled={this.state.button_payment_disabled}  style={{borderRadius: 0}}>Payment</Link> 

      }

    }/*else if(this.props.User.orders[0].order_type == "yours"){

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 1){

          checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

      }

    }else if(this.props.User.orders[0].order_type == "social"){

      

      if(this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity * 12, 0) > 11){

          checkoutButton = <button onClick={() => this.props.updateOrderSession("checkout")} className="btn btn-default" style={{borderRadius: 0}}>Checkout</button>;

      }

    }*/

    if(total_items % 12 == 0){

        total_items_text = (total_items/12) + "dz";

    }else{

        total_items_text = "" + total_items;

    }

    return (<div> 
                  {item_limit}
                  <br/>
                  {item_quantity_message}
                  <br/>
                  <br/>
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


/*const mapStateToProps = (state: any, ownProps: any) => {
  console.log("sidebar_cart mapstatetoprops " + JSON.stringify(state.routing.locationBeforeTransitions));
  return {

    //cart_items: getCartItems(state); 

    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        menuItems: state.menuItems.items,
        //cartItems: state.guestOrder.cart_items,
        //Order: state.User.orders[1],
        route: state.routing.locationBeforeTransitions.pathname

    //}
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    //addCartItem: (item_id: any, dozens: any, quantity: any) => {
    //  dispatch(addCartItem(1));
    //},
    //increaseCartItemQuantity: () => {
    //  dispatch(increaseCartItemQuantity(1, 12));
    //},
    //decreaseCartItemQuantity: () => {
    //  dispatch(decreaseCartItemQuantity(1, 12));
    //}
  }
}

const SidebarCartConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarCart);*/

export default PoolSidebarCart;
