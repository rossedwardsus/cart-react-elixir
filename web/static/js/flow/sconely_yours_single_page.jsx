import React from 'react'

import Menu from './sconely_yours_menu';
import DateTime from './sconely_yours_datetime';
import DeliveryAddress from './sconely_yours_delivery_address'
import Payment from './order_payment';

import request from 'superagent';

//proptype
//prop == params id/orderid

export default class SconelyYours extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    //state: {
    //  display: 'static' | 'hover' | 'active',
    //};

    this.state = {

        order_id: this.props.params.order_id,
        cart: [{item_id: 1, quantity: 1}, {item_id: 1, quantity: 1}],
        delivery_address_street: "",
        delivery_address_city: "",
        delivery_address_zipcode: "",
        delivery_address_suite: "",
        delivery_address_comment: "",
        selected_date: "",
        selected_time: "",
        subtotal: 0,
        total: 0,
        payment_method_new_existing: "",
        payment_method: ""
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

    this.selectitem = this.selectItem.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
    this.eventName = this.eventName.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setDeliveryAddress = this.setDeliveryAddress.bind(this);
    this.setPaymentMethod = this.setPaymentMethod.bind(this);
    this.setNewCardName = this.setNewCardName.bind(this);

  }

  componentDidMount(){

    //get users payment methods
    //delivery addresses

  }

  completeOrder(){
  
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

  eventName(value){

    alert(value.target.value);
    //this.setState({event_name: e.target.value});

  }

  selectItem(value){

    alert(value);

  }

  selectQuantity(value){

    alert(value);

  }

  addItemToCart(){

      //var cart = cart;
      //cart.push({item_id: 1, mini: false, quantity: 12});

  }

  showItem(){

      //calculate subtotal
      //quantity X 5 == total

  }

  removeItem(){


  }

  showcart(){


  }

  
  setDate(value){

    alert(value);
    this.setState({selected_date: value});

  }

  setDeliveryAddress(value){

    //if new add flag of address that it is new so its saved with the name

    alert(JSON.stringify(value));

  }

  setTime(value){

    alert(value);
    
  }

  setPaymentMethod(e){

    //if new add flag of method that it is new so its saved with the name
    //save the token of stripe actually

    alert(JSON.stringify(e.target.value));

  }

  setNewCardName(value){


    alert(value);


  }


  pay(){

      //cart
      //payment method
      //delivery address
      //complete on the api

  }


  render(): React.Element {
    return (
      <div>
        <Menu selectItem={(value) => this.selectItem(value)} selectQuantity={(value) => this.selectQuantity(value)} order_id={this.props.params.order_id}/>
        <br/>
        <DateTime selected_date={this.state.selected_date} setDate={(value) => this.setDate(value)} setTime={(value) => this.setTime(value)}/>
        <br/>
        <DeliveryAddress user_id={"1"} setDeliveryAddress={(value) => this.setDeliveryAddress(value)}/>
        <br/>
        <Payment user_id={"1"} subtotal={this.state.subtotal} total={this.props.total} setPaymentMethod={(value) => this.setPaymentMethod(value)} setNewCardName={(value) => this.setNewCardName(value)}/>
      </div>
    )
  }
}