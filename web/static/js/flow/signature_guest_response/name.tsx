import * as React from 'react'

import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//import MenuItems from './menu_items';
import {completeGuestResponse} from '../actions/signature_guest_response.ts';
import {getNameScreenText} from '../selectors/signature_guest_response.ts';


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
        button_classname: "btn btn-default inactive"
        
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
                      {this.props.text}
                      <br/>
                      <form className="form-inline">
                        <div className="form-group">
                          <input type="text" className="form-control" style={{borderColor: "red"}} id="first_name" placeholder="First Name" onChange={this.setFirstName}/><span className="glyphicon glyphicon-ok" style={{color: "green"}}/>
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
                          <input type="text" className="form-control" id="exampleInputName2" placeholder="Email Again" onChange={this.setEmail}/>
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