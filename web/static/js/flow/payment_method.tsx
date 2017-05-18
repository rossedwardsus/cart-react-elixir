
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//import { getPublicMenu } from './reducers/menu';
const Immutable  = require('immutable');

import {setPaymentNameOnCard, setPaymentCardNumber, setPaymentExpiryDate, setPaymentSecurityCode} from './actions/order_payment.ts';


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

class PaymentMethod extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

       card_number_border_color: "grey",
       expiry_month_border_color: "grey",
       expiry_year_border_color: "grey",
       cvc_border_color: "grey",
       
       card_type: ""

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

    //alert();

    //window.onhashchange = function() {
     //blah blah blah
     //alert(this.state.page);
    //}.bind(this);

    //var result = map.find(function(obj){return obj.get('id') === 4;});

    //var result = [{'id': 'a'}, {'id': 'b'}];
    //var map = Immutable.Map(result.reduce(function(previous, current) { 
    //    previous[ current.id ] = current;
    //    return previous;
    //}, {}));

    

    let demoRecord = Immutable.List.of(Immutable.Record({
                     property:'defaultValue',
                     index:0,
                     works:true,
                     valueList:Immutable.List([])
    }));

    //alert(demoRecord.getIn(["0"], "index"));

    /*let list = demoRecord.update(
      demoRecord.findIndex(function(item: any) { 
        return item.get("index") === "0"; 
      }), function(item: any) {
        return item.set("index", 4);
      }
    );*/

    var result = [{'id': 2}, {'id': 4}];
    var map = Immutable.fromJS(result);
    var map_updated = map.set()
    var result1 = map.find(function(obj: any){return obj.get('id') === 4;});

    //alert(result1.get("id"));

    /*let arr = fromJS(
      elem: [
        {id: 1, name: "first", count: 2},
        {id: 2, name: "second", count: 1},
        {id: 3, name: "third", count: 2},
        {id: 4, name: "fourth", count: 1}
      ]
    );

    arr = arr.setIn(['elem', 3, 'count'], 4);
    If we don’t know the index of the entry we want to update. It’s pretty easy to find it using .findIndex():

    
    const indexOfListToUpdate = arr.get('elem').findIndex(listItem => {
      return listItem.get('name') === 'third';
    });
    arr = arr.setIn(['elem', indexOfListingToUpdate, 'count'], 4);*/



    let cart_items_temp = this.state.cart_items;
    //let cart_items_temp_updated = cart_items_temp.updateIn(['items', 'quantity'], value = value + 1);
    //const myNewMap = cart_items_temp.updateIn(['cart_items'], (arr: any) => {arr.push({item_id: 5})});
    const myNewMap = cart_items_temp.push({item_id: 5});
    //let hello = cart_items_temp.push({item_id: 5});

    //alert(JSON.stringify(myNewMap));

    //alert(JSON.stringify(myNewMap.delete("0")));

    //hello.findIndex(function(item: any) { 
    //    return item.get("item_id") === "1"; 
    //})

    //var result = map.find(function(obj){return obj.get('id') === 4;});

    //hello = hello.find((layout: any) => {layout.get('item_id') === 1});


    /*let list = hello.update(
      hello.findIndex(function(item: any) { 
        return item.get("item_id") === "1"; 
      }), function(item: any) {
        return item.set("quantity", 44444444444444);
      }
    );*/

    //let list = hello.update(0, function(v: any) {
    //    return {quantity: 44444444444};
    //});

    //alert(JSON.stringify(list.toJS()));


    //alert(cart_items_temp_updated);


    //get menu items


    //this.props;

    //alert(JSON.stringify(this.state.menu_items));

    //alert("products" + JSON.stringify(this.props.menu_items));
    //console.log(this.props.getAllProducts());
    //this.setState({here: this.props.getAllProducts()});
    //console.log(this.props.dispatch(addTodoWithDispatch));
    //this.props.getAllProducts();

  }

  setPaymentCardNumber(e: any){

      //Amex Card: ^3[47][0-9]{13}$
      //if(/^3[47][0-9]{13}$/.test(e.target.value)){

          console.log("amex");
          this.props.setPaymentCardNumber(e.target.value);
          this.setState({card_number_border_color: "red"})
          this.setState({card_type: "AMEX"});

      //
      //}else if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(e.target.value)){
      //Visa Card: ^4[0-9]{12}(?:[0-9]{3})?$

      //    alert("visa");
      //
      //}else if(/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/.test(e.target.value)){
      //    alert("discovery");
      //
      //Discover Card: ^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$
      //}


  }

  setPaymentExpiryDateMonth(e: any){

      console.log(e.target.value);

      //01-12, only numbers
      if(/^[0-9]/.test(e.target.value)){

          console.log("ok month");
          this.setState({expiry_month_border_color: "grey"})

      }

  }

  setPaymentExpiryDateYear(e: any){

      //2017-only numbers
      //01-12, only numbers
      if(/^[0-9]/.test(e.target.value)){

          console.log("ok year");
          this.setState({expiry_year_border_color: "grey"})


      }

  }

  setPaymentSecurityCode(e: any){

      //if length > 0 or less then 4, only numbers

  }

  goToPreview(){

      this.context.router.push('/order/preview');
      
  }  
  
  
  render(): JSX.Element{

   
    return ( <div>
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
                            <div className="hidden-xs navbar-form navbar-right">
                            </div>
                            <div id="navbar" className="navbar-collapse collapse navbar-right" style={{zIndex: 10010, background: "white"}}>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><a href="./">Profile<span className="sr-only">(current)</span></a></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/register">Signup<span className="sr-only">(current)</span></Link></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                              </ul>
                            </div>
                          </div>
                    </nav> 
                <div className="container-fluid">
                  <div className="row">
                        <div className="hidden-xs col-md-2">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          
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
                        <div className="col-md-10">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <form className="form-horizontal">
                              <div className="form-group">
                                <div className="col-sm-3">
                                    <b>Payment</b>
                                    <br/>
                                      <select className="form-control">
                                          <option>Home</option>
                                          <option>Office</option>
                                      </select>
                                </div>
                              </div>
                            </form>
                            <form className="form-horizontal">
                            <div className="form-group">
                                <div className="col-sm-6">
                                
                                <input type="text" className="form-control" id="exampleInputName2" placeholder="Name on Card" onChange={(e) => this.props.setPaymentNameOnCard(e)}/>
                              </div>
                              </div>
                            </form>
                            <form className="form-horizontal">
                              <div className="form-group">
                                <div className="col-sm-3">
                                
                                <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number" onChange={(e) => this.setPaymentCardNumber(e)} style={{borderColor: this.state.card_number_border_color}}/>
                                </div>
                                <div className="col-sm-3">
                                    {this.state.card_type}
                                </div>
                              </div>
                            </form>
                            <form className="form-horizontal">
                              <div className="form-group">
                                <div className="col-md-2">
                              
                                  <input type="text" size="2" className="form-control" id="exampleInputName2" placeholder="MM" onChange={(e) => this.setPaymentExpiryDateMonth(e)} style={{borderColor: this.state.expiry_year_border_color}}/>
                                </div>
                                <div className="col-md-2">
                              
                                  <input type="text" size="4" className="form-control" id="exampleInputName2" placeholder="YYYY" onChange={(e) => this.setPaymentExpiryDateMonth(e)} style={{borderColor: this.state.expiry_month_border_color}}/>
                                </div>
                                <div className="col-md-2">
                              
                                  <input type="email" className="form-control" id="exampleInputEmail2" placeholder="CVC" onChange={(e) => this.setPaymentSecurityCode(e)} style={{borderColor: this.state.cvc_border_color}}/>
                                </div>
                              </div>
                            </form>
                            <button onClick={() => this.goToPreview()}>Preview</button>
                            <br/>
                        </div>
                    </div>
                </div>
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
  console.log("payment method component/state" + JSON.stringify(state));
  return {
   user: state.user,
   user_payment_methods: state.user_payment_methods
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    setPaymentNameOnCard: (e: any) => {
      //console.log(e.target.value);
      dispatch(setPaymentNameOnCard(e.target.value));
    },
    setPaymentCardNumber: (e: any) => {
      //console.log(e.target.value);
      dispatch(setPaymentCardNumber(e));
    },
    setPaymentExpiryDate: (e: any) => {
      console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    },
    setPaymentSecurityCode: (e: any) => {
      console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    }
  }
}

const PaymentMethod1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentMethod)

export default PaymentMethod1;

