
'use strict';


import * as React from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import * as getAllProducts from './actions/menu';

import {addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/guest_cart.ts';

//import { getPublicMenu } from './reducers/menu';

const Immutable  = require('immutable');

import SidebarCart from './order_sidebar_cart.tsx';
import PublicTopNavbar from './public/public_top_navbar.tsx';



/*function addTodoWithDispatch() {
  const action = {
    type: "VIEW_PUBLIC_MENU",
    //text
  }
  //dispatch(action)
}*/

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

class OrderCart extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        page: "menu",
        //menu_items: this.props.menu_items,
        //here: "",
        delivery_address: Immutable.Map(),
        delivery_address_street: "",
        item_count: 0,
        cart_items: Immutable.fromJS([{item_id: 1, dozen: 2, quantity: 2, mini: true}, {item_id: 2, dozen: 1, quantity: 5}]),
        //order: Immutable.fromJS([{item_id: 1, dozen: 2, quantity: 2, mini: true}, {item_id: 2, dozen: 1, quantity: 5}]),
        order: Immutable.fromJS({name: "name", contact: "contact", cart: [], delivery_address: {street: ""}, payment: ""}),
        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 2, title: "Ruby Q", description: "Cherry Chocolate Chunk", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "MenuRubyQ4.5", hover_image_id: "MenuRubyQ4.5roll"}, {item_id: 3, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}],
      

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
    
    /*this.addCartItem = this.addCartItem.bind(this);
    this.increaseCartItemQuantity = this.increaseCartItemQuantity.bind(this);
    this.decreaseCartItemQuantity = this.decreaseCartItemQuantity.bind(this);
    this.removeCartItem = this.removeCartItem.bind(this);
    this.addDeliveryAddress = this.addDeliveryAddress.bind(this);
    this.setDeliveryAddressStreet = this.setDeliveryAddressStreet.bind(this);
    this.setDeliveryAddressCity = this.setDeliveryAddressCity.bind(this);
    this.setDeliveryAddressZipcode = this.setDeliveryAddressZipcode.bind(this);
    this.setCardNumber = this.setCardNumber.bind(this);
    this.setExpiryDate = this.setExpiryDate.bind(this);
    this.setSecurityCode = this.setSecurityCode.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.showCart = this.showCart.bind(this);
    this.showDeliveryAddressPayment = this.showDeliveryAddressPayment.bind(this);
    this.completeOrder = this.completeOrder.bind(this);*/

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

  /*showMenu(){

      //alert();

      this.setState({page: "menu"});

  }

  showDeliveryAddressPayment(){

      //alert();

      this.setState({page: "delivery_address_payment"})

  }

  showCart(){

      this.setState({page: "cart"})

  }


  goToDateTime(){
  
      //this.context.router.push('/order/12345/datetime_contact_delivery_address_payment');
      
  }*/

  /*addCartItem(item_id: any, item_dozens: any, item_quantity: any, mini: any){

    //alert(item_id + "" + item_dozens + "" + item_quantity);

    let order_temp = this.state.order;

    //item_id, quanity, mini

    let new_cart_items: any = [];

    //order_temp.set('key', .get('key').push
    let order_temp_updated = order_temp.updateIn(['cart'], (arr: any) => arr.push({item_id: item_id, dozens: item_dozens, quantity: item_quantity, mini: mini}));*/


    //for(let i: any = 0; i <= item_quantity - 1; i++){

      //alert();

      //new_cart_items.push({item_id: 1, dozens: item_dozens, item_quantity: item_quantity, mini: mini});

    

    /*const myMap = Immutable.fromJS({
      nested: {
        someKey: ['hello', 'world'],
      },
    });

    //const myNewMap = myMap.updateIn(['nested', 'someKey'], arr => arr.push('bye'));*/

    //var newMap = myMap.set('key', myMap.get('key').push(newData))


    //let cart_items_temp = this.state.cart_items;
    //let cart_items_temp_updated = cart_items_temp.setIn(['items', 'quantity'], value = value + 1);

      
     //}

     //alert(JSON.stringify(new_cart_items));

     //let cart_items_temp_updated = cart_items_temp.concat(new_cart_items);

     //alert(JSON.stringify(cart_items_temp_updated));

     //this.setState({order: order_temp_updated});


  //}

  //selectItemDozens(e: any){

  //    alert(e.target.value);

  //}

  /*addDeliveryAddress(street: any, city: any, state: any, zipcode: any){

      //alert(street);

      //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});

  }*/

  removeCartItem(index: any){

      let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.delete(index);

      this.setState({cart_items: cart_items_temp_updated});

  }

  increaseCartItemQuantity(item_id: any, index: any){

    //alert(JSON.stringify(item_id + "" + index));

    let cart_items_temp = this.state.cart_items;

    let cart_items_temp_updated = cart_items_temp.update(index, (item: any) => {let quantity_updated = item.get("quantity") + 1; return item.set("quantity", quantity_updated)});

    this.setState({cart_items: cart_items_temp_updated});

  }  

  decreaseCartItemQuantity(item_id: any, index: any){

    let cart_items_temp = this.state.cart_items;

    let cart_items_temp_updated = cart_items_temp.update(index, (item: any) => {let quantity_updated = item.get("quantity") - 1; return item.set("quantity", quantity_updated)});

    this.setState({cart_items: cart_items_temp_updated});

  }  

  
  /*setFirstName(e: any){

      //let order_temp = this.state.order;
      //.setIn([ 'user', 'profile', 'name' ], 'Jack')
      //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)

      alert(e.target.value);

      //this.setState({order: order_temp_udated});

  }

  setLastName(e: any){

      //let order_temp = this.state.order;
      //.setIn([ 'user', 'profile', 'name' ], 'Jack')
      //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)

      alert(e.target.value);

      //this.setState({order: order_temp_udated});

  }

  setContactEmail(e: any){

      //let order_temp = this.state.order;
      //.setIn([ 'user', 'profile', 'name' ], 'Jack')
      //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)

      alert(e.target.value);

      //this.setState({order: order_temp_udated});

  }

  setContactMobile(e: any){

      //let order_temp = this.state.order;
      //.setIn([ 'user', 'profile', 'name' ], 'Jack')
      //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)

      alert(e.target.value);

      //this.setState({order: order_temp_udated});

  }

  setCompanyName(e: any){

      //let order_temp = this.state.order;
      //.setIn([ 'user', 'profile', 'name' ], 'Jack')
      //order_temp_updated = order_temp.updateIn([ 'name', 'first_name', 'name' ], (s) => s = e.target.value)

      alert(e.target.value);

      //this.setState({order: order_temp_udated});

  }


  setDeliveryAddressStreet(e: any){

     //alert(e.target.value);

     //this.state.order

     let delivery_address_temp = this.state.delivery_address;

     let delivery_address_temp_updated = delivery_address_temp.set("street", e.target.value);

     //alert(JSON.stringify(delivery_address_temp_updated.toJS()));

     this.setState({delivery_address: delivery_address_temp_updated});

  }

  setDeliveryAddressState(e: any){

     let delivery_address_temp = this.state.delivery_address;

     let delivery_address_temp_updated = delivery_address_temp.set("city", e.target.value);

     //alert(JSON.stringify(delivery_address_temp_updated.toJS()));

     this.setState({delivery_address: delivery_address_temp_updated});


  }

  setDeliveryAddressCity(e: any){

     let delivery_address_temp = this.state.delivery_address;

     let delivery_address_temp_updated = delivery_address_temp.set("city", e.target.value);

     //alert(JSON.stringify(delivery_address_temp_updated.toJS()));

     this.setState({delivery_address: delivery_address_temp_updated});


  }

  setDeliveryAddressZipcode(e: any){

     let delivery_address_temp = this.state.delivery_address;

     let delivery_address_temp_updated = delivery_address_temp.set("zipcode", e.target.value);

     //alert(JSON.stringify(delivery_address_temp_updated.toJS()));

     this.setState({delivery_address: delivery_address_temp_updated});


  }

  setCardNumber(e: any){



  }

  setExpiryDate(e: any){



  }

  setSecurityCode(e: any){



  }*/

  completeOrder(){

      //alert(JSON.stringify(this.state.delivery_address_street));

      //this.setState({delivery_address: {street: street, city: city, state: state, zipcode: zipcode}});

  }

  /*goMenu(){

      this.context.router.push('/order/12345');
      
  }  

  goToDeliveryAddressPayment(){

      this.context.router.push('/order/12345/datetime_contact');
      
  }  

  goToDateTimeContact(){

      this.context.router.push('/order/12345/signature');
      
  }*/


  updateCartItemQuantity(item_id:any, quantity: any){

      //alert(item_id);

      let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.map(function(item: any) {

          let new_item: any = "";

          if(item.item_id == item_id){

              new_item = {item_id: item.item_id, item_title: item.item_title, quantity: quantity};

          }else{

              new_item = {item_id: item.item_id, item_title: item.item_title, quantity: item.quantity};

          }

          return new_item;

      });

      //cart_items_temp.

      //alert(JSON.stringify(cart_items_temp_updated));

      this.setState({cart_items: cart_items_temp_updated});

  }

  removeItemFromCart(item_id:any){

      //alert(item_id);

      let cart_items_temp = this.state.cart_items;

      let cart_items_temp_updated = cart_items_temp.filter(function(item: any) {
          return item.item_id !== item_id;
      });

      this.setState({cart_items: cart_items_temp_updated});

  }

  render(): JSX.Element{

    let body: any = "";
    //let item_count = this.state.item_count;

    //alert(item_count);

    //body = <Cart order={this.state.order} cart_items={this.state.cart_items} showMenu={() => this.showMenu()} removeCartItem={(index: any) => this.removeCartItem(index)} showDeliveryAddressPayment={() => this.showDeliveryAddressPayment()} increaseCartItemQuantity={(item_id: any, index: any) => this.increaseCartItemQuantity(item_id, index)} decreaseCartItemQuantity={(item_id: any, index: any) => this.decreaseCartItemQuantity(item_id, index)}/>;//cart

    let cart = "";
    //let total_items = 0;
    let total_items = 0;
    let subtotal = 0;
    let total_cost = 0;
    let delivery_cost = 0;
    let that = this;

    console.log("order cart" + JSON.stringify(this.props.cartItems));

    if(this.props.User.orders[0].cartItems.length === 0){

        cart = "<div>there are no items in your cart<br/><Link to='/public/menu' className='btn btn-default'>Go to Menu</Link><br/></div>";

    }else{

        //console.log("order cart" + JSON.stringify(this.props.cart_items));

        //total_cost = 0;
        //item_count = 0;

        //if(that.props.order.order_type == "sconely_yours"){


        //put this in a selector?
        //total_cost = this.props.cartItems.reduce((prevVal, elem) => prevVal + elem.launches, 0);
         
        /*total_cost = this.props.cart_items.map(function(item: any){

                          //console.log("item " + JSON.stringify(item));
                          //console.log("order cart " + that.props.order);

                          //change to individual calls

                          return subtotal + (6 * item.quantity * 24);
                          //item_count = item_count + (24 * item.quantity);

                      });*/

        total_cost =  this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity * 5.50, 0); 
                      
        //}else{



        //}

        total_items = this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0);


        /*item_count = this.props.cart_items.map(function(item: any){

            console.log("item " + JSON.stringify(item));
            console.log("order cart " + that.props.order);

            if(that.props.order.order_type == "sconely_yours"){

                  //change to individual calls

                  //total_cost = total_cost + (6 * item.quantity * 24);
                  item_count = item_count + (24 * item.quantity);*/


        //delivery_cost = guest_order.delivery_cost;
        //subtotal


        //put this in render?
        /*this.props.cart_items.map(function(item: any){

            console.log("item " + JSON.stringify(item));
            console.log("order cart " + that.props.order);

            if(that.props.order.order_type == "sconely_yours"){

                  //change to individual calls

                  //total_cost = total_cost + (6 * item.quantity * 24);
                  item_count = item_count + (24 * item.quantity);
            
            }else{


                  if(item.item_type == "mini"){
                                
                    total_cost = total_cost + (5 * item.quantity * 24);
                    item_count = item_count + (24 * item.quantity);

                  }else{

                    total_cost = total_cost + (6 * item.quantity * 12);
                    item_count = item_count + (12 * item.quantity);

                  }

            }
                          
        });*/

        //for yours
        //"name" +quantity- total cost delete

        //for social
        //"name - mini" +quantity- total cost delete
        //"name - assortment" +quantity- total cost delete

        //analytics - track the users selections incremenets decrememnts and deltes?

        //yours
        //{order_type: "yours", payment_method: {}, delivery_address: {}, contact: {}, cart: [{item_id: 1, quanity: 2}]}

        //social
        //{order_type: "social", payment_method: {}, delivery_address: {}, contact: {}, cart: [{item_id: 1, mini: true, quanity: 2}, {item_id: 1, assortments: true, quanity: 2}]}


        cart = this.props.User.orders[0].cartItems.map(function(item: any, index: any){

                      //let menu_item_title_index = menu_items.findIndex where item_id == item.item_id
                      //let result = this.state.menu_items.find(function(obj: any){return obj.get('item_id') === 1;});
                      //let item_name = result.get("name");

                      //console.log(JSON.stringify(this.props.menuItems));

                      let item_name = this.props.menuItems[item.menu_item_id-1].name;
                      //let item_name = "";

                      //if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

                          console.log("order cart " + JSON.stringify(this.props.User.orders[0].cartItems));

                          //let total_amount = item.quantity;
                          //let item_cost = total_amount * 6.00;

                          return(
                                      <form className="form-horizontal" style={{border: 1}}>    
                                          <div className="form-group" style={{fontSize:16, border: 1}}>
                                            <div className="col-md-1">{item_name}</div>
                                            <div className="col-md-3">
                                              <div className="row">
                                                <div className="col-md-1" style={{fontSize: 16}}><a onClick={() => this.props.increaseCartItemQuantity(item.item_id)}><b>+</b></a></div>
                                                <div className="col-md-1">{item.quantity}</div>
                                                <div className="col-md-1" style={{fontSize: 16}}><a onClick={() => this.props.decreaseCartItemQuantity(item.item_id)}><b>-</b></a></div>
                                              </div>
                                            </div>
                                            <div className="col-md-1" style={{fontSize: 15}}><a onClick={() => this.props.removeCartItem(index)}><b>X</b></a></div>
                                          </div>
                                      </form>
                                )

                      //}else{

                          /*if(item.item_type === "mini"){

                                  let total_amount = item.quantity * 24;
                                  let item_cost = total_amount * 6.00;
                              
                                  return(<div>
                                              <form className="form-horizontal" style={{border: 1}}>
                                                  <div className="form-group" style={{border: 1}}>
                                                    <div className="col-md-4" style={{fontSize: 20}}>{item_name}- Mini-xcost</div>
                                                    <div style={{fontSize: 10}}><a onClick={() => this.props.increaseCartItemQuantity(item.item_id)}>+</a></div>
                                                    <div className="col-md-1">{item.quantity}</div>
                                                    <div className="col-md-1"><a onClick={() => this.props.decreaseCartItemQuantity(item.item_id)}>-</a></div>
                                                    <div className="col-md-1">${item_cost}</div>
                                                    <div className="col-md-1"><a onClick={() => this.props.removeCartItem(index)}><b>X</b></a></div>
                                                  </div>
                                              </form>
                                        </div>)

                            }else{

                                let total_amount = item.quantity * 12;
                                let item_cost = total_amount * 6.00;

                                return(
                                            <form className="form-horizontal" style={{border: 1}}>    
                                                <div className="form-group" style={{border: 1}}>
                                                  <div className="col-md-1" style={{fontSize: 20}}>{item.item_title}</div>
                                                  <div className="col-md-3">
                                                    <div className="row">
                                                      <div className="col-md-1" style={{fontSize: 15}}><a onClick={() => this.props.increaseCartItemQuantity(item.item_id)}><b>+</b></a></div>
                                                      <div className="col-md-1">{total_amount}</div>
                                                      <div className="col-md-1" style={{fontSize: 15}}><a onClick={() => this.props.decreaseCartItemQuantity(item.item_id)}><b>-</b></a></div>
                                                    </div>
                                                  </div>
                                                  <div className="col-md-1">${item_cost}</div>
                                                  <div className="col-md-1"><a onClick={() => this.props.removeCartItem(index)}>X</a></div>

                                                </div>
                                            </form>
                                      )

                            }
                          }*/
                  
                }.bind(this))

    }
    
    return ( <div>
                  <PublicTopNavbar/>
                  <div className="row">
                        <div className="hidden-xs col-md-3">
                          <br/>
                          <br/>
                          Sconely Yours/Social/Pool
                          <br/>
                          <br/>
                          <br/>
                        </div>
                        <div className="col-xs-12 col-md-9">
                          <br/>
                           <b>Cart Items</b>
                           <br/>
                           {cart}
                           <br/>
                           <br/>
                           <form className="form-horizontal" style={{border: 1}}>    
                              <div className="form-group" style={{border: 1}}>
                                <div className="col-md-8">                         
                                   <br/>
                                   dont show if cart
                                   <br/>
                                   <div className="col-md-4">Delivery charge</div><div className="col-md-1">$</div>
                                   <br/>
                                   <br/> 
                                   <br/>
                                   <div className="col-md-4">Total Items</div><div className="col-md-1"><b>{total_items}</b></div>
                                   <br/>
                                   <div className="col-md-4">Total Due</div><div className="col-md-1"><b>${total_cost}</b></div>
                                </div>
                              </div>
                            </form>
                            <Link to="/order/checkout" className="btn btn-default">Checkout</Link>
                            <Link to="/order/menu" className="btn btn-default">Menu</Link>    
                            <Link to="/order/preview" className="btn btn-default">Preview</Link>    
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




const mapStateToProps = (state: any, ownProps: any) => {
  console.log("order cart " + JSON.stringify(state));
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        //cart_items: state.cart.cart_items
        menuItems: state.menuItems.items,
        //guestOrder: state.guestOrder,
        User: state.User, //computed
        
        //cart_total_items //computed
        //cart_total_cost //cost
        //delivery_cost: state.guestOrder.delivery_cost
        
        cartItemsTotalQuantity: state.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0)
        

    //}
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    addCartItem: (item_id: any, dozens: any, quantity: any) => {
      //dispatch(addCartItem(1))
    },
    increaseCartItemQuantity: (item_id: any) => {
      dispatch(increaseCartItemQuantity(1))
    },
    decreaseCartItemQuantity: (item_id: any) => {
      dispatch(decreaseCartItemQuantity(1))
    },
    removeCartItem: (item_id: any) => {
      dispatch(removeCartItem(1))
    }
  }
}

const OrderCartConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCart)


//export default connect(mapStateToProps, mapDispatchToProps)(Order);

export default OrderCartConnected;

