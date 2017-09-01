
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import {deliveryAddressValidated} from './actions/cart_validations.ts';

//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
const Immutable  = require('immutable');

//import {setDeliveryAddressStreet1, setDeliveryAddressStreet2, setDeliveryAddressCity, setDeliveryAddressState, setDeliveryAddressZipcode} from './actions/order_delivery_address.ts';



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

class DeliveryAddress extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        contact_first_name: "",
        contact_last_name: "",
        contact_email: "",
        contact_mobile: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipcode: "",
        zipcodes: [90012, 90012, 90013, 90014, 90015, 90017, 90021, 90053, 90055, 90071, 90074, 90079, 90081, 90086, 90291, 90401, 90402, 90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411],
        first_name_border_color: "grey",
        last_name_border_color: "grey",
        email_border_color: "grey",
        mobile_border_color: "grey",
        company_name_border_color: "grey",
        street1_border_color: "grey",
        street2_border_color: "grey"
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

    //this.setState({street1: this.props.deliveryAddress.street1})
    //this.setState({street2: this.props.deliveryAddress.street2})

  }

  setDeliveryContactAddressFirstName = (e: any) => {

      //strip out -
      //check if only number

      //if larger then 3 append "-"

      // /^[a-zA-Z]*$/
      let first_name_result = (/^[a-zA-Z]*$/.test(e.target.value));
      console.log(first_name_result);

      if(first_name_result){

          this.setState({first_name_border_color: "grey"});

          this.props.setDeliveryContactAddressFirstName(e);

      }else{
          
          this.setState({first_name_border_color: "red"});

      }
         
          //this.props.setDeliveryContactAddressFirstName(e);
          
  }

  setDeliveryContactAddressLastName = (e: any) => {

      //strip out -
      //check if only number

     // /^[a-zA-Z]*$/
      let last_name_result = (/^[a-zA-Z]*$/.test(e.target.value));

      if(last_name_result){

          this.setState({last_name_border_color: "grey"});

          this.props.setDeliveryContactAddressLastName(e);

      }else{
          
          this.setState({last_name_border_color: "red"});

      }
         
          //this.props.setDeliveryContactAddressFirstName(e);

  }

  setDeliveryContactAddressEmail = (e: any) => {

      //this.setState({contact_email: e.target.value})
      //this.props.setOrderDeliveryContactAddressEmail(e);
      //complete order gets the information from user
      
      this.props.setDeliveryContactAddressEmail(e);


      //let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      let number_res = (/[0-9]/.test(e.target.value));

      //let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //return re.test(email);

      //console.log(/[0-9]/.test(e.target.value));

      //larger then 0
      //no symbols
      //no numbers

      if(e.target.value.length > 0){

          //can only have _ .
          //after @ at least one characted . then domain

          //if(symbol_res == false){
            let address = e.target.value.split("@")[0];
            let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
            let symbol_result = symbol_patt.test(address);

            if(!symbol_result){

                //if(e.target.value.split("@")[1].split(".")[0].length > 0){

                  //  if(e.target.value.split("@")[1].split(".")[1].length > 1){

                        //cant enter symbols????  or numbers
          
          
                        //if email contains @ and at least one character and 2 character domain
                        //validate contact and emails are same
                    
                        this.setState({"email_border_color": "grey"});

                        //this.props.setContactEmail(e);
                        //this.props.setDeliveryContactAddressEmail

                        console.log("email ok")

                  //  }

                //}

            //}

            }else{

                //console.log("email ok")

            //  this.setState({first_name: e.target.value})
              this.setState({"email_border_color": "red"});

            }
      
      }

  }

  setDeliveryContactAddressEmailAgain = (e: any) => {

      //strip out -
      //check if only number

      //if larger then 3 append "-"

      /*let mobile_number = e.target.value.replace("_", "");
      let number_res = (/[0-9]/.test(mobile_number));

      this.setState({contact_mobile: e.target.value});
      this.props.setContactMobile(e);

      if(number_res == true){

          //validate contact
          //else invalatidate

      }*/

      //this.props.setDeliveryContactAddressEmail(e);

  }

  setDeliveryContactAddressMobile = (e: any) => {

      //strip out -
      //check if only number

      //if larger then 3 append "-"

      let mobile_number = e.target.value.replace("-", "");
      let number_result = (/[0-9]/.test(mobile_number));

      this.props.setDeliveryContactAddressMobile(e);

      if(number_result){

        this.setState({user_mobile_border_color: "grey"});


        if(e.target.value.length == 3){

            this.setState({contact_mobile: e.target.value + "-"});
            
        }else if(e.target.value.length == 7){

            this.setState({contact_mobile: e.target.value + "-"});

        }else{

            this.setState({contact_mobile: e.target.value});

        }

      }else{

          this.setState({user_mobile_border_color: "red"});

      }


      //this.props.setDeliveryContactAddressMobile(e);

  }

  setDeliveryContactAddressCompanyName = (e: any) => {

      this.props.setDeliveryContactAddressCompanyName(e);

      // /^[a-zA-Z]*$/
      let company_name_result = (/^[a-zA-Z]*$/.test(e.target.value));

      if(company_name_result){

          this.setState({company_name_border_color: "grey"});

          //this.props.setDeliveryContactAddressCompanyName(e);

      }else{
          
          this.setState({company_name_border_color: "red"});

      }
         
          //this.props.setDeliveryContactAddressFirstName(e);

  }
  
  setDeliveryContactAddressStreet1 = (e: any) => {

      this.setState({street1: e.target.value});
      this.props.setDeliveryContactAddressStreet1(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

      // /^[a-zA-Z]*$/
      let street1_result = (/^[0-9a-zA-Z\s]+$/.test(e.target.value));

      if(street1_result){

          this.setState({street1_border_color: "grey"});

          //this.props.setDeliveryContactAddressStreet1(e);

      }else{
          
          this.setState({street1_border_color: "red"});

      }
         
          //this.props.setDeliveryContactAddressFirstName(e);

  }

  setDeliveryContactAddressStreet2 = (e: any) => {

      this.setState({street2: e.target.value});
      this.props.setDeliveryContactAddressStreet2(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

      let street2_result = (/^[a-zA-Z]*$/.test(e.target.value));

      if(street2_result){

          this.setState({street2_border_color: "grey"});

          //this.props.setDeliveryContactAddressStreet2(e);

      }else{
          
          this.setState({street2_border_color: "red"});

      }

  }
  

  setDeliveryContactAddressCity = (e: any) => {

      this.setState({city: e.target.value});
      this.props.setDeliveryContactAddressCity(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }


  setDeliveryContactAddressState = (e: any) => {

      this.setState({state: e.target.value});
      this.props.setDeliveryContactAddressState(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

  setDeliveryContactAddressZipcode = (e: any) => {

      this.setState({zipcode: e.target.value});
      this.props.setDeliveryContactAddressZipcode(e);

      let dtla = [90012, 90014, 90017, 90074, 90071, 90081, 90012, 90013, 90017, 90012, 90053, 90014, 90015, 90021, 90079, 90055, 90012, 90014, 90071, 90012, 90015, 90017, 90021, 90086]

      let sm = [90291, 90401, 90402, 90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411]

      //console.log("e" + e.target.value);
      //console.log("dtla" + dtla.indexOf(parseInt(e.target.value)));
      //console.log("sm" + sm.indexOf(parseInt(e.target.value)));


      if(dtla.indexOf(parseInt(e.target.value)) > -1){

          this.props.setDeliveryCost(0);

      }else if(sm.indexOf(parseInt(e.target.value)) > -1){

          this.props.setDeliveryCost(10);

      }

      //this.props.setDeliveryAddressZipcode(e);
      //set location for delivery time

      //if street1 street2 city state
      //this.props.setdeliveryAddressValidated();

  }

  
  
  render(): JSX.Element{

    let delivery_address:any = "";

    return ( <div>
      
                 <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-md-3">
                          <b>Delivery Contact</b>
                          <br/>
                       </div>
                    </div>
                 </form>
                 <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-md-3">
                        <div className={this.state.first_name_classname}>
                          <input type="text" value={this.state.first}  onChange={this.setDeliveryContactAddressFirstName} maxLength={20} className="form-control" id="exampleInputName2" placeholder="First Name" style={{borderColor: this.state.first_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className={this.state.last_name_classname}>
                          <input type="text" value={this.state.last} maxLength={4} onChange={this.setDeliveryContactAddressLastName}   className="form-control" id="exampleInputName2" placeholder="Last Name" style={{borderColor: this.state.last_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                        </div>
                      </div>
                    </div>
                </form>
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-md-3">
                        <div className={this.state.contact_email_classname}>
                          <input type="text" value={this.state.contact_email} onChange={this.setDeliveryContactAddressEmail} className="form-control" id="exampleInputName2" placeholder="Email" style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className={this.state.contact_email_classname}>
                          <input type="text" value={this.state.contact_email_again} onChange={this.setDeliveryContactAddressEmailAgain} className="form-control" id="exampleInputName2" placeholder="Email Again" style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                        </div>
                    </div>
                  </div>
                </form>
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-md-3">
                        <div className={this.state.contact_mobile_classname}>
                          <input type="text" value={this.state.contact_mobile} maxLength={12} onChange={this.setDeliveryContactAddressMobile} className="form-control" id="exampleInputName2" placeholder="Mobile" style={{borderRadius: 0, borderColor: this.state.mobile_border_color}}/>
                        </div>
                    </div>
                  </div>
                </form>
                <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-3">
                          <b>Delivery Address</b>
                          <br/>
                       </div>
                    </div>
                 </form>
                <form className="form-horizontal">
                      <div className="form-group">
                         <div className="col-md-3">
                            <div>
                              <input type="text" value={this.state.company_name} maxLength={4} onChange={(e: any) => this.setDeliveryContactAddressCompanyName(e)} className="form-control" id="exampleInputName2" placeholder="Company Name" style={{borderRadius: 0, borderColor: this.state.company_name_border_color, WebkitAppearance: "none"}}/>
                            </div>
                          </div>
                      </div>
                </form>
                 <form className="form-horizontal">
                      <div className="form-group">
                        <div className="col-sm-3">
                          <input type="text" maxLength={20} className="form-control" id="exampleInputName2" placeholder="Street" value={this.state.street1} onChange={(e) => this.setDeliveryContactAddressStreet1(e)} style={{borderRadius: 0, borderColor: this.state.street1_border_color, fontSize: 16}}/>
                        </div>
                        <div className="col-sm-3">
                          <input type="text" value={this.state.street2} maxLength={20} onChange={(e: any) => this.setDeliveryContactAddressStreet2(e)} className="form-control" id="exampleInputName2" placeholder="Street 2" style={{borderRadius: 0, borderColor: this.state.street2_border_color, fontSize: 16}}/>
                        </div>
                      </div>
                 </form>
                <form className="form-horizontal">
                      <div className="form-group">
                        <div className="col-sm-3">
                          <select className="form-control" onChange={(value) => this.setDeliveryContactAddressCity(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                            <option>City</option>
                            <option value="los_angeles">Los Angeles</option>
                            <option value="santa_monica">Santa Monica</option>
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <select className="form-control" onChange={(value) => this.setDeliveryContactAddressState(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                            <option>State</option>
                            <option value="ca">CA</option>
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <select className="form-control" onChange={(value) => this.props.setDeliveryContactAddressZipcode(value)} style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                            <option>Zipcode</option>
                            <option>Venice</option>
                            <option>90013</option>
                            <option>90014</option>
                            <option>90015</option>
                            <option>90021</option>
                            <option>90071</option>
                            <option>Santa Monica</option>
                            <option>90291</option>
                            <option>90401</option>
                            <option>90402</option>
                            <option>90403</option>
                            <option>90404</option>
                            <option>90405</option>
                            <option>90406</option>
                            <option>90407</option>
                            <option>90408</option>
                            <option>90409</option>
                            <option>90410</option>
                            <option>90411</option>
                          </select>
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
  console.log("delivery address component/state" + JSON.stringify(state));
  return {
   order: state.Order,
   delivery_address: state.delivery_address,
   user_delivery_addresses: state.user_delivery_addresses
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //setDeliveryAddressStreet1: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setDeliveryAddressStreet1(e.target.value));
    //},
    //setDeliveryAddressStreet2: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setLastName(e.target.value));
    //},
    //setDeliveryAddressCity: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    //},
    //deliveryAddressValidated: () => {
    //  console.log(e.target.value);
    //  //dispatch(deliveryAddressValidated(e.target.value));
    //}
  }
}

const DeliveryAddress1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryAddress)

export default DeliveryAddress;
