import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';

import {createOrder} from '../actions/order.ts';
import {createSignatureOrder} from '../actions/user_order.ts';
import {getUser} from '../actions/user.ts';
import {setUserOrders} from '../actions/user_order.ts';
import {getUserOrders} from '../selectors/user.ts';

import {List, Map} from 'immutable';

import UserOrders from './user_orders.tsx';
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
class UserHomePage extends React.Component<any, any> {
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

    this.props.setUser();
    this.props.setUserOrders();


    //this.props.getUserOrders();
    //this.props.getUserPayments();
    //this.props.getUserDeliveryAddresses();



    //alert("jsx");
    //get active items from the database
    //setInterval(this.changeImage, 10000);

    


    //localStorage.get('user');
    //get user or user id


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

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        //orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        this.props.createSignatureOrder();

        //this.context.router.push('/user/order/12345');

        //this.props.createOrder("sconely_signature");
        
         
    }


  

    //alert(order_type);
    
    //this.context.router.push('/order/12345/event_details');
    
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  //<Swipeable onSwipingLeft={this.onSwipedLeft} onSwipingRight={this.onSwipedRight}><img width="300" height="300" src={this.state.image}/></Swipeable>
                                  


  render(){

    
    return (
              <div>
                    <UserNavbar />
                    <div className="row">
                        <div className="hidden-xs col-md-4">
                          <br/>
                          <br/>
                          <br/>
                          Home
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          <br/>
                           
                        </div>
                        <div className="col-md-6">
                                  <br/>
                                  <br/>
                                  <br/>
                                  <Link to="/public/menu">Social</Link>-<a onClick={() => this.createOrder("sconely_signature")}>Signature</a>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <div>
                                    Your Orders
                                    <br/>
                                    <UserOrders userOrders={this.props.userOrders}/>
                                  </div>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
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
  console.log("user home page component/state" + JSON.stringify(state));
  return {
   User: state.User,
   //user: getUser(state),
   userOrders: getUserOrders(state),
   //createOrder: createOrder
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //get user
    setUser: () => {
      //console.log(e.target.value);
      dispatch(getUser("1"));
    },
    setUserOrders: () => {
      //console.log(e.target.value);
      dispatch(setUserOrders());
    },
    getUserDeliveryAddresses: (e: any) => {
      //console.log(e.target.value);
      //dispatch(setUserDeliveryAddressStreet1(2, e.target.value));
    },
    getUserPayment: (e: any) => {
      //console.log(e.target.value);
      //dispatch(setUserDeliveryAddressStreet1(2, e.target.value));
    },
    createOrder: (order_type: any) => {
    //  console.log(e.target.value);
      dispatch(createOrder(order_type, ""));
    },
    createSignatureOrder: (user_id: any) => {
    //  console.log(e.target.value);
      dispatch(createSignatureOrder(1));
    },
   
  }
}

const UserHomePage1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHomePage)

export default UserHomePage1;