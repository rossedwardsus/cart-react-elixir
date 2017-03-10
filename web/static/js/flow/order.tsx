
'use strict';


import * as React from 'react';

import SconelyYoursMenu from './menu.tsx';
import Cart from './cart.tsx';
import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//import { getPublicMenu } from './reducers/menu';


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

class Order extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        page: "menu",
        //menu_items: this.props.menu_items,
        //here: ""
        item_count: 0

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
    
    this.addItemToCart = this.addItemToCart.bind(this);

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

  /*showMenu(){

      this.setState({page: ""})

  }*/

  showDeliveryAddressPayment(){

      this.setState({page: "delivery_address_payment"})

  }

  showCart(){

      this.setState({page: "cart"})

  }

  addItemToCart(){

    this.setState({item_count: 1});

  }

  

  render(): JSX.Element{

    let body: any = "";
    let item_count = this.state.item_count;

    //alert(item_count);

    if(this.state.page == "menu"){

        body = <SconelyYoursMenu addItemToCart={() => this.addItemToCart()}/>;

    }else if(this.state.page == "delivery_address_payment"){

        body = <DeliveryAddressPayment/>;

    }else{

        body = <Cart/>;//cart

    }


    return (  
            <div className="container-fluid">
                  <div className="row">
                        <div className="hidden-xs col-md-2">
                          <br/>
                          if yours
                          <br/>
                          else social
                          <br/>
                          cart in left sidebar
                          <br/>
                          item_id-item_description-quantity-remove-edit
                          <br/>
                          <br/>
                        </div>
                        <div className="col-md-8">
                                <div>
                                  <br/>
                                  <div className="hidden-lg">
                                    only show on mobile
                                    <br/>
                                    <a onClick={() => this.showCart()}>cart({this.state.item_count})</a>
                                  </div>
                                  <br/>
                                  <br/>
                                  <br/>
                                  {body}
                                  <br/>
                                  <br/>
                                  <button className=".btn" onClick={() => this.showDeliveryAddressPayment()}>Delivery Address and Payment</button> 
                                </div>
                        </div>
                        <div className="hidden-xs col-md-4">
                              maybe put something here
                        </div>
                </div>
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

export default Order;

