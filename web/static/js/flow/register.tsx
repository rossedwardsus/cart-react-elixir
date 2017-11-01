'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './sconely_yours_menu';
//import SconelyYoursDeliveryAddressPayment from './sconely_yours_single_page_menu';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import {registerSetFirstName, registerSetLastName, registerSetEmail, registerSetPassword, registerUser} from './actions/register.ts';

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
        first_name: "",
        last_name: "",
        name: "",
        email: "",
        mobile: "",
        password: "",
        password_again: "",
        first_border_color: "grey",
        last_border_color: "grey",
        email_border_color: "grey",
        email_again_border_color: "grey",
        mobile_border_color: "grey",
        password_border_color: "grey",
        password_again_border_color: "grey",
        first_name_validated: false,
        last_name_validated: false,
        email_validated: false,
        email_again_validated: false,
        mobile_validated: false,
        
        button_class: "btn btn-default disabled",
        button_disabled: ""        

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

  onFirstNameFocus(){

    //this.setState({first_border_color: "red"});

  }

  onLastNameFocus(){

    //this.setState({last_border_color: "red"});

  }

  onEmailFocus(){

    //this.setState({email_border_color: "red"});

  }

  onEmailAgainFocus(){

    //this.setState({email_again_border_color: "red"});

  }

  onPasswordFocus(){

    this.setState({password_border_color: "red"});

  }

  onPasswordAgainFocus(){

    this.setState({password_again_border_color: "red"});

  }

  setFirstName(e: any){

      //if valid set first_name_validated = true

      
      //if(/[@-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value)){
      //let symbol_test = /[@-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(e.target.value);
      //}



      let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      let symbol_res = symbol_patt.test(e.target.value);

      //let number_res = (/[0-9]/.test(e.target.value));

      //console.log(/[0-9]/.test(e.target.value));

      //larger then 0
      //no symbols
      //no numbers

      //if(e.target.value.length > 0){

          if(!symbol_res){
          
            this.setState({first_name: e.target.value})
            this.setState({first_name_validated: true})

            console.log("first name validated");
            
            //this.checkButton();

            //this.setState({"first_border_color": "grey"});
            
          //}else{

          //  this.setState({first_name: e.target.value})
          //  this.setState({"first_border_color": "red"});

          }
      
      //}

      //this.props.registerSetFirstName(e);

  }

  setLastName(e: any){

      let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      let symbol_res = symbol_patt.test(e.target.value);

      //let number_res = (/[0-9]/.test(e.target.value));

      //console.log(/[0-9]/.test(e.target.value));

      //larger then 0
      //no symbols
      //no numbers

      //if(e.target.value.length > 0){

          if(!symbol_res){
          
            this.setState({last_name: e.target.value});
            this.setState({last_name_validated: true});
            
            console.log("last name validated");

            //this.checkButton();

            //this.setState({"first_border_color": "grey"});
            
          //}else{

          //  this.setState({first_name: e.target.value})
          //  this.setState({"first_border_color": "red"});

          }
      
      //}

  }

  setEmail = (e: any) => {

      //valid email address obviously



      //console.log(/[\S\s]{1}@[\S\s]{1}.[\S\s]{2}/.test(e.target.value));

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
                            
                                this.setState({"email_border_color": "grey"});
                                //validate user email

                                console.log("email validated");

                                //this.props.userContactEmailValidated(e);
                                //this.props.setUserDeliveryContactAddressEmail(e); 

                                console.log("email ok");

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

  setEmailAgain(e: any){

      //let dot_patt = /[.]/;
      //let dot_res = dot_patt.test(e.target.value);

      //let ampersand_patt = /[@]/;
      //let ampersand_res = ampersand_patt.test(e.target.value);

      if(e.target.value == this.state.email){

          //less then 20, doesnt include @ and .
          //console.log(dot_res + "" + ampersand_res);

          //this.setState({email: e.target.value})
          //this.setState({email_border_color: "grey"});
          this.setState({email_again_validated: true});

          console.log("email_again_validated");

      }

  }

  setMobile(e: any){

      let mobile_number = e.target.value.replace("-", "");
      let number_result = (/[0-9]/.test(mobile_number));

      //if larger then 3 append "-"

      
      if(number_result){

          if(!this.state.delete_key_pressed){
            
            this.setState({mobile_border_color: "grey"});
            
            if(e.target.value.length == 3){

              this.setState({mobile: e.target.value + "-"});
            
            }else if(e.target.value.length == 7){

              this.setState({mobile: e.target.value + "-"});

            }else if(e.target.value.length == 12){

                    console.log("user email/mobile validated");

                    this.setState({mobile: e.target.value});
                    
                    //this.props.userNameEmailMobileValidated();
                    //this.props.userContactMobileValidated();
                    //this.props.setUserDeliveryContactAddressMobile(e); 

            }else{

              this.setState({mobile: e.target.value});
              //this.props.contactMobileValidated();

            }
          }else{
            console.log("user contact mobile");
            this.setState({mobile: e.target.value});
          }
      
      }else{

          this.setState({mobile: e.target.value});
          this.setState({mobile_border_color: "red"});
          
      }

      //this.props.setUserMobile(e);

      //if(this.props.User.orders[0].order_type != "pool"){

      //    this.props.setUserDeliveryContactAddressMobile(e);

      //}


  }


  setPassword(e: any){

      //if less then 20, doesnt equal password again
      //no symbols
      //no numbers

      this.setState({password: e.target.value})

      if(e.target.value.length > 5){

          this.setState({password_validated: true});

      }

  }

  setPasswordAgain(e: any){

      //must be equal to password

      this.setState({password_again: e.target.value})

  }

  register(){

    //check email and password/form validated

    //this.props.registerUser(this.state.first_name, this.state.last_name, this.state.email, this.state.password);

    //this.setState({"delivery_address_street1_classname": "form-group"});

    
    //ifthis.props.registration.registered == true
    //this.props.history.push('/register_complete');

    let that = this;

    //if(this.state.first_name_validated === false){

          axios.post('/api1/register', {first_name: that.state.first_name, last_name: that.state.last_name, mobile: this.state.mobile, email: that.state.email,  password: this.state.password})
          .then( response => {

                console.log("registration response access token " + JSON.stringify(response.data.access_token));

                //localStorage.setItem('access_token', response.access_token)

                //that.props.history.push('/user');
                //context.router

          })
          .catch( error => {

                console.log("error" + error);
                //go to code/payment screen
        //        this.props.loadView();

         //if (!error.status) {
            // network error
          //}

          })
    //}

  }

  checkButton = () => {

    if(this.state.first_name_validated && this.state.last_name_validated && this.state.email_validated){

        this.setState({button_class: "btn btn-default"});

    }

  }


  render(){
    return (<div>
                <nav className="navbar navbar-default navbar-fixed-top">
                          <div className="container-fluid">
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#"><img src="http://sconely-test.herokuapp.com/images/logo/LogoJune5d.jpg"/></a>
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
                                    <input type="text" className="form-control" placeholder="First Name" onChange={(e: any) => this.setFirstName(e)} value={this.state.first_name} style={{borderColor: this.state.first_border_color}}/>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Last Name" onChange={(e: any) => this.setLastName(e)} value={this.state.last_name} style={{borderColor: this.state.last_border_color}}/>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Email" onChange={this.setEmail} value={this.state.email} style={{borderColor: this.state.email_border_color}}/>
                                  </div>
                                </div>
                                 <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Email Again" onChange={(e: any) => this.setEmailAgain(e)} value={this.state.email_again} style={{borderColor: this.state.email_again_border_color}}/>
                                  </div>
                                </div>
                                 <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Mobile" onChange={(e: any) => this.setMobile(e)} onFocus={() => this.onPasswordAgainFocus()} style={{borderColor: this.state.password_again_border_color}} value={this.state.mobile}/>
                                 </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="password" className="form-control" placeholder="Password" onChange={(e: any) => this.setPassword(e)} onFocus={() => this.onPasswordFocus()} style={{borderColor: this.state.password_border_color}}/>
                                 </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="password" className="form-control" placeholder="Password Again" onChange={(e: any) => this.setPasswordAgain(e)} onFocus={() => this.onPasswordAgainFocus()} style={{borderColor: this.state.password_again_border_color}}/>
                                 </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <button type="button" className={this.state.button_class} onClick={() => this.register()}>Register</button> 
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
  console.log("register.tsx" + JSON.stringify(state));
  return {

    Register: state.Register,
    //login thunk
//   menu_items: state.default.menu_items
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //loginthunk

    /*registerSetFirstName: (e: any) => {
      dispatch(registerSetFirstName(e.target.value))
    },

    registerSetLastName: (e: any) => {
      dispatch(registerSetLastName(e.target.value))
    },

    registerSetEmail: (e: any) => {
      dispatch(registerSetEmail(e.target.value))
    },

    registerSetEmailAgain: (e: any) => {
      dispatch(registerSetEmail(e.target.value))
    },

    registerSetPassword: (e: any) => {
      dispatch(registerSetEmail(e.target.value))
    },

    registerSetPasswordAgain: (e: any) => {
      dispatch(registerSetEmail(e.target.value))
    },

    registerUser: (first_name: any, last_name: any, email: any, password: any) => {
      console.log("ownprops" + JSON.stringify(ownProps));
      dispatch(registerUser(first_name, last_name, email, password))
    },*/
    
  }
}


const Register1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default Register1


