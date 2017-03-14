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
  props: any;
  state: any;

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
    this.setDeliveryAddressStreet = this.setDeliveryAddressStreet.bind(this);
  }
   
  /*<Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place: any) => {
                      //console.log(place.formatted_address.split(",")[2]);
                      //this.props.setDeliveryAddress(place); 
                    }}
                    types={['address']}
                    componentRestrictions={{country: "us"}}
                  />*/


  completeOrder(){

      alert();

  }

  setDeliveryAddressStreet(e: any){

    alert(e.target.value);

  }

  render(): JSX.Element {

    let { setDeliveryAddressStreet, setDeliveryAddressCity, setDeliveryAddressZipcode, setCardNumber, setExpiryDate, setSecurityCode } = this.props;


    /*<Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                      //console.log(place.formatted_address.split(",")[2]);
                      this.props.setDeliveryAddress(place); 
                    }}
                    types={['address']}
                    componentRestrictions={{country: "us"}}
                />*/
//AIzaSyAuVR15rb8d2QgfDsZUD5b6kNhnV-mF4wk

        return (
          <div>
              <DatePicker
                  selected={this.state.startDate}
                  onChange={() => {}} />
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-10">
                      <b>Time</b>
                      <br/>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputName2"></label>
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Street"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2"></label>
                  <select className="form-control">
                      <option>9-11</option>
                      <option>1-3</option>
                  </select>
                </div>
                 <div className="form-group">
                  <label htmlFor="exampleInputEmail2"></label>
                  <select className="form-control">
                      <option>9:00</option>
                      <option>9:15</option>
                      <option>9:30</option>
                      <option>9:45</option>
                      <option>10:00</option>
                  </select>
                </div>
              </form>
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
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Street"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2">City</label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2">State-CA</label>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2">Zipcode</label>
                  <select className="form-control">
                      <option>9-11</option>
                      <option>1-3</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
                </div>
              </form>
               <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-10">
                      <b>Contact</b>
                      <br/>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputName2">Email</label>
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Street"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName2">Mobile</label>
                  <select className="form-control">
                      <option>1</option>
                  </select>
                </div>
              </form>
              <br/>
              <br/>
              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputName2">Total Amount Due</label>
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Street"/>
                </div>
              </form>
              <br/>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-10">
                      <b>Payment</b>
                      <br/>
                      <b>Total Due</b>
                      <br/>
                  </div>
                </div>
              </form>

              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputName2">Card Number</label>
                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName2">Expiry Date</label>
                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2">Security Code</label>
                  <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                </div>
              </form>
              
          </div>
    )
  }
}