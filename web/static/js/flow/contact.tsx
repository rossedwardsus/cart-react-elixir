
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

        email: "",
        mobile: "",
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

      //this.setState({email: this.props.contact.email});
      //this.setState({mobile: this.props.contact.mobile});
   
  }

  setContactEmail(e: any){

      /*let symbol_patt = /[-!@$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
      let symbol_res = symbol_patt.test(e.target.value);

      let number_res = (/[0-9]/.test(e.target.value));

      //let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //return re.test(email);

      console.log(/[0-9]/.test(e.target.value));

      //larger then 0
      //no symbols
      //no numbers

      if(e.target.value.length > 0){

          if(symbol_res == false && number_res == false){
          
            this.setState({first_name: e.target.value})
            this.setState({"first_border_color": "grey"});

          }else{

            this.setState({first_name: e.target.value})
            this.setState({"first_border_color": "red"});

          }
      
      }*/

      this.setState({email: e.target.value});
      this.props.setContactEmail(e);

  }

  setContactEmailAgain(e: any){

      this.setState({email_again: e.target.value});
      //this.props.setContactEmail(e);

  }

  setContactMobile(e: any){

      this.setState({mobile: e.target.value});
      this.props.setContactMobile(e);

  }
  
  render(): JSX.Element{

   
    return ( <div>
               <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-10">
                      <b>Contact</b>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <div className={this.state.contact_email_classname}>
                        <input type="text" onChange={(e: any) => this.setContactEmail(e)} className="form-control" id="exampleInputName2" placeholder="Email" value={this.state.email}  style={{borderRadius: 0, borderColor: this.state.email_border_color}}/>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className={this.state.contact_email_classname}>
                        <input type="text" onChange={(e: any) => this.setContactEmailAgain(e)} className="form-control" id="exampleInputName2" placeholder="Email Again" value={this.state.email_again}  style={{borderRadius: 0}}/>
                      </div>
                  </div>
                </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-md-3">
                      <div className={this.state.contact_mobile_classname}>
                        <input type="text" onChange={(e: any) => this.setContactMobile(e)} className="form-control" id="exampleInputName2" placeholder="111-111-1111" value={this.state.mobile}  style={{borderRadius: 0}}/>
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



