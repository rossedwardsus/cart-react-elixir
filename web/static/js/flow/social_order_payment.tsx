
'use strict';


import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './order_datetime_contact_cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {paymentMethodNameOnCardValidated, paymentMethodZipcodeValidated, paymentMethodCardNumberValidated, paymentMethodExpiryMonthValidated, paymentMethodExpiryYearValidated, paymentMethodSecurityCodeValidated} from './actions/order_validations.ts';

/*import {setDeliveryContactAddressFirstName, setDeliveryContactAddressLastName, setDeliveryContactAddressEmail, setDeliveryContactAddressMobile, setDeliveryContactAddressCompanyName, setDeliveryContactAddressStreet1, setDeliveryContactAddressStreet2, setDeliveryContactAddressCity, setDeliveryContactAddressState, setDeliveryContactAddressZipcode} from './actions/order_delivery_contact_address.ts';
import {setUserDeliveryContactAddressFirstName, setUserDeliveryContactAddressLastName, setUserDeliveryContactAddressEmail, setUserDeliveryContactAddressMobile, setUserDeliveryContactAddressCompanyName, setUserDeliveryContactAddressStreet1, setUserDeliveryContactAddressStreet2, setUserDeliveryContactAddressCity, setUserDeliveryContactAddressState, setUserDeliveryContactAddressZipcode} from './actions/user_delivery_contact_address.ts';
import {setUserNameFirst, setUserNameLast, setUserContactEmail, setUserContactMobile} from './actions/user_name_contact.ts';
import {setDate, setTime, setSpecificTime} from './actions/signature_order_delivery_datetime.ts';
import {increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/guest_cart.ts';*/

import {setOrderStatus, setPromoCode} from './actions/order.ts';

import {setPaymentNameOnCard, setPaymentZipCode, setPaymentMethodCardNumber, setPaymentMethodCardBrand, setPaymentExpiryMonth, setPaymentExpiryYear, setPaymentSecurityCode} from './actions/order_payment_method.ts';

//import {setContactEmail, setContactMobile} from './actions/order_contact.ts';

import {processYoursSocialPoolOrder, processPoolOrder, setDeliveryCost, termsValidated, saveForLater} from './actions/order.ts';

//import {processYoursSocialOrder1} from './actions/'

import SidebarCart from './order_sidebar_cart.tsx';
import SocialPromoCode from './social_promo_code.tsx';
//import Contact from './order_contact.tsx';
//import Datetime from './order_delivery.tsx';
//import NameContact from './name.tsx';

import OrderCart from './order_cart.tsx';
import SocialPaymentMethod from './Social_payment_method.tsx';
import CheckoutButton from './checkout_button.tsx';

import PublicTopNavbar from './public/public_top_navbar.tsx';
import PublicBottomNavbar from './public/public_bottom_navbar.tsx';
import PublicPrivacyTermsNavbar from './public/public_privacy_terms_navbar.tsx';


//import { getPublicMenu } from './reducers/name';
//const Immutable  = require('immutable');
var DatePicker = require('react-datepicker');
var moment = require('moment');
import axios from 'axios';

require('react-datepicker/dist/react-datepicker.css');


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

class SocialPayment extends React.Component<any, any> {
  //props: Props;

  private cardNumber: HTMLInputElement;

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
        //order: Immutable.fromJS({name: "name", contact: "contact", cart: [], delivery_address: {street: ""}, payment: ""}),
        selected_time: "",
        selected_specific_time: "",
        button_complete_order_classname: "btn btn-default disabled",
        button_complete_order_disabled: true,      
        promo_code: "",
        promo_code_discount: 0,  

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

  componentDidMount = () => {

      console.log(this.props.User.orderSession.promoCode);
      //promo code needs to be readded here if they entered it and swiped.
      //this.setState({promo_code: this.props.User.orderSession.promoCode})
      //need to apply promo code again
      
      this.applyPromoCode(this.props.User.orderSession.promoCode);


      //same with payment method errors.
      //clear errors in payment method
      //done in payment_method.tsx



      ///if(this.props.order.order_type == undefined){

      //    redirect to homepage

      //}

      //componentDidMount = () => {

        //window.scrollTo(0, 0);

        //const node = ReactDOM.findDOMNode(this.cardNumber);
        //node.scrollIntoView({ behavior: "smooth" });


      //}

      //this.setState({name_on_card: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({zipcode: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({card_number: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({expiry_month: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({expiry_year: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({security_card: this.props.deliveryContactsAddresses[0].street2})
  
  }

