import React from 'react'

import ToggleButton from 'react-toggle-button'
import InputRange from 'react-input-range';

//import SconelySocialTopMenu from './sconely_social_top_menu'; 


//import 'react-input-range/react-input-range.css';

export default class Guests extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();

    //alert(window.links.indexOf({link: "menu", text: "Menu"}));

    var exists = "no";

    /*JSON.parse(localStorage.getItem("order")).links.map(function(link){

        //alert("yes" + link.link);

        if(link.link == "menu"){

            exists = "yes";

        }

    });*/

    if(exists == "no"){

        //alert("doesnt exist");
  
        //JSON.parse(localStorage.getItem("order")).links.push({link: "menu", text: "Menu"});

    }else{

    //    alert("exists");
    }


    //alert("sconely yours1" + window.guest_chooses);

    //window.event.number_of_guests = 20;
    //window.event.guests_choose = false;

    this.state = {

        value: 0,
        //values: 0

    };

    this.handleValuesChange = this.handleValuesChange.bind(this);

    //myTimer;
    //var myVar = setInterval(
    //    () => 
            //get the data from state and upload to server
            //only update if the data has been changed though
            //add a flag that updates when they change something
            
            //if this.state.changed == true then update
            //only update guest details

            //window.event.event_name == this.state.event_name
            //window.address == "home"
            //window.event_date == "date"
            //window.event_time == "time"
            //window.custom_code = "custom_code"

            /*request
              .post('/api/order/new')
              .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
              .set('X-API-Key', 'foobar')
              .set('Accept', 'application/json')
              .end(function(err, res){
                // Calling the end function will send the request
                //this.setState({payment_complete: true});
          
              });*/

            //console.log("hello")
    //, 10000);

    //myVar;
    //myTimer;

  }

  handleValuesChange(e) {
    //alert(JSON.stringify(e.target.value));
    this.setState({value: e.target.value});

    //localStorage.getItem("number_of_guests = "values";
    //alert(window.guest_chooses);
  }

  render(): React.Element {

    var guests_choices = "";

    if(this.state.value == true){

        guests_choices = "Ross Edwards rossedwards.us@gmail.com";

    }

    return (
      <div>
        <br/>
        <b>Guests</b>
        <br/>
        <br/>
        Number of guests1:
        <br/>
        <input type="range" id="weight" min="20" max="500" step="10" value={this.state.values} onChange={this.handleValuesChange.bind(this)} style={{width: "200px", height: "10px"}}/>{this.state.value}
        <br/>
        <br/>
        Guest responses
        <br/>
        <br/>
      </div>
    )
  }
}