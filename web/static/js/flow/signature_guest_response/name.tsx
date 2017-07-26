import * as React from 'react'

import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//import MenuItems from './menu_items';
import {completeGuestResponse} from '../actions/signature_guest_response.ts';
import {getNameScreenText} from '../selectors/signature_guest_response.ts';
//var validator = require('mailgun-validate-email')('key-22e98444fc043c1e72943865de283d39');
import axios from 'axios';
import NavBar from './navbar.tsx';



class GuestName extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        first_name: "",
        first_name_validated: "",
        first_name_border: "",
        last_name: "",
        last_name_validated: "",
        email: "",
        email_validated: "",
        button_classname: "btn btn-default disabled"
        
    };

  }

  componentDidMount(){

      //check event still valid

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  guestChoice(order_type: any) {
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  

  setFirstName = (e: any) => {

      this.setState({first_name: e.target.value});
      this.setState({first_name_validated: true});

      //if(this.state.last_name_validated > 0 || this.state.email_validated){

      //    this.setState({button_classname: "btn btn-default"});

      //}

        
      //if name is larger then 0 and no numbers are symbols
      //let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      //let number_res = (/[0-9]/.test(e.target.value));


  }

  setLastName = (e: any) => {

      this.setState({last_name: e.target.value});
      //this.setState({last_name_validated: true});

       //if(this.state.last_name_validated > 0 || this.state.email_validated){

       //   this.setState({button_classname: "btn btn-default"});

      //}


      //if name is larger then 0 and no numbers are symbols
      //let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      //let number_res = (/[0-9]/.test(e.target.value));


  }

  setEmail = (e: any) => {

      //this.setState({email: e.target.value});
      //this.setState({email_validated: true});

      //let symbol_patt = /[-!$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      let email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let email_result = email_pattern.test(e.target.value);

      console.log(email_result);


      //length of 6
      //a@a.co

      if(email_result){

        console.log("email validated");

        this.setState({email: e.target.value});

        //this.setState({email_validated: true});

      }

       //if(this.state.last_name_validated > 0 || this.state.email_again_validated){

       //   this.setState({button_classname: "btn btn-default"});

      //}

  }

  setEmailAgain = (e: any) => {

      this.setState({email_again: e.target.value});

      //email and email_again ==
      //set border == green

      if(e.target.value == this.state.email){

          this.setState({button_classname: "btn btn-default"});

      }

  }

  onEmailAgainFocus = () => {

    /*axios.get("http://emailpie.com/v1/check?params={\'email\': \'rossedwards.us@gmail.com\'}")
    .then((response: any) => {

        console.log(JSON.stringify(response));

    });*/
    

    /*validator("banana@papaia.com", function (err, result){
      if(err) {
        // email was not valid 
        console.log("mailgun error")
      } else {
        console.log(result);
        // register the person for your service etc. 
      }
    })*/

  }

  


  render(){
    return (
      <div>
            <NavBar/>
            <div className="row">      
                <div className="hidden-xs col-md-3">
                </div>
                <div className="col-xs-12 col-md-9">
                      <br/>
                      <br/>
                      <br/>
                      {this.props.text}
                      <br/>
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" id="first_name" placeholder="First Name" onChange={this.setFirstName} style={{borderColor: ""}}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="last_name" placeholder="Last Name" onChange={this.setLastName}/>
                        </div>
                      </form>
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" onChange={this.setEmail}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="Email Again" onChange={this.setEmailAgain} onFocus={this.onEmailAgainFocus}/>
                        </div>
                      </form>
                      <br/>
                      <br/>
                      <button className={this.state.button_classname} onClick={() => this.props.completeGuestResponse(this.state.first_name, this.state.last_name, this.state.email)}>Complete</button>
                      <br/>
                      <br/>
                      <br/>
                </div>
            </div>
        </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("guest name component/state" + JSON.stringify(state));
  return {
    text: getNameScreenText(state),
        
    //parent_order_id
    //item_id
    GuestResponse: state.GuestResponse,
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    completeGuestResponse: (first_name: any, last_name: any, email: any) => {
    //  console.log("e.target.value");
      dispatch(completeGuestResponse(first_name, last_name, email, ownProps.params.event_name));
    },
    //setContactPhone: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setContactPhone(e.target.value));
    //},
   
  }
}

const GuestName1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestName)

export default GuestName1;