  //componentWillReceiveProps
  componentWillReceiveProps = (nextProps: any) => {

    //console.log("<b>recieved</b>");

    let paymentValidations = this.props.User.orderSession.validations;

    if(paymentValidations.paymentMethodCardNumberValidated == true && paymentValidations.paymentMethodExpiryMonthValidated == true && paymentValidations.paymentMethodExpiryYearValidated == true && paymentValidations.paymentMethodSecurityCodeValidated == true){
    
      this.setState({button_complete_order_classname: "btn btn-default"});
      this.setState({button_complete_order_disabled: false});
    
    }



    if(this.props.User.orderSession.paymentErrorCode == "incorrect_cvc"){
    
        //display error
        //if cvc then make the cvc border red
        //if card number

        //paymenterror set border color

        //this.setState({card_number_border_color: "red"});
        this.setState({security_code_border_color: "red"});        

        this.setState({button_complete_order_classname: "btn btn-default"});
        this.setState({button_complete_order_disabled: ""});

    }

    //else if(this.props.User.orderSession.paymentErrorCode == "error"){


    //this.props.User.orderSession.validations.paymentMethodNameOnCardValidated
    //this.props.User.orderSession.validations.paymentMethodZipcodeValidated
    //this.props.User.orderSession.validations.paymentMethodCardNumberValidated

    if (this.props.User.orderSession.validations.paymentMethodSecurityCodeValidated == true){

          this.setState({button_complete_order_classname: "btn btn-default"});
          this.setState({button_complete_order_disabled: ""});

    }

    if(this.props.User.orderSession.orderStatus == "processing"){

          this.setState({button_complete_order_classname: "btn btn-default disabled"});
          this.setState({button_complete_order_disabled: "disabled"});
          
    }

  }


  showCart(){

      this.setState({page: "cart"})

  }


  //goToDateTime(){
  
      //this.context.router.push('/order/12345/datetime_contact_delivery_address_payment');
      
  //}


  applyPromoCode = (promo_code: any) => {

        this.setState({promo_code: promo_code})

      //if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

        //alert();

        //this.setState({"delivery_address_street1": e.target.value});
        //this.setState({"delivery_address_street1_classname": "form-group"});

        //if promo code is validate apply to total cost

        //let promo_codes = ["8thandhope", "grains"];



        if(promo_code.toUpperCase() == "8THANDHOPE"){

          //if(promo_codes.indexof(e.target.value) > -1){

              this.setState({promo_code_discount: 10})
              this.props.setPromoCode(promo_code);

          //}
        
        }else if(promo_code.toUpperCase() == "GRAINS"){

          //if(promo_codes.indexof(e.target.value) > -1){

              this.setState({promo_code_discount: 10})
              this.props.setPromoCode(promo_code);

          //}
        
        }else if(promo_code.toUpperCase() == "SCONELY10"){

          //if(promo_codes.indexof(e.target.value) > -1){

              this.setState({promo_code_discount: 10})
              this.props.setPromoCode(promo_code);

          //}
        
        }else if(promo_code.toUpperCase() == "CROSSCAMPUS10"){

          //if(promo_codes.indexof(e.target.value) > -1){

              this.setState({promo_code_discount: 10})
              this.props.setPromoCode(promo_code);

          //}
        
        }else if(promo_code.toUpperCase() == "WEWORK10"){

          //if(promo_codes.indexof(e.target.value) > -1){

              this.setState({promo_code_discount: 10})
              this.props.setPromoCode(promo_code);

          //}
        
        }else if(promo_code.toUpperCase() == "HOLIDAY10"){

          //if(promo_codes.indexof(e.target.value) > -1){

              this.setState({promo_code_discount: 10})
              this.props.setPromoCode(promo_code);

          //}
        
        }else if(promo_code == ""){

          //if(promo_codes.indexof(e.target.value) > -1){

              this.setState({promo_code_discount: 0})
              this.props.setPromoCode(promo_code);

          //}
        
        }


  }



