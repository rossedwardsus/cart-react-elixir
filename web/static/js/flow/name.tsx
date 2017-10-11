
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import * as getAllProducts from './actions/menu';
//import { getPublicMenu } from './reducers/menu';
const Immutable  = require('immutable');
//import {setFirstName, setLastName, setCompanyName} from './actions/order_name.ts';



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

       user_first_name: "",
       user_last_name: "",
       user_contact_email: "",
       user_contact_email_again: "",
       user_contact_mobile: "",
       first_name_border_color: "grey",
       last_name_border_color: "grey",
       email_border_color: "grey",
       email_again_border_color: "grey",
       mobile_border_color: "grey",
       first_name_validated: false,
       last_name_validated: false,
       delete_key_pressed: false
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

  componentDidMount = () => {

    this.setState({user_first_name: this.props.User.user_first_name});
    this.setState({user_last_name: this.props.User.user_last_name});
    this.setState({user_contact_email: this.props.User.user_contact_email});
    this.setState({user_contact_mobile: this.props.User.user_contact_mobile});


  }

  componentWillReceiveProps = () => {

    //this.setState({first_name: this.props.User.first_name});
    //this.setState({last_name: this.props.User.last_name});

  }


  onFirstNameFocus(){

    //alert();

    //this.setState({first_name_border_color: "red"});

  }

  setUserFirstName = (e: any) => {

    //only letters

    this.setState({user_first_name: e.target.value});

    if(e.target.value.length > 0){

        let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
        let symbol_res = symbol_patt.test(e.target.value);

        //let number_res = (/[0-9]/.test(e.target.value));

        if(!symbol_res){
        
          this.setState({first_name_border_color: "grey"});
          this.props.setUserFirstName(e);
          this.props.setUserDeliveryContactAddressFirstName(e);

          //if(this.state.last_name.length > 0){
          
              //this.props.setNameValidated(e);

          //}

        }else{

          this.setState({first_name_border_color: "red"});

          //this.props.setNameInvalidated(e);

        }

    }


    //this.props.nameValidated();
    //this.props.nameInvalidated();


  }

  onLastNameFocus(){

    //alert();

    //this.setState({last_name_border_color: "red"});

  }

  setUserLastName = (e: any) => {

      this.setState({user_last_name: e.target.value});

      if(e.target.value.length > 0){    

          let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
          let symbol_res = symbol_patt.test(e.target.value);

          //console.log(symbol_res);

          //let number_res = (/[0-9]/.test(e.target.value));

          if(!symbol_res){
          
            this.setState({last_name_border_color: "grey"});
            this.props.setUserLastName(e);
            this.props.setUserDeliveryContactAddressLastName(e);

            //if(this.state.first_name.length > 0){
             
            this.props.nameValidated(e);
            
          }else{

            this.setState({last_name_border_color: "red"});

          }

      }

  }

  setUserEmail = (e: any) => {

      //this.setState({contact_email: e.target.value})
      this.props.setUserEmail(e);
      this.setState({user_contact_email: e.target.value})

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
                            
                                //this.props.setUserEmail(e);
                                this.setState({"email_border_color": "grey"});
                                //validate user email

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

  setUserEmailAgain = (e: any) => {

      this.setState({user_contact_email_again: e.target.value});
      //this.props.setUserEmail(e);

      if(this.state.user_email == e.target.value){

          //validated
          //this.props.nameValidated();
          //this.props.contactEmailValidated();

          this.setState({"email_again_border_color": "grey"});

      }else{

           this.setState({"email_again_border_color": "red"});

      }

  }

  mobileKeyPress = (event: any) => {
        if(event.keyCode == 8){
          console.log('delete key pressed here! ' + event.keyCode)
          this.setState({delete_key_pressed: true});
        }else{
          console.log('non delete key pressed here! ' + event.keyCode)
          this.setState({delete_key_pressed: false});
        }
  }


  setUserMobile = (e: any) => {

      //strip out -
      //check if only number

      let mobile_number = e.target.value.replace("-", "");
      let number_result = (/[0-9]/.test(mobile_number));

      //if larger then 3 append "-"

      
      if(number_result){

          if(!this.state.delete_key_pressed){
            
            this.setState({mobile_border_color: "grey"});
            
            if(e.target.value.length == 3){

              this.setState({user_contact_mobile: e.target.value + "-"});
            
            }else if(e.target.value.length == 7){

              this.setState({user_contact_mobile: e.target.value + "-"});

            }else if(e.target.value.length == 13){

                    console.log("user email/mobile validated");
  
                    this.props.userNameEmailMobileValidated();

            }else{

              this.setState({user_contact_mobile: e.target.value});
              //this.props.contactMobileValidated();

            }
          }else{
            console.log("user contact mobile");
            this.setState({user_contact_mobile: e.target.value});
          }
      
      }else{

          this.setState({user_contact_mobile: e.target.value});
          this.setState({mobile_border_color: "red"});
          
      }

      this.props.setUserMobile(e);
      this.props.setUserDeliveryContactAddressMobile(e);

  }

  setCompanyName = (e: any) => {

    this.setState({company_name: e.target.value});
    this.props.setCompanyName(e);

    //this.props.nameValidated();
    //this.props.nameInvalidated();

  }

  
  render(): JSX.Element{

   
    return ( <div>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <b>Name</b>
                      <br/>
                  </div>
                </div>
              </form>
              <form role="form" className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-4">
                    <input className="form-control margin-bottom-5" type="text" maxLength={30} onFocus={() => this.onFirstNameFocus()} onChange={(e: any) => this.setUserFirstName(e)} onInput={(e: any) => this.setUserFirstName(e)} value={this.state.user_first_name} id="exampleInputName2" placeholder="First Name" style={{borderColor: this.state.first_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                  </div>
                  <div className="hidden-lg col-xs-1">
                    <br/>
                  </div>
                  <div className="col-md-4">
                    <input className="form-control margin-bottom" type="text" maxLength={30} onFocus={() => this.onLastNameFocus()} onChange={(e: any) => this.setUserLastName(e)} onInput={(e: any) => this.setUserLastName(e)} value={this.state.user_last_name} id="exampleInputName2" placeholder="Last Name" style={{borderColor: this.state.last_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                  </div>
                </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <b>Contact</b>
                      <br/>
                  </div>
                </div>
              </form>
              <form role="form" className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-4">
                      <div className={this.state.contact_email_classname}>
                        <input type="text" value={this.state.user_contact_email} onChange={(e: any) => this.setUserEmail(e)} onInput={(e: any) => this.setUserEmail(e)} className="form-control" id="exampleInputName2" placeholder="Email"   style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                      </div>
                  </div>
                  <div className="hidden-lg col-xs-1">
                    <br/>
                  </div>
                  <div className="col-md-4">
                      <div className={this.state.contact_email_classname}>
                        <input type="text" value={this.state.user_contact_email_again} onChange={(e: any) => this.setUserEmailAgain(e)} className="form-control" id="exampleInputName2" placeholder="Email Again" style={{borderRadius: 0, borderColor: this.state.email_again_border_color}}/>
                      </div>
                  </div>
                </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <div className={this.state.user_mobile_classname}>
                        <input type="text" value={this.state.user_contact_mobile} maxLength={13} onChange={(e: any) => this.setUserMobile(e)} onInput={(e: any) => this.setUserMobile(e)} onKeyDown={(e: any) => this.mobileKeyPress(e)} className="form-control" id="exampleInputName2" placeholder="Mobile"  style={{borderRadius: 0, borderColor: this.state.mobile_border_color}}/>
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
    //setFirstName: (e: any) => {
    //  console.log("first name" + e.target.value);
    //  dispatch(setFirstName(e.target.value));
    //},
    //setLastName: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setLastName(e.target.value));
    //},
    //setBusinessName: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setLastName(e.target.value));
    //}
  }
}

const Name1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Name)

export default Name;


