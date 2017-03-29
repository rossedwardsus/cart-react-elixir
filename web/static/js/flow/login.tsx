

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

//import * as Autocomplete from "react-google-autocomplete";
//const Autocomplete = require("react-google-autocomplete");

import axios from 'axios';


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

class Login extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        //menu_items: this.props.menu_items,
        //here: "",
        email: "",
        password: "",
        password_again: ""

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

    //this.props;

    //alert(JSON.stringify(this.state.menu_items));

    //alert("products" + JSON.stringify(this.props.menu_items));
    //console.log(this.props.getAllProducts());
    //this.setState({here: this.props.getAllProducts()});
    //console.log(this.props.dispatch(addTodoWithDispatch));
    //this.props.getAllProducts();

  }

  login(){

      //alert(this.state.email);

      axios.post('http://localhost:4000/graphql', {
             query: 'query {login (email: \"' + this.state.email + '\", password: \"' + this.state.password + '\") {session_id,}}'
      })
      .then( response => {

            alert(JSON.stringify(response));
            //go to code/payment screen
    //        this.props.loadView();
            //this.props.setSubscription();

            //addtosubscribedblocklist

            //setsubscriptiontype == 1 block
            //setsubscriptionpaid == true
            //setsusbcriptindatetime


            //store in cookie



      })
      .catch( error => {

            alert("error");
            //go to code/payment screen
    //        this.props.loadView();

     //if (!error.status) {
        // network error
      //}

      })

          //error
      //}

      //this.context.router.push('/order/12345/signature');


  }

  setEmail(e: any){

      this.setState({email: e.target.value})

  }

  setPassword(e: any){

      this.setState({password: e.target.value})

  }
  

  render(){
    return (  
            <div className="container-fluid">
                  <div className="row">
                        <div className="col-md-8">
                                <div>
                                    <br/>
                                    <br/>
                                    Login/register-hello
                                    <br/>
                                    <form className="form-horizontal">
                                      <div className="form-group">
                                         <br/>
                                        <label htmlFor="inputEmail3" className="col-sm-2 control-label"></label>
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" onChange={(e) => this.setEmail(e)}/>
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Password" onChange={(e) => this.setPassword(e)}/>
                                        <button type="button" className="btn" onClick={() => this.login()}>Login</button> 
                                     </div>
                                    </form>
                                </div>
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
export default Login;

