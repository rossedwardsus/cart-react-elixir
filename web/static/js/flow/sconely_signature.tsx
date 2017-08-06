import * as React from 'react'

import SidebarCart from './sconely_signature_sidebar_cart.tsx';
import EventDetails from './sconely_signature_event_details.tsx';
import EventDeliveryContactAddress from './sconely_signature_delivery_contact_address.tsx';
//import EventDetailsEventAddress from './sconely_signature_event_details_event_address.tsx';
import EventDetailsDateTime from './sconely_signature_event_details_datetime.tsx';
//import EventDetailsName from './sconely_signature_event_details_name.tsx';
//import EventDetailsCode from './sconely_signature_event_details_code.tsx';
import Guests from './sconely_signature_guests.tsx';
import AdditionalItems from './sconely_signature_additional_items.tsx';
import PaymentMethod from './payment_method.tsx';
import ProcessOrderButton from './sconely_signature_process_order_button.tsx';

import {setEventName, setGuestCount} from './actions/order_event_details.ts';
import {setDeliveryAddressStreet1} from './actions/order_delivery_address.ts';
import {getUserOrderDetails, processSignatureOrder} from './actions/user_order.ts';

import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//import request from 'superagent';

class SconelySignatureSinglePage extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    //state: any;

    this.state = {

        //order_id: this.props.params.order_id,
        order_type: "",
        host_id: "",
        event_name: "",
        event_date: "",
        event_time: "",
        event_address_street: "",
        event_address_city: "",
        event_address_zipcode: "",
        code: 0,
        delivery_time: "",
        image_uploaded: "",
        //startDate: moment(),
        files: []

    };

    /*fetch('http://192.168.1.148:4000/graphql', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: 'guery GetOrder { create_user_beam(user_id: \"\", beam_name: \"\") { status }}'})
    }).then((response) => response.json())
      .then((responseData) => {
          alert("success");
          console.log(JSON.stringify(responseData.body))
      })
      .catch((err)=> {
        alert("error" + JSON.stringify(err));
        console.log('Some errors occured');
        console.log(err);
    })
    .done();*/

  }

  componentDidMount = () => {

      //this.props.getUserOrder;
      //this.props.getUserOrderDetails();
      //this.props.getUserOrderDeliveryContact();
      //this.props.getUserOrderDeliveryAddress();
      //payment
      //suborders move to sidebart cart
      //this.props.getUserOrderSuborders();
      //guests - MOVE TO GUESTS COMPONENT
      //this.props.getUserOrderGuestResponses();
  }

  save(){

      /*fetch('http://192.168.1.148:4000/graphql', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: 'mutation CreateUserBeam { create_user_beam(user_id: \"\", beam_name: \"\") { status }}'})
        }).then((response) => response.json())
          .then((responseData) => {
              alert("success");
              console.log(JSON.stringify(responseData.body))
          })
          .catch((err)=> {
            alert("error" + JSON.stringify(err));
            console.log('Some errors occured');
            console.log(err);
        })
        .done();*/

  }

  changeEventName(){



  }

  setDate(){



  }

  setTime(){

    //if time is extra then add to total

  }


  uploadImage(){


  }

  setGuestCount(){



  }

  pay(){


  }




  render(): JSX.Element {

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
                        <li className="inactive">Start Order</li>
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
                <div className="hidden-xs col-md-3">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <SidebarCart UserOrderEventDetails={this.props.UserOrderEventDetails} UserOrderCart={this.props.user_order_cart} processSignatureOrder={() => this.props.processSignatureOrder()}/>
                    <br/>
                    <br/>
                    <Link to="/public/menu">Menu</Link>
                    <br/>
                    <Link to="/public/menu">Delivery Addresses</Link>
                    <br/>
                    <Link to="/public/menu">Payment Methods</Link>
                    <br/>
                    <Link to="/public/menu">About Me</Link>
                    <br/>
                    <Link to="/public/menu">Photo</Link>
                    
                </div>
                <div className="col-md-8">
                  <br/>
                  <br/>
                  <form className="form-horizontal">
                      <div className="form-group">
                        <div className="col-sm-3">
                            <Link to="/order/12345/guests">Order Guests</Link>
                        </div>
                        <div className="col-sm-3">
                            <Link to="/order/12345/preview">Preview</Link>
                        </div>
                      </div>
                  </form>
                  <EventDetails order={this.props.order} order_details={this.props.order_details} setEventName={(e: any) =>this.props.setEventName(e)} setGuestCount={(e: any) =>this.props.setGuestCount(e)} setGuestMessage={(e: any) =>this.props.setGuestMessage(e)}/>
                  <br/>
                  <EventDetailsDateTime order={this.props.Order} />
                  <br/>
                  <EventDeliveryContactAddress order={this.props.order} setDeliveryAddressStreet1={(e: any) => this.props.setDeliveryAddressStreet1(e)} setDeliveryAddressStreet2={(e: any) => this.props.setDeliveryAddressStreet2(e)} setDeliveryAddressCity={(e: any) => this.props.setDeliveryAddressCity(e)} setDeliveryAddressState={(e: any) => this.props.setDeliveryAddressState(e)} setDeliveryAddressZipcode={(e: any) => this.props.setDeliveryAddressZipcode(e)}/>
                  <br/>
                  <br/>
                  <PaymentMethod order={this.props.order} setNameOnCard={(e: any) => this.props.NameOnCard(e)} setPaymentCardNumber={(e: any) => this.props.setPaymentCardNumber(e)} setPaymentExpiryMonth={(e: any) => this.props.setPaymentExpiryDateMonth(e)} setPaymentExpiryYear={(e: any) => this.props.setPaymentExpiryDateYear(e)} setPaymentSecurityCode={(e: any) => this.props.setPaymentSecurityCode(e)}/>
                  <br/>
                  <br/>
                  Save
                  <br/>
                  <ProcessOrderButton processSignatureOrder={() => this.props.processSignatureOrder()}/>
                  <br/>
                  Pay
                  <br/>
                  <ProcessOrderButton processSignatureOrder={() => this.props.processSignatureOrder()}/>
                </div>
              </div>
          </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("signature state" + JSON.stringify(state));
  return {
   menu_items: state.MenuItems,
   session: state.session,
   order_validations: state.order_validations,
   order: state.Order,
   order_details: state.OrderEventDetails,
   order_delivery_address: state.delivery_address,
   user_order_cart: state.UserOrderCart,
   //order_contact: state.contact,
   //order_name: state.name,
   //order_cart_items: state.cart.cart_items,
   //order_datetime: state.OrderDatetime,
   //order_payment_method: state.OrderPayment,

   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {

    getUserOrderDetails: () => {
        dispatch(getUserOrderDetails(1));
    },
    setEventName: (e: any) => {
        dispatch(setEventName(e.target.value, 1));

    },
    setGuestCount: (e: any) => {

        dispatch(setGuestCount(e.target.value, 1));

    },
    setDeliveryAddressStreet1: (e: any) => {

        //dispatch(setDeliveryAddressStreet1(e.target.value, 1));

    },
    setDeliveryAddressStreet2: (e: any) => {

        //dispatch(setDeliveryAddressStreet2(e.target.value, 1));

    },
    setDeliveryAddressCity: (e: any) => {

        //dispatch(setDeliveryAddressCity(e.target.value, 1));

    },
    setDeliveryAddressState: (e: any) => {

        //dispatch(setDeliveryAddressState(e.target.value, 1));

    },
    setDeliveryAddressZipcode: (e: any) => {

        //dispatch(setDeliveryAddressStreet1(e.target.value, 1));

    },
    setDate: (e: any) => {
    //  dispatch(setDate(e))
    },
    setTime: (e: any) => {
    //  dispatch(setTime(e.target.value))
    },
    setDeliveryCost: (e: any) => {

        //dispatch(setDeliveryAddressStreet1(e.target.value, 1));

    },
    setPayment: (e: any) => {


    },
    processSignatureOrder: (e: any) => {

        dispatch(processSignatureOrder(1));

    }
  }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Order);

const SconelySignatureSinglePage1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(SconelySignatureSinglePage)

export default SconelySignatureSinglePage;

