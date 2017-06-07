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


export default class UserTopNavbar extends React.Component {
  //props: Props;

  constructor(props) {
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

  loadCart(){

    this.setState({page: "cart"});
    //remove/change quantity

  }

  loadItems(){

    this.setState({page: "items"});
    //remove/change quantity

  }

  /*removeitem(item_id){

    //find item and remove it via split maybe
    //this.setState({cart: cart_temp});

    var cart_temp = this.state.cart;
    var cart_temp1 = "";
    
    //var cart_temp = cart_temp.filter(function(item) {
    //    return item.name !== "John";
    //});

    //cart_temp.map(function(i, v){

            //if v.item_id == item_id{

              //.splice(0,1);

            //}
          
    //}
    
  }*/

  mouseOver(e){

      e.target.src = "/images/menu/DWK_greenrollover3.jpg";

  }

  mouseOut(e){

      e.target.src = "/images/menu/DWK_greenrollover1.jpg";

  }

  render(): React.Element {
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
      dispatch(createOrder(order_type))
    }
  }
}

const UserTopNavbar = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTopNavbar)

export default UserTopNavbar1