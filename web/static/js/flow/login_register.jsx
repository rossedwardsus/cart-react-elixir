

'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, addAddress} from './actions/order';
//import { getPublicMenu } from './reducers/menu';

import * as Autocomplete from "react-google-autocomplete";
//const Autocomplete = require("react-google-autocomplete");


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

//declare var module: { Order: any };

//interface LoginRegister {
//  state: any,
//  props: any,
  //completed: boolean
//}

class LoginRegister extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        //menu_items: this.props.menu_items,
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
    //this.props.getAllProducts();

  }

  

  render(){
    return (  
            <div className="container-fluid">
                  <div className="row">
                        <div className="hidden-xs col-md-2">
                          <br/>
                          
                        </div>
                        <div className="col-md-8">
                                <div>
                                  Login/register
                                  <br/>
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      if registered user show
                                      <br/>
                                      if not then dont sho1
                                      <br/>
                                      <label htmlFor="inputEmail3" className="col-sm-2 control-label"></label>
                                      <br/>
                                      <div className="col-sm-10">
                                          <b>Delivery Address</b>
                                          <br/>
                                          
                                          <br/>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label htmlFor="inputEmail3" className="col-sm-2 control-label"></label>
                                      <br/>
                                      <div className="col-sm-10">
                                        <Autocomplete
                                            style={{width: '90%'}}
                                            onPlaceSelected={(place: any) => {
                                              //console.log(place.formatted_address.split(",")[2]);
                                              this.props.setDeliveryAddress(place); 
                                            }}
                                            types={['address']}
                                            componentRestrictions={{country: "us"}}
                                        />
                                        <input type="text"/>street/city/zipcode/floor/delivery comments
                                      </div>
                                  </div>
                                </form>
                                </div>
                        </div>
                        <div className="hidden-xs col-md-4">
                              maybe put something here
                        </div>
                </div>
            </div>
      )
  }

  

}




//function mapStateToProps(state: any) {
//  return {
//   menu_items: state.default.menu_items
   //menu_items: getPublicMenu
   //menu_items: dispatch()
//  };
//}

//function mapDispatchToProps(dispatch: any) {
//  return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
//}


//export default connect(mapStateToProps, mapDispatchToProps)(Order);
export default LoginRegister;

