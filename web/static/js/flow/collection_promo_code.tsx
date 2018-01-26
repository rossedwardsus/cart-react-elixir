
'use strict';


import * as React from 'react';
import * as ReactDOM from 'react-dom'

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

class CollectionPromoCode extends React.Component<any, any> {
  //props: Props;

  private cardNumber: HTMLInputElement;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

       promoCodeDiscount: 0,
    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
   
  }

  //static get contextTypes() {
  //  return {
  //    router: React.PropTypes.object.isRequired,
  //  };
  //}

  componentDidMount(){

      //if user swipes back or uses the back button
      //this.setState({zipcode_border_color: "grey"});

     //this.cardNumber.focus();
      //this.cardNumber.offsetTop;
      //const cardNumberInput = ReactDOM.findDOMNode(this.cardNumber);
      //window.scrollTo(this.cardNumber.offsetTop, 0);

      //const node = ReactDOM.findDOMNode(this.cardNumber);
      //node.scrollIntoView({ behavior: "smooth" });

      //this.setState({name_on_card: this.props.User.paymentMethods[0].name_on_card});
      //this.setState({zipcode: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({card_number: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({expiry_month: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({expiry_year: this.props.deliveryContactsAddresses[0].street2})
      //this.setState({security_card: this.props.deliveryContactsAddresses[0].street2})

  }

  componentWillReceiveProps = (nextProps: any) => {

      //check for payment invalidated error

      //network error

      console.log(nextProps.promoCodeDiscount);

      this.setState({promoCodeDiscount: nextProps.promoCodeDiscount});

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
                                  <div className="col-md-3">
                                      Promo Code
                                  </div>
                                  <div className="col-md-3">
                                      <input type="text" maxLength={30} onChange={this.props.setPromoCode} className="form-control" value={this.state.promo_code} placeholder="Promo Code" style={{borderColor: "grey", borderRadius: 0, WebkitAppearance: "none"}}/>
                                  </div>
                                </div>
                            </form>
                            <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-3">
                                      Discount
                                  </div>
                                  <div className="col-md-2">
                                      {this.state.promoCodeDiscount}%
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


export default CollectionPromoCode;

