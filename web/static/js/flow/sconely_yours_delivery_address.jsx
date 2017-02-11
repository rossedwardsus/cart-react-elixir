// @flow

import React from 'react'
import { Link, browserHistory } from 'react-router'
import Autocomplete from 'react-google-autocomplete';
import Dialog from "rc-dialog";

type Props = {
  //title: string,
  //visited: boolean,
  setDeliveryAddrss: () => void,
};

export default class DeliveryAddress extends React.Component {
  props: Props;

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
   
  render(): React.Element {
    return (
      <div>
          <form className="form-horizontal">
            <div className="form-group">
              <label for="inputEmail3" className="col-sm-2 control-label"></label>
              <br/>
              <div className="col-sm-10">
                  <b>Delivery Address</b>
                  <br/>
                  <select onChange={(value) => this.props.setExistingDeliveryAddress(value)}>
                      <option value=""></option>
                      <option value="home">Home</option>
                      <option value="office">Office</option>
                  </select>
                  <br/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputEmail3" className="col-sm-2 control-label"></label>
              <br/>
              <div className="col-sm-10">
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                      //console.log(place.formatted_address.split(",")[2]);
                      this.props.setDeliveryAddress(place); 
                    }}
                    types={['address']}
                    componentRestrictions={{country: "us"}}
                />
                <input type="text"/>street/city/zipcode/floor/delivery comments
              </div>
          </div>
        </form>
      </div>
    )
  }
}