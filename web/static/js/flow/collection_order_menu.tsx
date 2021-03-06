'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';

//import _ from 'lodash';

import {getCollectionDetails, getCollectionMenuItems} from './actions/collections.ts';
import {cartValidated} from './actions/order_validations.ts';
import {updateOrderSession} from './actions/session.ts';
import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/collections_order.ts';

import CollectionsSidebarCart from './collection_order_sidebar_cart.tsx';
//import MobileCheckoutButton from './mobile_checkout_button.tsx';
import CollectionMenuItems from './collection_order_menu_items.tsx';
import CollectionMenuItemModal from './collection_order_menu_item_modal.tsx';

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


class CollectionOrderMenu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        collectionDetails: {},
        collectionDescription: "",
        collectionMenuItems: [],
        selectedItemId: "",
        selectedItemSize: "",
        selectedItemQuantity: 0,
        selected_item_quantity_selector: 0,
        selectedItemName: "",
        selectedItemDescription: "",
        selectedItemIngredients: "",
        selected_item_assortment: false,
        add_cart_item_button_classname: "btn-block btn btn-default disabled",
        add_cart_item_button_disabled: true,
        images: [],
        hover_images: [],
        options_count_array: [],
        selected_item_quantity_options_array: [],
        pool_message_viewed: false,
        cartItems: [],
        totalItems: 0

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

    //window.scrollTo(0, 0);


    //check if the collection has already been fetced and order created
    console.log("cwm collectiondetails" + JSON.stringify(this.props.collectionDetails));
    console.log("cwm user" + JSON.stringify(this.props.collectionDetails));

    if(this.props.collectionDetails.length === 0){
    
          this.props.getCollectionDetails("hearts_collection");

    }

    this.props.getCollectionMenuItems("hearts_collection");
    
    if(this.props.User.orders.length === 0){
      
          this.props.createOrder("collection");

    }

    //this.setState({menuItems: this.props.menuItems});


    //get active items from the database
    //console.log("mi" + JSON.stringify(this.props.menuItems));

    //alert(JSON.stringify(this.props.cart_items));
    //this.props.dispatch();

    //this.setState({image_src: "/images/menu/MenuSavvy4in.jpg"});

    let that = this;

    
  }

  componentDidMount = () => {

    window.scrollTo(0, 0);

  }

  componentWillReceiveProps = (nextProp:any) => {

      //cart items

      window.scrollTo(0, 0);

      console.log("collection order menu cwrp " + JSON.stringify(nextProp.collectionDetails));
      console.log("collection order menu mi cwrp " + JSON.stringify(nextProp.collectionMenuItems));
      console.log("collection order menu cartitems length " + JSON.stringify(nextProp.User.orders[0].cartItems.length));

      let collectionDescription = "";

      console.log("typeof " + Object.keys(nextProp.collectionDetails).length);

      if(Object.keys(nextProp.collectionDetails).length > 0){

          collectionDescription = nextProp.collectionDetails.description.split("\\n").map((item: any) => <p>{item}</p>);
          //collectionDescription = collectionDescription.split("<b>").map((item: any) => <b>{item}</b>);
          
          this.setState({collectionDetails: nextProp.collectionDetails});
          this.setState({collectionDescription: collectionDescription});
          this.setState({collectionMenuItems: nextProp.collectionMenuItems});

      }

      //if(nextProp.User.orders.length > 0){
        //this.setState({totalItems: nextProp.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0)});
        this.setState({totalItems: nextProp.User.orders[0].cartItems.length});

      //}

      /*let four_items = [];
      let six_items = [];
      let total_four_items = 0;
      let total_six_items = 0;

      four_items = nextProp.User.orders[0].cartItems.filter((item: any) => {

            //console.log(JSON.stringify(item));

            if(item.size == "four"){

                return item;

            }

            return

      });

        console.log("four items" + JSON.stringify(four_items));

        six_items = nextProp.User.orders[0].cartItems.filter((item: any) => {

            //console.log(JSON.stringify(item));

            if(item.size == "six"){

                return item;

            }

            return

        });

        console.log("four items" + JSON.stringify(four_items));


        //console.log("regular items " + JSON.stringify(four_items));
        
        //1 doz/12 - 5/60 doz regular sized scones, $5 each
        //6 doz/72 - 15/174 doz regular sized scones, $4.75 each
        //16 doz/192 - 20/240 doz regular sized scones, $4.50 each

        
        //total_items = (four_items.reduce((amount: any, item: any) => amount + item.quantity, 0)) + (four_items.reduce((amount: any, item: any) => amount + item.quantity, 0));
        total_four_items = four_items.reduce((amount: any, item: any) => amount + item.quantity, 0);
        total_six_items = six_items.reduce((amount: any, item: any) => amount + item.quantity, 0);*/

      

      //console.log("total items " + total_items);

      //console.log("menu props");
      
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  showItem = (collection_menu_item_id: any) => {

      console.log("collection_menu_item_id " + collection_menu_item_id);

      let collectionMenuItem = this.props.collectionMenuItems.find((item: any) => {return item.menu_item_id == collection_menu_item_id});

      console.log(JSON.stringify(collectionMenuItem));

      //let menu_item_description = menu_item["description"].replace(new RegExp('\n','g'), '<br/>');

      let collection_menu_item_description = collectionMenuItem["collection_description"].split("\\n").map((item: any) => <p>{item}<br/></p>);

      this.setState({selectedItemId: collection_menu_item_id});
      this.setState({selectedItemName: collectionMenuItem["collection_name"]});
      this.setState({selectedItemDescription: collection_menu_item_description});
      this.setState({selectedItemIngredients:  collectionMenuItem["ingredients"]});
      //this.setState({selectedItemAssortment:  collectionMenuItem["assortment"]});


      //this.setState({selected_item_quantity_selector: 0});
    
      $('#myModal').modal('show').css("background", "");;

  }



  selectedItemSize = (e: any) => {

    console.log("selected_item size " + e.target.value);

    this.setState({selectedItemSize: e.target.value});
  
  }


  selectedItemQuantity = (e: any) => {

    console.log("selected_item quantity " + e.target.value);

    //if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

    //  this.setState({selected_item_quantity: parseInt(e.target.value)});
    //  this.setState({selected_item_quantity_selector: e.target.value});

    //}else{

    this.setState({selectedItemQuantity: (parseInt(e.target.value))});
        
    //this.setState({selected_item_quantity_selector: e.target.value});

    // this.setState({selected_item_quantity: parseInt(e.target.value)});

    this.setState({add_cart_item_button_classname: "form-control btn-block btn btn-default"});
    this.setState({add_cart_item_button_disabled: false});
      
    //set add cart button == active
    //this.set

  }

  

  addCartItem = () => {

    //if order type is social and 12_or_24 == 24 then mini flag == true

    console.log("add cart item");

    //if they haven't selected quantity and dozens dont submit and show them an error

    
    //let item_count = 0

  

    //console.log("yours items count" + item_count);


    //quantity X 6

        this.props.addCartItem(null, this.state.selectedItemId, this.state.selectedItemSize, this.state.selectedItemQuantity);

    //}
    
    //this.setState({pool_message_viewed: true});    
    this.setState({selected_item_quantity_selector: 0});
    this.setState({selected_item_size: ""});
    this.setState({add_cart_item_button_classname: "btn-block btn btn-default disabled"});
    this.setState({add_cart_item_button_disabled: true});



    //}

    //this.props.cartValidated();

    $('#myModal').modal('toggle');

    //cart validated in redux

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
    let social_quantity_selector = null;
    let cartItemsQuantity = 0;

    
    cartItemsQuantity = this.props.User.orders[0].cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0);

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

    let cost_text = <div><p>$60 per dozen</p><p>$54 per 2 dozen mini</p></div>;

    
    if(cartItemsQuantity < 100){

        
          /*social_quantity_selector =  <div>
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
                                                <button className={this.state.add_cart_item_button_classname} disabled={this.state.add_cart_item_button_disabled} type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35}}>Add</button>
                                                </div>
                                          </div>
                                      </div>*/


          //}
        //}
    }

    //let message = <div>A selection of sweet Sconely favorites<br/>Packed in gift box, delivered to loved ones<br/>Perfect for Valentine’s Day or any day!</div>

    //let total_items = this.state.cartItems.reduce((amount: any, item: any) => amount + item.quantity, 0));
   
//if the total cart item quantity > 1
//{this.state.orders[0].cartItems.}*/


     
          return(<div>
                    <PublicTopNavbar/>
                    <div className="row">
                          <div className="hidden-xs col-sm-3 col-md-3" style={{paddingLeft: 55}}>
                            <br/>
                            <br/>
                            <b>{this.state.collectionDetails.name}</b>
                            <br/>
                            <br/>
                            {(this.state.totalItems < 1) && this.state.collectionDescription}
                            <br/>
                            <CollectionsSidebarCart User={this.props.User} collectionDetails={this.props.collectionDetails} path={this.props.path} collectionMenuItems={this.state.collectionMenuItems} increaseCartItemQuantity={(item_index: any) => this.props.increaseCartItemQuantity(item_index)} decreaseCartItemQuantity={(item_index: any) => this.props.decreaseCartItemQuantity(item_index)} removeCartItem={(item_index: any) => this.props.removeCartItem(item_index)} updateOrderSession={(screen: any) => this.props.updateOrderSession(screen)}/>
                            <br/>
                          </div>
                          <div className="col-xs-12 col-md-7" style={{paddingLeft: 0, paddingRight: 0}}>
                            <br/>
                            <div className="visible-xs">
                              {(this.state.totalItems < 1) && this.state.collectionDescription}
                              <br/>
                              <CollectionsSidebarCart User={this.props.User} collectionDetails={this.props.collectionDetails} path={this.props.path} collectionMenuItems={this.state.collectionMenuItems} increaseCartItemQuantity={(item_index: any) => this.props.increaseCartItemQuantity(item_index)} decreaseCartItemQuantity={(item_index: any) => this.props.decreaseCartItemQuantity(item_index)} removeCartItem={(item_index: any) => this.props.removeCartItem(item_index)} updateOrderSession={(screen: any) => this.props.updateOrderSession(screen)}/>
                            </div>
                            <br/>

                            {this.state.collectionMenuItems.map(function(item: any, index: any){

                                //console.log(item);

                                //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

                                //this.setState({image_id: image_id});

                                //console.log("rerender ");

                                //console.log("image id " + this.state["image_src_" + item.item_id]);

                                let image_name = "";
                                image_name = item.collection_name.toLowerCase().replace(/ /g, "");
                                image_name = image_name.replace("'", "");
                                image_name = image_name.replace(/\+/g, "");
                                image_name = image_name.replace(/,/g, "");
                                image_name = image_name.replace("(", "");
                                image_name = image_name.replace(")", "");

                                //console.log("image " + item.collection_name.toLowerCase().replace(/ /g, "").replace(/,/g, "").replace(/\'/g, "").replace(/\+/g, "") + ".jpg");

                                console.log("image " + image_name);

                                //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                                return(
                                        <div className="col-xs-12 col-md-5 col-lg-5" style={{marginTop: 0, marginBottom: 0}}>
                                      
                                              <img id="1" className="img-responsive" onClick={() => this.showItem(item.menu_item_id)} src={"/images/collections/hearts/" + image_name + ".jpg"} data-target="myModal" alt="..." />
                                          <br/>
                                          <b>{item.collection_name}</b>
                                          <br/>
                                          <br/>
                                          <br/>
                                        </div>
                              );
                            }.bind(this))}
                          </div>
                          <br/>
                          <br/>
                          <br/>
                          <CollectionMenuItemModal menu_item_id={this.state.selected_item_id} selectedItemName={this.state.selectedItemName} selectedItemIngredients={this.state.selectedItemIngredients} selectedItemDescription={this.state.selectedItemDescription} selectedItemQuantity={(e: any) => this.selectedItemQuantity(e)} selectedItemSize={(e: any) => this.selectedItemSize(e)} addCartItem={() => this.addCartItem()}/>
                          <div className="hidden-xs col-sm-3 col-md-3" style={{paddingLeft: 55}}></div>
                  </div>
                  <PublicBottomNavbar/>
                  <PublicPrivacyTermsNavbar/>
                </div>)

    
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops collection order menu " + JSON.stringify(state.User));
  return {

    //started_order: state.User.orders.findIndex((order: any) => order.status == "started"),

    //if yours
    //menuItems: getYoursMenuItems(state),
    //else
    //menuItems: getYoursMenuItems(state),
    

    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        collectionDetails: state.collections.collectionDetails,
        collectionMenuItems: state.collections.collectionMenuItems,

        //guestOrder: state.guestOrder,
        //order: state.User.orders.find((order: any) => order.status == "current"),
        User: state.User,
        //path: state.routing.locationBeforeTransitions.pathname,
        
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

    getCollectionDetails: (collection_name: any) => {
      console.log("gmi");
      dispatch(getCollectionDetails(collection_name));
    },
    getCollectionMenuItems: (collection_name: any) => {
      console.log("gmi");
      dispatch(getCollectionMenuItems(collection_name));
    },
    createOrder: (order_type: any) => {
      dispatch(createOrder(order_type, "", ""));
    },
    addCartItem: (order_id: any, item_id: any, size: any, quantity: any) => {
      console.log("increasecartitemquantity");
      
      dispatch(addCartItem(order_id, item_id, size, quantity));
    },
    increaseCartItemQuantity: (item_index: any) => {
      console.log("increasecartitemquantity");
      dispatch(increaseCartItemQuantity(item_index));
    },
    decreaseCartItemQuantity: (item_index: any) => {
      console.log("increasecartitemquantity");
      
      dispatch(decreaseCartItemQuantity(item_index));
    },
    removeCartItem: (item_index: any) => {
      console.log("removecartitem");

      dispatch(removeCartItem(item_index));
    },
    cartValidated: () => {
      dispatch(cartValidated());
    },
    updateOrderSession: (screen: any) => {
      dispatch(updateOrderSession(screen))
    }
  }
}

const CollectionOrderMenuConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionOrderMenu);

export default CollectionOrderMenuConnected;

//background: url(../images/down-arrow.png) no-repeat right 12px