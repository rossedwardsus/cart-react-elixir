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

    let { setFirstName, setContactEmail, setDeliveryAddressStreet, setDeliveryAddressCity, setDeliveryAddressZipcode, setCardNumber, setExpiryDate, setSecurityCode } = this.props;


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
                      <b>DateTime</b>
                  </div>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="exampleInputName2"></label>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={() => {}} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2"></label>
                  <select className="form-control">
                      <option>9:00-11:00 am</option>
                      <option>1:00-3:00 pm</option>
                  </select>
                  <label htmlFor="exampleInputEmail2">(free)</label>
                </div>
                 <div className="form-group">
                  <select className="form-control">
                      <option>9:00</option>
                      <option>9:30</option>
                      <option>10:00</option>
                      <option>10:30</option>
                      <option>11:00</option>
                      <option>11:30</option>
                      <option>12:00</option>
                      <option>12:30</option>
                  </select>
                  <label htmlFor="exampleInputEmail2">($2 extra)</label>
                </div>
              </form>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-8">
                      <b>Name</b>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <input type="text" onChange={(e: any) => setFirstName(e)} className="form-control" id="exampleInputName2" placeholder="First Name"/>
                </div>
                <div className="form-group">
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Last Name"/>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Company Name"/>
                </div>
              </form>
              <br/>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-8">
                      <b>Address-if logged in</b>
                      <br/>
                      {true &&
                        <select className="form-control">
                            <option>Home</option>
                            <option>Office</option>
                        </select>
                      }
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Street"/>
                </div>
                <div className="form-group">
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Street 2"/>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <select className="form-control">
                      <option>Los Angeles</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                      <option>CA</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control">
                      <option>90025</option>
                      <option>1-3</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                  </select>
                </div>
              </form>
              <br/>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-10">
                      <b>Contact</b>
                      <br/>
                  </div>
                </div>
              </form>
              <form className="form-inline">
                <div className="form-group">
                  <input type="text" onChange={(e: any) => setContactEmail(e)} className="form-control" id="exampleInputName2" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <input type="text" onChange={(e: any) => setDeliveryAddressStreet(e)} className="form-control" id="exampleInputName2" placeholder="Mobile"/>
                </div>
              </form> 
              <br/>
              <br/>
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
                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="exampleInputName2" placeholder="Expiry"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Security Code"/>
                </div>
              </form>
          </div>
    )
  }
}