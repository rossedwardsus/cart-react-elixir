import * as React from 'react'

//import ToggleButton from 'react-toggle-button'
//import InputRange from 'react-input-range';

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

import { connect } from 'react-redux';
import { Link } from 'react-router';

import UserNavbar from './user_navbar.tsx';
//import getOrderSummary from '../selectors/signature_order.ts';


//import 'react-input-range/react-input-range.css';

class SignatureOrderHistory extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();

    //alert(window.links.indexOf({link: "menu", text: "Menu"}));

    var exists = "no";

    /*JSON.parse(localStorage.getItem("order")).links.map(function(link){

        //alert("yes" + link.link);

        if(link.link == "menu"){

            exists = "yes";

        }

    });*/

    if(exists == "no"){

        //alert("doesnt exist");
  
        //JSON.parse(localStorage.getItem("order")).links.push({link: "menu", text: "Menu"});

    }else{

    //    alert("exists");
    }


    //alert("sconely yours1" + window.guest_chooses);

    //window.event.number_of_guests = 20;
    //window.event.guests_choose = false;

    this.state = {

        value: 0,
        //values: 0

    };

    this.handleValuesChange = this.handleValuesChange.bind(this);

    //myTimer;
    //var myVar = setInterval(
    //    () => 
            //get the data from state and upload to server
            //only update if the data has been changed though
            //add a flag that updates when they change something
            
            //if this.state.changed == true then update
            //only update guest details

            //window.event.event_name == this.state.event_name
            //window.address == "home"
            //window.event_date == "date"
            //window.event_time == "time"
            //window.custom_code = "custom_code"

            /*request
              .post('/api/order/new')
              .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
              .set('X-API-Key', 'foobar')
              .set('Accept', 'application/json')
              .end(function(err, res){
                // Calling the end function will send the request
                //this.setState({payment_complete: true});
          
              });*/

            //console.log("hello")
    //, 10000);

    //myVar;
    //myTimer;

  }

  handleValuesChange(e: any) {
    //alert(JSON.stringify(e.target.value));
    this.setState({value: e.target.value});

    //localStorage.getItem("number_of_guests = "values";
    //alert(window.guest_chooses);
  }

  render(): JSX.Element {

    var guests_choices = "";

    if(this.state.value == true){

        guests_choices = "Ross Edwards rossedwards.us@gmail.com";

    }

    return (
              <div>
                <UserNavbar/>
                <div className="row">
                    <div className="hidden-xs col-md-3">
                        <br/>
                        <br/>
                        <br/>
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
                      <ul className="nav nav-tabs">
                          <li className="active"><a href="#">Home</a></li>
                          <li><a href="#">Menu 1</a></li>
                          <li><a href="#">Menu 2</a></li>
                          <li><a href="#">Menu 3</a></li>
                      </ul>
                      <br/>
                      Order History
                      <br/>
                      <br/>
                      Order number-date
                      <br/>
                      Invited Guest
                      <br/>
                      Additional Items
                      <br/>
                      Subtotal
                      <br/>
                      Delivery Cost
                      <br/>
                      Total
                      <br/>
                      Paid
                      <br/>
                      <br/>
                      Order number-date
                      <br/>
                      Invited Guest
                      <br/>
                      Additional Items
                      <br/>
                      Subtotal
                      <br/>
                      Delivery Cost
                      <br/>
                      Total
                      <br/>
                      Paid
                      <br/>
                      <br/>
                      <br/>
                    </div>
                  </div>
              </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("checkout state" + JSON.stringify(state));
  return {
    //summary: getOrderSummary(state, ownProps.params.order_id)

   /*session: state.session,
   order_validations: state.order_validations,
   order: state.Order,
   order_delivery_address: state.delivery_address,
   order_contact: state.contact,
   order_name: state.name,
   order_cart_items: state.cart.cart_items,
   order_datetime: state.OrderDatetime,
   order_payment_method: state.OrderPayment,*/

   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    //addCartItem: (order_id: any, item_id: any, type: any, quantity: any) => {
    //  dispatch(addCartItem(order_id, item_id, "type", 1));
    //},
    //processSignatureOrder: () => {
    //  //dispatch(processSignatureOrder(ownProps.params.order_id));
    //},
    //increaseCartItemQuantity: () => {
    //  dispatch(increaseCartItemQuantity(1, 12));
    //},
    //decreaseCartItemQuantity: () => {
    //  dispatch(decreaseCartItemQuantity(1, 12));
    //}
  }
}

const SignatureOrderSummaryConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignatureOrderHistory);

export default SignatureOrderSummaryConnected;