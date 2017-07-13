import * as React from 'react'

import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//import MenuItems from './menu_items';
import {completeGuestResponse} from '../actions/signature_guest_response.ts';

class GuestName extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        page: "",

        first_name: "",
        last_name: "",
        email: "",
        mailing_list: false,
        button_classname: "btn btn-default inactive"
        
    };

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

      //if name is larger then 0 and no numbers are symbols
      //let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      //let number_res = (/[0-9]/.test(e.target.value));


  }

  setLastName = (e: any) => {

      this.setState({last_name: e.target.value});

      //if name is larger then 0 and no numbers are symbols
      //let symbol_patt = /[-!@$%^&*()+|~=`{}\[\]:";'<>?,\/]/;
      //let symbol_res = symbol_patt.test(e.target.value);

      //let number_res = (/[0-9]/.test(e.target.value));


  }

  setEmail = (e: any) => {

      this.setState({email: e.target.value});

  }

  setMailingList = () => {

      let mailing_list_updated = !this.state.mailing_list;

      this.setState({mailing_list: mailing_list_updated});

  }


  render(){
    return (
      <div>
            <nav className="navbar navbar-default" style={{border: 1}}>
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                             <span className="sr-only">Toggle navigation</span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" style={{textAlign: "center"}} href="#"><img src="/images/logo/LogoJune5d.jpg"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navigationbar">
                          <ul id="navbar" className="nav navbar-nav navbar-right">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Signup</Link></li>
                            <li><Link to="/register">About Us</Link></li>
                            <li><Link to="/register">Faq</Link></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
            <div className="row">      
                <div className="hidden-xs col-md-3">
                </div>
                <div className="col-xs-12 col-md-9">
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      Great you are almost finished.  Please provide us with the information below so we can personalize your scone.
                      <br/>
                      <br/>
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="First Name" onChange={this.setFirstName}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="Last Name" onChange={this.setLastName}/>
                        </div>
                      </form>
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" onChange={this.setEmail}/>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="Email Again" onChange={this.setEmail}/>
                        </div>
                      </form>
                      <br/>
                      <br/>
                      <button className={this.state.button_classname} onClick={() => this.props.completeGuestResponse(this.state.first_name, this.state.last_name, this.state.email, this.state.mailing_list)}>Complete</button>
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
  console.log("delivery addresses component/state" + JSON.stringify(state));
  return {
    //parent_order_id
    //item_id
    GuestResponse: state.GuestResponse,
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    completeGuestResponse: (parent_order_id: any, item_id: any, first_name: any, last_name: any, email: any, mailing_list: any) => {
    //  console.log("e.target.value");
      dispatch(completeGuestResponse("1", "1", first_name, last_name, email, mailing_list));
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