import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
import {List, Map} from 'immutable';

import { getUserDeliveryAddresses, addUserDeliveryAddress } from '../actions/user.ts';
import UserDeliveryAddress from './user_delivery_address.tsx';


//const mapDispatchToProps = dispatch => {
//  return {
//    onNavigateTo(dest) {
//      dispatch(push(dest));
//    }
//  };
//};

//@connect(null, mapDispatchToProps)
class DeliveryAddresses extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        name: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipcode: ""
    };


  }

  componentDidMount(){

    //alert("jsx");
    //get active items from the database
    //setInterval(this.changeImage, 10000);

    //localStorage.get('user');

    //this.setState({orders: this.props.getUserDeliveryAddresses});

    //this.props.getUserDeliveryAddresses();

    //const { getUserDeliveryAddresses } = this.props
    //getUserDeliveryAddresses();

    console.log("delivery addresses cdm" + JSON.stringify(this.props.delivery_addresses))


  }

  componentWillReceiveProps(){

    console.log("delivery addresses cwrp " + JSON.stringify(this.props.delivery_addresses))


  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  onSubmit(e: any){

    e.preventDefault();

  }

  setName = (e: any) => {

    this.setState({name: e.target.value});

  }

  setStreet1 = (e: any) => {

    this.setState({street1: e.target.value});

  }

  setStreet2 = (e: any) => {

    this.setState({street2: e.target.value});
  
  }

  setCity = (e: any) => {

    this.setState({city: e.target.value});
  
  }

  setAddressState = (e: any) => {

    this.setState({state: e.target.value});
  
  }

  setZipcode = (e: any) => {
  
    this.setState({zipcode: e.target.value});

  }
  
  
  addUserDeliveryAddress(){

      this.props.addUserDeliveryAddress(this.state.street1, this.state.street2, this.state.city, this.state.state, this.state.zipcode)

  }
                 


  render(){

    let logged_in = null;
    
    const {delivery_addresses} = this.props;
    //console.log("render" + JSON.stringify(delivery_addresses));

    return (
              <div>
                  
                      <br/>
                      {Object.keys(delivery_addresses).map(function(key: any, index: any){
                            return(<div>
                                        <form className="form-inline">
                                          <div className="form-group">
                                            <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="Address Name"/>
                                          </div>
                                        </form>
                                        <form className="form-inline">
                                          <div className="form-group">
                                            <input type="text" value={delivery_addresses[key].street1} className="form-control" id="exampleInputName2" placeholder="Street 1"/>
                                          </div>
                                          <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputName2" placeholder="Street 2"/>
                                          </div>
                                        </form>
                                        <form className="form-inline">
                                          <div className="form-group">
                                            <select className="form-control">
                                                <option></option>
                                                <option>Los Angeles</option>
                                            </select>
                                          </div>
                                          <div className="form-group">
                                            <select className="form-control">
                                                <option></option>
                                                <option>CA</option>
                                            </select>
                                          </div>
                                          <div className="form-group">
                                            <select className="form-control" >
                                                <option></option>
                                                <option>90025</option>
                                            </select>
                                          </div>
                                        </form>
                                        <form className="form-inline">
                                            <div className="form-group">
                                              <textarea  className="form-control" style={{rows: 5, columns: 1, resize: "none"}} id="comment"></textarea>
                                            </div>
                                          </form>
                                      <button>save changes</button>
                                      </div>)
                      })}
                     
              </div>
    )
  }
}

export default DeliveryAddresses;