  setPromoCode = (e: any) => {

      this.applyPromoCode(e.target.value)

      /*this.setState({promo_code: e.target.value})

      //if(e.target.value.length > 0){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            //alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            //if promo code is validate apply to total cost

            //let promo_codes = ["8thandhope", "grains"];



            if(e.target.value.toUpperCase() == "8THANDHOPE"){

              //if(promo_codes.indexof(e.target.value) > -1){

                  this.setState({promo_code_discount: 10})
                  this.props.setPromoCode(e.target.value);

              //}
            
            }else if(e.target.value.toUpperCase() == "GRAINS"){

              //if(promo_codes.indexof(e.target.value) > -1){

                  this.setState({promo_code_discount: 10})
                  this.props.setPromoCode(e.target.value);

              //}
            
            }else if(e.target.value.toUpperCase() == "SCONELY10"){

              //if(promo_codes.indexof(e.target.value) > -1){

                  this.setState({promo_code_discount: 10})
                  this.props.setPromoCode(e.target.value);

              //}
            
            }else if(e.target.value.toUpperCase() == "CROSSCAMPUS10"){

              //if(promo_codes.indexof(e.target.value) > -1){

                  this.setState({promo_code_discount: 10})
                  this.props.setPromoCode(e.target.value);

              //}
            
            }else if(e.target.value.toUpperCase() == "WEWORK10"){

              //if(promo_codes.indexof(e.target.value) > -1){

                  this.setState({promo_code_discount: 10})
                  this.props.setPromoCode(e.target.value);

              //}
            
            }else if(e.target.value.toUpperCase() == "HOLIDAY10"){

              //if(promo_codes.indexof(e.target.value) > -1){

                  this.setState({promo_code_discount: 10})
                  this.props.setPromoCode(e.target.value);

              //}
            
            }else if(e.target.value == ""){

              //if(promo_codes.indexof(e.target.value) > -1){

                  this.setState({promo_code_discount: 0})
                  this.props.setPromoCode(e.target.value);

              //}
            
            }

            

        //}
      //}*/

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
      this.props.setPaymentSecurityCode(e);

      if(e.target.value.length > 2){

        //alert();

        //if(/^[a-zA-Z]/.test(e.target.value)){

            //alert();

            //this.setState({"delivery_address_street1": e.target.value});
            //this.setState({"delivery_address_street1_classname": "form-group"});

            this.props.paymentMethodValidated();

        //}
      }   

  }







