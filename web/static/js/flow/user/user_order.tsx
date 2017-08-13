import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
//import {startOrder} from './actions/order';
import {List, Map} from 'immutable';

import UserNavbar from './user_navbar.tsx';

import SignatureOrder from './signature.tsx'; 

import {setEventName, setInvitedGuestCount, setInvitedGuestMessage} from '../actions/signature_order_event_details.ts';
import {setDate, setTime} from '../actions/signature_order_delivery_datetime.ts';
import {setDeliveryAddressStreet1, setDeliveryAddressStreet2, setDeliveryAddressCity, setDeliveryAddressState, setDeliveryAddressZipcode, setUserDefinedDeliveryContactAddress} from '../actions/order_delivery_contact_address.ts';
import {setPaymentNameOnCard, setPaymentMethodCardNumber, setPaymentExpiryYear, setPaymentExpiryMonth, setPaymentSecurityCode, setUserDefinedPaymentMethod} from '../actions/order_payment_method.ts';
import {setUserOrders, processSignatureOrder} from '../actions/user_order.ts';

import {getOrderDetails} from '../selectors/signature_order.ts';

import SignatureTabs from './signature_tabs.tsx';
import SidebarCart from './sconely_signature_sidebar_cart.tsx';
import EventDetails from './sconely_signature_event_details.tsx';
import EventDeliveryContactAddress from './sconely_signature_delivery_contact_address.tsx';
//import EventDetailsEventAddress from './sconely_signature_event_details_event_address.tsx';

import EventDetailsDateTime from './sconely_signature_event_details_datetime.tsx';
//import EventDetailsName from './sconely_signature_event_details_name.tsx';
//import EventDetailsCode from './sconely_signature_event_details_code.tsx';
import Guests from './sconely_signature_guests.tsx';
import AdditionalItems from './signature_additional_items.tsx';
import PaymentMethod from '../payment_method.tsx';
import SignaturePaymentMethod from './signature_payment_method.tsx';
import ProcessOrderButton from './sconely_signature_process_order_button.tsx';



