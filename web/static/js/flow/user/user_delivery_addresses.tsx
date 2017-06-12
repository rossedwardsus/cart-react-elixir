import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
import {List, Map} from 'immutable';

import { getUserDeliveryAddresses, addUserDeliveryAddress } from '../actions/user.ts';
import UserDeliveryAddress from './user_delivery_address.tsx';


//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class UserDeliveryAddresses extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        delivery_addresses: "",
    };


  }

  componentDidMount(){

    //alert("jsx");
    //get active items from the database
    //setInterval(this.changeImage, 10000);

    //localStorage.get('user');

    //this.setState({orders: this.props.getUserDeliveryAddresses});

    this.props.getUserDeliveryAddresses();

    const { getUserDeliveryAddresses } = this.props
    getUserDeliveryAddresses();

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  onSubmit(e: any){

    e.preventDefault();

  }

  
  addDeliveryAddress(){

      //this.props.addUserDeliveryAddress(street1, street2, city, state, zipcode)

  }
                 


  render(){

    let logged_in = null;
    
    if("logged_in_true" == "logged_in_true"){
        
        logged_in = <div id="navbar" className="navbar-collapse collapse navbar-right">
                      <ul className="nav navbar-nav">
                        <li className="inactive">Profile<span className="sr-only">(current)</span></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><a>>Start Order</a></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                      </ul>
                    </div>
    }

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
      
                              {logged_in}
                             
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
                          <Link to="/user/payment_methods">Payment Methods</Link>
                          <br/>
                          <Link to="/public/menu">About Me</Link>
                          <br/>
                          <Link to="/user/photo">Photo</Link>
                        </div>
                        <div className="col-md-6">
                                  <br/>
                                  Delivery Addresses
                                  <br/>
                                  <form className="form-inline">
                                  <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Name"/>
                                  </div>
                                  <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Street"/>
                                  </div>
                                  <div className="form-group">
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Street 2"/>
                                  </div>
                                  </form>
                                  <form className="form-inline">
                                  <div className="form-group">
                                    <select className="form-control">
                                        <option></option>
                                        <option>Los Angeles</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <select className="form-control">
                                        <option></option>
                                        <option>CA</option>
                                    </select>
                                  </div>
                                  <div className="form-group">
                                    <select className="form-control" >
                                        <option></option>
                                        <option>90025</option>
                                    </select>
                                  </div>
                                  </form>
                                  <br/>
                                  <a className="btn btn-default">Add Address</a>
                                  <br/>
                                  <br/>
                                  <UserDeliveryAddress />
                                  <br/>
                                  <br/>
                                  <br/>
                                  {this.props.delivery_addresses.map(function(address: any){
                                        return(<div>
                                                <form className="form-inline">
                                                  <div className="form-group">
                                                    <input type="text" value={address.street1} onChange={(e: any) => this.props.setUserDeliveryAddressStreet1(e)} className="form-control" id="exampleInputName2" placeholder="Name"/>
                                                  </div>
                                                </form>
                                                <form className="form-inline">
                                                  <div className="form-group">
                                                    <input type="text" value={address.street1} onChange={(e: any) => this.props.setUserDeliveryAddressStreet1(e)} className="form-control" id="exampleInputName2" placeholder="Street"/>
                                                  </div>
                                                  <div className="form-group">
                                                    <input type="text" onChange={(e: any) => this.props.setDeliveryAddressStreet2(e)} className="form-control" id="exampleInputName2" placeholder="Street 2"/>
                                                  </div>
                                                </form>
                                                <form className="form-inline">
                                                  <div className="form-group">
                                                    <select className="form-control">
                                                        <option></option>
                                                        <option>Los Angeles</option>
                                                    </select>
                                                  </div>
                                                  <div className="form-group">
                                                    <select className="form-control">
                                                        <option></option>
                                                        <option>CA</option>
                                                    </select>
                                                  </div>
                                                  <div className="form-group">
                                                    <select className="form-control" >
                                                        <option></option>
                                                        <option>90025</option>
                                                    </select>
                                                  </div>
                                                  </form>
                                                  <button>save changes</button>
                                                  </div>)
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
  console.log("delivery addresses component/state" + JSON.stringify(state));
  return {
   delivery_addresses: state.user.delivery_addresses
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    getUserDeliveryAddresses: () => {
      console.log("e.target.value");
      dispatch(getUserDeliveryAddresses());
    },
    //setContactPhone: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setContactPhone(e.target.value));
    //},
   
  }
}

const UserDeliveryAddresses1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDeliveryAddresses)

export default UserDeliveryAddresses1;