import * as React from 'react'

import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

//import MenuItems from './menu_items';
import {completeGuestResponse} from '../actions/signature_guest_response.ts';
import {getNameScreenText} from '../selectors/signature_guest_response.ts';


class NavBar extends React.Component<any, any> {
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
      </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("guest name component/state" + JSON.stringify(state));
  return {
    //text: getNameScreenText(state),
        
    //parent_order_id
    //item_id
    //GuestResponse: state.GuestResponse,
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //completeGuestResponse: (first_name: any, last_name: any, email: any) => {
    //  console.log("e.target.value");
    //  dispatch(completeGuestResponse(first_name, last_name, email, ownProps.params.event_name));
    //},
    //setContactPhone: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setContactPhone(e.target.value));
    //},
   
  }
}

const NabBar1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestName)

export default NavBar1;