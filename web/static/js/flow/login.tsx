'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import {setEmail, loginUser} from './actions/login.ts';

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

//import * as Cookie from 'js-cookie';


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

  setEmail(e: any){

      //if email includes @ and .

      this.setState({email: e.target.value})

      //this.props.setEmail(e);

  }

  setPassword(e: any){

      //capitals and numbers? 10 characters


      this.setState({password: e.target.value})

      //this.props.passwprd

  }

 
  login(){

      //this.props.loginUser("1", "2");

  
      axios.post('/api/login', {email: this.state.email, mobile: this.state.mobile, password: this.state.password
      })
      .then((response: any) => {

            console.log("login response" + JSON.stringify(response));

            //save token to local host and send in auth header

            //that.props.history.push('/user');
            //context.router

            //this.context.router.push('/order/complete');


      })
      .catch((error: any) => {

            console.log("error" + error);
            //go to code/payment screen
    //        this.props.loadView();


            //display errror to user - payment

     //if (!error.status) {
        // network error
      //}

      })
      //dispatch(setSession());
      //}
  }


  render(){
    return ( <div><nav className="navbar navbar-default navbar-fixed-top">
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
                              Login
                              <br/>
                              <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-6">
                                   <br/>
                                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={(e) => this.setEmail(e)}/>
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Password" onChange={(e) => this.setPassword(e)}/>
                                  <button type="button" className="btn" onClick={() => this.login()}>Login</button> 
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




/*function mapStateToProps(state: any) {
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
      dispatch(setEmail(e.target.value))
    },

    loginUser: (email: any, password: any) => {
      dispatch(loginUser(email, password))
    },
    
  }
}


const Login1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)*/

export default Login
