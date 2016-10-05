'use scrict'

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import DucksToBuy from '../components/DucksToBuy';
//import DuckCart from '../components/DuckCart';
//import ShopSearch from '../components/ShopSearch';
import * as CartActions from '../actions/CartActions';
var DatePicker = require('react-datepicker');
//require('react-datepicker/dist/react-datepicker.css');
var moment = require('moment');
var { Map, List } = require("immutable");

const INITIAL_QUERY = 'duck';

class DucksApp extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      order_state: "",
      cart: [{item_id: 1, amount: "student"}],
      menu_items: [],
      cart_item_count: 0,
      delivery_address: "",
      order_date: "",
      payment: ""
    };

    //data: Map({ count: 0, items: List() })

    //handleAddItemClick() {
      //this.setState(({data}) => ({
        //data: data.update('items', list => list.push(data.get('count')))
      //}));
    //},

    //var imm = Immutable.fromJS({ list: [ { k: "v" }, { k: { x: 3, y: 5 } } ] } );


    this.addToCart = this.addToCart.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    //this.props.getDucks(INITIAL_QUERY);
  }

  _onSubmit({query}) {
    //this.props.getDucks(query);
  }

  addToCart(item){

      //var car_item_count = this.state.cart_item_count;
      //this.setState({cart: cart_item_count+1});

      alert(JSON.stringify(item));

  }

  next(){

      if(this.state.order_state == ""){

          this.setState({order_state: "delivery_address"});
          //order_state = <DeliveryAddress/>
          alert();


      }else if(this.state.order_state == "delivery_address"){

          this.setState({order_state: "datetime"});
          alert("1");

      }else if(this.state.order_state == "datetime"){

          this.setState({order_state: "payment"});

      }

  }

  render() {



    const { ducks, ducksInCart, addToCart, removeFromCart, loading } = this.props;
    
    var order_state;

    if(this.state.order_state == "login"){

    
    }else if(this.state.order_state == ""){

        order_state = <DeliveryAddress/>

    }else if(this.state.order_state == "delivery_address"){

        order_state = <OrderDate/>

    }else if(this.state.order_state == "order_date"){

        order_state = <Payment/>

    }


    return (
      <div>
          cart(0)
          <br/>
          {order_state}
          <br/>
          <br/>
          <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

class Login extends Component {

  componentDidMount() {
    //this.props.getDucks(INITIAL_QUERY);
  }

  _onSubmit({query}) {
    //this.props.getDucks(query);
  }

  render() {
      return(
          <div>
          <br/>
          <br/>
         login
          <br/>
          <form>
            email<input/>#
            <br/>
            password<input/>state, zipcode
          </form>
          </div>
      )
  }
}

class DeliveryAddress extends Component {

  componentDidMount() {
    //this.props.getDucks(INITIAL_QUERY);
  }

  _onSubmit({query}) {
    //this.props.getDucks(query);
  }

  render() {
      return(
          <div>
          <br/>
          <br/>
         delivery_address
          <br/>
          <form>
            street<input/>#
            <br/>
            city<input/>state, zipcode
          </form>
          </div>
      )
  }
}


class OrderDate extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      startDate: moment(),
    };

  }

  componentDidMount() {
    //this.props.getDucks(INITIAL_QUERY);
  }

  _onSubmit({query}) {
    //this.props.getDucks(query);
  }

  render() {
      return(
          <div>
         datetime
          <br/>
          <DatePicker
              inline
              selected={this.state.startDate}
              onChange={this.handleChange} />
          </div>
      )
  }
}

class Items extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      items: [{item_id: 1, title: "orange scone assortment", description: "a tasty strawberry scone"}],
      cart_item_count: 0,
      delivery_address: "",
      datetime: "",
      payment: ""
    };

    this.addToCart = this.props.addToCart.bind(this);
  }


  componentDidMount() {
    //this.props.getDucks(INITIAL_QUERY);
  }

  _onSubmit({query}) {
    //this.props.getDucks(query);
  }

  render() {
      return(
          <div>
         <button onClick={this.props.addToCart.bind(this, 1)}>Add</button>
          </div>
      )
  }
}

class Cart extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      cart: [{item_id: 1, amount: "student"}],
      cart_item_count: 0,
      delivery_address: "",
      datetime: "",
      payment: ""
    };

    this.addToCart = this.props.addToCart.bind(this);
  }


  componentDidMount() {
    //this.props.getDucks(INITIAL_QUERY);
  }

  _onSubmit({query}) {
    //this.props.getDucks(query);
  }

  render() {
      return(
          <div>
         <button onClick={this.props.addToCart.bind(this, 1)}>Delete</button>
          </div>
      )
  }
}

class Payment extends Component {

  componentDidMount() {
    //this.props.getDucks(INITIAL_QUERY);
  }

  _onSubmit({query}) {
    //this.props.getDucks(query);
  }

  render() {
      return(
          <div>
            Payment
          </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    ducks: state.cart.get('ducks').toJS(),
    ducksInCart: state.cart.get('ducksInCart').toJS(),
    loading: state.cart.get('loading'),
  }
}

export default connect(mapStateToProps, CartActions)(DucksApp);