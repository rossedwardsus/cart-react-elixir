'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {registerUser} from './actions/register.ts';

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

//function setCookie(cname, cvalue, exdays) {
//   var d = new Date();
//   d.setTime(d.getTime() + (exdays*24*60*60*1000));
//   var expires = "expires="+ d.toUTCString();
//   document.cookie = "sconely_session_id=12345;" + expires + ";path=/";
//}

class Register extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        //menu_items: this.props.menu_items,
        //here: ""
        name: "",
        email: "",
        mobile: "",
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

  componentDidMount(){

    //this.props;

    //alert(JSON.stringify(this.state.menu_items));

    //alert("products" + JSON.stringify(this.props.menu_items));
    //console.log(this.props.getAllProducts());
    //this.setState({here: this.props.getAllProducts()});
    //console.log(this.props.dispatch(addTodoWithDispatch));
    //this.props.getAllProducts();

  }

  register(){

     axios.post('http://localhost:4000/graphql', {
               query: 'mutation {register (first_name: \"' + this.state.email + '\", email: \"' + this.state.email + '\", mobile: \"' + this.state.mobile + '\", password: \"' + this.state.password + '\") {session_id,}}'
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
  }

  setName(e: any){

      this.setState({name: e.target.value})

  }

  setEmail(e: any){

      this.setState({email: e.target.value})

  }

  setMobile(e: any){

      this.setState({mobile: e.target.value})

  }

  setPassword(e: any){

      this.setState({password: e.target.value})

  }

  setPasswordAgain(e: any){

      this.setState({password_again: e.target.value})

  }

  register(){

    this.props.register(1, 1);


  }


  render(){
    return (<div><nav className="navbar navbar-default navbar-fixed-top">
                          <div className="container-fluid">
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#"><img height="100" width="250" src="/images/logo/Sconely_color_web_300_space3.jpg"/></a>
                            </div>
                              <div id="navbar" className="navbar-collapse collapse navbar-right">
                                <ul className="nav navbar-nav">
                                  <li className="inactive">Profile<span className="sr-only">(current)</span></li>
                                </ul>
                                <ul className="nav navbar-nav">
                                  <li className="inactive"><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                                </ul>
                                <ul className="nav navbar-nav">
                                  <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                                </ul>
                              </div>
                          </div>
                    </nav>
            <div className="container-fluid">
                  <div className="row">
                         <div className="col-md-4">
                        </div>
                        <div className="col-md-8">
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              Register
                              <br/>
                              <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-6">
                                   <br/>
                                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={(e) => this.setEmail(e)}/>
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Password" onChange={(e) => this.setPassword(e)}/>
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Password Again" onChange={(e) => this.setPassword(e)}/>
                                 
                                  <button type="button" className="btn" onClick={() => this.register()}>Login</button> 
                                  </div>
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

      
    //setEmail: (e: any) => {
    //  dispatch(setEmail(e.target.value))
    //},

    register: (email: any, password: any) => {
      dispatch(registerUser(email, password))
    },
    
  }
}


const Register1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default Register1


