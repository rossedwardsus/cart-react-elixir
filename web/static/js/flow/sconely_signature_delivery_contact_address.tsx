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

export default class EventDetailsDeliveryContactAddress extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    this.state = {

      contact_first_name: "",
      contact_last_name: "",
      contact_email: "",
      contact_mobile: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zipcode: ""

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

  changeDeliveryContactFirstName(e: any){

    this.setState({contact_first_name: e.target.value});
    //this.props.setDeliveryAddressStreet1(e);

  }

  changeDeliveryContactLastName(e: any){

    this.setState({contact_last_name: e.target.value});
    //this.props.setDeliveryAddressStreet1(e);

  }

  changeDeliveryContactEmail(e: any){

    this.setState({contact_email: e.target.value});
    //this.props.setDeliveryAddressStreet1(e);

  }
 
  changeDeliveryContactMobile(e: any){

    this.setState({contact_mobile: e.target.value});
    //this.props.setDeliveryAddressStreet1(e);

  }

  changeDeliveryAddressStreet1(e: any){

    this.setState({street1: e.target.value});
    this.props.setDeliveryAddressStreet1(e);

  }

 

 
  changeDeliveryAddressStreet2(e: any){

      this.setState({street2: e.target.value});
      this.props.setDeliveryAddressStreet2(e);

  }

  changeDeliveryAddressCity(e: any){

      this.setState({city: e.target.value});
      this.props.setDeliveryAddressCity(e);

  }

  changeDeliveryAddressState(e: any){

      this.setState({state: e.target.value});
      this.props.setDeliveryAddressState(e);

  }

  changeDeliveryAddressZipcode(e: any){

      this.setState({zipcode: e.target.value});
      this.props.setDeliveryAddressZipcode(e);

  }

  render(): JSX.Element {
    return (
      <div>
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-5">
              <label></label>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-5">
              <label>Delivery Contact</label>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-3">
                <input type="text" className="form-control" id="exampleInputName2" placeholder="First" onChange={(e: any) => this.changeDeliveryContactFirstName(e)} value={this.state.first_name} style={{borderRadius: 0, fontSize: 16}}/>
              </div>
              <div className="col-sm-3">
                <input type="text" onChange={(e: any) => this.changeDeliveryContactLastName(e)} value={this.state.last_name} className="form-control" id="exampleInputName2" placeholder="Last" style={{borderRadius: 0, fontSize: 16}}/>
              </div>
            </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-3">
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Email" onChange={(e: any) => this.changeDeliveryContactEmail(e)} value={this.state.contact_email} style={{borderRadius: 0, fontSize: 16}}/>
              </div>
              <div className="col-sm-3">
                <input type="text" onChange={(e: any) => this.changeDeliveryContactMobile(e)} value={this.state.contact_mobile} className="form-control" id="exampleInputName2" placeholder="Mobile" style={{borderRadius: 0, fontSize: 16}}/>
              </div>
            </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-5">
              <label>Delivery Address</label>
            </div>
          </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-3">
                <input type="text" className="form-control" id="exampleInputName2" placeholder="Street 1" onChange={(e: any) => this.changeDeliveryAddressStreet1(e)} value={this.state.street1} style={{borderRadius: 0, fontSize: 16}}/>
              </div>
              <div className="col-sm-3">
                <input type="text" onChange={(e: any) => this.changeDeliveryAddressStreet2(e)} value={this.state.street2} className="form-control" id="exampleInputName2" placeholder="Street 2" style={{borderRadius: 0, fontSize: 16}}/>
              </div>
            </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-3">
              <select onChange={(e: any) => this.changeDeliveryAddressCity(e)} value={this.state.city} className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                <option>City</option>
                <option value="los_angeles">Los Angeles</option>
                <option value="santa_monica">Santa Monica</option>
              </select>
            </div>
            <div className="col-sm-3">
              <select onChange={(e: any) => this.changeDeliveryAddressState(e)} value={this.state.state} className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                <option>State</option>
                <option value="ca">CA</option>
              </select>
            </div>
            <div className="col-sm-3">
              <select onChange={(e: any) => this.changeDeliveryAddressZipcode(e)}  value={this.state.zipcode}  className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                <option>Zipcode</option>
                <option>Free</option>
              </select>
            </div>
          </div>
        </form>
        
     
       </div>
    )
  }
}