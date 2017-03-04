

'use strict';


import * as React from 'react';

import SconelyYoursMenu from './sconely_yours_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getAllProducts from './actions/menu';
//import {addItemToCart, addAddress} from './actions/order';
import { getPublicMenu } from './reducers/menu';


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

class Order extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        menu_items: this.props.menu_items,
        here: ""

    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
    
  }

  componentDidMount(){

    //this.props;

    //alert(JSON.stringify(this.state.menu_items));

    //alert("products" + JSON.stringify(this.props.menu_items));
    //console.log(this.props.getAllProducts());
    //this.setState({here: this.props.getAllProducts()});
    //console.log(this.props.dispatch(addTodoWithDispatch));
    this.props.getAllProducts();

  }

  

  /*render(): React.Element {
    return (  
            <div className="container-fluid">
                  <div className="row">
                        <div className="hidden-xs col-md-2">
                          <br/>
                          if yours
                          <br/>
                          else social
                          <br/>
                          cart in left sidebar
                          <br/>
                          item_id-item_description-quantity-remove-edit
                          <br/>
                          <br/>
                        </div>
                        <div className="col-md-8">
                                <div>
                                  if registered user show registered left user menu and topnavbar
                                  <br/>
                                  if order type == yours && page == menu
                                  <br/>
                                 <SconelyYoursMenu/>
                                  <br/>
                                  <br/>
                                  
                                </div>
                        </div>
                        <div className="hidden-xs col-md-4">
                              maybe put something here
                        </div>
                </div>
            </div>
                )
  }*/

  render(){
    alert(JSON.stringify(this.props.menu_items));
    return (  
          <div>here{this.state.here}</div>
    )
  }

}




function mapStateToProps(state: any) {
  return {
   menu_items: state.default.menu_items
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Order);

