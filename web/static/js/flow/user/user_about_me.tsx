import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
//import {setUserFirstName, setUserLastName, setUserEmail} from '../actions/user.ts';
import {List, Map} from 'immutable';
import UserNavbar from './user_navbar.tsx';


//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class UserAboutMe extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        first_name: "",
        last_name: "",
        email: "",
        mobile: ""

    };

   
  }

  componentDidMount(){

    this.setState({first_name: this.props.User.first_name});
    this.setState({last_name: this.props.User.last_name});
    this.setState({email: this.props.User.email});
    this.setState({mobile: this.props.User.mobile});

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }



  setUserFirstName = (e: any) => {

    this.setState({first_name: e.target.value});
    //this.props.setUserFirstName(e);

  }

  setUserLastName = (e: any) => {

    this.setState({last_name: e.target.value});
    //this.props.setUserLastName(e);

  }

  setUserEmail = (e: any) => {

    this.setState({email: e.target.value});
    //this.props.setUserLastName(e);

  }

  setMobile = (e: any) => {

    this.setState({mobile: e.target.value});
    //this.props.setUserLastName(e);

  }


  saveAboutMe = () => {

    this.props.saveAboutMe(this.state.first_name, this.state.last_name);

  }

  


                                      


  render(){

    let logged_in = null;
    
    return (
              <div>
                    <UserNavbar first_name={this.props.User.first_name} last_name={this.props.User.last_name}/>
                    <div className="row">
                        <div className="hidden-xs col-md-4">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          Home
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          <Link to="/user/delivery_addresses">Delivery Addresses</Link>
                          <br/>
                          <Link to="/user/payment_methods">Payment Methods</Link>
                          <br/>
                          <Link to="/user/about_me">About Me</Link>
                          <br/>
                          <Link to="/user/photo">Photo</Link>
                        </div>
                        <div className="col-md-6">
                                  <br/>
                                  <br/>
                                  <br/>
                                   <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="First Name" value={this.state.first_name} onChange={(e: any) => this.setUserFirstName(e)}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Last Name" value={this.state.last_name} onChange={(e: any) => this.setUserLastName(e)}/>
                                      </div>
                                    </form>
                                    <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" value={this.state.email} onChange={(e: any) => this.setUserEmail(e)}/>
                                      </div>
                                      <div className="form-group">
                                        <input type="text" className="form-control" value={this.state.mobile} id="exampleInputName2" placeholder="Mobile"/>
                                      </div>
                                    </form>    
                                    <form className="form-inline">
                                      <div className="form-group">
                                        <input type="text" className="form-control" value={this.state.company_name} id="exampleInputName2" placeholder="Company Name" />
                                      </div>
                                    </form>       
                                    save button            
                                  </div>
                        <div className="hidden-xs col-md-2">
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              maybe put something here
                        </div>
                    </div>
              </div>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("delivery addresses component/state" + JSON.stringify(state.user));
  return {
   User: state.User
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    setUserFirstName: (e: any) => {
      console.log("e.target.value");
      //dispatch(setUserFirstName(e.target.value));
    },
    setUserLastName: (e: any) => {
      console.log("e.target.value");
      //dispatch(setUserLastName(e.target.value));
    },
    setUserEmail: (e: any) => {
      console.log("e.target.value");
      //dispatch(setUserEmail(e.target.value));
    },
    //addUserDeliveryAddress: (name: any, street1: any, street2: any, city: any, state: any, zipcode: any) => {
    //  console.log(e.target.value);
    //  dispatch(addUserDeliveryAddress(name, street1, street2, city, state, zipcode));
    //},
   
  }
}

const UserAboutMe1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAboutMe)

export default UserAboutMe1;