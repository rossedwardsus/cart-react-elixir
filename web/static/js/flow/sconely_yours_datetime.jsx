// @flow

import React from 'react'
import { Link, browserHistory } from 'react-router'
require('react-datepicker/dist/react-datepicker.css');
import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';

export default class DateTime extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        items: [{item_id: 1}]
        
    };
  }
   
  render(): React.Element {
    return (
      <div>
          <form className="form-horizontal">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">Delivery Address</label>
            <label for="inputEmail3" className="col-sm-2 control-label"><input type="radio" name="address"/></label>
            <div className="col-sm-5">
                <select>
                    <option></option>
                    <option>Home</option>
                    <option>Office</option>
                </select>
                <br/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label"></label>
            <label for="inputEmail3" className="col-sm-2 control-label"><input type="radio" name="address"/></label>
            <div className="col-sm-5">
                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                      console.log(place.formatted_address.split(",")[2]);
                    }}
                    types={['address']}
                    componentRestrictions={{country: "us"}}
                />
            </div>
          </div>
        </form>
      </div>
    )
  }
}