  processYoursSocialPoolOrder = () => {

      this.setState({button_complete_order_classname: "btn btn-default disabled"});
      this.setState({button_complete_order_disabled: "disabled"});

      console.log("order type " + this.props.User.orders[0].order_type);

      //if order type == yours social pool_response
      if(this.props.User.orders[0].order_type == "pool_order"){
      
        this.props.processPoolOrder();

      }else{
        
        //this.props.setOrderStatus("process_payment");
        
        this.props.processYoursSocialPoolOrder();

      }

      


     


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

  saveForLater = (e: any) => {

      if(e.target.value == "on"){

          this.props.saveForLater(true);

      }

  }


  render(): JSX.Element{

    //<SidebarCart order={this.props.order} menuItems={this.props.menuItems} cartItems={this.props.cartItems}/>
                         

    let body: any = "";
    let item_count = this.state.item_count;
    let regular_items = [];
    let mini_items = [];
    let subtotal_cost = 0.00;
    let total_due_formatted = null
    let total_regular_items_cost = null;
    let total_mini_items_cost = null;
    let total_cost = null;
    let total_items = null;


    //alert(item_count);

    //body = <DeliveryAddressPayment order={this.state.order} setContactEmail={(contact_name: any) => this.setFirstName(name)} setFirstName={(first_name: any) => this.setFirstName(first_name)} addDeliveryAddress={(street: any, city: any, state: any, zipcode: any) => this.addDeliveryAddress(street, city, state, zipcode)} setDeliveryAddressStreet={(street: any) => this.setDeliveryAddressStreet(street)} setDeliveryAddressCity={(city: any) => this.setDeliveryAddressCity(city)} setDeliveryAddressZipcode={(zipcode: any) => this.setDeliveryAddressZipcode(zipcode)}/>;

    //<SidebarCart order={this.props.order} increaseCartItemQuantity={this.props.increaseCartItemQuantity} decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}/>

    //<OrderCart order={this.props.order} decreaseCartItemQuantity={(e:any) => this.props.decreaseCartItemQuantity(e)} increaseCartItemQuantity={(e:any) => this.props.increaseCartItemQuantity(e)} removeCartItem={(e:any) => this.props.removeCartItem(e)} cart_items={this.props.order_cart_items}/>

  
    regular_items = this.props.User.orders[0].cartItems.filter((item: any) => {

        //console.log(JSON.stringify(item));

        if(item.size == "regular"){

            return item;

        }

        return

    });

    mini_items = this.props.User.orders[0].cartItems.filter((item: any) => {

        //console.log(JSON.stringify(item));

        if(item.size == "mini"){

            return item;

        }

        return

    });

    if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){
        
        total_regular_items_cost = regular_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.00; }, 0)

    }else{

        total_regular_items_cost = regular_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.00; }, 0)

    }

    total_mini_items_cost = mini_items.reduce((amount: any, item: any) => { return amount + item.quantity * 2.25; }, 0)

    //}


    //total_social_mini_items_cost = social_mini_items.reduce((amount: any, item: any) => { return amount + item.quantity * 5.4; }, 0)

    //total_social_mini_items_cost = this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity * 6.0, 0);


    subtotal_cost = total_regular_items_cost + total_mini_items_cost;

    //total_items = this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0);

    //total_items = (regular_items.reduce((amount: any, item: any) => amount + item.quantity, 0)) + (mini_items.reduce((amount: any, item: any) => amount + item.quantity, 0));


    if(this.state.promo_code_discount == 0){

        total_cost = subtotal_cost;

    }else{

        total_cost = subtotal_cost - (subtotal_cost * (this.state.promo_code_discount/100));

    }

    //total_due_formatted = total_due.toFixed(2);



    return ( <div>
                <PublicTopNavbar/>
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
                        <div className="col-xs-12 col-md-9" style={{paddingLeft: 70}}>
                            <br/>
                            <br/>
                            <div className="hidden-lg">
                                <Link to="/order/menu">{"<-"} Menu</Link>  
                            </div>
                            <br/>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-3">
                                    Subtotal Due: 
                                  </div>
                                  <div className="col-md-3">
                                    ${subtotal_cost.toFixed(2)}
                                  </div>
                                </div>
                            </form>
                            <SocialPromoCode setPromoCode={(e: any) => {this.setPromoCode(e)}/>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-3">
                                      Promo Code
                                  </div>
                                  <div className="col-md-3">
                                      <input type="text" maxLength={30} onChange={this.setPromoCode} className="form-control" value={this.state.promo_code} id="exampleInputName2" placeholder="Promo Code" style={{borderColor: "grey", borderRadius: 0, WebkitAppearance: "none"}}/>
                                  </div>
                                </div>
                            </form>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-3">
                                      Discount
                                  </div>
                                  <div className="col-md-2">
                                      %{this.state.promo_code_discount}
                                  </div>
                                </div>
                            </form>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-3">
                                    Total Due: 
                                  </div>
                                  <div className="col-md-3">
                                    ${total_cost.toFixed(2)}
                                  </div>
                                </div>
                            </form>
                            <br/>
                            {this.state.payment_error_message}
                            <br/>
                            <br/>
                            <SocialPaymentMethod User={this.props.User} setPaymentNameOnCard={(e: any) => this.props.setPaymentNameOnCard(e)} setPaymentZipCode={(e: any) => this.props.setPaymentZipCode(e)} setPaymentCardNumber={(e: any) => this.props.setPaymentCardNumber(e)} setPaymentMethodCardBrand={(e: any) => this.props.setPaymentMethodCardBrand(e)} setPaymentExpiryMonth={(e: any) => this.props.setPaymentExpiryMonth(e)} setPaymentExpiryYear={(e: any) => this.props.setPaymentExpiryYear(e)} setPaymentSecurityCode={(e: any) => this.props.setPaymentSecurityCode(e)} setOrderStatus={(e: any) => this.props.setOrderStatus(e)} paymentMethodValidated={() => this.props.paymentMethodValidated()} paymentMethodCardNumberValidated={() => this.props.paymentMethodCardNumberValidated()} paymentMethodExpiryMonthValidated={() => this.props.paymentMethodExpiryMonthValidated()} paymentMethodExpiryYearValidated={() => this.props.paymentMethodExpiryYearValidated()} paymentMethodSecurityCodeValidated={() => this.props.paymentMethodSecurityCodeValidated()}/>
                            <br/>
                            <button className={this.state.button_complete_order_classname} disabled={this.state.button_complete_order_disabled} onClick={this.processYoursSocialPoolOrder} style={{borderRadius: 0}}>Complete Order</button>
                            <br/>
                            <br/>
                        </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <PublicBottomNavbar/>
                <PublicPrivacyTermsNavbar/>
            </div>
    )
  }

  //<button className={this.state.button_complete_order_classname} onClick={this.processYoursSocialPoolOrder} disabled={this.state.button_complete_order_disabled} style={{borderRadius: 0}}>Complete Order</button>

  /*render(){
    alert(JSON.stringify(this.props.menu_items));
    return (  
          <div>here{this.state.here}</div>
    )
  }*/

}




