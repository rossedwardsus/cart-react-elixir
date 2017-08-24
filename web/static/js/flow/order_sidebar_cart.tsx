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


function addTodoWithDispatch() {
  const action = {
    type: "VIEW_PUBLIC_MENU",
    //text
  }
  //dispatch(action)
}

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

class SidebarCart extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        menuItemNames: [],
        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 3, title: "freedom", description: "let freedom ring!"}, {item_id: 4, title: "freedom", description: "let freedom ring!"}, {item_id: 5, title: "freedom", description: "let freedom ring!"}, {item_id: 6, title: "freedom", description: "let freedom ring!"}, {item_id: 7, title: "freedom", description: "let freedom ring!"}],
        cartItems: [],
        here: ""

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag

    //this.updateCartItemQuantity = this.updateCartItemQuantity.bind(this);
    //this.removeItemFromCart = this.removeItemFromCart.bind(this);
    
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount(){


    //get menu items
    //this.setState({menuItemNames: this.props.menuItems})

    console.log("sc menu items " + JSON.stringify(this.props.menuItems));

    this.setState({menuItemNames: this.props.menuItems})
    //this.setState({cartItems: this.props.cartItems})

    
    //this.props;

    //alert(JSON.stringify(this.state.menu_items));

    //alert("products" + JSON.stringify(this.props.menu_items));
    //console.log(this.props.getAllProducts());
    //this.setState({here: this.props.getAllProducts()});
    //console.log(this.props.dispatch(addTodoWithDispatch));
    //this.props.getAllProducts();

  }

  componentWillReceiveProps(nextProps: any){

      console.log("sc menu items cwrp " + JSON.stringify(this.props.menuItems));

      //console.log("<b>sidebar cart props</b> " + JSON.stringify(nextProps));

      this.setState({menuItemNames: this.props.menuItems})
      this.setState({cartItems: this.props.cartItems})

  }

  increaseCartItemQuantity(item_id:any){

      //alert(item_id);

      this.props.increaseCartItemQuantity(item_id);


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

  decreaseCartItemQuantity(item_id:any){

      //alert(item_id);

      this.props.decreaseCartItemQuantity(item_id);


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

  removeItemFromCart(item_id:any){

      //alert(item_id);

      let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.filter(function(item: any) {
          return item.item_id !== item_id;
      });

      this.setState({cart_items: cart_items_temp_updated});

  }

  

  render(){

    let body: any = "";
    let { removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } = this.props;
    

    if(this.state.page == "menu"){

        //body = <SconelyYoursMenu/>;

    }else{

        body = "delivery address payment";

    }

    let total_cost = 0;
    let total_items = 0;
    let item_limit = "";

    //alert(JSON.stringify(this.props.order.toJS()));
   

    //this.props.order.toJS().cart.map(function(item: any){

    //    item_count = item.dozens * item.quantity;
              
    //});

    let cart = "";

    //console.log("length order" + JSON.stringify(this.props.cart));
    //console.log("order type" + JSON.stringify(this.props.order));


    /*if(this.props.cart.cart_items.length === 0){

        cart = "There are no items in your cart.";

    }else{

        //console.log("order " + JSON.stringify(this.props.cart));

        let that = this;*/

        //let cart_items = [{item_id: 1, quantity: 2}];

        total_cost = this.props.cartItems.reduce((amount: any, item: any) => amount + item.quantity * 5.4, 0);
        total_items = this.props.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0);
        
         
        

    /*this.props.cart.cart_items.map(function(item: any){

            //console.log("item " + JSON.stringify(item));
            //console.log("order type" + JSON.stringify(that.props.order));

            if(that.props.order.order_type == "sconely_yours"){

              //if total_cost is more then 2 then cost = 5 else 6
              //dont have to loop.  just times cart length

              //total_cost = total_cost + (5 * item.quantity);
              item_count = item_count + item.quantity;



            }else{

              if(item.item_type == "mini"){
                            
                total_cost = total_cost + (5 * item.quantity * 24);
                item_count = item_count + (24 * item.quantity);

              }else{

                total_cost = total_cost + (6 * item.quantity * 12);
                item_count = item_count + (12 * item.quantity);

              }

            }
                          
        });*/

    //alert(total_cost);

        cart = this.props.cartItems.map(function(item: any, index: any){

                      //console.log("cart menuitems " + JSON.stringify(this.state.menuItemNames));

                      let menu_item_name_index = this.state.menuItemNames.findIndex((menu_item: any) => {

                          //console.log(JSON.stringify(menu_item) + " " + item.item_id);

                          return menu_item.id === "" + item.item_id;

                      });

                      console.log("index " + menu_item_name_index);

                      //let result = this.state.menuItemNames.find(function(item_name: any){return item_name.id === item.id;});
                      let item_name = this.state.menuItemNames[menu_item_name_index].name;
                      //let item_name = "";


                      //if(that.props.order.order_type == "sconely_yours"){

                          return(
                                        <form className="form-horizontal" style={{border: 1, position: "static"}}>
                                          <div className="form-group" style={{border: 1}}>
                                            <div className="col-md-4">{item_name}</div>
                                            <div className="col-md-5"></div>
                                            <div className="col-md-3">{item.quantity}</div>
                                          </div>
                                        </form>
                                )
                      /*}else{
                          
                          if(item.item_type == "mini"){
                          
                              return(
                                        <form className="form-horizontal" style={{border: 1, position: "static"}}>
                                              <div className="form-group" style={{border: 1}}>
                                                <div className="col-md-6">ruby q</div>
                                                <div className="col-xs-6" style={{fontSize: 15}}>{24 * item.quantity}title-mini</div>
                                              </div>
                                        </form>
                              )

                          }else{

                              return(
                                            <form className="form-horizontal" style={{border: 1, position: "static"}}>
                                              <div className="form-group" style={{border: 1}}>
                                                <div className="col-md-6">ruby q</div>
                                                <div className="col-md-6">{item.quantity * 12}</div>
                                              </div>
                                            </form>
                                    )

                          }
                      }*/
                  
                }.bind(this))

    //}

    if(total_items == 12){

        item_limit = "You have reached your item limit";

    }

    //{this.props.params.repoName}

    //this.props.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0)

    return (<div> 
                  <br/>
                  {this.props.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0) > 9 && 'You have reached the item limit for this order'}
                  <br/>
                  {cart}
                  <br/>
                  {this.props.cartItems.length == 0 ? 'cart is empty' :

                    (<div>
                      <form className="form-horizontal" style={{border: 1}}>
                        <div className="form-group" style={{border: 1}}>
                          <div className="col-md-4" style={{fontType: "helvetica", fontSize: "14"}}><b></b></div>
                          <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}><b>Total Items</b></div>
                          <div className="col-md-3" style={{fontType: "helvetica", fontSize: "14"}}>{total_items}</div>
                        </div>
                      </form>
                       <form className="form-horizontal" style={{border: 1}}>
                        <div className="form-group" style={{border: 1}}>
                          <div className="col-md-4" style={{fontType: "helvetica", fontSize: "14"}}><b></b></div>
                          <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}><b>Delivery Cost</b></div>
                          <div className="col-md-3" style={{fontType: "helvetica", fontSize: "14"}}>${total_cost}0</div>
                        </div>
                      </form>
                      <form className="form-horizontal" style={{border: 1}}>
                        <div className="form-group" style={{border: 1}}>
                          <div className="col-md-4" style={{fontType: "helvetica", fontSize: "14"}}><b></b></div>
                          <div className="col-md-5" style={{fontType: "helvetica", fontSize: "14"}}><b>Total Cost</b></div>
                          <div className="col-md-3" style={{fontType: "helvetica", fontSize: "14"}}>${total_cost.toFixed(2)}</div>
                        </div>
                      </form>
                      <Link to="/order/cart" className="btn btn-default">Checkout</Link>              
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


const mapStateToProps = (state: any, ownProps: any) => {
  console.log("sidebar_cart mapstatetoprops " + JSON.stringify(state.guestOrder.cart_items));
  return {

    //cart_items: getCartItems(state); 

    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        menuItems: state.menuItems.items,
        cartItems: state.guestOrder.cart_items,

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
)(SidebarCart);

export default SidebarCart;
