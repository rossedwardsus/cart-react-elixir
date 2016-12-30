import React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';

//<Calendar dateFormat="YYYY-MM-DD" date={'2017-04-24'} onChange={this.handleChange}/>


var Dropzone = require('react-dropzone');

import SconelySocialTopMenu from './sconely_social_top_menu'; 



//const onChange = (dateString, { dateMoment, timestamp }) => {
  //console.log(dateString)

//  alert();
//}

//var myTimer = () => console.log("hello");

/*setInterval(function growUp() {
    // In non-strict mode, the growUp() function defines `this` 
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);*/

export default class EventDetails extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    this.state = {

        event_name: "",
        event_datetime: "",
        event_address_street: "",
        event_address_city: "",
        event_address_zipcode: "",
        number_of_guests: 0,
        guest_choose: "",
        additiobal_items: {},
        code: 0,
        startDate: moment()

    };

    this.changeEventName = this.changeEventName.bind(this);
    this.changeNumberOfGuests = this.changeNumberOfGuests.bind(this);
    this.changeDeliveryAddress = this.changeDeliveryAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createCode = this.createCode.bind(this);
    this.changeCode = this.changeCode.bind(this);

    //autosave
    //if event name has been added then start autosaving

    //myTimer;
    var myVar = setInterval(
        () => 
            //get the data from state and upload to server
            console.log("hello")
    , 10000);

    //myVar;
    //myTimer;

  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}

  changeEventName(e){

    //alert();

    this.setState({event_name: e.target.value})

  }

  changeDeliveryAddress(e){

    this.setState({delivery_address: e.target.value})

  }

  changeNumberOfGuests(e){

    this.setState({number_of_guests: e.target.value})

  }

  handleChange(dateString) {

    alert(dateString);

    //this.setState({
      //startDate: date
    //});
  }

  onDrop(acceptedFiles){
        var req = request.post('/upload');
        acceptedFiles.forEach((file)=> {
            req.attach(file.name, file);
        });
        req.end(callback);
  }

  changeCode(){



  }

  createCode(){



  }

  next(){

    alert("next" + this.state.event_name);

  }

  render(): React.Element {
    return (
      <div>
        <SconelySocialTopMenu />
        <br/>
        <br/>
        <b>Event Details</b>
        <br/>
        To get start please tell us about your event:
        <br/>
        Event Name (max 30 characters)
        <br/>
        <input type= "text" maxLength="30" onChange={this.changeEventName}/>
        <br/>
        Event datetime:
        <br/>
        <DatePicker inline selected={this.state.startDate} onChange={this.handleChange} />
        <br/>
        Or
        <br/>
        <br/>
        Event Time
        <br/>
        Delivery Time
        <br/>
        Event address:
        <br/>
        Choose existing address:
        <br/>
        <input type="radio" name="address"/><select>
            <option></option>
            <option>Home</option>
            <option>Office</option>
        </select>
        <br/>
        Or add a new address
        <br/>
        <input type="radio" name="address"/>Street-limit to downtown<input/>
        <br/>
        City-<select>
                <option>Los Angeles</option>
              </select>
        <br/>
        Zipcode<input maxLength="30"/>
        <br/>
        <input type= "text" onChange={this.changeDeliveryAddress}/>
        <br/>
        <br/>
        Add an image for this event:
        <br/>
        <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <br/>
        <br/>
        Event Code:
        <br/>
        Default code-12345
        <br/>
        Or add a custom custom
        <br/>
        Custom Code (max 30 characters)
        <br/>
        <input maxlength="30" onChange={this.changeCode.bind(this)}/>
        <br/>
        <button onClick={this.createCode.bind(this)}>Save Code</button>
       </div>
    )
  }
}