function mapStateToProps(state: any) {
  console.log("order payment state" + JSON.stringify(state));
  return {
   /*session: state.session,
   order_validations: state.order_validations,
   order: state.Order,
   order_delivery_address: state.delivery_address,
   order_contact: state.contact,
   order_name: state.name,
   //order_cart_items: state.cart.cart_items,
   order_datetime: state.OrderDatetime,
   order_payment_method: state.OrderPayment,*/

   User: state.User,

   //guestOrder: state.guestOrder,

   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    
    setPromoCode: (value: any) => {
      dispatch(setPromoCode(value));
    },
   
    setPaymentNameOnCard: (e: any) => {
      dispatch(setPaymentNameOnCard(e.target.value, ""))
    },
    setPaymentZipCode: (e: any) => {
      dispatch(setPaymentZipCode(e.target.value, ""))
    },
    setPaymentCardNumber: (e: any) => {
      dispatch(setPaymentMethodCardNumber(e.target.value, ""))
    },
    setPaymentMethodCardBrand: (e: any) => {
      dispatch(setPaymentMethodCardBrand(e.target.value))
    },
    setPaymentExpiryMonth: (e: any) => {
      dispatch(setPaymentExpiryMonth(e.target.value, ""))
    },
    setPaymentExpiryYear: (e: any) => {
      dispatch(setPaymentExpiryYear(e.target.value, ""))
    },
    setPaymentSecurityCode: (e: any) => {
      dispatch(setPaymentSecurityCode(e.target.value, ""))
    },
    paymentMethodNameOnCardValidated: (e: any) => {
      dispatch(paymentMethodNameOnCardValidated())
    },
    paymentMethodZipcodeValidated: (e: any) => {
      dispatch(paymentMethodZipcodeValidated())
    },
    paymentMethodCardNumberValidated: (e: any) => {
      dispatch(paymentMethodCardNumberValidated())
    },
    paymentMethodExpiryMonthValidated: (e: any) => {
      dispatch(paymentMethodExpiryMonthValidated())
    },
    paymentMethodExpiryYearValidated: (e: any) => {
      dispatch(paymentMethodExpiryYearValidated())
    },
    paymentMethodSecurityCodeValidated: (e: any) => {
      dispatch(paymentMethodSecurityCodeValidated())
    },
    termsValidated: (value: any) => {

      dispatch(termsValidated(value));

    },
    setOrderStatus: (value: any) => {
      dispatch(setOrderStatus(value));

    },
    saveForLater: (value: any) => {

      dispatch(saveForLater(value));

    },
    //setOrderId: (value: any) => {

    //  dispatch(setOrderId(value));

    //},
    processYoursSocialPoolOrder: () => {

      dispatch(processYoursSocialPoolOrder());

    },
    processPoolOrder: () => {

      dispatch(processPoolOrder());

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

const SocialPaymentConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialPayment)

export default SocialPaymentConnected;

