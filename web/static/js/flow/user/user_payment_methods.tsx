import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
//import {startOrder} from './actions/order';
import {List, Map} from 'immutable';


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

  addPaymentMethod = (e: any) => {

      //this.setState({payment_method_name: e.target.value});

  }


  render(){

    const {payment_methods} = this.props;
    console.log(payment_methods);

    return (
              <div>
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
      
                           </div>
                    </nav>
                    <div className="row">
                        <div className="hidden-xs col-md-4">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          Home
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          <Link to="/user/delivery_addresses">Delivery Addresses</Link>
                          <br/>
                          <Link to="/user/delivery_contact">Delivery Contact</Link>
                          <br/>
                          <Link to="/user/payment_methods">Payment Methods</Link>
                          <br/>
                          <Link to="/user/about_me">About Me</Link>
                          <br/>
                          <Link to="/user/photo">Photo</Link>
                        </div>
                        <div className="col-md-6">
                                  <br/>
                                  <br/>
                                  <br/>
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
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Name on Card"/>
                                      </div>
                                    </form>
                                    <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number" />
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Type" />
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Month" />
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Year" />
                                      </div>
                                      <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Security Code" />
                                      </div>
                                    </form>
                                
                                  Add
                                  <br/>
                                  <br/>
                                  {Object.keys(payment_methods).map((key: any, index: any) => {

                                    return(
                                        <form className="form-inline">
                                          <div className="form-group">
                                            name-xxx-expiry date-default-Delete
                                          </div>
                                        </form>
                                    )
                                  })}
                                
                        </div>
                        <div className="hidden-xs col-md-2">
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              maybe put something here
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
    //addUserDeliveryAddress: (name: any, street1: any, street2: any, city: any, state: any, zipcode: any) => {
    //  console.log(e.target.value);
      //dispatch(addUserDeliveryAddress(name, street1, street2, city, state, zipcode));
    //},
   
  }
}

const UserPaymentMethods1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPaymentMethods)

export default UserPaymentMethods1;