//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class UserOrder extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        image: "/images/gallery/sconely_group_HPb.jpg",
        guest_code: ""
        
    };

    //this.createOrder = this.createOrder.bind(this);
    this.guestCode = this.guestCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSwipedLeft = this.onSwipedLeft.bind(this);
    this.onSwipedRight = this.onSwipedRight.bind(this);
    this.guestCodeChange = this.guestCodeChange.bind(this);
    this.changeImage = this.changeImage.bind(this);

  }

  componentDidMount(){

    //alert("jsx");
    //get active items from the database
    //setInterval(this.changeImage, 10000);

    //localStorage.get('user');

    this.props.setUserOrders(this.props.params.order_id);

    //this.props.getUserOrderDetails();
    //this.props.getUserOrderDeliveryContact()

  }

  componentWillReceiveProps = () => {

    console.log("cdrp user order");

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  onSubmit(e: any){

    e.preventDefault();

  }

  guestCode() {

    //e.preventDefault();

    //alert(order_type);

    //if(order_type == "sconely_yours"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        //orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});
       
        //if user is logged in then 
        //guest code is right then
        //this.context.router.push('/order/' + this.state.guest_code + '/guest/');

        //this.context.router.push('/guest/order/12345/sconely_yours');

        //store.dispatch(push('/order/' + this.state.guest_code + '/guest/'));

        //this.props.dispatch(routeActions.push('/foo'));

        //push("/foo");

        this.props.onNavigateTo('/hello');


    //}

  }

  guestCodeChange(e: any){

      this.setState({guest_code: e.target.value});

  }

  onSwipedLeft(){

    //alert("left");
    //this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"})
    this.changeImage();

  }

  onSwipedRight(){

    //alert("right");
    //this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"})
    this.changeImage();

  }

  changeImage(){

    if(this.state.image == "/images/gallery/sconely_group_HPb.jpg"){

        this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"});

    }else{

        this.setState({image: "/images/gallery/sconely_group_HPb.jpg"});

    }

  }


  createOrder(order_type: any) {

    if(order_type == "sconely_yours"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);

        //orders.push({order_id: 54321, user_type: "guest", order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});
       
        //orders.push({order_id: 54321, user_type: "rgistered, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});

        //if user is logged in then 
        this.context.router.push('/order/12345');

        //this.context.router.push('/order/12345');


    }else if(order_type == "sconely_social"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        //orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        localStorage.setState("order", Map({name: "name", contact: "contact", cart: List([]), delivery_address: {street: ""}, payment: ""}));

        this.context.router.push('/order/12345');
         
    }else if(order_type == "sconely_signature"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        this.context.router.push('/order/12345/signature');
        
         
    }


    /*const client = GQLClient('http://localhost:3000', {
      // anything passed here is merged with 
      // the options passed to fetch() 
      credentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });*/

    /*client.mutate(`
      mutation ($id: RecordID!, $name: String!) {
        updateUser(input: {id: $id, name: $name}) {
          user {
            id
            name
          }
        }
      }
    `, { id: 1234, name: 'Danny' }).then((result) => {
      console.log(result.data.user);
      // => { id: 1234, name: 'Danny' } 
    });*/



    /*var query = `
      query q (id: String!) {
        user(id: $id) {
          id,
          email,
          name
        }
      }
    `
    var queryVars = {
      id: 'abcdef'
    }
    var opts = {
      // custom fetch options 
    }*/
     
    /**
     * @param  {Query} query graphql query
     * @param  {Object} [vars]  graphql query args, optional
     * @param  {Object} [opts]  fetch options, optional
     */
    /*fetch(query, queryVars, opts).then(function (results) {
      if (results.errors) {
        //... 
        return
      }
      var user = result.data.user
      //... 
    })*/


  

    //alert(order_type);
    
    //this.context.router.push('/order/12345/event_details');
    
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  //<Swipeable onSwipingLeft={this.onSwipedLeft} onSwipingRight={this.onSwipedRight}><img width="300" height="300" src={this.state.image}/></Swipeable>
                                  
  /*<SignatureOrder order_details={this.props.order_details} UserOrderEventDetails={this.props.UserOrderEventDetails} menu_items={this.props.menu_items} processSignatureOrder={() => this.props.processSignatureOrder()} setInvitedGuestCount={(e: any) => this.props.setInvitedGuestCount(e)} setGuestMessage={(e: any) => this.props.setInvitedGuestMessage(e)} setEventName={(e: any) => this.props.setEventName(e)} setDate={(e: any) => this.props.setDate(e)} setTime={(e: any) => this.props.setTime(e)} setDeliveryAddressStreet1={(e: any) => this.props.setDeliveryAddressStreet1(e)} setDeliveryAddressStreet2={(e: any) => this.props.setDeliveryAddressStreet2(e)} setDeliveryAddressCity={(e: any) => this.props.setDeliveryAddressCity(e)} setDeliveryAddressState={(e: any) => this.props.setDeliveryAddressState(e)} setDeliveryAddressZipcode={(e: any) => this.props.setDeliveryAddressZipcode(e)} setUserDefinedDeliveryContactAddress={(e: any) => this.props.setUserDefinedDeliveryContactAddress(e)} setPaymentNameOnCard={(e: any) => this.props.setNameOnCard(e)} setPaymentCardNumber={(e: any) => this.props.setCardNumber(e)} setPaymentExpiryDateMonth={(e: any) => this.props.setPaymentExpiryDateMonth(e)} setPaymentExpiryDateYear={(e: any) => this.props.setPaymentExpiryDateYear(e)} setPaymentSecurity={(e: any) => this.props.setPaymentSecurity(e)} getUserOrderDeliveryContact={() => this.props.getUserOrderDeliveryContact()} getUserOrderDeliveryAddress={() => this.props.getUserOrderDeliveryAddress()} getUserOrderGuestResponses={() => this.props.getUserOrderGuestResponses()}/>*/
           

  //if order_type == "signature"

  render(){

    let logged_in = null;
    
      return (
              <div>
                    <UserNavbar/>
                    <br/>
                    <div className="row">
                        <div className="hidden-xs col-md-3">
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
                        <div className="col-md-9">
                            <br/>
                            <br/>
                            <br/>
                            <EventDetails order_details={this.props.order_details} order={this.props.order} setEventName={(e: any) =>this.props.setEventName(e)} setInvitedGuestCount={(e: any) =>this.props.setInvitedGuestCount(e)} setInvitedGuestMessage={(e: any) =>this.props.setGuestMessage(e)}/>
                            <br/>

                            <EventDetailsDateTime order_details={this.props.order_details} setDate={(e: any) => this.props.setDate(e)} setTime={(e: any) => this.props.setTime(e)}/>
                            
                            <EventDeliveryContactAddress user={this.props.user} order_details={this.props.order_details} setDeliveryAddressStreet1={(e: any) => this.props.setDeliveryAddressStreet1(e)} setDeliveryAddressStreet2={(e: any) => this.props.setDeliveryAddressStreet2(e)} setDeliveryAddressCity={(e: any) => this.props.setDeliveryAddressCity(e)} setDeliveryAddressState={(e: any) => this.props.setDeliveryAddressState(e)} setDeliveryAddressZipcode={(e: any) => this.props.setDeliveryAddressZipcode(e)} setUserDefinedDeliveryContactAddress={(e: any) => this.props.setUserDefinedDeliveryContactAddress(e)}/>
                            <br/>
                            <br/>
                            
                            <SignaturePaymentMethod user={this.props.user} order_details={this.props.order_details} setNameOnCard={(e: any) => this.props.NameOnCard(e)} setPaymentMethodCardNumber={(e: any) => this.props.setPaymentMethodCardNumber(e)} setPaymentExpiryMonth={(e: any) => this.props.setPaymentExpiryDateMonth(e)} setPaymentExpiryYear={(e: any) => this.props.setPaymentExpiryDateYear(e)} setPaymentSecurityCode={(e: any) => this.props.setPaymentSecurityCode(e)} setUserDefinedPaymentMethod={(e: any) => this.props.setUserDefinedPaymentMethod(e)}/>
                            <br/>
                            <br/>
                            Save
                            <br/>
                            <ProcessOrderButton processSignatureOrder={() => this.props.processSignatureOrder()}/>
                            <br/>
                        </div>
                    </div>
                    
              </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("user order page component/state" + JSON.stringify(state));
  return {
   user: {delivery_contacts_addresses: [{name: "home"}], payment_methods: [{name: "personal"}]},
   order_details: getOrderDetails(state.UserOrders, 1),
   name: state.name,
   UserOrders: state.UserOrders,
   //UserOrder: state.Order, only for this order
   menu_items: state.MenuItems,
   UserOrderEventDetails: state.UserOrderEventDetails,
   //UserOrderDeliveryContactAddress: state.UserOrderEventDetails,
   //UserOrderPaymentMethod: state.UserOrderEventDetails,
   //UserOrderCart: state.UserOrderEventDetails,
   
  };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    setEventName: (e: any) => {
        //console.log("ownprops order_id: " + JSON.stringify(ownProps.params.order_id));
        dispatch(setEventName(e.target.value, ownProps.params.order_id));

    },
    setInvitedGuestCount: (e: any) => {

        dispatch(setInvitedGuestCount(e.target.value, 1));

    },
    setInvitedGuestMessage: (e: any) => {

        dispatch(setInvitedGuestMessage(e.target.value, 1));

    },
    setDeliveryAddressStreet1: (e: any) => {

        dispatch(setDeliveryAddressStreet1(e.target.value, 1));

    },
    setDeliveryAddressStreet2: (e: any) => {

        dispatch(setDeliveryAddressStreet2(e.target.value, 1));

    },
    setDeliveryAddressCity: (e: any) => {

        dispatch(setDeliveryAddressCity(e.target.value, 1));

    },
    setDeliveryAddressState: (e: any) => {

        dispatch(setDeliveryAddressState(e.target.value, 1));

    },
    setDeliveryAddressZipcode: (e: any) => {

        dispatch(setDeliveryAddressZipcode(e.target.value, 1));

    },
    setUserDefinedDeliveryContactAddress: (e: any) => {

        dispatch(setUserDefinedDeliveryContactAddress("home", 1));

    },
    setDate: (date: any) => {
      dispatch(setDate(date, ownProps.params.order_id));
    },

    setTime: (e: any) => {
      dispatch(setTime(e.target.value, ownProps.params.order_id));
    },
   
    setNameOnCard: (e: any) => {

        dispatch(setPaymentNameOnCard(e.target.value, 1));

    },
    setPaymentMethodCardNumber: (e: any) => {

        dispatch(setPaymentMethodCardNumber(e.target.value, 1));

    },
    setPaymentExpiryDateMonth: (e: any) => {

        dispatch(setPaymentExpiryMonth(e.target.value, 1));

    },
    setPaymentExpiryDateYear: (e: any) => {

        dispatch(setPaymentExpiryYear(e.target.value, 1));

    },
    setPaymentSecurityCode: (e: any) => {

        dispatch(setPaymentSecurityCode(e.target.value, 1));

    },
    setUserDefinedPaymentMethod: (e: any) => {

        dispatch(setUserDefinedPaymentMethod("e.target.value", 1));

    },
    setUserOrders: (e: any) => {

        //dispatch(setUserOrders(1));

    },
    /*getUserOrderDetails: () => {

        dispatch(getUserOrderDetails(1));

    },
    getUserOrderDeliveryContact: () => {

        dispatch(getUserOrderDeliveryContact(1));

    },
    getUserOrderDeliveryAddress: () => {

        dispatch(getUserOrderDeliveryAddress(1));

    },
    getUserOrderGuestResponses: () => {

        dispatch(getUserOrderGuestResponses(1));

    },*/
    processSignatureOrder: (e: any) => {

        dispatch(processSignatureOrder(1));

    }
   
  }
}

const UserOrderConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserOrder)

export default UserOrderConnected;