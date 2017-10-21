'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';

//import _ from 'lodash';

import {getMenuItems} from './actions/menu.ts';
import {cartValidated} from './actions/order_validations.ts';
import {updateOrderSession} from './actions/session.ts';
import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/order.ts';

import SidebarCart from './order_sidebar_cart.tsx';
//import MobileCheckoutButton from './mobile_checkout_button.tsx';

import PublicTopNavbar from './public/public_top_navbar.tsx';
import PublicBottomNavbar from './public/public_bottom_navbar.tsx';
import PublicPrivacyTermsNavbar from './public/public_privacy_terms_navbar.tsx';

import {getYoursMenuItems} from './selectors/menu.ts'; 

import axios from 'axios';


//type Props = {
  //title: string,
  //visited: boolean,
//  setDeliveryAddrss: () => void,
//};


class OrderMenu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        menuItems: [],
        selected_item_id: "",
        selected_item_size: "",
        selected_item_quantity: 0,
        selected_item_quantity_selector: 0,
        selected_item_name: "",
        selected_item_description: "",
        selected_item_ingredients: "",
        add_cart_item_button_classname: "form-control btn-block btn btn-default disabled",
        images: [],
        hover_images: [],
        options_count_array: [],
        selected_item_quantity_options_array: [],
        pool_message_viewed: false

    };

    //this.loadCart = this.loadCart.bind(this);
    //this.showItem = this.showItem.bind(this);
    //this.selectedItemDozens = this.selectedItemDozens.bind(this);
    //this.selectedItemQuantity = this.selectedItemQuantity.bind(this);
    //this.addCartItem = this.addCartItem.bind(this);
    //this.onMouseEnter = this.onMouseEnter.bind(this);
   
  }

  componentWillUnmount(){

    //window.onpopstate = () => {
      
      $('#myModal').modal('hide');

    //}

  }

  componentWillMount(){

    //window.onpopstate = () => {
      
      //$('#myModal').modal('toggle');

    //}

    window.scrollTo(0, 0);

    /*if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

        this.setState({cost_text: "6 each"});

    }else{

        this.setState({cost_text: <p>60 dollars per dozen regular</p><p>54 dollars per 2 dozen mini</p>});

    }*/


    //get active items from the database
    console.log("mi" + JSON.stringify(this.props.menuItems));

    //alert(JSON.stringify(this.props.cart_items));
    //this.props.dispatch();

    //this.setState({image_src: "/images/menu/MenuSavvy4in.jpg"});

    let that = this;

    /*this.state.crafted_kitchen_menu_items.map(function(item: any, index: any){

          //console.log(value.item_id);
          let images_temp = that.state.images;
          images_temp.push(item.image_id);

          let hover_images_temp = that.state.hover_images;
          hover_images_temp.push(item.hover_image_id);

          that.setState({images: images_temp});
          that.setState({hover_images: hover_images_temp});          

    });*/

    //call the backend to get id and message
    //or maybe call this in pool redirect 
    //this.props.createOrder("pool", this.props.params.pool_name);


    //this.props.getMenuItems();

    //get menu items here
    
    //this.props.getMenuItems();
    //this.setState({menu_items: this.props.menuItems.menu_items});

    /*axios.post('/api/graphql',
             {query: 'query {get_pool_order_details (pool_name: "pn", pool_date: "pd") {pool_order_id pool_order_message}}'}, {headers: {'authorization': "bearer"}}
    )
    .then((response: any) => {

          console.log("order menu pool graphql response " + JSON.stringify(response));

          dispatch({type: SET_ORDER_TYPE, order_type: "pool", pool_name: "graphql", pool_date: "graphql", pool_id: "", pool_message: "response.data.pool_message"});

          //dispatch(push("/order/menu"));

          //this.setState({pool_message: response.data.data.getPoolOrderDetails.poolOrderMessage});*/



          /*if(response.data.data.processYoursSocialOrder.errorReason != ""){

              console.log("graphql response " + JSON.stringify(response.data.data.processYoursSocialOrder.errorReason));

              //dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "", pool_date: "", pool_id: "", pool_message: "response.data.pool_message"});


              //if save_info_for_later == true...
              //last four card number

              //localStorage.setItem("sconely_user", JSON.stringify({token: "", name: "ross", contact_email: "gmail", delivery_contacts_addresses: [{street1: "1109 santa monica blvd"}], pament_methods: [{last_four_digits: "4444"}]}));

              console.log(JSON.parse(localStorage.getItem("sconely_user")).name);

              //else delete from redux
              //console.log("clear order");
              
              //dispatch({type: SET_ORDER_TYPE, value: order_type, pool_name: "", pool_date: "", pool_id: "", pool_message: response.data.pool_message});
    

              //that.props.history.push('/user');
              //context.router

              //this.context.router.push('/order/complete');
              //dispatch(push("/order/complete"));

          }else{

            //dispatch({ type: , item_id: "session_id"});

          }*/

    //});
    
  }

  componentWillReceiveProps = (nextProp:any) => {

      //console.log("menu props");
      //console.log("mi cwrp " + JSON.stringify(this.props.menuItems));

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  showItem = (menu_item_id: any) => {

      console.log("menu_item_id " + menu_item_id);

      
      //findindex

      /*this.props.menuItems.map(function(item: any){

          if(item.item_id === item_id){*/

              let menu_item = this.props.menuItems.find((item: any) => {return item.menu_item_id == menu_item_id});

              console.log(JSON.stringify(menu_item));

              this.setState({selected_item_id: menu_item_id});
              this.setState({selected_item_name: menu_item["name"]});
              this.setState({selected_item_description: menu_item["description"]});
              this.setState({selected_item_ingredients:  menu_item["ingredients"]});

      /*    }


      }.bind(this));*/

      this.setState({selected_item_quantity_selector: 0});
    
      $('#myModal').modal('show').css("background", "");;

  }

  /*selectedItemType = (e: any) => {

      //alert(e.target.value);

      this.setState({selected_item_type: e.target.value});
      this.setState({add_cart_item_button_classname: "btn btn-default"});
      
  }*/


  selectedItemQuantity = (e: any) => {

    console.log("selected_item quantity " + e.target.value);

    if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

      this.setState({selected_item_quantity: parseInt(e.target.value)});
      this.setState({selected_item_quantity_selector: e.target.value});

    }else{

      if(this.state.selected_item_size == "regular"){
        
        this.setState({selected_item_quantity: (parseInt(e.target.value) * 12)});
        this.setState({selected_item_quantity_selector: e.target.value});
      
      }else if(this.state.selected_item_size == "mini"){
        
        this.setState({selected_item_quantity: (parseInt(e.target.value) * 24)});
        this.setState({selected_item_quantity_selector: e.target.value});
      
      }//else{ 

       // this.setState({selected_item_quantity: parseInt(e.target.value)});

      //}

    }

    this.setState({add_cart_item_button_classname: "form-control btn-block btn btn-default"});
      
    //set add cart button == active
    //this.set

  }

  selectedItemSize = (e: any) => {

    console.log("selected_item size " + e.target.value);

    this.setState({selected_item_size: e.target.value});

  }

  /*selectedSocialItemQuantity = (e: any) => {

    console.log("selected_item quantity " + parseInt(e.target.value));

    //this.setState({selected_item_quantity: parseInt(e.target.value)});
    this.setState({add_cart_item_button_classname: "btn btn-default"});
      
    //set add cart button == active
    //this.set

  }*/

  addCartItem = () => {

    //if order type is social and 12_or_24 == 24 then mini flag == true

    console.log("add cart item");

    //if they haven't selected quantity and dozens dont submit and show them an error

    
    //let item_count = 0

    /*this.props.cart.cart_items.map(function(item: any){

            //console.log("item " + JSON.stringify(item));
            //console.log("order type" + JSON.stringify(that.props.order));

            //if(that.props.order.order_type == "sconely_yours"){

              //if total_cost is more then 2 then cost = 5 else 6
              //dont have to loop.  just times cart length

              //total_cost = total_cost + (5 * item.quantity);
              item_count = item_count + item.quantity;

            //}else{

    });*/

    //console.log("yours items count" + item_count);

    //if(item_count < 12){

    if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

        this.props.addCartItem(null, this.state.selected_item_id, "regular", this.state.selected_item_quantity);

    }else{

        this.props.addCartItem(null, this.state.selected_item_id, this.state.selected_item_size, this.state.selected_item_quantity);

    }
    
    this.setState({pool_message_viewed: true});    
    this.setState({selected_item_quantity_selector: 0});
    this.setState({selected_item_size: ""});


    //}

    //this.props.cartValidated();

    $('#myModal').modal('toggle');

    //cart validated in redux

  }

  goToDateTimeContact(){

      this.context.router.push("/order/12345/signature");
      
  } 

  onMouseEnter = (item_id: any) => {

      console.log("mouse enter" + JSON.stringify(item_id));

      //console.log(this.state.menu_items.find((item: any) => item.item_id === item_id).hover_image_id);

      //let image_name = this.state.smorgasbourgh_menu_items.find((item: any) => item.item_id === item_id).image_id;

      //get index of of element with item id
      //also get name of image and append "rollover to it"

      //let images_temp = this.state.images;
      //images_temp[item_id-1] = "SavvymenuJuneb5x5roll";

      let menu_items_updated = this.state.menu_items.map((item: any) => 

          {
              if(item.item_id == item_id){

              //let image_name = item.image_id;
                item.image_id = item.image_id + "roll";

              }

              return item;

          })

      console.log(JSON.stringify(menu_items_updated));

      this.setState({menu_items: menu_items_updated});

  }

  onMouseLeave = (item_id: any) => {

      //console.log("mouse leave" + item_id);

      //console.log(this.state.menu_items.find((item: any) => item.item_id === item_id).hover_image_id);

      //let image_id = this.state.menu_items.find((item: any) => item.item_id === item_id).image_id;

      //this.setState({["image_src_" + item_id]: image_id});

       let menu_items_updated = this.state.menu_items.map((item: any) => 

          {
              if(item.item_id == item_id){

                //let image_name = item.image_id;
                //remove "roll"
                let roll_index = item.image_id.indexOf("roll");

                item.image_id = item.image_id.slice(0, roll_index);
                console.log("item.image_id");

              }

              return item;

          })

      console.log(JSON.stringify(menu_items_updated));

      this.setState({menu_items: menu_items_updated});


  }

  render(): JSX.Element{

    //var that = this;
    //var page = "";


    //if(this.state.page == "items"){
    //<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>

    //alert(this.props.cart_items.length);

    //if yours order show yours menu if social order show social menu

    let options_count_array = [];
    let selected_item_quantity_options_array = [];

    //if(this.props.cartItemsTotalQuantity > 0){

    let cartItemsQuantity = 0;

    if(this.props.User.orders.length > 0){

      cartItemsQuantity = this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0);

    }

    //let cartItemsQuantity = 12;

    for (let i = 1; i < (12 - cartItemsQuantity); i++){ 

        //console.log(i);
        
        options_count_array.push(i);
    
    };

    //console.log("options count array " + JSON.stringify(11 - this.props.order.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0)));

    //this.setState{options_count_array: options_count_array};

    //let options = {for (let i = 1; i == this.props.cartItemsTotalQuantity - 1; i++){ 
    //                          <option value={i}>{i}</option>
    //              })}

    //let one = options_count_array.map((value: any) => <option value={value}>{value}</option>);

    let yours_social_pool_quantity_selector = null;


    //if order type == "pool"

    //let social_item_quantity_options = null;

    if(this.state.selected_item_size == "regular"){
        
    //    for (let i = 1; i <= 20; i++){

    //          social_item_quantity_options = social_item_quantity_options =  + <option value={i}>{i}</option>})

    //    };

          for (let i = 1; i <= 20; i++){ 

              //console.log(i);
              
              selected_item_quantity_options_array.push(i);
          
          };

    }else{

          for (let i = 1; i <= 40; i++){ 

              //console.log(i);
              
              selected_item_quantity_options_array.push(i);
          
          };

    }

    let cost_text = null;

    if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

        cost_text = <div>$6 each</div>

    }else{

        cost_text = <div><p>$60 per dozen</p><p>$54 per 2 dozen mini</p></div>;

    }


    if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

      if(cartItemsQuantity < 11){

        yours_social_pool_quantity_selector =  <div>
                                                <div className="col-xs-12 col-md-9">
                                                  <div className="col-xs-6 col-md-4">
                                                    <select className="form-control" value={this.state.selected_item_quantity_selector} onChange={this.selectedItemQuantity} style={{height: 35, width: 100, borderRadius: 0, WebkitAppearance: "none"}}>
                                                      <option value={0}>Quantity</option> 
                                                      {options_count_array.map((value: any) => <option value={value}>{value}</option>)}
                                                    </select>
                                                  </div>
                                                  <div className="col-xs-6 col-md-4">
                                                    <button className={this.state.add_cart_item_button_classname}  type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 100}}>Add To Cart</button>
                                                  </div>
                                                </div>
                                              </div>
      }
    }else{

        //if assortment == true
        //if(!true){
            
            //if(this.props.cartItemsTotalQuantity < 10){

                /*//yours_social_quantity_selector =  <div>
                                                        <div className="col-md-2">
                                                          Dozen<input type="radio" name="12_or_24" value="12" onChange={this.selectedSocialItemMini}/>
                                                        </div>
                                                        <div className="col-md-3">
                                                          2 Dozen Mini<input type="radio" name="12_or_24" value="24_minis" onChange={this.selectedSocialItemMini}/>
                                                        </div>
                                                        <div className="hidden-lg col-xs-1">
                                                          <br/>
                                                        </div>
                                                        <div className="col-md-3">
                                                          <select className="form-control" value={this.state.selected_item_quantity/12} onChange={this.selectedItemQuantity} style={{height: 35, borderRadius: 0, WebkitAppearance: "none"}}>
                                                            <option value="">Select Quantity</option> 
                                                            {options_count_array.map((value: any) => <option value={value}>{value}</option>)}
                                                          </select>
                                                        </div>
                                                        <div className="hidden-lg col-xs-1">
                                                          <br/>
                                                        </div>
                                                        <div className="col-md-2">
                                                          <button className={this.state.add_cart_item_button_classname}  type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 100}}>Add To Cart</button>
                                                        </div>
                                                      </div>*/
            //}else{

      yours_social_pool_quantity_selector =  <div>
                                                <div className="col-xs-12 col-md-12">
                                                      <div className="col-xs-12 col-md-4">
                                                      <select className="form-control" value={this.state.selected_item_size} onChange={this.selectedItemSize} style={{borderRadius: 0, height: 35, width: 150, WebkitAppearance: "none", fontSize: 16}}>
                                                        <option value="">Regular or Mini</option> 
                                                        <option value="regular">1 Dozen Regular</option>
                                                        <option value="mini">2 Dozen Mini</option>
                                                      </select>
                                                      </div>
                                                      <div className="hidden-lg col-xs-1">
                                                        <br/>
                                                      </div>
                                                      <div className="col-xs-12 col-md-4">
                                                      <select className="form-control input-large text-center text-align:center" value={this.state.selected_item_quantity_selector} onChange={this.selectedItemQuantity} style={{borderRadius: 0, height: 35, WebkitAppearance: "none", textAlign: "center", fontSize: 16}}>
                                                        <option>Quantity</option> 
                                                        {selected_item_quantity_options_array.map((value: any) => <option value={value}>{value}</option>)}
                                                      </select>
                                                      </div>
                                                      <div className="hidden-lg col-xs-1">
                                                        <br/>
                                                      </div>
                                                      <div className="col-xs-12 col-md-4">
                                                      <button className={this.state.add_cart_item_button_classname}  type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35}}>Add</button>
                                                      </div>
                                                </div>
                                            </div>


          //}
        //}
    }

    //let message = this.props.User.orders[0].pool_message.split("\n").map((item: any, key: any) => {return <span key={key}>{item}<br/></span>});

    let message = <div>
                      <form className="form-horizontal">
                        <div className="col-md-4">
                            <b>Address</b>: 
                        </div>
                        <div className="col-md-8">
                            {this.props.User.orders[0].pool_address_street1}<br/>{this.props.User.orders[0].pool_address_city},&nbsp;{this.props.User.orders[0].pool_address_state}
                        </div>
                      </form>
                      <form className="form-horizontal">
                        <div className="col-md-4">
                            <b>Location</b>: 
                        </div>
                        <div className="col-md-8">
                            {this.props.User.orders[0].pickup_location}
                        </div>
                      </form>
                      <form className="form-horizontal">
                        <div className="col-md-4">
                            <b>Date</b>: 
                        </div>
                        <div className="col-md-8">
                            {this.props.User.orders[0].pool_delivery_date_formatted}
                        </div>
                      </form>
                      <form className="form-horizontal">
                            <div className="col-md-4">
                                <b>Time</b>: 
                            </div>
                            <div className="col-md-8">
                                9:30 am
                            </div>
                      </form>
                      <form className="form-horizontal">
                          <div className="col-md-4">
                              <b>Order By:</b>
                          </div>
                          <div className="col-md-8">
                              {this.props.User.orders[0].pool_order_by_date_formatted}
                          </div>
                      </form>
                  </div>


          return(<div>
                    <PublicTopNavbar/>
                    <div className="row">
                          <div className="hidden-xs col-md-3" style={{paddingLeft: 55}}>
                            <br/>
                            <br/>
                            <b>SCONELY {this.props.User.orders[0].order_type.toUpperCase()}</b>
                            <br/>
                            {(this.props.User.orders[0].order_type == "social" && this.props.User.orders[0].cartItems.length == 0) &&
                              (<div><br/>Order by the dozen or 2 dozen for mini<br/>Plan ahead, order at least 48 hours in advance<br/><br/><b>Free Delivery</b><br/>Downtown LA<br/>Santa Monica<br/>Venice<br/><br/>Wednesday-Saturday<br/>9am-Noon<br/><br/>Contact us for other delivery options</div>)}
                            {(this.props.User.orders[0].order_type == "pool" && this.state.pool_message_viewed == false) &&
                              <img src="https://sconely-test.herokuapp.com/images/menu/laci/8thandhope_logo.jpg"/>}
                            <br/>
                            {(this.props.User.orders[0].order_type == "pool" && this.state.pool_message_viewed == false) ? message : <SidebarCart User={this.props.User} path={this.props.path} menuItems={this.props.menuItems} increaseCartItemQuantity={(item_index: any) => this.props.increaseCartItemQuantity(item_index)} decreaseCartItemQuantity={(item_index: any) => this.props.decreaseCartItemQuantity(item_index)} removeCartItem={(item_index: any) => this.props.removeCartItem(item_index)} updateOrderSession={(screen: any) => this.props.updateOrderSession(screen)}/>}
                            <br/>
                          </div>
                          <div className="col-xs-12 col-md-8" style={{paddingLeft: 0, paddingRight: 0}}>
                            <div className="hidden-lg" style={{paddingLeft: 15}}>
                              <b>SCONELY {this.props.User.orders[0].order_type.toUpperCase()}</b>
                              <br/>
                              {(this.props.User.orders[0].order_type == "social" && this.props.User.orders[0].cartItems.length == 0) &&
                              (<div><br/><br/>Order by the dozen or 2 dozen for mini<br/>Plan ahead, order at least 48 hours in advance<br/><br/><b>Free Delivery</b><br/>Downtown LA<br/>Santa Monica<br/>Venice<br/><br/>Wednesday-Saturday<br/>9am-Noon<br/><br/>Contact us for other delivery options</div>)}
                              {(this.props.User.orders[0].order_type == "pool" && this.state.pool_message_viewed == false) &&
                                <img src="https://sconely-test.herokuapp.com/images/menu/laci/8thandhope_logo.jpg"/>}
                              <br/>
                              {(this.props.User.orders[0].order_type == "pool" && this.state.pool_message_viewed == false) ? message : <SidebarCart User={this.props.User} path={this.props.path} menuItems={this.props.menuItems} increaseCartItemQuantity={(item_index: any) => this.props.increaseCartItemQuantity(item_index)} decreaseCartItemQuantity={(item_index: any) => this.props.decreaseCartItemQuantity(item_index)} removeCartItem={(item_index: any) => this.props.removeCartItem(item_index)} updateOrderSession={(screen: any) => this.props.updateOrderSession(screen)}/>}
                              <br/>
                            </div>
                            <br/>
                            {this.props.menuItems.map(function(item: any, index: any){

                                //console.log(item);

                                //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

                                //this.setState({image_id: image_id});

                                //console.log("rerender ");

                                //console.log("image id " + this.state["image_src_" + item.item_id]);

                                //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                                return(
                                        <div className="col-xs-12 col-md-4 col-lg-4" style={{marginTop: 0, marginBottom: 0}}>
                                      
                                              <img id="1" className="img-responsive" onClick={() => this.showItem(item.menu_item_id)} src={"/images/menu/" + item.name.toLowerCase().replace(/ /g, "") + ".jpg"} data-target="myModal" alt="..." />
                                          <br/>
                                          <b>{item.name}</b>
                                          <br/>
                                          <br/>
                                          <br/>
                                        </div>
                              );
                            }.bind(this))}
                              
                            <br/>
                            <br/>
                            <br/>
                          </div>
                    </div>
                  <br/>
                  <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 className="modal-title" id="myModalLabel">{this.state.selected_item_name}</h4>
                        </div>
                        <div className="modal-body">
                            {this.state.selected_item_description}
                            <br/>
                            <br/>
                            Ingredients: {this.state.selected_item_ingredients}
                            <br/>
                            <br/>
                            {cost_text}
                        </div>
                        <div className="modal-footer">
                          <form className="form-horizontal">
                                {yours_social_pool_quantity_selector}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <PublicBottomNavbar/>
                  <PublicPrivacyTermsNavbar/>
                </div>)

    
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  //console.log("mapstatetoprops order menu " + JSON.stringify(state.routing));
  return {

    //started_order: state.User.orders.findIndex((order: any) => order.status == "started"),

    //if yours
    //menuItems: getYoursMenuItems(state),
    //else
    //menuItems: getYoursMenuItems(state),
    

    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        menuItems: state.menuItems.items,
        //guestOrder: state.guestOrder,
        //order: state.User.orders.find((order: any) => order.status == "current"),
        User: state.User,
        path: state.routing.locationBeforeTransitions.pathname,
        
        //cart_total_items //computed
        //cart_total_cost //cost
        //delivery_cost: state.guestOrder.delivery_cost
        
        //cartItemsTotalQuantity: state.guestOrder.cart_items.reduce((amount: any, item: any) => amount + item.quantity, 0)
        

    //}
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    getMenuItems: () => {
      console.log("here");
      dispatch(getMenuItems());
    },
    addCartItem: (order_id: any, item_id: any, size: any, quantity: any) => {
      dispatch(addCartItem(order_id, item_id, size, quantity));
    },
    increaseCartItemQuantity: (item_index: any) => {
      dispatch(increaseCartItemQuantity(item_index));
    },
    decreaseCartItemQuantity: (item_index: any) => {
      dispatch(decreaseCartItemQuantity(item_index));
    },
    removeCartItem: (item_index: any) => {
      dispatch(removeCartItem(item_index));
    },
    cartValidated: () => {
      dispatch(cartValidated());
    },
    createOrder: (order_type: any, name: any) => {
      //dispatch(createOrder(order_type, name));
    },
    updateOrderSession: (screen: any) => {
      dispatch(updateOrderSession(screen))
    }
  }
}

const OrderMenuConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderMenu);

export default OrderMenuConnected;

//background: url(../images/down-arrow.png) no-repeat right 12px