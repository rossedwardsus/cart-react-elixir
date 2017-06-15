import * as React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');
//import 'react-date-picker/index.css';
//import { DateField, Calendar } from 'react-date-picker';
//import Autocomplete from 'react-google-autocomplete';


//<Calendar dateFormat="YYYY-MM-DD" date={'2017-04-24'} onChange={this.handleChange}/>


var Dropzone = require('react-dropzone');
//import SconelySocialTopMenu from './sconely_social_top_menu'; 
var request = require('superagent');


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

export default class EventDetailsPhoto extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    this.state = {

        //order_id: this.props.params.order_id,
        order_id: this.props.order_id,
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

    function findOrder(order: any) { 
            //alert(order.order_id);
            return order.order_id === 12345;
    };

    var order_type = orders.find(findOrder).order_type; 
    //alert(order_type);
    this.setState({order_type: order_type});

  }

  changeEventName(e: any){

    //alert();

    //this.setState({changed: true});

    this.setState({event_name: e.target.value})

  }

  changeDeliveryAddress(e: any){

    this.setState({delivery_address: e.target.value})

  }

  changeNumberOfGuests(e:any){

    this.setState({number_of_guests: e.target.value})

  }

  handleDateChange(dateString: any) {

    //alert(dateString);

    //this.setState({
      //startDate: date
    //});
  }

  onDrop(acceptedFiles: any){
        let req = request.post('/api/upload');
        acceptedFiles.forEach((file: any)=> {
            //alert(file.name);
            req.attach("file", file);
        });
        req.field("event_id", 123545);
        req.end((response: any) => {alert(JSON.stringify(response))});
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

  render(): JSX.Element {
    return (
      <div>
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Event Name</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" placeholder="Event Name"/>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Date Time</label>
            <label className="col-sm-2 control-label">
                <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} />
            </label>
            <label className="col-sm-2 control-label">Time<input type="radio" name="time"/>
            </label>
            <div className="col-sm-5">
                <select>
                    <option></option>
                    <option>9-11</option>
                    <option>3-5</option>
                </select>
                <br/>
            </div>
            <br/>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Delivery Address</label>
            <label className="col-sm-2 control-label"><input type="radio" name="address"/></label>
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
            <label className="col-sm-2 control-label"></label>
            <label className="col-sm-2 control-label"><input type="radio" name="address"/></label>
            <div className="col-sm-5">
                
            </div>
          </div>
        </form>
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Image</label>
            <label className="col-sm-2 control-label"></label>
            <div className="col-sm-5">
                <Dropzone onDrop={this.onDrop}>
                  <div>Try dropping some files here, or click to select files to </div>
                </Dropzone>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">Event Code:</label>
            <div className="col-sm-5">
              <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
            </div>
          </div>
        </form>
        <br/>
       </div>
    )
  }
}