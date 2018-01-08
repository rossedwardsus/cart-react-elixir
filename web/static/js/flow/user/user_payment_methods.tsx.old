import "babel-polyfill";

import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';

//import {startOrder} from './actions/order';
import {List, Map} from 'immutable';

import UserNavbar from './user_navbar.tsx';
import UserTabs from './user_tabs.tsx';

import {addUserPaymentMethod} from '../actions/user.ts';
import {setUserPaymentMethodCardNumber, setUserPaymentMethodExpiryMonth, setUserPaymentMethodExpiryYear, saveUserPaymentMethod} from '../actions/user.ts';

//import {getUserPaymentMethods} from '../selectors/user.ts';


//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class UserPaymentMethods extends React.Component<any, any> {
  //props: Props;

  private cardNumber: HTMLInputElement;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

       payment_method_name: "",
       payment_method_name_on_card: "",
        
    };

  }

  componentDidMount(){

    //alert("jsx");
    //get active items from the database
    //setInterval(this.changeImage, 10000);

    //localStorage.get('user');
    console.log(JSON.stringify(this.props));

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  

                  
  setPaymentMethodName = (e: any) => {

      this.setState({payment_method_name: e.target.value});

  }

  setPaymentMethodNameOnCard = (e: any) => {

      this.setState({payment_method_name_on_card: e.target.value});

  }

  setPaymentMethodCardNumber = (e: any) => {

      this.setState({payment_method_card_number: e.target.value});

  }

  addUserPaymentMethod = (e: any) => {

      //this.setState({payment_method_name: e.target.value});
      this.props.addUserPaymentMethod("name", "name on card", "card number", "expiry month", "expiry year");

  }

  setUserPaymentMethodNameOnCard = (e: any) => {

      //this.setState({payment_method_name: e.target.value});
      //this.props.setUserPaymentMethodName("name");

  }

  setUserPaymentMethodZipCode = (e: any) => {

      //this.setState({payment_method_name: e.target.value});
      //this.props.setUserPaymentMethodName("name");

  }

  setUserPaymentMethodCardNumber = (e: any) => {

      console.log(e.target.id);
      //this.setState({payment_method_name: e.target.value});
      this.props.setUserPaymentMethodCardNumber(e.target.id, e.target.value);

  }

  setUserPaymentMethodExpiryMonth = (e: any) => {

      console.log(e.target.id);
      //this.setState({payment_method_name: e.target.value});
      this.props.setUserPaymentMethodExpiryMonth(e.target.id, e.target.value);

  }

  setUserPaymentMethodExpiryYear = (e: any) => {

      console.log(e.target.id);
      //this.setState({payment_method_name: e.target.value});
      this.props.setUserPaymentMethodExpiryYear(e.target.id, e.target.value);

  }

  setUserPaymentMethodSecurityCode = (e: any) => {

      console.log(e.target.id);
      //this.setState({payment_method_name: e.target.value});
      this.props.setUserPaymentMethodExpiryYear(e.target.id, e.target.value);

  }

  saveUserPaymentMethod = (e: any) => {

      //this.setState({payment_method_name: e.target.value});
      this.props.saveUserPaymentMethod(e.target.id);

  }


  render(){

    const {payment_methods} = this.props;
    console.log(payment_methods);

    return (
              <div>
                    <UserNavbar />
                    <div className="row">
                        <div className="hidden-xs col-md-3">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          Home
                          <br/>
                          </div>
                        <div className="col-md-9">
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <UserTabs/>
                                  <br/>
                                  <br/>
                                  <br/>
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
                                        <input type="text" value={this.state.name_on_card} maxLength={16} className="form-control" placeholder="Name on Card" onChange={(e) => this.setUserPaymentMethodNameOnCard(e)} style={{borderColor: this.state.card_number_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.name_on_card_disabled}/>
                                      </div>
                                      <div className="col-md-2">
                                        <input type="text" value={this.state.zipcode} maxLength={5} className="form-control" placeholder="ZIP CODE" onChange={this.setUserPaymentMethodZipCode} style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.zipcode_disabled}/>
                                      </div>
                                    </div>
                                  </form>
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      <div className="col-sm-4">
                                        <input type="text" ref={(input) => {this.cardNumber = input}} value={this.state.card_number} maxLength={16} className="form-control" placeholder="Card Number" onChange={(e) => this.setUserPaymentMethodCardNumber(e)} style={{borderColor: this.state.card_number_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.card_number_disabled}/>
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
                                                <input type="text" value={this.state.expiry_month} maxLength={2} className="form-control" placeholder="MM" onChange={this.setUserPaymentMethodExpiryMonth} style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.expiry_date_month_disabled}/>
                                              </div>
                                              <div className="hidden-lg col-xs-1">
                                                <br/>
                                              </div>
                                              <div className="col-md-4">
                                                <input type="text" value={this.state.expiry_year} maxLength={4} className="form-control" placeholder="YYYY" onChange={this.setUserPaymentMethodExpiryYear} style={{borderColor: this.state.expiry_year_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.expiry_date_year_disabled}/>
                                              </div>
                                              <div className="hidden-lg col-xs-1">
                                                <br/>
                                              </div>
                                              <div className="col-md-4">
                                                <input type="email" value={this.state.security_code} maxLength={4} className="form-control" placeholder="CVC" onChange={this.setUserPaymentMethodSecurityCode} style={{borderColor: this.state.security_code_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.security_code_disabled}/>
                                              </div>
                                          </div>
                                  
                                  </div>
                                  </form>
                                  
                                  <button className="btn btn-default" onClick={this.addUserPaymentMethod}>Add</button>
                                  <br/>
                                  <br/>
                                  <br/>
                                  {Object.keys(payment_methods).map((key: any, index: any) => {
                                    console.log(JSON.stringify(payment_methods[key].name));
                                    return(<div>
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
                                                  <input type="text" value={this.state.name_on_card} maxLength={16} className="form-control" placeholder="Name on Card" onChange={(e) => this.setUserPaymentMethodNameOnCard(e)} style={{borderColor: this.state.card_number_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.name_on_card_disabled}/>
                                                </div>
                                                <div className="col-md-2">
                                                  <input type="text" value={this.state.zipcode} maxLength={5} className="form-control" placeholder="ZIP CODE" onChange={this.setUserPaymentMethodZipCode} style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.zipcode_disabled}/>
                                                </div>
                                              </div>
                                            </form>
                                            <form className="form-horizontal">
                                              <div className="form-group">
                                                <div className="col-sm-4">
                                                  <input type="text" ref={(input) => {this.cardNumber = input}} value={this.state.card_number} maxLength={16} className="form-control" placeholder="Card Number" onChange={(e) => this.setUserPaymentMethodCardNumber(e)} style={{borderColor: this.state.card_number_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.card_number_disabled}/>
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
                                                          <input type="text" value={this.state.expiry_month} maxLength={2} className="form-control" placeholder="MM" onChange={this.setUserPaymentMethodExpiryMonth} style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.expiry_date_month_disabled}/>
                                                        </div>
                                                        <div className="hidden-lg col-xs-1">
                                                          <br/>
                                                        </div>
                                                        <div className="col-md-4">
                                                          <input type="text" value={this.state.expiry_year} maxLength={4} className="form-control" placeholder="YYYY" onChange={this.setUserPaymentMethodExpiryYear} style={{borderColor: this.state.expiry_year_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}} disabled={this.state.expiry_date_year_disabled}/>
                                                        </div>
                                                        <div className="hidden-lg col-xs-1">
                                                          <br/>
                                                        </div>
                                                        <div className="col-md-4">
                                                          <input type="email" value={this.state.security_code} maxLength={4} className="form-control" placeholder="CVC" onChange={this.setUserPaymentMethodSecurityCode} style={{borderColor: this.state.security_code_border_color, borderRadius: 0, WebkitAppearance: "none"}} disabled={this.state.security_code_disabled}/>
                                                        </div>
                                                    </div>
                                            
                                                </div>
                                                </form>
                                          <br/>
                                          <button className="btn btn-default" id={key} onClick={this.saveUserPaymentMethod}>Save</button>
                                        
                                        </div>
                                    )
                                  })}

                          <br/>
                          <br/>
                          <br/>
                                
                        </div>
                       
                    </div>
              </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("payment methods state" + JSON.stringify(state.User.payment_methods));
  return {
   payment_methods: state.User.paymentMethods
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    getUserPaymentMethods: () => {
      console.log("e.target.value");
      //dispatch(getUserDeliveryAddresses());
    },
    addUserPaymentMethod: (name: any, name_on_card: any, card_number: any, expiry_month: any, expiry_year: any) => {
    //  console.log(e.target.value);
      dispatch(addUserPaymentMethod(name, name_on_card, card_number, expiry_month, expiry_year));
    },
    setUserPaymentMethodCardNumber: (id: any, number: any) => {
    //  console.log(e.target.value);
      dispatch(setUserPaymentMethodCardNumber(id, number));
    },
    setUserPaymentMethodExpiryMonth: (id: any, number: any) => {
    //  console.log(e.target.value);
      dispatch(setUserPaymentMethodExpiryMonth(id, number));
    },
    setUserPaymentMethodExpiryYear: (id: any, number: any) => {
    //  console.log(e.target.value);
      dispatch(setUserPaymentMethodExpiryYear(id, number));
    },
    saveUserPaymentMethod: (name: any) => {
    //  console.log(e.target.value);
      dispatch(saveUserPaymentMethod(name));
    },
  }
}

const UserPaymentMethodsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPaymentMethods)

export default UserPaymentMethodsConnected;