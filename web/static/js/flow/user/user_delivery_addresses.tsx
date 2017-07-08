import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
import {List, Map} from 'immutable';

import { getUserDeliveryAddresses, addUserDeliveryAddress } from '../actions/user.ts';
import UserDeliveryAddress from './user_delivery_address.tsx';
import DeliveryAddresses from './delivery_addresses.tsx';


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
        name: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipcode: ""
    };


  }

  componentDidMount(){

    //alert("jsx");
    //get active items from the database
    //setInterval(this.changeImage, 10000);

    //localStorage.get('user');

    //this.setState({orders: this.props.getUserDeliveryAddresses});

    //this.props.getUserDeliveryAddresses();

    const { getUserDeliveryAddresses } = this.props
    getUserDeliveryAddresses();

    //console.log(this.props.delivery_addresses)

  }

  componentWillReceiveProps(){

    console.log("cwrp");

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  onSubmit(e: any){

    e.preventDefault();

  }

  setName = (e: any) => {

    this.setState({name: e.target.value});

  }

  setStreet1 = (e: any) => {

    this.setState({street1: e.target.value});

  }

  setStreet2 = (e: any) => {

    this.setState({street2: e.target.value});
  
  }

  setCity = (e: any) => {

    this.setState({city: e.target.value});
  
  }

  setAddressState = (e: any) => {

    this.setState({state: e.target.value});
  
  }

  setZipcode = (e: any) => {
  
    this.setState({zipcode: e.target.value});

  }
  
  
  addUserDeliveryAddress(){

      this.props.addUserDeliveryAddress(this.state.street1, this.state.street2, this.state.city, this.state.state, this.state.zipcode)

  }
                 
  saveAddress = (id: any) => {

    console.log(id);

  }

  render(){

    let logged_in = null;
    
    const {delivery_addresses} = this.props;
    //console.log("render" + JSON.stringify(delivery_addresses));

    let that = this;

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
                                  Delivery Addresses
                                  <br/>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Address Name" onChange={(e: any) => this.setName(e)} value={this.state.name}/>
                                      </div>
                                  </form>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="First Name" onChange={(e: any) => this.setStreet1(e)} value={this.state.street1}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Last Name" onChange={(e: any) => this.setStreet2(e)} value={this.state.street2}/>
                                      </div>
                                  </form>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" onChange={(e: any) => this.setStreet1(e)} value={this.state.street1}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Mobile" onChange={(e: any) => this.setStreet2(e)} value={this.state.street2}/>
                                      </div>
                                  </form>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Street 1" onChange={(e: any) => this.setStreet1(e)} value={this.state.street1}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Street 2" onChange={(e: any) => this.setStreet2(e)} value={this.state.street2}/>
                                      </div>
                                  </form>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <select className="form-control">
                                            <option>City</option>
                                            <option>Los Angeles</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <select className="form-control">
                                            <option>State</option>
                                            <option>CA</option>
                                        </select>
                                      </div>
                                      <div className="form-group">
                                        <select className="form-control" >
                                            <option>Zipcode</option>
                                            <option>90025</option>
                                        </select>
                                      </div>
                                  </form>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <textarea value={this.state.guest_message} className="form-control" style={{rows: 5, columns: 1, resize: "none"}} id="comment"></textarea>
                                      </div>
                                  </form>
                                  <br/>
                                  <a className="btn btn-default" onClick={() => this.addUserDeliveryAddress()}>Add Address</a>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  {Object.keys(delivery_addresses).map((key: any, index: any) => {

                                      return(<div>
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="Address/Contact Name"/>
                                                    </div>
                                                  </form>
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="First Name"/>
                                                    </div>
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="Last Name"/>
                                                    </div>
                                                  </form>
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="Email"/>
                                                    </div>
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="Mobile"/>
                                                    </div>
                                                  </form>
                                                
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="Street 1"/>
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
                                                  <form className="form-inline">
                                                      <div className="form-group">
                                                        <textarea  className="form-control" style={{rows: 5, columns: 1, resize: "none"}} id="comment"></textarea>
                                                      </div>
                                                    </form>
                                                <button className="btn btn-default" onClick={() => this.saveAddress(delivery_addresses[key].id)}>Save Address</button>
                                                <br/>
                                                <br/>
                                                </div>
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
  console.log("delivery addresses state" + JSON.stringify(state.User.delivery_addresses));
  return {
   delivery_addresses: state.User.delivery_addresses
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
    addUserDeliveryAddress: (name: any, street1: any, street2: any, city: any, state: any, zipcode: any) => {
    //  console.log(e.target.value);
      dispatch(addUserDeliveryAddress(name, street1, street2, city, state, zipcode));
    },
   
  }
}

const UserDeliveryAddresses1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDeliveryAddresses)

export default UserDeliveryAddresses1;