'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';

//import _ from 'lodash';

//import {get} from './actions/menu.ts';
//import {cartValidated} from './actions/order_validations.ts';
//import {updateOrderSession} from './actions/session.ts';
//import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/order.ts';

//import SocialSidebarCart from './social_order_sidebar_cart.tsx';
//import MobileCheckoutButton from './mobile_checkout_button.tsx';

import CollectionItemModal from './collection_item_modal.tsx';

import PublicTopNavbar from './public/public_top_navbar.tsx';
import PublicBottomNavbar from './public/public_bottom_navbar.tsx';
import PublicPrivacyTermsNavbar from './public/public_privacy_terms_navbar.tsx';

import {getCollectionDetails, getCollectionMenuItems} from './actions/collections.ts';  
//import {} from './actions/collections.ts';  
//import {getCollectionMenuItems} from './action/collections.ts'; 

//import axios from 'axios';


//type Props = {
  //title: string,
  //visited: boolean,
//  setDeliveryAddrss: () => void,
//};


class CollectionMenuItems extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        collectionDetails: [],
        //collection_items: [{item_id: 1, item_title: "You make me smile"}, {item_id: 1, item_title: "Apple of my eye"}]
        collectionMenuItems: [],
        collectionTitle: "",
        collectionDescription: "",
        selectedItemId: "",
        selectedItemName: "",
        selectedItemIngredients: "",
        selectedItemDescription: ""
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

      window.scrollTo(0, 0);

      //this.props.createOrder("social", "", "");
      this.props.getCollectionDetails(this.props.params.collection_name);
      this.props.getCollectionMenuItems(this.props.params.collection_name);

      console.log(JSON.stringify(this.props.params));
    
  }

  componentWillReceiveProps = (nextProps:any) => {

      //cart items

      console.log("collection details" + JSON.stringify(nextProps.collectionDetails));
      this.setState({collectionName: nextProps.collectionDetails.name})

      let collectionDescription = nextProps.collectionDetails.description.split("\\n").map((item: any) => <p>{item}<br/></p>);

      this.setState({collectionDescription: collectionDescription});

      //console.log("menu props");
      console.log("collection menu items cwrp " + JSON.stringify(nextProps.collectionMenuItems));
      this.setState({collectionMenuItems: nextProps.collectionMenuItems});

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  showItem = (collection_menu_item_id: any) => {

      console.log("menu_item_id " + collection_menu_item_id);

      let collection_menu_item = this.state.collectionMenuItems.find((collection_item: any) => {console.log(collection_item); return collection_item.id === collection_menu_item_id});

      console.log(JSON.stringify(collection_menu_item));

      //let menu_item_description = menu_item["description"].replace(new RegExp('\n','g'), '<br/>');

      let collection_menu_item_description = collection_menu_item["collection_description"].split("\\n").map((item: any) => <p>{item}<br/></p>);

      this.setState({selectedItemId: collection_menu_item.id});
      this.setState({selectedItemName: collection_menu_item["collection_name"]});
      this.setState({selectedItemDescription: collection_menu_item_description});
      this.setState({selectedItemIngredients:  collection_menu_item["ingredients"]});
      //this.setState({selected_item_assortment:  menu_item["assortment"]});


      //this.setState({selected_item_quantity_selector: 0});
    
      $('#myModal').modal('show').css("background", "");;


  }



  selectedItemSize = (e: any) => {

    console.log("selected_item size " + e.target.value);

    this.setState({selected_item_size: e.target.value});
  
  }


  selectedItemQuantity = (e: any) => {

    console.log("selected_item quantity " + e.target.value);

    //if(this.props.User.orders[0].order_type == "yours" || this.props.User.orders[0].order_type == "pool"){

    //  this.setState({selected_item_quantity: parseInt(e.target.value)});
    //  this.setState({selected_item_quantity_selector: e.target.value});

    //}else{

      if(this.state.selected_item_size == "regular"){
        
        this.setState({selected_item_quantity: (parseInt(e.target.value) * 12)});
        this.setState({selected_item_quantity_selector: e.target.value});
      
      }else if(this.state.selected_item_size == "mini"){
        
        this.setState({selected_item_quantity: (parseInt(e.target.value) * 24)});
        this.setState({selected_item_quantity_selector: e.target.value});
      
      }//else{ 

       // this.setState({selected_item_quantity: parseInt(e.target.value)});

      //}

    //}

    this.setState({add_cart_item_button_classname: "form-control btn-block btn btn-default"});
    this.setState({add_cart_item_button_disabled: false});
      
    //set add cart button == active
    //this.set

  }

  

  addCartItem = () => {

    //if order type is social and 12_or_24 == 24 then mini flag == true

    console.log("add cart item");

    
  }

  ////let message = this.props.User.orders[0].pool_message.split("\n").map((item: any, key: any) => {return <span key={key}>{item}<br/></span>});

 
  render(): JSX.Element{

    
     
          return(<div>
                      <PublicTopNavbar/>
                      <div className="row">
                          <div className="hidden-xs col-sm-3 col-md-3" style={{paddingLeft: 55}}>
                              <Link to="/collections" className="btn btn-default btn-block" style={{borderRadius: 0}}>Back to Collections</Link> 
                              <br/>
                              {this.state.collectionName}
                              <br/>
                              <br/>
                              {this.state.collectionDescription}
                              <br/>
                              <br/>
                              Baking and delivery on Valentines Day
                              <br/>
                              <br/>
                              <Link to="/collections/order/menu" className="btn btn-default btn-block" style={{borderRadius: 0}}>Start Order</Link>   
                              </div>
                          <div className="col-xs-12 col-md-8" style={{paddingLeft: 0, paddingRight: 0}}>
                              <br/>
                              {this.state.collectionMenuItems.map(function(collection_item: any, index: any){

                                    //console.log(item);

                                    //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

                                    //this.setState({image_id: image_id});

                                    //console.log("rerender ");

                                    //console.log("image id " + this.state["image_src_" + item.item_id]);

                                    //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                                    return(
                                            <div className="col-xs-12 col-md-4 col-lg-4" style={{marginTop: 0, marginBottom: 0}}>
                                          
                                                  <img id="1" className="img-responsive" onClick={() => this.showItem(collection_item.id)} src={"/images/collections/valentines_day/" + collection_item.id + ".jpg"} data-target="myModal" alt="..." />
                                              <br/>
                                              <b>{collection_item.collection_name}</b>
                                              <br/>
                                              <br/>
                                              <br/>
                                            </div>
                                  );
                                }.bind(this))}

                          </div>
                          <CollectionItemModal collectionItems={[{item_id: 1, item_title: "test"}]} selectedItemName={this.state.selectedItemName} selectedItemIngredients={this.state.selectedItemIngredients} selectedItemDescription={this.state.selectedItemDescription}/>
                    </div>
                    <PublicBottomNavbar/>
                    <PublicPrivacyTermsNavbar/>
                              
              
                </div>)

    
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops collection menu items " + JSON.stringify(state.collections.collectionMenuItems));
  return {

      collectionDetails: state.collections.collectionDetails,
      collectionMenuItems: state.collections.collectionMenuItems,
  
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    getCollectionDetails: (collection_name: any) => {
      //console.log("here");
      dispatch(getCollectionDetails(collection_name));
    },

    getCollectionMenuItems: (collection_name: any) => {
      //console.log("here");
      dispatch(getCollectionMenuItems(collection_name));
    },
  }
}

const CollectionMenuItemsConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionMenuItems);

export default CollectionMenuItemsConnected;

//background: url(../images/down-arrow.png) no-repeat right 12px