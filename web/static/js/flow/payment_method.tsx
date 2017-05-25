
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

       card_number_border_color: "grey",
       expiry_month_border_color: "grey",
       expiry_year_border_color: "grey",
       cvc_border_color: "grey",
       
       card_type: ""

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

   

  }

  componentWillReceiveProps(nextProps: any){

      console.log("payment props" + JSON.stringify(nextProps));

  }

  setPaymentNameOnCard(e: any){

      this.setState({name_on_card: e.target.value})
      this.props.setPaymentNameOnCard(e);
      
      //this.props.setNameOnCard();
      //this.props.validatePayment();

  }

  setPaymentCardNumber(e: any){

      //Amex Card: ^3[47][0-9]{13}$
      //if(/^3[47][0-9]{13}$/.test(e.target.value)){

          console.log("amex");
          this.setState({card_number_border_color: "red"})
          this.setState({card_type: "AMEX"});
          this.setState({card_number: e.target.value});
          this.props.setPaymentCardNumber(e);
          

      //
      //}else if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(e.target.value)){
      //Visa Card: ^4[0-9]{12}(?:[0-9]{3})?$

      //    alert("visa");
      //
      //}else if(/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(e.target.value)){
      //    alert("discovery");
      //
      //Discover Card: ^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$
      //}


  }

  setPaymentExpiryMonth(e: any){

      console.log(e.target.value);

      //01-12, only numbers
      if(/^[0-9]/.test(e.target.value)){

          console.log("ok month");
          this.setState({expiry_month_border_color: "grey"});
          this.setState({expiry_month: e.target.value});
          this.props.setPaymentExpiryMonth(e);

      }

  }

  setPaymentExpiryYear(e: any){

      //2017-only numbers
      //01-12, only numbers
      if(/^[0-9]/.test(e.target.value)){

          console.log("ok year");
          this.setState({expiry_year_border_color: "grey"})
          this.setState({expiry_year: e.target.value});
          this.props.setPaymentExpiryYear(e);

      }

  }

  setPaymentSecurityCode(e: any){

      //if length > 0 or less then 4, only numbers

  }

  goToPreview(){

      this.context.router.push('/order/preview');
      
  }  
  
  
  render(): JSX.Element{

   
    return ( <div>
                  <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-3">
                                    <b>Payment</b>
                                    <br/>
                                      <select className="form-control">
                                          <option>Home</option>
                                          <option>Office</option>
                                      </select>
                                </div>
                              </div>
                            </form>
                            <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-6">
                                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Name on Card" onChange={(e) => this.setPaymentNameOnCard(e)}/>
                              </div>
                              </div>
                            </form>
                            <form className="form-horizontal">
                              <div className="form-group">
                                <div className="col-sm-3">
                                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number" onChange={(e) => this.setPaymentCardNumber(e)} style={{borderColor: this.state.card_number_border_colors, borderRadius: 0, WebkitAppearance: "none"}}/>
                                </div>
                                <div className="col-sm-3">
                                    {this.state.card_type}
                                </div>
                              </div>
                            </form>
                            <form className="form-horizontal">
                              <div className="form-group">
                                <div className="col-md-2">
                              
                                  <input type="text" maxLength={2} className="form-control" id="exampleInputName2" placeholder="MM" onChange={(e) => this.setPaymentExpiryMonth(e)} style={{borderColor: this.state.expiry_year_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                </div>
                                <div className="col-md-2">
                              
                                  <input type="text" maxLength={4} className="form-control" id="exampleInputName2" placeholder="YYYY" onChange={(e) => this.setPaymentExpiryYear(e)} style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                </div>
                                <div className="col-md-2">
                              
                                  <input type="email" className="form-control" id="exampleInputEmail2" placeholder="CVC" onChange={(e) => this.setPaymentExpiryYear(e)} style={{borderColor: this.state.cvc_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
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

