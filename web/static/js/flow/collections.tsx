'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';

//import _ from 'lodash';

import {getMenuItems} from './actions/menu.ts';
import {cartValidated} from './actions/order_validations.ts';
import {updateOrderSession} from './actions/session.ts';
import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/order.ts';

import SocialSidebarCart from './social_order_sidebar_cart.tsx';
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


class Collections extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        collections: [{collection_id: 1, collection_title: "valentines day", collection_url_name: "valentines_day"}],
        

    };

     
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

    //this.props.createOrder("social", "", "");
    //this.props.getMenuItems();
    
    //this.setState({menuItems: this.props.menuItems});


    //get active items from the database
    //console.log("mi" + JSON.stringify(this.props.menuItems));

    //alert(JSON.stringify(this.props.cart_items));
    //this.props.dispatch();

    //this.setState({image_src: "/images/menu/MenuSavvy4in.jpg"});

    let that = this;

    
  }

  componentWillReceiveProps = (nextProp:any) => {

      //cart items

      //console.log("menu props");
      console.log("social menu mi cwrp " + JSON.stringify(this.props.menuItems));
      this.setState({menuItems: this.props.menuItems});

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  showItem = (collection_id: any) => {

      this.context.router.push('/collections/1');


      //console.log("menu_item_id " + menu_item_id);

       /*let menu_item = this.props.menuItems.find((item: any) => {return item.menu_item_id == menu_item_id});

      console.log(JSON.stringify(menu_item));

      //let menu_item_description = menu_item["description"].replace(new RegExp('\n','g'), '<br/>');

      let menu_item_description = menu_item["description"].split("\\n").map((item: any) => <p>{item}<br/></p>);

      this.setState({selected_item_id: menu_item_id});
      this.setState({selected_item_name: menu_item["name"]});
      this.setState({selected_item_description: menu_item_description});
      this.setState({selected_item_ingredients:  menu_item["ingredients"]});
      this.setState({selected_item_assortment:  menu_item["assortment"]});


      this.setState({selected_item_quantity_selector: 0});
    
      $('#myModal').modal('show').css("background", "");*/

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

 
 
  render(): JSX.Element{

    //var that = this;
    //var page = "";


    //if(this.state.page == "items"){
    //<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>

    //alert(this.props.cart_items.length);

    //if yours order show yours menu if social order show social menu

  
     
          return(<div>
                      <PublicTopNavbar/>
                      <div className="row">
                          <div className="hidden-xs col-sm-3 col-md-3" style={{paddingLeft: 55}}>
                          </div>
                          <div className="col-xs-12 col-md-8" style={{paddingLeft: 0, paddingRight: 0}}>

                              {this.state.collections.map(function(collection: any, index: any){

                                    //console.log(item);

                                    //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

                                    //this.setState({image_id: image_id});

                                    //console.log("rerender ");

                                    //console.log("image id " + this.state["image_src_" + item.item_id]);

                                    //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                                    return(
                                            <div className="col-xs-12 col-md-4 col-lg-4" style={{marginTop: 0, marginBottom: 0}}>
                                          
                                                  <img id="1" className="img-responsive" onClick={() => this.showItem(collection.collection_url_name)} src={"/images/collections/Ursaheart2.jpg"} data-target="myModal" alt="..." />
                                              <br/>
                                              <b>{collection.collection_title}</b>
                                              <br/>
                                              <br/>
                                              <br/>
                                            </div>
                                  );
                                }.bind(this))}

                          </div>
                    </div>
                    <PublicBottomNavbar/>
                    <PublicPrivacyTermsNavbar/>
                </div>)

    
  }
}



export default Collections;

//background: url(../images/down-arrow.png) no-repeat right 12px