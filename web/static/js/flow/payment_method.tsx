
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
const Immutable  = require('immutable');

//import {setPaymentNameOnCard, setPaymentCardNumber, setPaymentExpiryDate, setPaymentSecurityCode} from './actions/order_payment.ts';


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

       name_on_card: "",
       zipcode: "",
       card_number: "",
       card_brand: "",
       expiry_month: "",
       expiry_year: "",
       security_code: "",
       card_number_border_color: "grey",
       expiry_month_border_color: "grey",
       expiry_year_border_color: "grey",
       security_code_border_color: "grey",
       name_on_card_disabled: "",
       zipcode_disabled: "",
       card_number_disabled: "",
       expiry_date_month_disabled: "",
       expiry_date_year_disabled: "",
       security_code_disabled: "",
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

      this.setState({name_on_card: this.props.User.paymentMethods[0].name_on_card});
      //this.setState({zipcode: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({card_number: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({expiry_month: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({expiry_year: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({security_card: this.props.deliveryContactsAddresses[0].street2})

  }

  componentWillReceiveProps = (nextProps: any) => {

      //check for payment invalidated error

      //network error

      if(this.props.User.orderSession.orderStatus == "processing_payment"){

          this.setState({name_on_card_disabled: "disabled"});
          //this.setState({zipcode_disabled: "disabled"});
          //this.setState({card_number_disabled: "disabled"});
          //this.setState({expiry_date_month_disabled: "disabled"});
          //this.setState({expiry_date_year_disabled: "disabled"});
          //this.setState({security_code_disabled: "disabled"});
      
      }

      if(this.props.User.orderSession.paymentErrorCode == "incorrect_cvc"){

          this.setState({error_message_text: "An incorrect CVC was entered."});

      //    this.setState({card_number_border_color: "red"});
          this.setState({security_code_border_color: "red"});        

      //    this.setState({button_complete_order_classname: "btn btn-default"});
      //    this.setState({button_complete_order_disabled: ""});

      }else if(this.props.User.orderSession.paymentErrorCode == "card_declined"){

          //console.log("payment props" + JSON.stringify(nextProps));

          this.setState({error_message_text: "An error occured with your card."});
          this.setState({security_code_border_color: "grey"});        

      }else if(this.props.User.orderSession.paymentErrorCode == "incorrect_number"){

          //console.log("payment props" + JSON.stringify(nextProps));

          this.setState({error_message_text: "An error occured with your card."});
          this.setState({security_code_border_color: "grey"});        

      }else if(this.props.User.orderSession.paymentErrorCode == "expired_card"){

          //console.log("payment props" + JSON.stringify(nextProps));

          this.setState({error_message_text: "An error occured with your card."});
          this.setState({security_code_border_color: "grey"});        

      }else if(this.props.User.orderSession.networkError == true){

          this.setState({error_message_text: "An error occured please try again."});

      }

  }

  setPaymentNameOnCard = (e: any) => {

      this.setState({name_on_card: e.target.value})
      this.props.setPaymentNameOnCard(e);
      
      //this.props.setNameOnCard();
      //this.props.validatePayment();

  }

  setPaymentZipCode = (e: any) => {

      this.setState({zipcode: e.target.value})
      this.props.setPaymentZipCode(e);
      
      //this.props.setNameOnCard();
      //this.props.validatePayment();

  }

  setPaymentCardNumber = (e: any) => {

      this.setState({card_number: e.target.value});
      this.props.setPaymentCardNumber(e);

      //if e.target.value > 0
      //Amex Card: ^3[47][0-9]{13}$
      if(/^3[47][0-9]{13}$/.test(e.target.value)){

          console.log("amex");
          //this.setState({card_number_border_color: "red"})
          this.setState({card_brand: "AMEX"});
          //this.setState({card_number: e.target.value});
          this.props.setPaymentMethodCardBrand("AMEX");
           
      //
      }else if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(e.target.value)){
      //Visa Card: ^4[0-9]{12}(?:[0-9]{3})?$

          console.log("visa");
          this.setState({card_brand: "VISA"});
          this.props.setPaymentMethodCardBrand("VISA");
         
      //
      }else if(/^5[1-5][0-9]{14}$/.test(e.target.value)){

          console.log("mastercard");
          this.setState({card_brand: "MASTERCARD"});
          this.props.setPaymentMethodCardBrand("MASTERCARD");
         
      }else if(/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(e.target.value)){
          
          console.log("discovery");
          this.setState({card_brand: "DISCOVER"});
          this.props.setPaymentMethodCardBrand("DISCOVER");
         
      //
      //Discover Card: ^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$
      }


  }

  onPaymentExpiryMonthFocus(){

      //this.setState({expiry_month_border_color: "red"});

  }

  setPaymentExpiryMonth = (e: any) => {

      //only 1-12

      //console.log(e.target.value);

      //if(e.target.value.length > 0){

              //01-12, only numbers
              if(/^[0-9]{2}/.test(e.target.value)){

                  if(e.target.value > 0 && e.target.value < 13){

                      //console.log("ok month");

                      this.setState({expiry_month_border_color: "grey"});
                      this.setState({expiry_month: e.target.value});
                      this.props.setPaymentExpiryMonth(e);

                      //if(this.state.payment_expiry_year.length > 0){

                          //this.props.paymentValidated();
                          //this.props.paymentInvalidated();

                      //}

                  }

              }else{

                  this.setState({expiry_month: e.target.value});
                  this.setState({expiry_month_border_color: "red"});

              }
      //}
  }

  onPaymentExpiryYearFocus(){

      //this.setState({expiry_year_border_color: "red"});

  }

  setPaymentExpiryYear = (e: any) => {

      //can only be this year up to 2028

      this.props.setPaymentExpiryYear(e);

      //if(e.target.value.length > 0){
          //2017-only numbers
          //01-12, only numbers
          if(/^[0-9]{4}/.test(e.target.value)){

              if((parseInt(e.target.value) >= 2017) && (parseInt(e.target.value) <= 2025)){

                  this.setState({expiry_year_border_color: "grey"});

                  //console.log("ok year");
                  this.setState({expiry_year_border_color: "grey"})
                  this.setState({expiry_year: e.target.value});

                  
                  /*if(this.state.payment_expiry_month.length > 0){

                      //if card number
                      //if security code

                      //this.props.paymentValidated();

                  }*/

              }else{

                  this.setState({expiry_year: e.target.value});
                  this.setState({expiry_year_border_color: "red"});

                  //paymentinvalidated

              }

          }else{

              this.setState({expiry_year: e.target.value});
              this.setState({expiry_year_border_color: "red"});

          }
      //}
  }

  setPaymentSecurityCode = (e: any) => {

      //this.setState({payment_security_code: e.target.value});
      //this.props.setPaymentSecurityCode(e);

      //if length > 0 or less then 4, only numbers

       //if(e.target.value.length > 0){
          
           if(/^[0-9]{3}/.test(e.target.value)){

              //console.log("ok year");
              this.setState({cvc_border_color: "grey"})
              this.setState({security_code: e.target.value});
              this.props.setPaymentSecurityCode(e);
              this.props.paymentMethodValidated();

              /*if(this.state.payment_expiry_month.length > 0){

                  //if number
                  //month
                  //year

                  //this.props.paymentValidated();

              }*/

          }else{

              this.setState({security_code: e.target.value});
              this.setState({cvc_border_color: "red"});

          }
      //}

  }

  goToPreview(){

      this.context.router.push('/order/preview');
      
  }  
  
  
  render(): JSX.Element{

    //if session.user_id != guest
    //then get the users payment methods

    /*let dropdown: any = <form className="form-horizontal">
                      <div className="form-group">
                          <div className="col-sm-3">
                              <b>Payment</b>
                              <br/>
                                <select className="form-control">
                                    <option>Home - 2444</option>
                                    <option>Office - 1234</option>
                                </select>
                          </div>
                      </div>
                  </form>*/

   
    return ( <div>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-4">
                          Payment
                      </div>
                    </div>
                  </form>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-4">
                          {this.state.error_message_text}
                      </div>
                    </div>
                  </form>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-3">
                        <input type="text" value={this.state.name_on_card} maxLength={16} className="form-control" id="exampleInputName2" placeholder="Name on Card" onChange={(e) => this.setPaymentNameOnCard(e)} style={{borderColor: this.state.card_number_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}}/>
                      </div>
                      <div className="col-md-2">
                        <input type="text" value={this.state.zipcode} maxLength={5} className="form-control" id="exampleInputName2" placeholder="ZIP CODE" onChange={this.setPaymentZipCode} style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.zipcode_disabled}/>
                      </div>
                    </div>
                  </form>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-4">
                        <input type="text" value={this.state.card_number} maxLength={16} className="form-control" id="exampleInputName2" placeholder="Card Number" onChange={(e) => this.setPaymentCardNumber(e)} style={{borderColor: this.state.card_number_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.card_number_disabled}/>
                      </div>
                      <div className="hidden-lg col-xs-1">
                        <br/>
                      </div>
                      <div className="col-sm-3">
                          {this.state.card_brand}
                      </div>
                    </div>
                  </form>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-md-4" style={{paddingLeft: 5}}>
                             <div className="col-md-4">
                                <input type="text" value={this.state.expiry_month} maxLength={2} className="form-control" id="exampleInputName2" placeholder="MM" onFocus={() => this.onPaymentExpiryMonthFocus()} onChange={this.setPaymentExpiryMonth} style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.expiry_date_month_disabled}/>
                              </div>
                              <div className="hidden-lg col-xs-1">
                                <br/>
                              </div>
                              <div className="col-md-4">
                                <input type="text" value={this.state.expiry_year} maxLength={4} className="form-control" id="exampleInputName2" placeholder="YYYY" onFocus={() => this.onPaymentExpiryYearFocus()} onChange={this.setPaymentExpiryYear} style={{borderColor: this.state.expiry_year_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.expiry_date_year_disabled}/>
                              </div>
                              <div className="hidden-lg col-xs-1">
                                <br/>
                              </div>
                              <div className="col-md-4">
                                <input type="email" value={this.state.security_code} maxLength={4} className="form-control" id="exampleInputEmail2" placeholder="CVC" onChange={this.setPaymentSecurityCode} style={{borderColor: this.state.security_code_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.security_code_disabled}/>
                              </div>
                          </div>
                  
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

function mapStateToProps(state: any) {
  console.log("payment method component/state" + JSON.stringify(state));
  return {
   user: state.user,
   user_payment_methods: state.user_payment_methods
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //setPaymentNameOnCard: (e: any) => {
      //console.log(e.target.value);
    //  dispatch(setPaymentNameOnCard(e.target.value));
    //},
    //setPaymentCardNumber: (e: any) => {
      //console.log(e.target.value);
    //  dispatch(setPaymentCardNumber(e));
    //},
    //setPaymentExpiryDate: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    //},
    //setPaymentSecurityCode: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    //}
  }
}

const PaymentMethod1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentMethod)

export default PaymentMethod;

