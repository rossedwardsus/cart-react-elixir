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
import {setUserPaymentMethodCardNumber, setUserPaymentMethodExpiryMonth, saveUserPaymentMethod} from '../actions/user.ts';

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

  setUserPaymentMethodName = (e: any) => {

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

  saveUserPaymentMethod = (e: any) => {

      //this.setState({payment_method_name: e.target.value});
      this.props.saveUserPaymentMethod("name");

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
                                  Payment Methods
                                  <br/>
                                  <form className="form-inline">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Name"/>
                                      </div>
                                  </form>
                                  <form className="form-inline">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number" />
                                    </div>
                                  </form>
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      <div className="col-md-2">
                                        <input type="text" maxLength={2} className="form-control" id="exampleInputName2" placeholder="MM" style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                      </div>
                                      <div className="col-md-2">
                                        <input type="text" maxLength={4} className="form-control" id="exampleInputName2" placeholder="YYYY" style={{borderColor: this.state.expiry_year_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}}/>
                                      </div>
                                      <div className="col-md-2">
                                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="CVC" style={{borderColor: this.state.cvc_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
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
                                        <form className="form-inline">
                                          <div className="form-group">
                                              {key} 
                                            </div>
                                        </form>
                                        <form className="form-inline">
                                          <div className="form-group">
                                              <input type="text" id="personal" className="form-control" placeholder="Card Number" onChange={this.setUserPaymentMethodCardNumber}/>
                                          </div>
                                        </form>
                                        <form className="form-horizontal">
                                          <div className="form-group">
                                            <div className="col-md-2">
                                              <input type="text" maxLength={2} className="form-control" id="exampleInputName2" placeholder="MM" style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}} onChange={this.setUserPaymentMethodExpiryMonth}/>
                                            </div>
                                            <div className="col-md-2">
                                              <input type="text" maxLength={4} className="form-control" id="exampleInputName2" placeholder="YYYY" style={{borderColor: this.state.expiry_year_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}}/>
                                            </div>
                                            <div className="col-md-2">
                                              <input type="email" className="form-control" id="exampleInputEmail2" placeholder="CVC" style={{borderColor: this.state.cvc_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                            </div>
                                          </div>
                                        </form>  
                                        <button className="btn btn-default" onClick={this.saveUserPaymentMethod}>Save</button>
                                  
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
   payment_methods: state.User.payment_methods
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