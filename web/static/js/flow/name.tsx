
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import {addItemToCart, removeItemFromCart, addAddress} from './actions/cart';
//import { getPublicMenu } from './reducers/menu';
const Immutable  = require('immutable');
import {setFirstName, setLastName, setCompanyName} from './actions/order_name.ts';



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

class Name extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

       first_name: "",
       last_name: ""
    };

    //user_type=guest
    //order_type=yours load 
    //state==menu
    //yours_menu
    //just show cart if guest
    //or separate into order_menu and order_delivery_address_payment objects
    //or have everything work of a "pages" flag
   
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount(){

    this.setState({first_name: this.props.name.first_name});
    this.setState({last_name: this.props.name.last_name});

   

  }

  setFirstName(e: any){

    //if length > 0
    this.setState({first_name: e.target.value});
    this.props.setFirstName(e);

  }

  setLastName(e: any){

    this.setState({last_name: e.target.value});
    this.props.setLastName(e);

  }

  
  render(): JSX.Element{

   
    return ( <div>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-12">
                      <b>Name</b>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                    <div className={this.props.firstNameClassName}>
                      <input type="text" onChange={(e: any) => this.setFirstName(e)} value={this.state.first_name} className="form-control" id="exampleInputName2" placeholder="First Name"/>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={this.state.last_name_classname}>
                      <input type="text" onChange={(e: any) => this.setLastName(e)}  value={this.state.last_name} className="form-control" id="exampleInputName2" placeholder="Last Name"/>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className={this.props.firstNameClassName}>
                      <input type="text" onChange={(e: any) => this.props.setCompanyName(e)} className="form-control" id="exampleInputName2" placeholder="Company Name"/>
                    </div>
                  </div>
                </div>
              </form>
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

function mapStateToProps(state: any) {
  console.log("name component/state" + JSON.stringify(state.name));
  return {
   name: state.name
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    setFirstName: (e: any) => {
      console.log("first name" + e.target.value);
      dispatch(setFirstName(e.target.value));
    },
    setLastName: (e: any) => {
      console.log(e.target.value);
      dispatch(setLastName(e.target.value));
    },
    setBusinessName: (e: any) => {
      console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    }
  }
}

const Name1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Name)

export default Name1;


