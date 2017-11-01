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

  setEmail = (e: any) => {

      //this.setState({contact_email: e.target.value})
      //this.props.setUserEmail(e);
      this.setState({email: e.target.value})

      //let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      let number_res = (/[0-9]/.test(e.target.value));

      //let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //return re.test(email);

      //console.log(/[0-9]/.test(e.target.value));

      //larger then 0
      //no symbols
      //no numbers

      if(e.target.value.length > 0){

          //can only have _ .
          //after @ at least one characted . then domain

          //if(symbol_res == false){
            let address = e.target.value.split("@")[0];
            let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
            let symbol_result = symbol_patt.test(address);

            if(!symbol_result){

                //check if @ has been entered before texting

                if(e.target.value.indexOf("@") > 0){

                    if(e.target.value.split("@")[1].indexOf(".") > 0){

                        if(e.target.value.split("@")[1].split(".")[0].length > 0){

                            if(e.target.value.split("@")[1].split(".")[1].length > 1){

                                //cant enter symbols????  or numbers
                  
                  
                                //if email contains @ and at least one character and 2 character domain
                                //validate contact and emails are same
                            
                                //this.setState({"email_border_color": "grey"});
                                //validate user email

                                //this.props.userContactEmailValidated(e);

                                //this.props.setUserDeliveryContactAddressEmail(e); 

                                console.log("email ok")

                            }else{

                              this.setState({"email_border_color": "red"});

                            }
                        }else{

                          this.setState({"email_border_color": "red"});

                        }

                    }else{

                      this.setState({"email_border_color": "red"});

                    }
                }else{

                  this.setState({"email_border_color": "red"});

                }

            }else{

                this.setState({"email_border_color": "red"});

            }

          //}else{

              //console.log("email ok")

          //  this.setState({first_name: e.target.value})
            //this.setState({"email_color": "red"});

          //}
      
      }

      

  }

  setPassword = (e: any) => {

      //capitals and numbers? 10 characters


      this.setState({password: e.target.value})

      //this.props.passwprd

  }

 
  login(){

      let that = this;

      //this.props.loginUser("1", "2");

       axios.post('/api1/login', {email: this.state.email, password: this.state.password}, {headers: { Authorization: "Bearer SFMyNTY.g3QAAAACZAAEZGF0YW0AAAAkMDc3MjIwYWItMWYxMi00YTZhLThiZmItMzViMGExOTIzYTMxZAAGc2lnbmVkbgYATXTzc18B.UgZ7fwlpJiemvF3NPQE5xGBZRLU76QnDqu_sLm0odlk"}})
      .then((response: any) => {

            console.log("login response " + JSON.stringify(response.data.token));

            //needs to be in redux, i forgot
            //save token, first_name, last_name to localstorage and send in auth header
            //localStorage.setItem("sconely_token", response.data.token)
            //localStorage.setItem("sconely_token", response.data.first_name)
            //localStorage.setItem("sconely_token", response.data.last_name)

            //that.props.history.push('/user');
            //context.router

            //this.context.router.push('/order/complete');



      })
      .catch((error: any) => {

            console.log("error " + error + "no account found");
            //console.log("")

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
                                    <input type="text" className="form-control" placeholder="Email" onChange={this.setEmail} value={this.state.email}/>
                                  </div>
                               </div>
                              </form>
                              <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Password" onChange={this.setPassword}/>
                                  </div>
                               </div>
                              </form>
                              <form className="form-horizontal">
                                <div className="form-group">
                                  <div className="col-md-6">
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
