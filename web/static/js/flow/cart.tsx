'use strict';

import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_social_menu.tsx';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//import { getPublicMenu } from './reducers/menu';

import Immutable  = require('immutable');
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

class Cart extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        menu_items: Immutable.fromJS([{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 3, title: "freedom", description: "let freedom ring!"}, {item_id: 4, title: "freedom", description: "let freedom ring!"}, {item_id: 5, title: "freedom", description: "let freedom ring!"}, {item_id: 6, title: "freedom", description: "let freedom ring!"}, {item_id: 7, title: "freedom", description: "let freedom ring!"}]),
        cart_items: [{item_id: 1, item_title: "Susie Sunshine", quantity: 1}, {item_id: 2, item_title: "Julie Freedom", quantity: 1}],
        here: ""

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag

    this.updateCartItemQuantity = this.updateCartItemQuantity.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    
  }

  componentDidMount(){


    //get menu items


    //this.props;

    //alert(JSON.stringify(this.state.menu_items));

    //alert("products" + JSON.stringify(this.props.menu_items));
    //console.log(this.props.getAllProducts());
    //this.setState({here: this.props.getAllProducts()});
    //console.log(this.props.dispatch(addTodoWithDispatch));
    //this.props.getAllProducts();

  }

  updateCartItemQuantity(item_id:any, quantity: any){

      //alert(item_id);

      let cart_items_temp = this.state.cart_items;

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

      this.setState({cart_items: cart_items_temp_updated});

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

    this.props.cart_items.toJS().map(function(item: any){

        if(item.mini == true){
                      
          total_cost = item.quantity * item.quantity_multiplier * 2;

        }else{

          total_cost = item.quantity * item.quantity_multiplier * 5;

        }
                      
    });


    let item_count = 0;

    this.props.cart_items.toJS().map(function(item: any){

        item_count = item.quantity * item.quantity_multiplier;
              
    });


    return (<div> 
                  there are no items in your cart
                  <br/>
                  {this.props.cart_items.toJS().map(function(item: any, index: any){

                      //let menu_item_title_index = menu_items.findIndex where item_id == item_item_id
                      let result = this.state.menu_items.find(function(obj: any){return obj.get('item_id') === 1;});
                      let item_title = result.get("title");

                      if(item.mini == true){
                      
                          return(<div><div className="col-md-1">image</div><div className="col-md-1">{item_title}</div><div className="col-md-1">2 Dozen</div><div className="col-md-1">Mini</div><div className="col-md-1">{item.quantity_multiplier}</div><div className="col-md-1"><a onClick={removeCartItem.bind(this, index)}>X</a></div><div><a onClick={increaseCartItemQuantity.bind(this, item.item_id, index)}>+</a><a onClick={decreaseCartItemQuantity.bind(this, item.item_id, index)}>-</a></div></div>)

                      }else{

                          return(<div><div className="col-md-1">image</div><div className="col-md-1">{item_title}</div><div className="col-md-1">Dozen</div><div className="col-md-1"></div><div className="col-md-1">{item.quantity_multiplier}</div><div className="col-md-1"><a onClick={removeCartItem.bind(this, index)}>X</a></div><div><a onClick={increaseCartItemQuantity.bind(this, item.item_id, index)}>+</a><a onClick={decreaseCartItemQuantity.bind(this, item.item_id, index)}>-</a></div></div>)

                      }
                  
                  }.bind(this))}
                  <br/>
                  Total Items = {this.props.cart_items.size}
                  <br/>
                  Sub Total {total_cost}
                 
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




/*function mapStateToProps(state: any) {
  return {
   menu_items: state.default.menu_items
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
}*/


//export default connect(mapStateToProps, mapDispatchToProps)(Order);
export default Cart;
