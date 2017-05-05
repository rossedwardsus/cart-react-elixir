
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//import { getPublicMenu } from './reducers/menu';
//import Immutable  = require('immutable');


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

class PaymentMethod extends React.Component<any, any> {
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
        cart_items: Immutable.fromJS([{item_id: 1, dozen: 2, quantity: 2, mini: true}, {item_id: 2, dozen: 1, quantity: 5}]),
        //order: Immutable.fromJS([{item_id: 1, dozen: 2, quantity: 2, mini: true}, {item_id: 2, dozen: 1, quantity: 5}]),
        order: Immutable.fromJS({name: "name", contact: "contact", cart: [], delivery_address: {street: ""}, payment: ""}),

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
   
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount(){

    //alert();

    //window.onhashchange = function() {
     //blah blah blah
     //alert(this.state.page);
    //}.bind(this);

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

  setPaymentCardNumber(e: any){

      //Amex Card: ^3[47][0-9]{13}$
      if(/^[a-zA-Z]/.test(e.target.value)){

          alert("amex");

      //
      }else if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(e.target.value)){
      //Visa Card: ^4[0-9]{12}(?:[0-9]{3})?$

          alert("visa");
      //
      }else if(/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(e.target.value)){
          alert("discovery");
      //
      //Discover Card: ^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$
      }


  }

  setPaymentExpiryDateMonth(e: any){

      alert(e.target.value);

      //01-12, only numbers
      if(/^[0-9]/.test(e.target.value)){

          alert("ok");

      }

  }

  setPaymentExpiryDateYear(e: any){

      //2017-only numbers

  }

  setPaymentSecurityCode(e: any){

      //if length > 0 or less then 4, only numbers

  }
  
  
  render(): JSX.Element{

   
    return ( <div>
               <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Name on Card" onChange={(e) => this.props.setPaymentNameOnCard(e)}/>
                  </div>
                </form>
                <form className="form-inline">
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number" onChange={(e) => this.setPaymentCardNumber(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Type" onChange={(e) => this.props.setPaymentCardNumber(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Month" onChange={(e) => this.setPaymentExpiryDateMonth(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Year" onChange={(e) => this.setPaymentExpiryDateYear(e)}/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Security Code" onChange={(e) => this.setPaymentSecurityCode(e)}/>
                  </div>
                </form>
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


export default PaymentMethod;

