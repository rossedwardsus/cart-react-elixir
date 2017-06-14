'use strict'

import * as React from 'react'

import { Link, browserHistory } from 'react-router'

import {connect} from 'react-redux';


class Event extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        
    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  createOrder(order_type: any) {
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  render(): JSX.Element {
    return (
      <ul>
        Welcome to Sconely.com.  
        <br/>
        You have been invited to "Sconely Launch Party".  By sconely.
        <br/>
        <br/>
        You can now choose which scone you want by clicking the link below
        <br/>
        <Link to="/order/1/guest/menu">Next</Link> 
      </ul>
    )
  }
}

function mapStateToProps(state: any) {
  console.log("delivery addresses component/state" + JSON.stringify(state));
  return {
   //order: state.default.order
   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    //getUserDeliveryAddresses: () => {
    //  console.log("e.target.value");
    //  dispatch(getUserDeliveryAddresses());
    //},
    //setContactPhone: (e: any) => {
    //  console.log(e.target.value);
      //dispatch(setContactPhone(e.target.value));
    //},
   
  }
}

const Event1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Event)

export default Event1;