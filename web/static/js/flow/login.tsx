

'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setEmail} from './actions/login.ts';

//import * as Autocomplete from "react-google-autocomplete";
//const Autocomplete = require("react-google-autocomplete");

import axios from 'axios';
//import cookie from 'react-cookie';

/*function getCookie(name: string): string {
  const nameLenPlus = (name.length + 1);
  return document.cookie
    .split(';')
    .map(c => c.trim())
    .filter(cookie => {
      return cookie.substring(0, nameLenPlus) === `${name}=`;
    })
    .map(cookie => {
      return decodeURIComponent(cookie.substring(nameLenPlus));
    })[0] || null;
}*/

import * as Cookie from 'js-cookie';


/*function addTodoWithDispatch() {
  const action = {
    type: "VIEW_PUBLIC_MENU",
    //text
  }
  //dispatch(action)
}*/

//function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires="+ d.toUTCString();
//   document.cookie = "sconely_session_id=12345;" + expires + ";path=/";
//}

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
             query: 'query {login (email: \"' + this.state.email + '\", password: \"' + this.state.password + '\") {session_id, first_name, last_name}}'
      })
      .then( response => {

            //alert(JSON.stringify(response));
            //go to code/payment screen
    //        this.props.loadView();
            //this.props.setSubscription();

            //addtosubscribedblocklist

            //setsubscriptiontype == 1 block
            //setsubscriptionpaid == true
            //setsusbcriptindatetime


            //store in cookie

            //localStorage.set('user', {first_name:"", last_name: "", orders: [], delivery_addresses: [], payment_methods: []})
            //setCookie("sconely_session_id", 1, 1)
            //setCookie("sconely_first_name", 1, 1)
            //setCookie("sconely_last_name", 1, 1)


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

      this.props.setEmail(e);

  }

  setPassword(e: any){

      this.setState({password: e.target.value})

      //this.props.passwprd

  }

  setPasswordAgain(e: any){

      this.setState({password: e.target.value})

      //this.props.password_again

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
                                        <input type="text" className="form-control" id="email" placeholder="Email" onChange={(e) => this.setEmail(e)}/>
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




function mapStateToProps(state: any) {
  console.log(JSON.stringify(state));
  return {

    state: state,
    //login thunk
//   menu_items: state.default.menu_items
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //loginthunk

      
    setEmail: (e: any) => {
      dispatch(setEmail(1))
    },
    
  }
}


const Login1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default Login1
