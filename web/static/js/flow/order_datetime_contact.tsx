
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './order_datetime_contact_cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import {setDeliveryAddressStreet1, setDeliveryAddressStreet2, setDeliveryAddressCity, setDeliveryAddressState, setDeliveryAddressZipcode} from './actions/order_delivery_address.ts';
import {completeOrder} from './actions/complete_order.ts';
//import {setFirstName, setLastName} from './actions/order_name.ts';
import {setDate, setTime, setSpecificTime} from './actions/order_delivery_datetime.ts';
//import {setPaymentNameOnCard, setPaymentCardNumber, setPaymentExpiryDate, setPaymentSecurityCode} from './actions/order_payment.ts';
//import {setContactEmail, setContactPhone} from './actions/order_contact.ts';

import SidebarCart from './sidebar_cart.tsx';
import DeliveryAddress from './delivery_address.tsx';
import Contact from './contact.tsx';
import DateTime from './datetime.tsx';
import Name from './name.tsx';
import OrderCart from './order_cart.tsx';
import PaymentMethod from './payment_method.tsx';

//import { getPublicMenu } from './reducers/name';
const Immutable  = require('immutable');
var DatePicker = require('react-datepicker');
var moment = require('moment');
import axios from 'axios';

require('react-datepicker/dist/react-datepicker.css');


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

