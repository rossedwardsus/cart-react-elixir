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
        cart: [{item_id: 1, quantity: 1}, {item_id: 2, quantity: 1}],
        total_items: 0,
        delivery_addresses: [{existing: [{name: "home", street: ""}]}, {new: [{name: "home", street: ""}]}],
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

    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.selectItem = this.selectItemQuantity.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
    this.setDate = this.setDate.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setExistingDeliveryAddress = this.setExistingDeliveryAddress.bind(this);
    this.setNewDeliveryAddressStreet = this.setNewDeliveryAddressStreet.bind(this);
    this.setNewDeliveryAddressCity = this.setNewDeliveryAddressCity.bind(this);
    this.setPaymentMethod = this.setPaymentMethod.bind(this);
    this.setNewCardName = this.setNewCardName.bind(this);
    this.setNewCardNameOnCard = this.setNewCardNameOnCard.bind(this);
    this.setNewCardNumber = this.setNewCardNumber.bind(this);
    this.setNewCardExpiryDate = this.setNewCardExpiryDate.bind(this);
    this.setNewCardSecurityCode = this.setNewCardSecurityCode.bind(this);

  }

  componentDidMount(){

    //get users payment methods
    //delivery addresses

  }

 

  selectItemQuantity(value){

    var value = "" + value;

    //alert(value.split("_"));

    //get cart and push item and quantity to it.
    //update the total

    var cart_temp = this.state.cart;
    cart_temp.push({item_id: 10, quantity: 24});
    this.setState({cart: cart_temp});

    this.setState({total_items: value.split("_")[1]});

  }

  addItemToCart(value){

      var value = "" + value;

      var item_id = value.split("_")[0];
      var quantity = value.split("_")[1];

      //alert(value);
      var cart_temp = this.state.cart;
      cart_temp.push({item_id: 3, quantity: 12});
      this.setState({cart: cart_temp});

      //var subtotal_temp = this.state.subtotal;
      //this.setState({subtotal: subtotal_temp + quantity});
      //add to subtotal
      this.setState({total_items: value.split("_")[1]});

  }

  showItem(){

      //calculate subtotal
      //quantity X 5 == total

  }

  removeItemFromCart(value){

      //find by id and
      //split
      //subtract from subtotal

      alert(JSON.stringify(value));

  }

  showcart(){


  }

  
  setDate(value){

    alert(value);
    this.setState({selected_date: value});

  }

  setTime(value){

    alert(value);
    
  }

  setExistingDeliveryAddress(value){

    //if new add flag of address that it is new so its saved with the name

    alert(JSON.stringify(value));
    //or get the address by name?

  }

  setNewDeliveryAddressStreet(value){

    //if new add flag of address that it is new so its saved with the name

    alert(JSON.stringify(value));

  }

  setNewDeliveryAddressCity(value){

    //if new add flag of address that it is new so its saved with the name

    alert(JSON.stringify(value));

  }


  setPaymentMethod(e){

    //if new add flag of method that it is new so its saved with the name
    //save the token of stripe actually

    alert(JSON.stringify(e.target.value));

  }

  setNewCardName(value){


    alert(value);


  }

  setNewCardNameOnCard(value){


    alert(value);


  }

  setNewCardNumber(value){


    alert(value);


  }

  setNewCardExpiryDate(value){


    alert(value);


  }

  setNewCardSecurityCode(value){


    alert(value);


  }

  pay(){

      //cart
      //payment method
      //delivery address
      //complete on the api

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


  render(): React.Element {
    return (
      <div>
        <Menu cart={this.state.cart} subtotal={this.state.subtotal} total_items={this.state.total_items} selectItem={(value) => this.selectItem(value)} addItemToCart={(value) => this.addItemToCart(value)} removeItemFromCart={(value) => this.removeItemFromCart(value)} order_id={this.props.params.order_id}/>
        <br/>
        <DateTime selected_date={this.state.selected_date} setDate={(value) => this.setDate(value)} setTime={(value) => this.setTime(value)}/>
        <br/>
        <DeliveryAddress user_id={"1"} setExistingDeliveryAddress={(value) => this.setExistingDeliveryAddress(value)} setNewDeliveryAddressStreet={(value) => this.setDeliveryAddressStreet(value)} setNewDeliveryAddressCity={(value) => this.setDeliveryAddressCity(value)}/>
        <br/>
        <Payment user_id={"1"} total_items={this.state.total_items} total={this.props.total} setPaymentMethod={(value) => this.setPaymentMethod(value)} setNewCardName={(value) => this.setNewCardName(value)} setNewCardNameOnCard={(value) => this.setNewCardNameOnCard(value)} setNewCardNumber={(value) => this.setNewCardNumber(value)} setNewCardExpiryDate={(value) => this.setNewCardExpiryDate(value)} setNewCardSecurityCode={(value) => this.setNewCardSecurityCode(value)}/>
      </div>
    )
  }
}