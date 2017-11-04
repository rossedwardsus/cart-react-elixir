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


  setUserDeliveryContactAddressCompanyName = (e: any) => {

    //console.log(id);

    //validate mobile number format

    //this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressStreet1 = (e: any) => {

    //console.log(id);

    //validate mobile number format

    //this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressStreet2 = (e: any) => {

    //console.log(id);

    //validate mobile number format

    //this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressCity = (e: any) => {

    //console.log(id);

    //validate mobile number format

    //this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressState = (e: any) => {

    //console.log(id);

    //validate mobile number format

    //this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

  }

  setUserDeliveryContactAddressZipcode = (e: any) => {

    //console.log(id);

    //validate mobile number format

    //this.props.setUserDeliveryContactAddressMobile(e.target.id, e.target.value);

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
                        </div>
                        <div className="col-md-8">
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <UserTabs/>
                                  <br/>
                                  <br/>
                                  <form className="form-horizontal">
                                      <div className="form-group">
                                        <div className="col-sm-3 col-md-3">
                                            <b>Delivery Contact</b>
                                            <br/>
                                         </div>
                                      </div>
                                   </form>
                                   <form className="form-horizontal">
                                      <div className="form-group">
                                        <div className="col-sm-3 col-md-4">
                                          <div className={this.state.first_name_classname}>
                                            <input type="text" value={this.state.contact_first_name}  onChange={this.setUserDeliveryContactAddressFirstName} maxLength={20} className="form-control" id="exampleInputName2" placeholder="First Name" style={{borderColor: this.state.first_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                          </div>
                                        </div>
                                        <div className="hidden-lg col-xs-1">
                                          <br/>
                                        </div>
                                        <div className="col-sm-3 col-md-4">
                                          <div className={this.state.last_name_classname}>
                                            <input type="text" value={this.state.contact_last_name} maxLength={20} onChange={this.setUserDeliveryContactAddressLastName}   className="form-control" id="exampleInputName2" placeholder="Last Name" style={{borderColor: this.state.last_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                          </div>
                                        </div>
                                      </div>
                                  </form>
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      <div className="col-sm-3 col-md-4">
                                          <div className={this.state.contact_email_classname}>
                                            <input type="text" value={this.state.contact_email} onChange={this.setUserDeliveryContactAddressEmail} className="form-control" id="exampleInputName2" placeholder="Email" style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                                          </div>
                                      </div>
                                      <div className="hidden-lg col-xs-1">
                                        <br/>
                                      </div>
                                      <div className="col-sm-3 col-md-4">
                                          <div className={this.state.contact_email_classname}>
                                            <input type="text" value={this.state.contact_email_again} onChange={this.setUserDeliveryContactAddressEmail} className="form-control" id="exampleInputName2" placeholder="Email Again" style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                                          </div>
                                      </div>
                                    </div>
                                  </form>
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      <div className="col-sm-3 col-md-3">
                                          <div className={this.state.contact_mobile_classname}>
                                            <input type="text" value={this.state.contact_mobile_displayed} maxLength={12} onChange={this.setUserDeliveryContactAddressMobile} className="form-control" id="exampleInputName2" placeholder="Mobile" style={{borderRadius: 0, borderColor: this.state.mobile_border_color}}/>
                                          </div>
                                      </div>
                                    </div>
                                  </form>
                                  <form className="form-horizontal">
                                      <div className="form-group">
                                        <div className="col-sm-3 col-md-3">
                                            <b>Delivery Address</b>
                                            <br/>
                                         </div>
                                      </div>
                                  </form>
                                  <form className="form-horizontal">
                                        <div className="form-group">
                                           <div className="col-sm-3 col-md-4">
                                              <input type="text" value={this.state.company_name} maxLength={40} onChange={(e: any) => this.setUserDeliveryContactAddressCompanyName(e)} className="form-control" placeholder="Company Name" style={{borderRadius: 0, borderColor: this.state.company_name_border_color, WebkitAppearance: "none"}}/>
                                           </div>
                                        </div>
                                  </form>
                                  <form className="form-horizontal">
                                      <div className="form-group">
                                        <div className="col-sm-3 col-md-4">
                                          <input type="text" maxLength={40} className="form-control" placeholder="Street 1" value={this.state.street1} onChange={(e) => this.setUserDeliveryContactAddressStreet1(e)} style={{borderRadius: 0, borderColor: this.state.street1_border_color, fontSize: 16}}/>
                                        </div>
                                        <div className="hidden-lg col-xs-1">
                                          <br/>
                                        </div>
                                        <div className="col-sm-3 col-md-4">
                                          <input type="text" value={this.state.street2} maxLength={30} onChange={(e: any) => this.setUserDeliveryContactAddressStreet2(e)} className="form-control" placeholder="Street 2" style={{borderRadius: 0, borderColor: this.state.street2_border_color, fontSize: 16}}/>
                                        </div>
                                      </div>
                                  </form>
                                  <form className="form-horizontal">
                                        <div className="form-group">
                                          <div className="col-sm-3 col-md-3">
                                            <select className="form-control" onChange={(value) => this.setUserDeliveryContactAddressCity(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                              <option>City</option>
                                              <option value="Los Angeles">Los Angeles</option>
                                              <option value="Santa Monica">Santa Monica</option>
                                            </select>
                                          </div>
                                          <div className="hidden-lg col-xs-1">
                                            <br/>
                                          </div>
                                          <div className="col-sm-3">
                                            <select className="form-control" onChange={(value) => this.setUserDeliveryContactAddressState(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                              <option>State</option>
                                              <option value="CA">CA</option>
                                            </select>
                                          </div>
                                          <div className="hidden-lg col-xs-1">
                                            <br/>
                                          </div>
                                          <div className="col-sm-3">
                                            <select className="form-control" onChange={(value) => this.setUserDeliveryContactAddressZipcode(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                              <option>Zip Code</option>
                                              <option>Venice</option>
                                              <option value="90013">90013</option>
                                              <option value="90014">90014</option>
                                              <option value="90015">90015</option>
                                              <option value="90021">90021</option>
                                              <option value="90071">90071</option>
                                              <option>Santa Monica</option>
                                              <option value="90291">90291</option>
                                              <option value="90401">90401</option>
                                              <option value="90402">90402</option>
                                              <option value="90403">90403</option>
                                              <option value="90404">90404</option>
                                              <option value="90405">90405</option>
                                              <option value="90406">90406</option>
                                              <option value="90407">90407</option>
                                              <option value="90408">90408</option>
                                              <option value="90409">90409</option>
                                              <option value="90410">90410</option>
                                              <option value="90411">90411</option>
                                              <option>DTLA</option>
                                              <option value="90012">90012</option>
                                              <option value="90013">90013</option>
                                              <option value="90014">90014</option>
                                              <option value="90017">90017</option>
                                              <option value="90021">90021</option>
                                              <option value="90071">90071</option>
                                              <option value="90074">90074</option>
                                              <option value="90081">90081</option>
                                              <option value="90053">90053</option>
                                              <option value="90055">90055</option>
                                              <option value="90079">90079</option>
                                              <option value="90086">90086</option>
                                            </select>
                                          </div>
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
                                                                <form className="form-horizontal">
                                                    <div className="form-group">
                                                      <div className="col-sm-3 col-md-3">
                                                          <b>Delivery Contact</b>
                                                          <br/>
                                                       </div>
                                                    </div>
                                                 </form>
                                                 <form className="form-horizontal">
                                                    <div className="form-group">
                                                      <div className="col-sm-3 col-md-4">
                                                        <div className={this.state.first_name_classname}>
                                                          <input type="text" value={this.state.contact_first_name}  onChange={this.setUserDeliveryContactAddressFirstName} maxLength={20} className="form-control" id="exampleInputName2" placeholder="First Name" style={{borderColor: this.state.first_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                                        </div>
                                                      </div>
                                                      <div className="hidden-lg col-xs-1">
                                                        <br/>
                                                      </div>
                                                      <div className="col-sm-3 col-md-4">
                                                        <div className={this.state.last_name_classname}>
                                                          <input type="text" value={this.state.contact_last_name} maxLength={20} onChange={this.setUserDeliveryContactAddressLastName}   className="form-control" id="exampleInputName2" placeholder="Last Name" style={{borderColor: this.state.last_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                                                        </div>
                                                      </div>
                                                    </div>
                                                </form>
                                                <form className="form-horizontal">
                                                  <div className="form-group">
                                                    <div className="col-sm-3 col-md-4">
                                                        <div className={this.state.contact_email_classname}>
                                                          <input type="text" value={this.state.contact_email} onChange={this.setUserDeliveryContactAddressEmail} className="form-control" id="exampleInputName2" placeholder="Email" style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                                                        </div>
                                                    </div>
                                                    <div className="hidden-lg col-xs-1">
                                                      <br/>
                                                    </div>
                                                    <div className="col-sm-3 col-md-4">
                                                        <div className={this.state.contact_email_classname}>
                                                          <input type="text" value={this.state.contact_email_again} onChange={this.setUserDeliveryContactAddressEmail} className="form-control" id="exampleInputName2" placeholder="Email Again" style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                                                        </div>
                                                    </div>
                                                  </div>
                                                </form>
                                                <form className="form-horizontal">
                                                  <div className="form-group">
                                                    <div className="col-sm-3 col-md-3">
                                                        <div className={this.state.contact_mobile_classname}>
                                                          <input type="text" value={this.state.contact_mobile_displayed} maxLength={12} onChange={this.setUserDeliveryContactAddressMobile} className="form-control" id="exampleInputName2" placeholder="Mobile" style={{borderRadius: 0, borderColor: this.state.mobile_border_color}}/>
                                                        </div>
                                                    </div>
                                                  </div>
                                                </form>
                                                <form className="form-horizontal">
                                                    <div className="form-group">
                                                      <div className="col-sm-3 col-md-3">
                                                          <b>Delivery Address</b>
                                                          <br/>
                                                       </div>
                                                    </div>
                                                </form>
                                                <form className="form-horizontal">
                                                      <div className="form-group">
                                                         <div className="col-sm-3 col-md-4">
                                                            <input type="text" value={this.state.company_name} maxLength={40} onChange={(e: any) => this.setUserDeliveryContactAddressCompanyName(e)} className="form-control" placeholder="Company Name" style={{borderRadius: 0, borderColor: this.state.company_name_border_color, WebkitAppearance: "none"}}/>
                                                         </div>
                                                      </div>
                                                </form>
                                                <form className="form-horizontal">
                                                    <div className="form-group">
                                                      <div className="col-sm-3 col-md-4">
                                                        <input type="text" maxLength={40} className="form-control" placeholder="Street 1" value={this.state.street1} onChange={(e) => this.setUserDeliveryContactAddressStreet1(e)} style={{borderRadius: 0, borderColor: this.state.street1_border_color, fontSize: 16}}/>
                                                      </div>
                                                      <div className="hidden-lg col-xs-1">
                                                        <br/>
                                                      </div>
                                                      <div className="col-sm-3 col-md-4">
                                                        <input type="text" value={this.state.street2} maxLength={30} onChange={(e: any) => this.setUserDeliveryContactAddressStreet2(e)} className="form-control" placeholder="Street 2" style={{borderRadius: 0, borderColor: this.state.street2_border_color, fontSize: 16}}/>
                                                      </div>
                                                    </div>
                                                </form>
                                                <form className="form-horizontal">
                                                      <div className="form-group">
                                                        <div className="col-sm-3 col-md-3">
                                                          <select className="form-control" onChange={(value) => this.setUserDeliveryContactAddressCity(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                                            <option>City</option>
                                                            <option value="Los Angeles">Los Angeles</option>
                                                            <option value="Santa Monica">Santa Monica</option>
                                                          </select>
                                                        </div>
                                                        <div className="hidden-lg col-xs-1">
                                                          <br/>
                                                        </div>
                                                        <div className="col-sm-3">
                                                          <select className="form-control" onChange={(value) => this.setUserDeliveryContactAddressState(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                                            <option>State</option>
                                                            <option value="CA">CA</option>
                                                          </select>
                                                        </div>
                                                        <div className="hidden-lg col-xs-1">
                                                          <br/>
                                                        </div>
                                                        <div className="col-sm-3">
                                                          <select className="form-control" onChange={(value) => this.setUserDeliveryContactAddressZipcode(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                                                            <option>Zip Code</option>
                                                            <option>Venice</option>
                                                            <option value="90013">90013</option>
                                                            <option value="90014">90014</option>
                                                            <option value="90015">90015</option>
                                                            <option value="90021">90021</option>
                                                            <option value="90071">90071</option>
                                                            <option>Santa Monica</option>
                                                            <option value="90291">90291</option>
                                                            <option value="90401">90401</option>
                                                            <option value="90402">90402</option>
                                                            <option value="90403">90403</option>
                                                            <option value="90404">90404</option>
                                                            <option value="90405">90405</option>
                                                            <option value="90406">90406</option>
                                                            <option value="90407">90407</option>
                                                            <option value="90408">90408</option>
                                                            <option value="90409">90409</option>
                                                            <option value="90410">90410</option>
                                                            <option value="90411">90411</option>
                                                            <option>DTLA</option>
                                                            <option value="90012">90012</option>
                                                            <option value="90013">90013</option>
                                                            <option value="90014">90014</option>
                                                            <option value="90017">90017</option>
                                                            <option value="90021">90021</option>
                                                            <option value="90071">90071</option>
                                                            <option value="90074">90074</option>
                                                            <option value="90081">90081</option>
                                                            <option value="90053">90053</option>
                                                            <option value="90055">90055</option>
                                                            <option value="90079">90079</option>
                                                            <option value="90086">90086</option>
                                                          </select>
                                                        </div>
                                                    </div>
                                                </form>
                                                <br/>
                                                <br/>
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
   delivery_contacts_addresses: state.User.deliveryContactsAddresses
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