class OrderDateTimeContact extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        business_name: "",
        delivery_addresses: [{street: "santa monica blvd"}],
        street: "",
        city: "",
        state: "",
        zipcode: "",
        startDate: moment(),
        form_inputs_validated: false,
        first_name_classname: "form-group has-error",
        first_name_validated: false,
        last_name_classname: "form-group has-error",
        last_name_validated: false,
        contact_email_classname: "form-group has-error", 
        contact_email_validated: false,
        contact_mobile_classname: "form-group has-error",
        comtact_mobile_validated: false,
        name_on_card: "form-group has-error",
        order: Immutable.fromJS({name: "name", contact: "contact", cart: [], delivery_address: {street: ""}, payment: ""}),
        selected_time: "",
        selected_specific_time: ""

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
    
    /*this.addCartItem = this.addCartItem.bind(this);
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
    this.showDeliveryAddressPayment = this.showDeliveryAddressPayment.bind(this);
    this.completeOrder = this.completeOrder.bind(this);*/

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount(){

    //alert(this.props.params.order_id);

    /*this._isMounted = true;
    window.onpopstate = ()=> {
      if(this._isMounted) {
        const { hash } = location;
        if(hash.indexOf('home')>-1 && this.state.value!==0)
          this.setState({value: 0})
        if(hash.indexOf('users')>-1 && this.state.value!==1)
          this.setState({value: 1})
        if(hash.indexOf('data')>-1 && this.state.value!==2)
          this.setState({value: 2})
      }
    }*/



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



    //let cart_items_temp = this.state.cart_items;
    //let cart_items_temp_updated = cart_items_temp.updateIn(['items', 'quantity'], value = value + 1);
    //const myNewMap = cart_items_temp.updateIn(['cart_items'], (arr: any) => {arr.push({item_id: 5})});
    //const myNewMap = cart_items_temp.push({item_id: 5});
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

  /*showMenu(){

      //alert();

      this.setState({page: "menu"});

  }

  showDeliveryAddressPayment(){

      //alert();

      this.setState({page: "delivery_address_payment"})

  }*/

  showCart(){

      this.setState({page: "cart"})

  }


  //goToDateTime(){
  
      //this.context.router.push('/order/12345/datetime_contact_delivery_address_payment');
      
  //}

  

  /*addCartItem(item_id: any, item_dozens: any, item_quantity: any, mini: any){

    //alert(item_id + "" + item_dozens + "" + item_quantity);

    let order_temp = this.state.order;

    //item_id, quanity, mini

    let new_cart_items: any = [];

    //order_temp.set('key', .get('key').push
    let order_temp_updated = order_temp.updateIn(['cart'], (arr: any) => arr.push({item_id: item_id, dozens: item_dozens, quantity: item_quantity, mini: mini}));


    //for(let i: any = 0; i <= item_quantity - 1; i++){

      //alert();

      //new_cart_items.push({item_id: 1, dozens: item_dozens, item_quantity: item_quantity, mini: mini});*/

    

    /*const myMap = Immutable.fromJS({
      nested: {
        someKey: ['hello', 'world'],
      },
    });

    //const myNewMap = myMap.updateIn(['nested', 'someKey'], arr => arr.push('bye'));*/

    //var newMap = myMap.set('key', myMap.get('key').push(newData))


    //let cart_items_temp = this.state.cart_items;
    //let cart_items_temp_updated = cart_items_temp.setIn(['items', 'quantity'], value = value + 1);

      
     //}

     //alert(JSON.stringify(new_cart_items));

     //let cart_items_temp_updated = cart_items_temp.concat(new_cart_items);

     //alert(JSON.stringify(cart_items_temp_updated));

     //this.setState({order: order_temp_updated});


  //}

  //selectItemDozens(e: any){

  //    alert(e.target.value);

  //}

  //addDeliveryAddress(street: any, city: any, state: any, zipcode: any){

      //alert(street);

      //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});

  //}

  /*removeCartItem(index: any){

      let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.delete(index);

      this.setState({cart_items: cart_items_temp_updated});

  }

  increaseCartItemQuantity(item_id: any, index: any){

    //alert(JSON.stringify(item_id + "" + index));

    let cart_items_temp = this.state.cart_items;

    let cart_items_temp_updated = cart_items_temp.update(index, (item: any) => {let quantity_updated = item.get("quantity") + 1; return item.set("quantity", quantity_updated)});

    this.setState({cart_items: cart_items_temp_updated});

  }  

  decreaseCartItemQuantity(item_id: any, index: any){

    let cart_items_temp = this.state.cart_items;

    let cart_items_temp_updated = cart_items_temp.update(index, (item: any) => {let quantity_updated = item.get("quantity") - 1; return item.set("quantity", quantity_updated)});

    this.setState({cart_items: cart_items_temp_updated});

  }*/

  setDate(e: any){


      alert(e);

      //if value is not ""
      this.props.setDate(e);
      //date validated

  }

  setTime(e: any){


      alert(e.target.value);

      //if value is not ""
      this.setState({selected_time: e.target.value});
      this.setState({selected_specific_time: ""});
      //this.props.setTime(e);
      //time validated

  }

  setSpecificTime(e: any){

      alert(e.target.value);

      this.setState({selected_specific_time: e.target.value});
      this.setState({selected_time: ""});
      //this.props.setSpecificTime(e);
      //specific time validated
  }

  setFirstName(e: any){

     //alert(e.target.value);

     if(e.target.value.length > 0){

        //alert(/^[a-zA-Z]+$/.test(e.target.value));

        if(/^[a-zA-Z]+$/.test(e.target.value)){

            //alert("correct");

            //this.setState({"first_name": e.target.value});
            this.setState({"first_name_classname": "form-group"});
            //this.setState({"first_name_validated": true});

            this.props.setFirstName(e)
            //first name validated

        }else{

            alert("error");

            this.setState({"first_name_classname": "form-group has-error"});

        }
      }   

  }

  onBlurFirstName(){

      //alert();

  }

  setLastName(e: any){

     alert(e.target.value);

     if(e.target.value.length > 0){

        //alert();

        if(/^[a-zA-Z]/.test(e.target.value)){

            //alert();

            //this.setState({"last_name": e.target.value});
            //this.setState({"last_name_classname": "form-group"});
            //this.setState({"last_name_validated": true});

            this.props.setLastName(e);

        }
      }
  }

  setContactEmail(e: any){

      alert(e.target.value);

      if(e.target.value.length > 0){

        //alert();

        //var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //return re.test(email);

        if((/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e.target.value)){

            //alert();

            //this.setState({"contact_email": e.target.value});
            this.setState({"contact_email_classname": "form-group"});
            this.setState({"contact_email_validated": true});

            this.props.setContactEmail(e);

        }
      }   

  }

  setContactPhone(e: any){

     alert(e.target.value);

     if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            //alert();

            //this.setState({"first_name": e.target.value});
            //this.setState({"first_name_classname": "form-group"});

            this.props.setContactPhone(e);

        //}
      }   
  }

  setCompanyName(e: any){

      //let order_temp = this.state.order;
      //.setIn([ 'user', 'profile', 'name' ], 'Jack')
      //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)

      //alert(e.target.value);

      //this.setState({order: order_temp_udated});

      //validate and this.props

  }


  setDeliveryAddressStreet1(e: any){

    alert(e.target.value);

    if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setDeliveryAddressStreet1(e);

        //}
      }   

  }

   setDeliveryAddressStreet2(e: any){

     alert(e.target.value);

     if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setDeliveryAddressStreet2(e);

        //}
      }   

  }

  setDeliveryAddressCity(e: any){

     alert(e.target.value);


    if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setDeliveryAddressCity(e);

        //}
      }  

  }

  setDeliveryAddressState(e: any){

     if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setDeliveryAddressState(e);

        //}
      }   

  }

  

  setDeliveryAddressZipcode(e: any){

    if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setDeliveryAddressZipcode(e);

        //}
      }  

  }

  setPaymentNameOnCard(e: any){

      alert(e.target.value);

      if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setPaymentNameOnCard(e);

        //}
      }   
  }

  setPaymentCardNumber(e: any){

      if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setPaymentCardNumber(e);

        //}
      }   

  }

  setPaymentExpiryDate(e: any){

      //01/17

      if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setPaymentExpiryDate(e);

        //}
      }   

      //this.props.setExpiry

  }

  setPaymentSecurityCode(e: any){

      //this.props.setSecurityCode

      if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            //alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.setPaymentSecurityCode(e);

        //}
      }   

  }

  completeOrder(){

      //alert("order complete this.props.order");

      //if all inputs are validated

      //alert(JSON.stringify(this.props.order));

      //if first_name_validated == true && last_name_validated == true
      //process order/dispatch

      //if this.props.order_state = "completed"?
      //else error


      //export default function getBook(dispatch) {
      /*  $.ajax({
            method: "GET",
            url: "/api/data",
            dataType: "json"
          }).success(function(data){
            //return dispatch({type:'GET_BOOK', data: data});
            this.context.router.push('/order/12345/order_complete');

          });
      //}

      this.context.router.push('/order/12345/order_complete');*/


      axios.post('http://localhost:4000/graphql', {
             query: 'mutation {complete_sconely_social_order (first: "' + this.props.order.name.first + '", last: "' + this.props.order.name.last + '", contact_email: "' + this.props.order.contact.phone + '", contact_phone: "' + this.props.order.contact.phone + '", date: "' + this.props.order.datetime.date + '", time: "' + this.props.order.datetime.time + '", street1: "' + this.props.order.delivery_address.street1 + '", street2: "' + this.props.order.delivery_address.street2 + '", city: "' + this.props.order.delivery_address.city + '", state: "' + this.props.order.delivery_address.state + '", zipcode: "' + this.props.order.delivery_address.zipcode + '", name_on_card: "' + this.props.order.payment_method.name_on_card + '", expiry_date: "' + this.props.order.payment_method.expiry_date + '", security_code: "' + this.props.order.payment_method.security_code + '", zipcode: "' + this.props.order.payment_method.security_code + '", cart_items: [{item_id: "9"}]) {order_id}}'
      })
      .then( response => {

            console.log(JSON.stringify(response));
            //go to code/payment screen
    //        this.props.loadView();
            //this.props.setSubscription();

            //addtosubscribedblocklist

            //setsubscriptiontype == 1 block
            //setsubscriptionpaid == true
            //setsusbcriptindatetime


            //store in cookie

            //localStorage.set('user', {first_name:"", last_name: "", orders: [], delivery_addresses: [], payment_methods: []})
            //setCookie("sconely_session_id", 1, 1)
            //setCookie("sconely_first_name", 1, 1)
            //setCookie("sconely_last_name", 1, 1)


      })
      .catch( error => {

            console.log("error");
            //go to code/payment screen
    //        this.props.loadView();

     //if (!error.status) {
        // network error
      //}

      })

      //alert(JSON.stringify(this.state.delivery_address_street));

      //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});

  }

  goToMenu(){

      this.context.router.push('/order/12345');
      
  }  

  goToPaymentMethod(){

      this.context.router.push('/order/payment_method');
      
  }  

  render(): JSX.Element{

    let body: any = "";
    let item_count = this.state.item_count;

    //alert(item_count);

    //body = <DeliveryAddressPayment order={this.state.order} setContactEmail={(contact_name: any) => this.setFirstName(name)} setFirstName={(first_name: any) => this.setFirstName(first_name)} addDeliveryAddress={(street: any, city: any, state: any, zipcode: any) => this.addDeliveryAddress(street, city, state, zipcode)} setDeliveryAddressStreet={(street: any) => this.setDeliveryAddressStreet(street)} setDeliveryAddressCity={(city: any) => this.setDeliveryAddressCity(city)} setDeliveryAddressZipcode={(zipcode: any) => this.setDeliveryAddressZipcode(zipcode)}/>;

    //<SidebarCart order={this.props.order} increaseCartItemQuantity={this.props.increaseCartItemQuantity} decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}/>


    return ( <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                          <div className="container-fluid">
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#"><img height="100" width="250" src="/images/logo/Sconely_color_web_300_space3.jpg"/></a>
                            </div>
                            <div className="hidden-xs navbar-form navbar-right">
                            </div>
                            <div id="navbar" className="navbar-collapse collapse navbar-right" style={{zIndex: 10010, background: "white"}}>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><a href="./">Profile<span className="sr-only">(current)</span></a></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/register">Signup<span className="sr-only">(current)</span></Link></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                              </ul>
                            </div>
                          </div>
                    </nav> 
                <div className="container-fluid">
                  <div className="row">
                        <div className="hidden-xs col-md-2">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                        </div>
                        <div className="col-md-10">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <DeliveryAddress />
                            <DateTime />
                            <Name />
                            <Contact />
                            <OrderCart />
                            <PaymentMethod />
                            <button onClick={() => this.goToPaymentMethod()}>Complete Order</button>
                            <br/>
                        </div>
                        <div className="hidden-xs col-md-2">
                              maybe put something here
                        </div>
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




function mapStateToProps(state: any) {
  console.log("state" + JSON.stringify(state));
  return {
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    setDate: (e: any) => {
      dispatch(setDate(e))
    },
    setTime: (e: any) => {
      dispatch(setTime(e.target.value))
    },
    setSpecificTime: (e: any) => {
      dispatch(setSpecificTime(e.target.value))
    },
    //setFirstName: (e: any) => {
    //  dispatch(setFirstName(e.target.value))
    //},
    //setLastName: (e: any) => {
    //  dispatch(setLastName(e.target.value))
    //},
    //setContactEmail: (e: any) => {
    //  dispatch(setContactEmail(e.target.value))
    //},
    //setContactPhone: (e: any) => {
    //  dispatch(setContactPhone(e.target.value))
    //},
    
    //setDeliveryAddressStreet1: (e: any) => {
    //  dispatch(setDeliveryAddressStreet1(e.target.value))
    //},
    
    //setDeliveryAddressStreet2: (e: any) => {
    //  dispatch(setDeliveryAddressStreet1(e.target.value))
    //},
    
    //setDeliveryAddressCity: (e: any) => {
    //  dispatch(setDeliveryAddressCity(e.target.value))
    //},
    //setDeliveryAddressState: (e: any) => {
    //  dispatch(setDeliveryAddressState(e.target.value))
    //},
    //setDeliveryAddressZipcode: (e: any) => {
    //  dispatch(setDeliveryAddressZipcode(e.target.value))
    //},
    //setPaymentNameOnCard: (e: any) => {
    //  dispatch(setPaymentNameOnCard(e.target.value))
    //},
    //setPaymentCardNumber: (e: any) => {
    //  dispatch(setPaymentCardNumber(e.target.value))
    //},
    //setPaymentExpiryDate: (e: any) => {
    //  dispatch(setPaymentExpiryDate(e.target.value))
    //},
    //setPaymentSecurityCode: (e: any) => {
    //  dispatch(setPaymentSecurityCode(e.target.value))
    //},
    
    //complete order thunk

    completeOrder: () => {

       /*$.ajax({
            method: "GET",
            url: "/api/data",
            dataType: "json"
          }).success(function(data){
            return dispatch({type:'GET_BOOK', data: data});
          });
       }*/

      //dispatch(completeOrder());

    }
  }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Order);

const Checkout = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDateTimeContact)

export default Checkout;

