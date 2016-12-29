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

    //alert(JSON.stringify(window.links));

    if(window.links.indexOf({link: "menu", text: "Menu"}) == -1){

        //alert("doesnt exist");
  
        window.links.push({link: "menu", text: "Menu"});

    }else{

        alert("exists");
    }

    //alert("sconely yours1" + window.guest_chooses);

    this.state = {

        value: false,
        values: 0

    };

  }

  handleValuesChange(component, values) {
    this.setState({
      values: values,
    });

    window.guest_chooses = "values";
    //alert(window.guest_chooses);
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
        {window.guest_chooses}
        <br/>
        if window.guest_chooses == true then show both menus
        <br/>
        else just show the assortments
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
            });
            window.guest_chooses = value;
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