
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
import Immutable  = require('immutable');


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
        //here: "",
        delivery_address: Immutable.Map(),
        delivery_address_street: "",
        item_count: 0,
        cart_items: Immutable.fromJS([{item_id: 1, quantity: 1, quantity_multiplier: 2, mini: true}, {item_id: 2, quantity: 2, quantity_multipler: 5}]),

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
    
    this.addCartItem = this.addCartItem.bind(this);
    this.increaseCartItemQuantity = this.increaseCartItemQuantity.bind(this);
    this.decreaseCartItemQuantity = this.decreaseCartItemQuantity.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.addDeliveryAddress = this.addDeliveryAddress.bind(this);
    this.setDeliveryAddressStreet = this.setDeliveryAddressStreet.bind(this);
    this.setDeliveryAddressCity = this.setDeliveryAddressCity.bind(this);
    this.setDeliveryAddressZipcode = this.setDeliveryAddressZipcode.bind(this);
    this.setCardNumber = this.setCardNumber.bind(this);
    this.setExpiryDate = this.setExpiryDate.bind(this);
    this.setSecurityCode = this.setSecurityCode.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.showCart = this.showCart.bind(this);
    this.completeOrder = this.completeOrder.bind(this);

  }

  componentDidMount(){

    //alert();

    //var result = map.find(function(obj){return obj.get('id') === 4;});

    //var result = [{'id': 'a'}, {'id': 'b'}];
    //var map = Immutable.Map(result.reduce(function(previous, current) { 
    //    previous[ current.id ] = current;
    //    return previous;
    //}, {}));

    

    let demoRecord = Immutable.List.of(Immutable.Record({
                     property:'defaultValue',
                     index:0,
                     works:true,
                     valueList:Immutable.List([])
    }));

    //alert(demoRecord.getIn(["0"], "index"));

    /*let list = demoRecord.update(
      demoRecord.findIndex(function(item: any) { 
        return item.get("index") === "0"; 
      }), function(item: any) {
        return item.set("index", 4);
      }
    );*/

    var result = [{'id': 2}, {'id': 4}];
    var map = Immutable.fromJS(result);
    var map_updated = map.set()
    var result1 = map.find(function(obj: any){return obj.get('id') === 4;});

    //alert(result1.get("id"));

    /*let arr = fromJS(
      elem: [
        {id: 1, name: "first", count: 2},
        {id: 2, name: "second", count: 1},
        {id: 3, name: "third", count: 2},
        {id: 4, name: "fourth", count: 1}
      ]
    );

    arr = arr.setIn(['elem', 3, 'count'], 4);
    If we don’t know the index of the entry we want to update. It’s pretty easy to find it using .findIndex():

    
    const indexOfListToUpdate = arr.get('elem').findIndex(listItem => {
      return listItem.get('name') === 'third';
    });
    arr = arr.setIn(['elem', indexOfListingToUpdate, 'count'], 4);*/



    let cart_items_temp = this.state.cart_items;
    //let cart_items_temp_updated = cart_items_temp.updateIn(['items', 'quantity'], value = value + 1);
    //const myNewMap = cart_items_temp.updateIn(['cart_items'], (arr: any) => {arr.push({item_id: 5})});
    const myNewMap = cart_items_temp.push({item_id: 5});
    //let hello = cart_items_temp.push({item_id: 5});

    //alert(JSON.stringify(myNewMap));

    //alert(JSON.stringify(myNewMap.delete("0")));

    //hello.findIndex(function(item: any) { 
    //    return item.get("item_id") === "1"; 
    //})

    //var result = map.find(function(obj){return obj.get('id') === 4;});

    //hello = hello.find((layout: any) => {layout.get('item_id') === 1});


    /*let list = hello.update(
      hello.findIndex(function(item: any) { 
        return item.get("item_id") === "1"; 
      }), function(item: any) {
        return item.set("quantity", 44444444444444);
      }
    );*/

    //let list = hello.update(0, function(v: any) {
    //    return {quantity: 44444444444};
    //});

    //alert(JSON.stringify(list.toJS()));


    //alert(cart_items_temp_updated);


    //get menu items


    //this.props;

    //alert(JSON.stringify(this.state.menu_items));

    //alert("products" + JSON.stringify(this.props.menu_items));
    //console.log(this.props.getAllProducts());
    //this.setState({here: this.props.getAllProducts()});
    //console.log(this.props.dispatch(addTodoWithDispatch));
    //this.props.getAllProducts();

  }

  showMenu(){

      //alert();

      this.setState({page: "menu"});

  }

  showDeliveryAddressPayment(){

      this.setState({page: "delivery_address_payment"})

  }

  showCart(){

      this.setState({page: "cart"})

  }

  addCartItem(item: any, item_quantity: any, item_quantity_multiplier: any, mini: any){

    //alert(item + "" + item_quantity + "" + item_quantity_multiplier);

    let cart_items_temp = this.state.cart_items;

    //item_id, quanity, mini

    let new_cart_items = [];

    for(let i: any = 0; i <= item_quantity_multiplier - 1; i++){

      //alert();

      new_cart_items.push({item: 1, quantity: item_quantity, item_quantity_multiplier: item_quantity_multiplier, mini: mini});

    /*const myMap = Immutable.fromJS({
      nested: {
        someKey: ['hello', 'world'],
      },
    });

    //const myNewMap = myMap.updateIn(['nested', 'someKey'], arr => arr.push('bye'));*/

    //var newMap = myMap.set('key', myMap.get('key').push(newData))


    //let cart_items_temp = this.state.cart_items;
    //let cart_items_temp_updated = cart_items_temp.setIn(['items', 'quantity'], value = value + 1);

      
     }

     //alert(JSON.stringify(new_cart_items));

     let cart_items_temp_updated = cart_items_temp.concat(new_cart_items);

     //alert(JSON.stringify(cart_items_temp_updated));

     this.setState({cart_items: cart_items_temp_updated});


  }

  addDeliveryAddress(street: any, city: any, state: any, zipcode: any){

      alert(street);

      //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});

  }

  removeCartItem(index: any){

      let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.delete(index);

      this.setState({cart_items: cart_items_temp_updated});

  }

  increaseCartItemQuantity(item_id: any, index: any){

    alert(JSON.stringify(item_id + "" + index));

    let cart_items_temp = this.state.cart_items;

    let cart_items_temp_updated = cart_items_temp.update(index, (item: any) => {let quantity_updated = item.get("quantity") + 1; return item.set("quantity", quantity_updated)});

    this.setState({cart_items: cart_items_temp_updated});

  }  

  decreaseCartItemQuantity(item_id: any, index: any){

    let cart_items_temp = this.state.cart_items;

    let cart_items_temp_updated = cart_items_temp.update(index, (item: any) => {let quantity_updated = item.get("quantity") - 1; return item.set("quantity", quantity_updated)});

    this.setState({cart_items: cart_items_temp_updated});

  }  

  setDeliveryAddressStreet(e: any){

     //alert(e.target.value);

     let delivery_address_temp = this.state.delivery_address;

     let delivery_address_temp_updated = delivery_address_temp.set("street", e.target.value);

     //alert(JSON.stringify(delivery_address_temp_updated.toJS()));

     this.setState({delivery_address: delivery_address_temp_updated});

  }

  setDeliveryAddressCity(e: any){

     let delivery_address_temp = this.state.delivery_address;

     let delivery_address_temp_updated = delivery_address_temp.set("city", e.target.value);

     //alert(JSON.stringify(delivery_address_temp_updated.toJS()));

     this.setState({delivery_address: delivery_address_temp_updated});


  }

  setDeliveryAddressZipcode(e: any){

    let delivery_address_temp = this.state.delivery_address;

     let delivery_address_temp_updated = delivery_address_temp.set("zipcode", e.target.value);

     //alert(JSON.stringify(delivery_address_temp_updated.toJS()));

     this.setState({delivery_address: delivery_address_temp_updated});


  }

  setCardNumber(e: any){



  }

  setExpiryDate(e: any){



  }

  setSecurityCode(e: any){



  }

  completeOrder(){

      //alert(JSON.stringify(this.state.delivery_address_street));

      //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});

  }

  render(): JSX.Element{

    let body: any = "";
    let item_count = this.state.item_count;

    //alert(item_count);

    if(this.state.page == "menu"){

        body = <SconelyYoursMenu showDeliveryAddressPayment={() => this.showDeliveryAddressPayment()} addCartItem={(item: any, item_quantity: any, item_quantity_multiplier: any, mini: any) => this.addCartItem(item, item_quantity, item_quantity_multiplier, mini)}/>;

    }else if(this.state.page == "delivery_address_payment"){

        body = <DeliveryAddressPayment addDeliveryAddress={(street: any, city: any, state: any, zipcode: any) => this.addDeliveryAddress(street, city, state, zipcode)} setDeliveryAddressStreet={(street: any) => this.setDeliveryAddressStreet(street)} setDeliveryAddressCity={(city: any) => this.setDeliveryAddressCity(city)} setDeliveryAddressZipcode={(zipcode: any) => this.setDeliveryAddressZipcode(zipcode)}/>;

    }else{

        body = <Cart cart_items={this.state.cart_items} showMenu={() => this.showMenu()} removeCartItem={(index: any) => this.removeCartItem(index)} showDeliveryAddressPayment={() => this.showDeliveryAddressPayment()} increaseCartItemQuantity={(item_id: any, index: any) => this.increaseCartItemQuantity(item_id, index)} decreaseCartItemQuantity={(item_id: any, index: any) => this.decreaseCartItemQuantity(item_id, index)}/>;//cart

    }

    let button: any = "";

      if(this.state.menu === "menu"){
                            
          button = <button type="button" className="btn" onClick={() => this.showDeliveryAddressPayment()}>Delivery Address and Payment-submit payment</button> 
          
      }else if(this.state.page === "cart"){
          
          button = <div><button type="button" className="btn" onClick={() => this.showDeliveryAddressPayment()}>Delivery Address and Payment-submit payment</button> <button type="button" className="btn" onClick={() => this.completeOrder()}>Complete Payment</button></div>
      
      }else if(this.state.page === "delivery_address_payment"){

          button = <button type="button" className="btn" onClick={() => this.completeOrder()}>Complete Payment</button> 
      
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
                            <br/>
                            <div>
                              only show on mobile
                              <br/>
                              <a onClick={() => this.showCart()}>cart({this.state.cart_items.size})</a>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            {body}
                            <br/>
                            <br/>
                            {button}
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

