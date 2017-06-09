
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './order_datetime_contact_cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {cartValidated, cartInvalidated, datetimeValidated, datetimeInvalidated, deliveryAddressValidated, deliveryAddressInvalidated, nameValidated} from './actions/order_validations.ts';
import {setDeliveryAddressStreet1, setDeliveryAddressStreet2, setDeliveryAddressCity, setDeliveryAddressState, setDeliveryAddressZipcode} from './actions/order_delivery_address.ts';
import {setFirstName, setLastName, setCompanyName} from './actions/order_name.ts';
import {setDate, setTime, setSpecificTime} from './actions/order_delivery_datetime.ts';
import {increaseCartItemQuantity, decreaseCartItemQuantity} from './actions/cart.ts';
import {setPaymentNameOnCard, setPaymentCardNumber, setPaymentExpiryMonth, setPaymentExpiryYear, setPaymentSecurityCode} from './actions/order_payment.ts';
import {setContactEmail, setContactMobile} from './actions/order_contact.ts';
import {setDeliveryCost, termsValidated, mailingList, setOrderId} from './actions/order.ts';

import SidebarCart from './sidebar_cart.tsx';
import DeliveryAddress from './delivery_address.tsx';
import Contact from './contact.tsx';
import Datetime from './datetime.tsx';
import Name from './name.tsx';
import OrderCart from './order_cart.tsx';
import PaymentMethod from './payment_method.tsx';
import CheckoutButton from './checkout_button.tsx';

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
        selected_specific_time: "",
        button_complete_order_classname: "btn btn-default disabled"

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

      ///if(this.props.order.order_type == undefined){

      //    redirect to homepage

      //}
      
  }

  //componentWillReceiveProps
  componentWillReceiveProps(nextProps: any){

    console.log("<b>recieved</b>");

    //this.props.cart_validated;

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

  terms(e: any){

      console.log(e.target.value)

      this.props.faq(e);

  }

  mailingList(e: any){

      this.props.mailingList(e);

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
                          <a className="navbar-brand" href="#"><img src="/images/logo/Sconelylogo.5.jpg"/></a>
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
                <div className="row">
                        <div className="hidden-xs col-md-3">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <Link to="/public/menu" className="btn btn-default">Back to Menu</Link>
                          <br/>
                          <br/>
                          <Link to="/public/menu">Social</Link>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                        </div>
                        <div className="col-xs-12 col-md-9">
                            <br/>
                            <br/>
                            <br/>
                            <DeliveryAddress order={this.props.order} deliveryAddress={this.props.order_delivery_address} setDeliveryAddressStreet1={(e: any) => this.props.setDeliveryAddressStreet1(e)} setDeliveryAddressStreet2={(e: any) => this.props.setDeliveryAddressStreet2(e)} 
                            setDeliveryAddressCity={(e: any) => this.props.setDeliveryAddressCity(e)} 
                            setDeliveryAddressState={(e: any) => this.props.setDeliveryAddressState(e)} 
                            setDeliveryAddressZipcode={(e: any) => this.props.setDeliveryAddressZipcode(e)} 
                            setDeliveryCost={(e: any) => this.props.setDeliveryCost(e)}
                            deliveryAddressValidated={() => this.props.deliveryAddressValidated()} deliveryAddressInvalidated={() => this.props.deliveryAddressInvalidated()}/>

                            <Datetime  order={this.props.order} setDate={(e: any) => this.props.setDate(e)} datetimeValidated={() => this.props.datetimeValidated()}/>

                            <Name setFirstName={(e: any) => this.props.setFirstName(e)} setLastName={(e: any) => this.props.setLastName(e)} setCompanyName={(e: any) => this.props.setCompanyName(e)} setNameValidated={() => this.props.setNameValidated()}/>
                            
                            <Contact setContactEmail={(e:any) => this.props.setContactEmail(e)} setContactMobile={(e:any) => this.props.setContactMobile(e)}/>

                            <OrderCart order={this.props.order} decreaseCartItemQuantity={(e:any) => this.props.decreaseCartItemQuantity(e)} increaseCartItemQuantity={(e:any) => this.props.increaseCartItemQuantity(e)} removeCartItem={(e:any) => this.props.removeCartItemQuantity(e)} cart_items={this.props.order_cart_items}/>

                            <br/>
                            
                            <PaymentMethod setPaymentNameOnCard={(e: any) => this.props.setPaymentNameOnCard(e)} setPaymentCardNumber={(e: any) => this.props.setPaymentCardNumber(e)} setPaymentExpiryMonth={(e: any) => this.props.setPaymentExpiryMonth(e)} setPaymentExpiryYear={(e: any) => this.props.setPaymentExpiryYear(e)} setPaymentSecurityCode={(e: any) => this.props.setPaymentSecurityCode(e)}/>
                            <br/>

                            <input type="checkbox" onChange={(e: any) => this.props.termsValidated(e)}/>Terms
                            <br/>
                            <input type="checkbox" onChange={(e: any) => this.mailingList(e)}/>Join Mailing List
                            <br/>

                            <CheckoutButton setOrderId={(order_id: any) => this.props.setOrderId(order_id)} thisorder={this.props.order} order_delivery_address={this.props.order_delivery_address} 
                            order_datetime={this.props.order_datetime}
                            order_contact={this.props.order_contact} order_name={this.props.order_name}  
                            order_payment_method={this.props.order_payment_method}
                            validations={this.props.order_validations}/>
                            <br/>
                            <br/>
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
  console.log("checkout state" + JSON.stringify(state));
  return {
   order_validations: state.order_validations,
   order: state.Order,
   order_delivery_address: state.delivery_address,
   order_contact: state.contact,
   order_name: state.name,
   order_cart_items: state.cart.cart_items,
   order_datetime: state.OrderDatetime,
   order_payment_method: state.OrderPayment,

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
    cartValidated: () => {
      dispatch(cartValidated());
    },
    datetimeValidated: () => {
        dispatch(datetimeValidated());
    },
    setSpecificTime: (e: any) => {
      dispatch(setSpecificTime(e.target.value))
    },
    setFirstName: (e: any) => {
      dispatch(setFirstName(e.target.value))
    },
    setLastName: (e: any) => {
      dispatch(setLastName(e.target.value))
    },
    setCompanyName: (e: any) => {
      dispatch(setCompanyName(e.target.value))
    },
    setNameValidated: (e: any) => {
      dispatch(nameValidated())
    },
    setContactEmail: (e: any) => {
      dispatch(setContactEmail(e.target.value))
    },
    setContactMobile: (e: any) => {
      dispatch(setContactMobile(e.target.value))
    },
    setDeliveryAddressStreet1: (e: any) => {
      dispatch(setDeliveryAddressStreet1(e.target.value))
    },
    setDeliveryAddressStreet2: (e: any) => {
      dispatch(setDeliveryAddressStreet2(e.target.value))
    },
    setDeliveryAddressCity: (e: any) => {
      dispatch(setDeliveryAddressCity(e.target.value))
    },
    setDeliveryAddressState: (e: any) => {
      dispatch(setDeliveryAddressState(e.target.value))
    },
    setDeliveryAddressZipcode: (e: any) => {
      dispatch(setDeliveryAddressZipcode(e.target.value))
    },
    setDeliveryCost: (value: any) => {
      dispatch(setDeliveryCost(value));
    },
    deliveryAddressValidated: () => {
      dispatch(deliveryAddressValidated())
    },
    deliveryAddressInvalidated: () => {
      dispatch(deliveryAddressInvalidated())
    },
    increaseCartItemQuantity: (e: any) => {
      dispatch(increaseCartItemQuantity(e));
    },
    decreaseCartItemQuantity: (e: any) => {
      dispatch(decreaseCartItemQuantity(e));
    },
    setPaymentNameOnCard: (e: any) => {
      dispatch(setPaymentNameOnCard(e.target.value))
    },
    setPaymentCardNumber: (e: any) => {
      dispatch(setPaymentCardNumber(e.target.value))
    },
    setPaymentExpiryMonth: (e: any) => {
      dispatch(setPaymentExpiryMonth(e.target.value))
    },
    setPaymentExpiryYear: (e: any) => {
      dispatch(setPaymentExpiryYear(e.target.value))
    },
    setPaymentSecurityCode: (e: any) => {
      dispatch(setPaymentSecurityCode(e.target.value))
    },
    termsValidated: (value: any) => {

      dispatch(termsValidated(value));

    },
    mailingList: (value: any) => {

      dispatch(mailingList(value));

    },
    setOrderId: (value: any) => {

      dispatch(setOrderId(value));

    },
    
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

