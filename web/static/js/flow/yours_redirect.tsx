'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';

import {connect} from 'react-redux';

//import {getMenuItems} from './actions/menu.ts';
//import {cartValidated} from './actions/order_validations.ts';
//import {addCartItem} from './actions/cart.ts';
import {createOrder} from './actions/order.ts';

//import SidebarCart from './order_sidebar_cart.tsx';
//import MobileCheckoutButton from './mobile_checkout_button.tsx';


//type Props = {
  //title: string,
  //visited: boolean,
//  setDeliveryAddrss: () => void,
//};


class YoursRedirect extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        //menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 2, title: "Ruby Q", description: "Cherry Chocolate Chunk", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "MenuRubyQ4.5", hover_image_id: "MenuRubyQ4.5roll"}, {item_id: 3, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_green"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"}],
        crafted_kitchen_menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"}, {item_id: 2, title: "Ruby Q", description: "Cherry Chocolate Chunk", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "MenuRubyQ4.5", hover_image_id: "MenuRubyQ4.5roll"}, {item_id: 3, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "SavvymenuJuneb5x5", hover_image_id: "SavvymenuJuneb5x5rollover"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_green"}],
        menu_items: [],
        selected_item_id: "",
        selected_item_type: "",
        selected_item_quantity: "",
        selected_item_title: "",
        selected_item_story: "",
        selected_item_ingredients: "",
        add_cart_item_button_classname: "btn btn-default disabled",
        images: [],
        hover_images: [] 

    };

  }

  componentDidMount(){


    //this.context.router.push("/order/menu");
    this.props.createOrder("yours");


    //get active items from the database
    //alert(this.props.params);

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

    this.props.createOrder("sconely_yours", this.props.params.name);
    //this.props.getMenuItems();

    //get menu items here
    //this.setState({menu_items: this.props.menu_items.menu_items});
    
  }

  componentWillReceiveProps(nextProp:any){

      console.log("menu props");

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

 
  render(): JSX.Element{

          //var that = this;
          //var page = "";

          return(<div></div>)
  

    
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops yours" + JSON.stringify(state));
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        menu_items: state.MenuItems,
        order: state.Order,
        cart: state.cart

    //}
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    getMenuItems: () => {
      //dispatch(getMenuItems());
    },
    addCartItem: (order_id: any, item_id: any, item_type: any, quantity: any) => {
      //dispatch(addCartItem(order_id, item_id, item_type, quantity));
    },
    cartValidated: () => {
      //dispatch(cartValidated());
    },
    createOrder: (order_type: any) => {
      dispatch(createOrder(order_type, "", ""));
    }
  }
}

const YoursRedirectConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(YoursRedirect);

export default YoursRedirectConnected;

//background: url(../images/down-arrow.png) no-repeat right 12px