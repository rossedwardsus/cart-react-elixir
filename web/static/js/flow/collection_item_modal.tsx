'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';

//import _ from 'lodash';

import {getMenuItems} from './actions/menu.ts';
import {cartValidated} from './actions/order_validations.ts';
import {updateOrderSession} from './actions/session.ts';
import {createOrder, addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem} from './actions/order.ts';

import CollectionSidebarCart from './collection_order_sidebar_cart.tsx';
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


class CollectionItemModal extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        menuItems: [],
        selectedItemId: "",
        selectedItemName: "",
        selectedItemIngredients: "",
        selectedItemDescription: "",
        hover_images: [],
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
      console.log("collection modal cwrp " + JSON.stringify(nextProp));
      
      this.setState({selectedItemName: nextProp.selectedItemName});
      this.setState({selectedItemDescription: nextProp.selectedItemDescription});
      this.setState({selectedItemIngredients: nextProp.selectedItemIngredients});

  }

  componentDidReceiveProps = (nextProp:any) => {

      //cart items

      //console.log("menu props");
      //console.log("collection modal cdrp " + JSON.stringify(nextProp));
      //this.setState({selectedItemName: this.props.selectedItemName});
      

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  showItem = (collection_item_id: any) => {

      /*console.log("menu_item_id " + collection_item_id);

       let collection_item = this.props.collectionItems.find((item: any) => {return item.menu_item_id == 1});

      console.log(JSON.stringify(collection_item));

      //let menu_item_description = menu_item["description"].replace(new RegExp('\n','g'), '<br/>');

      let collection_item_description = collection_item["description"].split("\\n").map((item: any) => <p>{item}<br/></p>);

      this.setState({selected_item_id: collection_item_id});
      this.setState({selected_item_name: collection_item["name"]});
      this.setState({selected_item_description: collection_item_description});
      this.setState({selected_item_ingredients:  collection_item["ingredients"]});
      this.setState({selected_item_assortment:  collection_item["assortment"]});


      this.setState({selected_item_quantity_selector: 0});
    
      $('#myModal').modal('show').css("background", "");*/

  }

  selectedItemSize = (e: React.FormEvent<HTMLSelectElement>) => {

      //console.log(e.target.value);

      this.setState({selected_item_size: e.currentTarget.value});
      this.props.selectedItemSize(e);

  }


 
 
  render(): JSX.Element{

     
          return(<div>
                    <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 className="modal-title" id="myModalLabel">{this.state.selectedItemName}</h4>
                        </div>
                        <div className="modal-body">
                          {this.state.selectedItemDescription}
                          <br/>
                            <div>
                                Ingredients: {this.state.selectedItemIngredients}
                            </div>
                          <br/>
                          <br/>
                          <div>1/2 Dozen - 20</div>
                          <br/>
                          <div>1 Dozen - 40</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)

    
  }
}





export default CollectionItemModal;

//background: url(../images/down-arrow.png) no-repeat right 12px