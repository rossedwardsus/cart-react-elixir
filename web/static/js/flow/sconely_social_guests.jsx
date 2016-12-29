import React from 'react'

import ToggleButton from 'react-toggle-button'
import InputRange from 'react-input-range';

import SconelySocialTopMenu from './sconely_social_top_menu'; 


//import 'react-input-range/react-input-range.css';

export default class Guests extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        value: false,
        values: 0

    };

  }

  handleValuesChange(component, values) {
    this.setState({
      values: values,
    });
  }

  render(): React.Element {

    var guests_choices = "";

    if(this.state.value == true){

        guests_choices = "Ross Edwards rossedwards.us@gmail.com";

    }

    return (
      <div>
        <SconelySocialTopMenu />
        <br/>
        <br/>
        <b>Guests</b>
        <br/>
        <br/>
        Tell us about your guests:
        <br/>
        Number of guests1:
        <br/>
        <select onChange={this.props.changeNumberOfGuests}>
            <option value=""></option>
            <option value="20">20</option>
            <option value="40">40</option>
        </select>
        <br/>
        <input type="range" id="weight" min="10" value={this.state.values} onChange={this.handleValuesChange.bind(this)}
       max="2000" step="100"/>
        <br/>
        <InputRange
            maxValue={20}
            minValue={0}
            value={this.state.values}
            onChange={this.handleValuesChange.bind(this)}
          />
        Guests choose item:
        <br/>
        <ToggleButton
          value={ this.state.value || false }
          onToggle={(value) => {
            this.setState({
              value: !value,
            })
          }} />
        <br/>
        {guests_choices}
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}