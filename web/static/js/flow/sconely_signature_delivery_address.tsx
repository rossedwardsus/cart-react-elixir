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
//import request from 'superagent';


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

export default class EventDetailsDeliveryAddress extends React.Component<any, any> {
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
        street1: "",
        event_address_city: "",
        event_address_zipcode: "",
        code: 0,
        startDate: moment()

    };

    

  
  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}

  componentDidMount(){

    /*var orders = JSON.parse(localStorage.getItem("user")).orders;    

    function findOrder(order: any) { 
            //alert(order.order_id);
            return order.order_id === 12345;
    };

    var order_type = orders.find(findOrder).order_type; 
    //alert(order_type);
    this.setState({order_type: order_type});*/

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
        /*var req = request.post('/api/v_alpha/signature/upload');
        acceptedFiles.forEach((file: any)=> {
            //alert(file.name);
            req.attach("file", file);
        });
        req.field("event_id", 123545);
        req.end((response: any) => {alert(JSON.stringify(response))});*/
  }

  changeStreet1(e: any){

      this.setState({street1: e.target.value});

      this.props.setDeliveryAddressStreet1(e);

  }

  render(): JSX.Element {
    return (
      <div>
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-5">
              <label>Delivery details</label>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-5">
                <select className="form-control">
                    <option></option>
                    <option>Home</option>
                    <option>Office</option>
                </select>
                <br/>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-3">
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Street" onChange={(e: any) => this.changeStreet1(e)} value={this.state.street1} style={{borderRadius: 0, fontSize: 16}}/>
              </div>
              <div className="col-sm-3">
                <input type="text" value={this.state.street2} className="form-control" id="exampleInputName2" placeholder="Street 2" style={{borderRadius: 0, fontSize: 16}}/>
              </div>
            </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-3">
              <select className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                <option>City</option>
                <option value="los_angeles">Los Angeles</option>
                <option value="santa_monica">Santa Monica</option>
              </select>
            </div>
            <div className="col-sm-3">
              <select className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                <option>State</option>
                <option value="ca">CA</option>
              </select>
            </div>
            <div className="col-sm-3">
              <select className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                <option>Zipcode</option>
                <option>Free</option>
              </select>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-5">
              <label>Contact</label>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-3">
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" onChange={(e: any) => this.changeStreet1(e)} value={this.state.street1} style={{borderRadius: 0, fontSize: 16}}/>
              </div>
              <div className="col-sm-3">
                <input type="text" value={this.state.street2} className="form-control" id="exampleInputName2" placeholder="Mobile" style={{borderRadius: 0, fontSize: 16}}/>
              </div>
            </div>
        </form>
     
       </div>
    )
  }
}