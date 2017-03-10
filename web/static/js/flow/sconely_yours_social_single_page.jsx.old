'use strict'

import React from 'react'

import Menu from './sconely_yours_menu';
import DateTime from './sconely_yours_social_datetime';
import DeliveryAddress from './sconely_yours_social_delivery_address';
import Payment from './sconely_yours_social_order_payment';

import request from 'superagent';
import { Link } from 'react-router';
import { Map, List, fromJS } from 'immutable';
import { GQLClient } from 'graphql-http';

const client = GQLClient('http://localhost:4000/graphql', {
  // anything passed here is merged with 
  // the options passed to fetch() 
  credentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

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
        page: "menu",
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
    this.btnNext = this.btnNext.bind(this);

  }

  componentDidMount(){

    //get users payment methods
    //delivery addresses


    //get the menu items
    client.query(`
          query {
            get_menu_items {
              item_id,
              title
            }
          }
        `).then((result) => {
          //console.log(result.data.user);
          alert(JSON.stringify(result));
          // => { id: 1234, name: ... } 
        }
    );

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

  addItemToCart(e){

      /*const myMap = Immutable.fromJS({
        nested: {
          someKey: ['hello', 'world'],
        },
      });

      const myNewMap = myMap.updateIn(['nested', 'someKey'], arr => arr.push('bye'));

      console.log(myNewMap.toJS());
      // {
      //  nested: {
      //    someKey: ["hello", "world", "bye"]
      //  }
      // }*/

      //alert(e.target.id + " + " + e.target.value);

      /*var value = "" + value;

      var item_id = value.split("_")[0];
      var quantity = value.split("_")[1];*/

      //alert(value);
      var cart_temp = this.state.cart;

      if(e.target.value == "12"){

          cart_temp.push({item_id: e.target.id, description: "1 Dozen Freedom Scones", quantity: e.target.value});
          this.setState({cart: cart_temp});
      
      }else if(e.target.value == "24"){
      
          cart_temp.push({item_id: e.target.id, description: "2 Dozen Freedom Scones", quantity: e.target.value});
          this.setState({cart: cart_temp});

      }

      //var subtotal_temp = this.state.subtotal;
      //this.setState({subtotal: subtotal_temp + quantity});
      //add to subtotal
      //this.setState({total_items: value.split("_")[1]});

  }

  showItem(){

      //calculate subtotal
      //quantity X 5 == total

  }

  removeItemFromCart(value){

      let immutable_list = fromJS([{item_id: 100000, title: "test"}]);

      alert(immutable_list.getIn([0, "item_id"]));



      /*var test = Immutable.List.of(Immutable.Map({a: '1'}), Immutable.Map({a: '2'}));
      test = test.filter(function(item) { return item.get('a') !== '1' });
      However, filter on non-empty List would result a different immutable list, thus you may want to check the occurrence of {a: 1} first:

      if (test.some(function(item) { return item.get('a') === '1'; })) {
          test = test.filter(function(item) { return item.get('a') !== '1' });
      }*/

      //{item_id: 1, quantity: 1}
      //find by id and
      //split
      //subtract from subtotal

      let cart_temp = this.state.cart;

      var johnRemoved = cart_temp.filter(function(el) {
          return el.item_id !== 1;
      });

      alert(JSON.stringify(johnRemoved));

      //alert(cart_temp.indexOf({item_id: 1, quantity: 1}));

      //alert(JSON.stringify(value));



  }

  displayItem(){


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

  btnNext(){

    this.setState({page: "delivery_address_payment"});

  }


  //pay(){

      //cart
      //payment method
      //delivery address
      //complete on the api

  //}

  completeOrder(){

      alert("complete order");

      /*import { GQLClient } from 'graphql-http';

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

    let body = null;

    //alert(this.state.page);

    if(this.state.page == "menu"){

    //    alert();

        body =  <div>
                  <Menu cart={this.state.cart} subtotal={this.state.subtotal} total_items={this.state.total_items} selectItem={(value) => this.selectItem(value)} addItemToCart={(value) => this.addItemToCart(value)} removeItemFromCart={(value) => this.removeItemFromCart(value)} order_id={this.props.params.order_id}/>
                  <br/>
                  <button className="btn btn-default" onClick={() => this.btnNext()}>Next</button>
                </div>
    

    //if registered_user
    //else if guest show screen for continuing as guest or signing up
    //if guest they cant choose from a previous entered payment or address
    //show screen that only allows them to enter these


    }else if(this.state.page == "delivery_address_payment"){

        body =  <div>
                  <DateTime selected_date={this.state.selected_date} setDate={(value) => this.setDate(value)} setTime={(value) => this.setTime(value)}/>
                  <br/>
                  <DeliveryAddress user_type={"guest"} user_id={"1"} setExistingDeliveryAddress={(value) => this.setExistingDeliveryAddress(value)} setNewDeliveryAddressStreet={(value) => this.setDeliveryAddressStreet(value)} setNewDeliveryAddressCity={(value) => this.setDeliveryAddressCity(value)}/>
                  <br/>
                  <Payment user_type={"guest"} user_id={"1"} total_items={this.state.total_items} total={this.props.total} setPaymentMethod={(value) => this.setPaymentMethod(value)} setNewCardName={(value) => this.setNewCardName(value)} setNewCardNameOnCard={(value) => this.setNewCardNameOnCard(value)} setNewCardNumber={(value) => this.setNewCardNumber(value)} setNewCardExpiryDate={(value) => this.setNewCardExpiryDate(value)} setNewCardSecurityCode={(value) => this.setNewCardSecurityCode(value)} completeOrder={this.completeOrder}/>
                </div>
          
    }



    return (
      <div>
        <div className="container-fluid">
            <div className="row">
                <div className="hidden-xs col-md-2">
                  <br/>
                  <br/>
                  if user type == registered_user:
                  <br/>
                  Profile
                  <br/>
                  <Link to="/user/delivery_address">Delivery addresses</Link>
                  <br/>
                  Payments
                  <br/>
                  Password
                  <br/>
                  Image
                  <br/>
                  About me
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  Cart
                  <br/>
                  else if guest:
                  <br/>
                  itemxquantity-delete
                  {this.state.cart.map(function(item){

                      return(

                          <div>{item.description}-change-<a onClick={() => this.removeItemFromCart(1)}>remove</a></div>

                      )

                  }.bind(this))}
                  <br/>
                  <br/>
                  total due
                </div>
                <div className="col-xs-6 col-md-6">

                    {body}

                 </div>
                <div className="col-xs-6 col-md-2">
                    maybe put something here
                </div>
            </div>
          </div>
      </div>
    )
  }
}