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
        first: "",
        last: "",
        name: "",
        email: "",
        mobile: "",
        password: "",
        password_again: "",
        first_border_color: "gre",
        last_border_color: "red",
        email_border_color: "red",
        password_border_color: "red",
        password_again_border_color: "red",
        first_name_validated: false

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

    this.setState({first_border_color: "red"});

  }

  setFirstName(e: any){

      if(e.target.value.length > 0){
          
          this.setState({first_name: e.target.value})
          this.setState({"first_border_color": "grey"});

      }

  }

  setLastName(e: any){

      this.setState({last_name: e.target.value})

  }

  setEmail(e: any){

      let dot_patt = /[.]/;
      let dot_res = dot_patt.test(e.target.value);

      let ampersand_patt = /[@]/;
      let ampersand_res = ampersand_patt.test(e.target.value);

      //if(e.target.value.length > 0 && dot_res === true && ampersand_res === true){

          //less then 20, doesnt include @ and .
          console.log(dot_res + "" + ampersand_res);

          this.setState({email: e.target.value})
          this.setState({email_border_color: "grey"});
          //this.setState({email_validated: true});

      //}

  }

  setMobile(e: any){

      this.setState({mobile: e.target.value})

  }

  setPassword(e: any){

      //if less then 20, doesnt equal password again

      this.setState({password: e.target.value})

  }

  setPasswordAgain(e: any){

      this.setState({password_again: e.target.value})

  }

  register(){

    //check email and password/form validated

    //this.props.register(1, 1);

    //this.setState({"delivery_address_street1_classname": "form-group"});

    
    //ifthis.props.registration.registered == true
    //this.props.history.push('/register_complete');

    let that = this;

    if(this.state.first_name_validated === false){

          axios.post('http://localhost:4000/api/graphql', {
                 query: 'mutation {register (first: "' + that.state.first + '", last: "' + that.state.last + '", email: "' + that.state.email + '", mobile: "' + this.state.mobile + '", password: "' + this.state.password +'") {status}}'
          })
          .then( response => {

                console.log("response" + JSON.stringify(response));

                that.props.history.push('/user');

          })
          .catch( error => {

                console.log("error" + error);
                //go to code/payment screen
        //        this.props.loadView();

         //if (!error.status) {
            // network error
          //}

          })
    }

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
                                    <input type="text" className="form-control" id="email" placeholder="First Name" onChange={(e: any) => this.setFirstName(e)} onFocus={() => this.onFirstNameFocus()} style={{borderColor: this.state.first_border_color}}/>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" id="email" placeholder="Last Name" onChange={(e: any) => this.setEmail(e)} style={{borderColor: this.state.email_border_color}}/>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={(e: any) => this.setEmail(e)} style={{borderColor: this.state.email_border_color}}/>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <div className="col-md-6">
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Password" onChange={(e: any) => this.setPassword(e)} style={{borderColor: this.state.password_border_color}}/>
                                    <input type="text" className="form-control" id="exampleInputName2" placeholder="Password Again" onChange={(e: any) => this.setPassword(e)}/>
                                 
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


