import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
import {createOrder} from '../actions/order.ts';
import {List, Map} from 'immutable';

//import Dialog from "rc-dialog";

type Props = {
  //title: string,
  //visited: boolean,
  setDeliveryAddrss: () => void,
};


class UserTopNavbar extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        page: "items",
        items: [{item_id: 1}],
        cart: this.props.cart,
    };

    this.loadCart = this.loadCart.bind(this);
    
  }

  componentDidMount(){

    //get active items from the database

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  

  render(): JSX.Element {
    return (
         <nav className="navbar navbar-default" style={{border: 1}}>
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                       <span className="sr-only">Toggle navigation</span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                       <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" style={{textAlign: "center"}} href="#"><img src="http://sconely.herokuapp.com/images/logo/LogoJune5d.jpg"/></a>
                  </div>
                  <div className="collapse navbar-collapse" id="navigationbar">
                    <ul id="navbar" className="nav navbar-nav navbar-right">
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Signup</Link></li>
                      <li><Link to="/register">About Us</Link></li>
                      <li><Link to="/register">Faq</Link></li>
                    </ul>
                    <form id="navbar" className="navbar-form navbar-left">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Guest Code" value={this.state.guest_code} onChange={(e: any) => this.guestCodeChange(e)}/>
                      </div>
                      <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                  </div>
                </div>
          </nav>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("homepage" + JSON.stringify(state));
  return {
    //active: ownProps.filter === state.visibilityFilter
    //logged_in: state.login
    user: state.user
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    createOrder: (order_type: any) => {
      //alert("check");
      //dispatch(createOrder(order_type))
    }
  }
}

const UserTopNavbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTopNavbar)

export default UserTopNavbar1