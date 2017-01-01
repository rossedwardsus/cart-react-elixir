import React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

import 'react-date-picker/index.css';
import { DateField, Calendar } from 'react-date-picker';
import Autocomplete from 'react-google-autocomplete';


//<Calendar dateFormat="YYYY-MM-DD" date={'2017-04-24'} onChange={this.handleChange}/>


var Dropzone = require('react-dropzone');

import SconelySocialTopMenu from './sconely_social_top_menu'; 

import request from 'superagent';


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

        order_id: this.props.params.order_id,
        order_type: "",
        event_name: "",
        event_datetime: "",
        event_address_street: "",
        event_address_city: "",
        event_address_zipcode: "",
        code: 0,
        startDate: moment()

    };

    

    //load the data from the database if this is not a new event/order

    //if window.event.status == "existing/saved"
    /*request
              .post('/api/order/new')
              .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
              .set('X-API-Key', 'foobar')
              .set('Accept', 'application/json')
              .end(function(err, res){
                // Calling the end function will send the request
                //this.setState({payment_complete: true});
          
    });*/

    this.changeEventName = this.changeEventName.bind(this);
    this.changeNumberOfGuests = this.changeNumberOfGuests.bind(this);
    this.changeDeliveryAddress = this.changeDeliveryAddress.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.createCode = this.createCode.bind(this);
    this.changeCode = this.changeCode.bind(this);
    //this.findOrder = this.findOrder.bind(this);

    //autosave
    //if event name has been added then start autosaving

    //myTimer;
    //var myVar = setInterval(
    //    () => 
            //get the data from state and upload to server
            //only update if the data has been changed though
            //add a flag that updates when they change something
            
            //if this.state.changed == true then update
            //only update event details

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

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}

  componentDidMount(){

    var orders = JSON.parse(localStorage.getItem("user")).orders;    

    function findOrder(order) { 
            //alert(order.order_id);
            return order.order_id === 12345;
    };

    var order_type = orders.find(findOrder).order_type; 
    //alert(order_type);
    this.setState({order_type: order_type});

  }

  changeEventName(e){

    //alert();

    //this.setState({changed: true});

    this.setState({event_name: e.target.value})

  }

  changeDeliveryAddress(e){

    this.setState({delivery_address: e.target.value})

  }

  changeNumberOfGuests(e){

    this.setState({number_of_guests: e.target.value})

  }

  handleDateChange(dateString) {

    //alert(dateString);

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

  onFocus(){

        /*alert();

        //AIzaSyAuVR15rb8d2QgfDsZUD5b6kNhnV-mF4wk
        
        request
              .post('https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=Amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=AIzaSyAuVR15rb8d2QgfDsZUD5b6kNhnV-mF4wk')
              .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
              .set('X-API-Key', 'foobar')
              .set('Accept', 'application/json')
              .end(function(err, res){
                // Calling the end function will send the request
                //this.setState({payment_complete: true});
                console.log(res);
          
              });*/


  }

  next(){

    alert("next" + this.state.event_name);

  }

  render(): React.Element {
    return (
      <div>
        <SconelySocialTopMenu order_id={this.props.params.order_id}/>
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label>
                  <input type="checkbox"/> Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Sign in</button>
            </div>
          </div>
        </form>
        <br/>
        <br/>
        <br/>
        {this.state.order_type == "signature" &&
        <b>Event Details-only show for signature</b>
        }
        <br/>
        To get start please tell us about your event:
        <br/>
        Event Name (max 30 characters)only show for signature
        <br/>
        <input type= "text" maxLength="30" onChange={this.changeEventName}/>
        <br/>
        Event datetime:only show for signature
        <br/>
        <DatePicker inline selected={this.state.startDate} onChange={this.handleDateChange} />
        <br/>
        Or
        <br/>
        <br/>
        Event Time
        <br/>
        Delivery Date Time
        <br/>
        <br/>
        Automcomplete test:
        <br/>
        <Autocomplete
            style={{width: '90%'}}
            onPlaceSelected={(place) => {
              console.log(place.formatted_address.split(",")[2]);
            }}
            types={['address']}
            componentRestrictions={{country: "us"}}
        />
        <br/>
        <br/>
        Event/Delivery Address address:
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
        <input type="radio" name="address"/>Street-limit to downtown<input onFocus={this.onFocus.bind(this)}/>
        <br/>
        City-<select>
                <option>Los Angeles</option>
              </select>
        <br/>
        Zipcode<input maxLength="30"/>
        <br/>
        <input type= "text" onChange={this.changeDeliveryAddress}/>
        <br/>
        additional delivery details 
        <br/>
        message to guests for signature
        <br/>
        <br/>
        Add an image for this event: only for signature
        <br/>
        <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
        <br/>
        <br/>
        Only for signature:
        <br/>
        Event Code:
        <br/>
        Default code-12345
        <br/>
        Or add a custom custom
        <br/>
        Custom Code (max 30 characters)
        <br/>
        <input maxLength="30" onChange={this.changeCode.bind(this)}/>
        <br/>
        <button onClick={this.createCode.bind(this)}>Save Code</button>
       </div>
    )
  }
}