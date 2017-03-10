'use sctrict'

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

type Props = {
  //title: string,
  //visited: boolean,
  //setDeliveryAddress: () => void,
};

export default class DeliveryAddressPayment extends React.Component<any, any> {
  props: Props;
  state: any;

  constructor(props: Props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    //state: {
      //display: 'static' | 'hover' | 'active',
    //};

    this.state = {

        delivery_addresses: [{street: "santa monica blvd"}],
        
    };
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

  render(): JSX.Element {

    let delivery_addresses = null;

    //alert(this.props.user_type);

    /*if(this.props.user_type == "registered"){

        delivery_addresses = <select onChange={(value) => this.props.setExistingDeliveryAddress(value)}>
                                  <option value=""></option>
                                  <option value="home">Home</option>
                                  <option value="office">Office</option>
                              </select>

    }*/


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
          <button type="button" className="btn" onClick={() => {}}>Complete Payment</button> 
      </div>
    )
  }
}