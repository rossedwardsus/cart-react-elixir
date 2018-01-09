
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

class CollectionGiftNote extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        contact_first_name: "",
        contact_last_name: "",
        contact_email: "",
        contact_email_again: "",
        contact_mobile: "",
        contact_mobile_displayed: "",
        
        delivery_contact_label: "Delivery Contact",
        delivery_address_label: "Delivery Address",

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
        street2_border_color: "grey",
        city_border_color: "grey",
        gift_order_checked: "",
        gift_note: "",
        pickupLocation: ""
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

    /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
    this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
    this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
    this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});
    this.setState({street1: this.props.User.deliveryContactsAddresses[0].street1});
    this.setState({street2: this.props.User.deliveryContactsAddresses[0].street2});
    this.setState({city: this.props.User.deliveryContactsAddresses[0].city});
    this.setState({state: this.props.User.deliveryContactsAddresses[0].state});
    this.setState({zipcode: this.props.User.deliveryContactsAddresses[0].zipcode});*/
    //this.setState({street2: this.props.User.orders[0].deliverydate.street2});

  }

  componentWillReceiveProps = () => {

    //if(this.props.User.orders[0].giftOrder == false){
      
      //check if props.giftOrder: true or false

      /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
      this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
      this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
      this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});
      //this.setState({street1: this.props.deliveryAddress.street1})
      //this.setState({street2: this.props.deliveryAddress.street2})*/

    /*}else{

      this.setState({contact_first_name: ""});
      this.setState({contact_last_name: ""});
      this.setState({contact_email: ""});
      this.setState({contact_mobile: ""});

      this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
      this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
      this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
      this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});
    

    }*/

  }

 
  setGiftOrder = (e: any) => {

      if(this.state.gift_order_checked == ""){

          console.log("hello");

          this.setState({gift_order_checked: "checked"});
          this.setState({delivery_contact_label: "Recipient Delivery Contact"});
          this.setState({delivery_address_label: "Recipient Delivery Address"});

          //this.props.setGiftOrder(true);
          //this.props.setDeliveryContactAddressFirstName("");
      
          //this.setState({contact_first_name: ""});
          //this.setState({contact_last_name: ""});
          //this.setState({contact_email: ""});
          //this.setState({contact_mobile: ""});

          /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
          this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
          this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
          this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});*/
          
          
      
      }else{

          //this.setState({contact_first_name: ""});
          //this.setState({contact_last_name: ""});
          //this.setState({contact_email: ""});
          //this.setState({contact_mobile: ""});

          /*this.setState({contact_first_name: this.props.User.deliveryContactsAddresses[0].contact_first_name});
          this.setState({contact_last_name: this.props.User.deliveryContactsAddresses[0].contact_last_name});
          this.setState({contact_email: this.props.User.deliveryContactsAddresses[0].contact_email});
          this.setState({contact_mobile: this.props.User.deliveryContactsAddresses[0].contact_mobile});*/
          
          this.setState({gift_order_checked: ""});
          this.props.setGiftOrder(false);

      }

      //this.props.setOrderNote(e);

      //if street1 street2 city state

      //this.props.deliveryAddressInvalidated();

  }


  setGiftNote = (e: any) => {

      this.setState({gift_note: e.target.value});
      this.props.setGiftNote(e);

      //if street1 street2 city state

      //this.props.deliveryAddressValidated();
      //this.props.deliveryAddressInvalidated();

  }

  
  render(): JSX.Element{

    let delivery_address:any = "";

    return ( <div>
                  <form className="form-horizontal">
                      <div className="form-group">
                        <div className="col-sm-3 col-md-5">
                          <textarea className="form-control" cols={150} rows={4} maxLength={150} placeholder="Gift note" style={{resize: "none"}} onChange={(e: any) => this.setGiftNote(e)}></textarea>
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


/*function mapStateToProps(state: any) {
  console.log("delivery address component/state" + JSON.stringify(state));
  return {
   order: state.Order,
   delivery_address: state.delivery_address,
   User: state.User
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
)(DeliveryAddress)*/

export default CollectionGiftNote;

