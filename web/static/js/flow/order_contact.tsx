
'use strict';


import * as React from 'react';

//import SconelyYoursMenu from './menu.tsx';
//import Cart from './cart.tsx';
//import DeliveryAddressPayment from './delivery_address_payment.tsx';

import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const Immutable  = require('immutable');

//import {setContactEmail, setContactMobile} from './actions/order_contact.ts';


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

class Contact extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        contact_email: "",
        contact_email_again: "",
        contact_mobile: "",
        email_border_color: "grey"

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

      //this.setState({contact_email: this.props.contact.email});
      //this.setState({contact_email_again: this.props.contact.email_again});
      //this.setState({contact_mobile: this.props.contact.mobile});
   
  }

  setFirstName = (e: any) => {

    //only letters

    this.setState({first: e.target.value});

    if(e.target.value.length > 0){

        //let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
        //let symbol_res = symbol_patt.test(e.target.value);

        //let number_res = (/[0-9]/.test(e.target.value));

        //if(!symbol_res){
        
          //this.setState({first_name_border_color: "grey"});
          this.props.setFirstName(e);

          if(this.state.last_name.length > 0){
          
              this.props.setNameValidated(e);

          }

        //}else{

          //this.setState({first_name_border_color: "red"});

          //this.props.setNameInvalidated(e);

        //}

    }


    //this.props.nameValidated();
    //this.props.nameInvalidated();


  }

  onLastNameFocus = () => {

    //alert();

    //this.setState({last_name_border_color: "red"});

  }

  setLastName = (e: any) => {

      this.setState({last: e.target.value});

      if(e.target.value.length > 0){    

          //let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
          //let symbol_res = symbol_patt.test(e.target.value);

          //console.log(symbol_res);

          //let number_res = (/[0-9]/.test(e.target.value));

          //if(!symbol_res){
          
            //this.setState({last_name_border_color: "grey"});
            this.props.setLastName(e);

            if(this.state.first_name.length > 0){
             
              this.props.setNameValidated(e);
            
            }

          //}else{

            //this.setState({last_name_border_color: "red"});

             //this.props.setNameInvalidated(e);

          //}

      }

  }

  setCompanyName(e: any){

    this.setState({company_name: e.target.value});
    this.props.setCompanyName(e);

    //this.props.nameValidated();
    //this.props.nameInvalidated();

  }


  setContactEmail(e: any){

      this.setState({contact_email: e.target.value})
      this.props.setContactEmail(e);

      //let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      let number_res = (/[0-9]/.test(e.target.value));

      //let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //return re.test(email);

      console.log(/[0-9]/.test(e.target.value));

      //larger then 0
      //no symbols
      //no numbers

      if(e.target.value.length > 0){

          //can only have _ .
          //after @ at least one characted . then domain

          //if(symbol_res == false){
            let address = e.target.value.split("@")[0];
            let symbol_res = symbol_patt.test(address);

            if(symbol_res == true){

                if(e.target.value.split("@")[1].split(".")[0].length > 0){

                    if(e.target.value.split("@")[1].split(".")[1].length > 1){

                        //cant enter symbols????  or numbers
          
          
                        //if email contains @ and at least one character and 2 character domain
                        //validate contact and emails are same
                    
                        //this.props.setContactEmail(e);

                        console.log("email ok")

                    }

                }

            }

          //}else{

              //console.log("email ok")

          //  this.setState({first_name: e.target.value})
            //this.setState({"first_border_color": "red"});

          //}
      
      }

      

  }

  setContactEmailAgain(e: any){

      this.setState({contact_email_again: e.target.value});
      //this.props.setContactEmail(e);

      if(this.state.contact_email == e.target.value){

          //validated

      }

      

  }

  setContactMobile(e: any){

      //strip out -
      //check if only number

      //if larger then 3 append "-"

      let mobile_number = e.target.value.replace("_", "");
      let number_res = (/[0-9]/.test(mobile_number));

      this.setState({contact_mobile: e.target.value});
      this.props.setContactMobile(e);

      if(number_res == true){

          //validate contact
          //else invalatidate

      }

  }
  
  render(): JSX.Element{

   
    return ( <div>
              <br/>
              <br/>
              <br/>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <b>Contact</b>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-md-3">
                      <div className={this.state.first_name_classname}>
                        <input type="text" value={this.state.first} maxLength={20}  className="form-control" id="exampleInputName2" placeholder="First Name" style={{borderColor: this.state.first_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className={this.state.last_name_classname}>
                        <input type="text" value={this.state.last}   className="form-control" id="exampleInputName2" placeholder="Last Name" style={{borderColor: this.state.last_name_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className={this.props.firstNameClassName}>
                        <input type="text" value={this.state.company_name}  className="form-control" id="exampleInputName2" placeholder="Company Name" style={{borderRadius: 0, WebkitAppearance: "none"}}/>
                      </div>
                    </div>
                  </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <div className={this.state.contact_email_classname}>
                        <input type="text" value={this.state.contact_email}onChange={(e: any) => this.setContactEmail(e)} className="form-control" id="exampleInputName2" placeholder="Email"   style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className={this.state.contact_email_classname}>
                        <input type="text" value={this.state.contact_email_again} onChange={(e: any) => this.setContactEmailAgain(e)} className="form-control" id="exampleInputName2" placeholder="Email Again" style={{borderRadius: 0}}/>
                      </div>
                  </div>
                </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <div className={this.state.contact_mobile_classname}>
                        <input type="text" value={this.state.contact_mobile}onChange={(e: any) => this.setContactMobile(e)} className="form-control" id="exampleInputName2" placeholder="1111111111"  style={{borderRadius: 0}}/>
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
  console.log("contact component/state" + JSON.stringify(state.contact));
  return {
   contact: state.contact
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //setContactEmail: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setContactEmail(e.target.value));
    //},
    //setContactMobile: (e: any) => {
    //  console.log(e.target.value);
    //  dispatch(setContactMobile(e.target.value));
    //},
   
  }
}

const Contact1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)

export default Contact;



