import "babel-polyfill";

import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
import {List, Map} from 'immutable';

import { addUserDeliveryContactAddress, setUserDeliveryContactAddressFirstName, setUserDeliveryContactAddressLastName, setUserDeliveryContactAddressEmail, setUserDeliveryContactAddressMobile, saveUserDeliveryContactAddress } from '../actions/user.ts';

//import UserDeliveryAddress from './user_delivery_address.tsx';
//import DeliveryAddresses from './delivery_addresses.tsx';

import UserNavbar from './user_navbar.tsx';
import UserTabs from './user_tabs.tsx';

//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class UserDeliveryContactsAddresses extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        delivery_contact_address_name: "",
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipcode: "",
        note: "Delivery Note"
    };


  }

  componentDidMount(){

   
    //get info from redux when screen loads


    //this.setState({orders: this.props.getUserDeliveryAddresses});

    //this.props.getUserDeliveryAddresses();

    //const { getUserDeliveryAddresses } = this.props
    //getUserDeliveryAddresses();

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

  setDeliveryContactAddressName = (e: any) => {

    this.setState({delivery_contact_address_name: e.target.value});

  }

  setFirstName = (e: any) => {

    this.setState({first_name: e.target.value});

  }

  setLastName = (e: any) => {

    this.setState({last_name: e.target.value});

  }

  setContact = (e: any) => {

    this.setState({contact: e.target.value});

  }

  setEmail = (e: any) => {

    this.setState({email: e.target.value});

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
  
  
  addUserDeliveryContactAddress = () => {

      this.props.addUserDeliveryContactAddress(this.state.delivery_contact_address_name, this.state.first_name, this.state.last_name, this.state.mobile, this.state.email, this.state.street1, this.state.street2, this.state.city, this.state.state, this.state.zipcode)

  }

  setUserDeliveryContactAddressFirstName = (e: any) => {

    //console.log(id);

    this.props.setUserDeliveryContactAddressFirstName(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressLastName = (e: any) => {

    //console.log(id);

    this.props.setUserDeliveryContactAddressLastName(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressEmail = (e: any) => {

    //console.log(id);

    //validate email

    this.props.setUserDeliveryContactAddressEmail(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressMobile = (e: any) => {

    //console.log(id);

    //validate mobile number format

    this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressNote = (e: any) => {

    //console.log(id);

    //validate mobile number format

    //this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

  }
                 
  saveDeliveryContactAddress = (e: any) => {

    //console.log(id);

    //this.props.saveUserDeliveryContactAddress(e.target.id)

  }

  render(){

    let logged_in = null;
    
    const {delivery_contacts_addresses} = this.props;
    //console.log("render" + JSON.stringify(delivery_addresses));

    let that = this;

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
                        <div className="col-md-8">
                                  <br/>
                                  <br/>
                                  <br/>
                                  <UserTabs/>
                                  <br/>
                                  <br/>
                                  Delivery Contact Addresses
                                  <br/>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Address Name" onChange={this.setDeliveryContactAddressName} value={this.state.delivery_contact_address_name}/>
                                      </div>
                                  </form>
                                  <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="First Name" onChange={this.setFirstName} value={this.state.first_name}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Last Name" onChange={this.setLastName} value={this.state.last_name}/>
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
                                        <textarea value={this.state.note} className="form-control" rows={5} cols={50} style={{resize: "none"}} id="note"></textarea>
                                      </div>
                                  </form>
                                  <br/>
                                  <a className="btn btn-default" onClick={this.addUserDeliveryContactAddress}>Add Address</a>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  {delivery_contacts_addresses.map((delivery_contact_address: any, index: any) => {

                                      return(<div>
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_contact_address.name} className="form-control" id="key" placeholder="Address/Contact Name"/>
                                                    </div>
                                                  </form>
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_contact_address.first_name} className="form-control" id="key" placeholder="First Name" onChange={this.setUserDeliveryContactAddressFirstName}/>
                                                    </div>
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_contact_address.last_name} className="form-control" id="key" placeholder="Last Name" onChange={this.setUserDeliveryContactAddressLastName}/>
                                                    </div>
                                                  </form>
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_contact_address.email} className="form-control" id="key" placeholder="Email" onChange={this.setUserDeliveryContactAddressEmail}/>
                                                    </div>
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_contact_address.mobile} className="form-control" id="key" placeholder="111-222-3333" onChange={this.setUserDeliveryContactAddressMobile}/>
                                                    </div>
                                                  </form>
                                                
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <input type="text" value={delivery_contact_address.street1} className="form-control" id="exampleInputName2" placeholder="Street 1"/>
                                                    </div>
                                                    <div className="form-group">
                                                      <input type="text" className="form-control" id="exampleInputName2" placeholder="Street 2"/>
                                                    </div>
                                                  </form>
                                                  <form className="form-inline">
                                                    <div className="form-group">
                                                      <select className="form-control">
                                                          <option>Choose City</option>
                                                          <option>Los Angeles</option>
                                                      </select>
                                                    </div>
                                                    <div className="form-group">
                                                      <select className="form-control">
                                                          <option>Choose State</option>
                                                          <option>CA</option>
                                                      </select>
                                                    </div>
                                                    <div className="form-group">
                                                      <select className="form-control" >
                                                          <option>Choose Zip Code</option>
                                                          <option>90025</option>
                                                      </select>
                                                    </div>
                                                  </form>
                                                  <form className="form-inline">
                                                      <div className="form-group">
                                                        <textarea  className="form-control" rows={5} cols={50} style={{resize: "none"}} id="comment" onChange={this.setUserDeliveryContactAddressNote}></textarea>
                                                      </div>
                                                    </form>
                                                <button className="btn btn-default" onClick={this.saveDeliveryContactAddress}>Save Address</button>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                </div>
                                      )
                                  })}
                                 
                        </div>
                       
                    </div>
              </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("delivery addresses state" + JSON.stringify(state.User.delivery_addresses));
  return {
   //flattened delivery addresses
   delivery_contacts_addresses: state.User.delivery_contacts_addresses
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    /*getUserDeliveryAddresses: () => {
      console.log("e.target.value");
      dispatch(getUserDeliveryAddresses());
    },*/
    addUserDeliveryContactAddress: (delivery_contact_address_name: any, first_name: any, last_name: any, email: any, mobile: any, street1: any, street2: any, city: any, state: any, zipcode: any) => {
    //  console.log(e.target.value);
      dispatch(addUserDeliveryContactAddress(delivery_contact_address_name, first_name, last_name, email, mobile, street1, street2, city, state, zipcode));
    },

    setUserDeliveryContactAddressFirstName: (id: any, first_name: any) => {
    //  console.log(e.target.value);
      dispatch(setUserDeliveryContactAddressFirstName("1", first_name));
    },

    setUserDeliveryContactAddressLastName: (id: any, last_name: any) => {
    //  console.log(e.target.value);
      dispatch(setUserDeliveryContactAddressLastName("1", last_name));
    },

    setUserDeliveryContactAddressEmail: (id: any, email: any) => {
    //  console.log(e.target.value);
      dispatch(setUserDeliveryContactAddressEmail("1", email));
    },

    setUserDeliveryContactAddressMobile: (id: any, mobile: any) => {
    //  console.log(e.target.value);
      dispatch(setUserDeliveryContactAddressMobile("1", mobile));
    },

    setUserDeliveryContactAddressNote: (id: any, note: any) => {
    //  console.log(e.target.value);
      //dispatch(setUserDeliveryContactAddressMobile("1", mobile));
    },

    saveUserDeliveryContactAddress: (id: any, delivery_contact_address_name: any, first_name: any, last_name: any, email: any, mobile: any, street1: any, street2: any, city: any, state: any, zipcode: any) => {
    //  console.log(e.target.value);
      dispatch(saveUserDeliveryContactAddress("1", "dcan", "first_name", "last_name", "email", "mobile", "street1", "street2", "city", "state", "zipcode"));
    },
   
  }
}

const UserDeliveryContactsAddressesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDeliveryContactsAddresses)

export default UserDeliveryContactsAddressesConnected;