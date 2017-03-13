'use strict'

import * as React from 'react'
import { Link, browserHistory } from 'react-router'
//import Autocomplete as any from 'react-google-autocomplete';
//import Dialog from "rc-dialog";
//let Autocomplete = require('react-google-autocomplete');
//const Autocomplete = Autocomplete: any;
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

//declare module 'react-google-autocomplete' {
//    const x: any;
//    export = x; 
//}

//type Props = {
  //title: string,
  //visited: boolean,
//  addDeliveryAddress: () => void,
//};

export default class DeliveryAddressPayment extends React.Component<any, any> {
  //props: any;
  //state: any;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    //state: {
      //display: 'static' | 'hover' | 'active',
    //};

    this.state = {

        delivery_addresses: [{street: "santa monica blvd"}],
        street: "",
        city: "",
        state: "",
        zipcode: "",
        startDate: moment()
        
    };

    this.completeOrder = this.completeOrder.bind(this);
  }

  componentDidMount(){

    alert();

  }
   
 

  completeOrder(){

      alert();

  }

  render(): JSX.Element {

    

        return (
          <div>
              <DatePicker inline 
                  selected={this.state.startDate}
                  onChange={() => alert()} />
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-10">
                      <b>Delivery Address</b>
                      <br/>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputName2">Street</label>
                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName2">City</label>
                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2">State</label>
                  <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2">Zipcode</label>
                  <select className="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
                </div>
              </form>
              <br/>
              <br/>
              
              <button type="button" className="btn" onClick={() => this.completeOrder()}>Complete Payment</button> 
              <button type="button" className="btn" onClick={() => alert()}>Delivery Address and Payment-submit payment</button> 
          </div>
    )
  }
}