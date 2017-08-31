'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';

//import _ from 'lodash';

import {getMenuItems} from './actions/menu.ts';
import {cartValidated} from './actions/order_validations.ts';
import {addCartItem} from './actions/user.ts';
import {createOrder} from './actions/order.ts';

import SidebarCart from './order_sidebar_cart.tsx';
import MobileCheckoutButton from './mobile_checkout_button.tsx';
import PublicTopNavbar from './public/public_top_navbar.tsx';

import {getYoursMenuItems} from './selectors/menu.ts'; 


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
        selected_item_12_or_24_mini: "",
        selected_item_quantity: "",
        selected_item_name: "",
        selected_item_description: "",
        selected_item_ingredients: "",
        add_cart_item_button_classname: "btn btn-default disabled",
        images: [],
        hover_images: [],
        options_count_array: []

    };

    //this.loadCart = this.loadCart.bind(this);
    //this.showItem = this.showItem.bind(this);
    //this.selectedItemDozens = this.selectedItemDozens.bind(this);
    //this.selectedItemQuantity = this.selectedItemQuantity.bind(this);
    //this.addCartItem = this.addCartItem.bind(this);
    //this.onMouseEnter = this.onMouseEnter.bind(this);
   
  }

  componentWillMount(){

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

    //this.props.createOrder("sconely_yours", this.props.params.name);
    //this.props.getMenuItems();

    //get menu items here
    
    this.props.getMenuItems();
    //this.setState({menu_items: this.props.menuItems.menu_items});
    
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

  showItem = (item_id: any) => {

      console.log("item_id " + item_id);

      
      //findindex

      /*this.props.menuItems.map(function(item: any){

          if(item.item_id === item_id){*/

              this.setState({selected_item_id: item_id});
              this.setState({selected_item_name: this.props.menuItems[0]["name"]});
              this.setState({selected_item_description: this.props.menuItems[0]["description"]});
              this.setState({selected_item_ingredients: "ingredients"});

      /*    }


      }.bind(this));*/

      $('#myModal').modal('show');

  }

  /*selectedItemType = (e: any) => {

      //alert(e.target.value);

      this.setState({selected_item_type: e.target.value});
      this.setState({add_cart_item_button_classname: "btn btn-default"});
      
  }*/


  selectedYoursItemQuantity = (e: any) => {

    console.log("selected_item quantity " + e.target.value);

    this.setState({selected_item_quantity: e.target.value});
    this.setState({add_cart_item_button_classname: "btn btn-default"});
      
    //set add cart button == active
    //this.set

  }

  selectedSocialItem12or24mini = (e: any) => {

    console.log("selected_item social 12or24mini " + e.target.value);

    this.setState({selected_item_12_or_24_minis: e.target.value});
    //this.setState({add_cart_item_button_classname: "btn btn-default"});
      
    //set add cart button == active
    //this.set

  }

  selectedSocialItemQuantity = (e: any) => {

    console.log("selected_item quantity " + e.target.value);

    this.setState({selected_item_quantity: e.target.value});
    this.setState({add_cart_item_button_classname: "btn btn-default"});
      
    //set add cart button == active
    //this.set

  }

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

    this.props.addCartItem(null, this.state.selected_item_id, this.state.selected_item_12_or_24_minis, this.state.selected_item_quantity);
        

        //this.setState({selected_item_quantity: ""});

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

    //if(this.props.cartItemsTotalQuantity > 0){

    for (let i = 1; i < 12 - this.props.cartItemsTotalQuantity; i++){ 

        //console.log(i);
        
        options_count_array.push(i);
    
    };

    console.log("oca " + JSON.stringify(11 - this.props.cartItemsTotalQuantity));

    //let options = {for (let i = 1; i == this.props.cartItemsTotalQuantity - 1; i++){ 
    //                          <option value={i}>{i}</option>
    //              })}

    //let one = options_count_array.map((value: any) => <option value={value}>{value}</option>);

    let yours_social_quantity_selector = null;

    if(this.props.User.orders[0].order_type == "yours"){

        if(this.props.cartItemsTotalQuantity < 10){

            yours_social_quantity_selector =  <div>
                                                    <div className="col-md-3">
                                                      <select className="form-control" value={this.state.selected_item_quantity} onChange={this.selectedYoursItemQuantity} style={{height: 35, width: 120}}>
                                                        <option value="">Select Quantity</option> 
                                                        {options_count_array.map((value: any) => <option value={value}>{value}</option>)}
                                                        
                                                      </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                      <button className={this.state.add_cart_item_button_classname}  type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Add To Cart</button>
                                                    </div>
                                                  </div>
        }
    }else{

        //if assortment == true

        if(this.props.cartItemsTotalQuantity < 10){

            yours_social_quantity_selector =  <div>
                                                    <div className="col-md-3">
                                                      12<input type="radio" name="12_or_24" value="12" onChange={this.selectedSocialItem12or24mini}/>24-mini<input type="radio" name="12_or_24" value="24_minis" onChange={this.selectedSocialItem12or24mini}/>
                                                    </div>
                                                    <div className="col-md-3">
                                                      <select className="form-control" value={this.state.selected_item_quantity} onChange={this.selectedSocialItemQuantity} style={{height: 35, width: 120}}>
                                                        <option value="">Select Quantity</option> 
                                                        {options_count_array.map((value: any) => <option value={value}>{value}</option>)}
                                                        
                                                      </select>
                                                    </div>
                                                    <div className="col-md-3">
                                                      <button className={this.state.add_cart_item_button_classname}  type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Add To Cart</button>
                                                    </div>
                                                  </div>
        }

    }

          return(<div>
                    <PublicTopNavbar/>
                    <div className="row">
                          <div className="hidden-xs col-md-3">
                            <br/>
                            <br/>
                            <br/>
                            Sconely Yours
                            <br/>
                            <SidebarCart User={this.props.User} menuItems={this.props.menuItems} />
                            <br/>
                          </div>
                          <div className="col-xs-12 col-md-9">
                            <br/>
                            <br/>
                            <MobileCheckoutButton/>
                            <br/>
                            <br/>
                            mobile link to cart with number of items in cart
                            <br/>
                            <br/>
                            {this.props.menuItems.map(function(item: any, index: any){

                                //console.log(item);

                                //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

                                //this.setState({image_id: image_id});

                                //console.log("image id" + image_id);

                                //console.log("image id " + this.state["image_src_" + item.item_id]);

                                //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                                return(
                                        <div className="col-xs-12 col-md-4" style={{marginTop: 0, marginBottom: 0}}>
                                              <img id="1" onClick={() => this.showItem(item.id)} onMouseEnter={(e: any) => e.currentTarget.src="/images/menu/laci/" + item.name.toLowerCase().replace(/ /g, "") + "rollover.jpg"} onMouseLeave={(e: any) => e.currentTarget.src="/images/menu/laci/" + item.name.toLowerCase().replace(/ /g, "") + ".jpg"} src={"/images/menu/laci/" + item.name.toLowerCase().replace(/ /g, "") + ".jpg"} data-target="myModal" alt="..." height="270" width="270"/>
                                          <br/>    
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
                  <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" max-height=" 700px">
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
                            $5.50
                        </div>
                        <div className="modal-footer">
                          <form className="form-horizontal">
                            <div className="form-group">
                                {yours_social_quantity_selector}
                                {this.props.cartItemsTotalQuantity < 10 &&
                                  //if order type == "yours"
                                  (<div>
                                    <div className="col-md-3">
                                    <select className="form-control" value={this.state.selected_item_quantity} onChange={(e: any) => this.selectedYoursItemQuantity(e)} style={{height: 35, width: 120}}>
                                      <option value="">Select Quantity</option> 
                                      {options_count_array.map((value: any) => <option value={value}>{value}</option>)}
                                      
                                    </select>
                                  </div>
                                  <div className="col-md-3">
                                    <button className={this.state.add_cart_item_button_classname}  type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Add To Cart</button>
                                  </div>
                                  </div>)
                                }
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)

    
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops order menu " + JSON.stringify(state));
  return {
    //if yours
    //menuItems: getYoursMenuItems(state),
    //else
    //menuItems: getYoursMenuItems(state),
    

    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        menuItems: state.menuItems.items,
        //guestOrder: state.guestOrder,
        //cartItems: state.User.orders[0].cartItems, //computed
        User: state.User,
        
        //cart_total_items //computed
        //cart_total_cost //cost
        //delivery_cost: state.guestOrder.delivery_cost
        
        cartItemsTotalQuantity: state.guestOrder.cart_items.reduce((amount: any, item: any) => amount + item.quantity, 0)
        

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
    addCartItem: (order_id: any, item_id: any, mini: any, quantity: any) => {
      dispatch(addCartItem(order_id, item_id, mini, quantity));
    },
    cartValidated: () => {
      dispatch(cartValidated());
    },
    createOrder: (order_type: any, name: any) => {
      dispatch(createOrder(order_type, name));
    }
  }
}

const OrderMenuConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderMenu);

export default OrderMenuConnected;

//background: url(../images/down-arrow.png) no-repeat right 12px