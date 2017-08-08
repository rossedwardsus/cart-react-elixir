import * as React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');
//import 'react-date-picker/index.css';
//import { DateField, Calendar } from 'react-date-picker';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import {getUserOrderDetails} from '../actions/user_order.ts';


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

class EventDetailsName extends React.Component<any, any> {
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
        startDate: moment(),
        files: [],
        image_src: "",
        invited_guest_count: 12,
        guest_message_before_event_name: "Hi everyone,We are using Sconely Signature for",
        guest_message_after_event_name: "Please select the scone you'd like before THREE DAYS BEFORE DELIVERY DATE.",
        guest_message: ""

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

  }

  componentDidMount(){

    /*var orders = JSON.parse(localStorage.getItem("user")).orders;    

    function findOrder(order: any) { 
            //alert(order.order_id);
            return order.order_id === 12345;
    };

    var order_type = orders.find(findOrder).order_type; 
    //alert(order_type);
    this.setState({order_type: order_type});*/

    //this.props.getUserOrderDetails;

    this.setState({guest_message: this.state.guest_message_before_event_name + " " + this.state.event_name + " " + this.state.guest_message_after_event_name});

  }

  componentWillReceiveProps(){

    console.log("cdrp event details" + JSON.stringify(this.props.order_details));
    this.setState({event_name: this.props.order_details.event_name});
    this.setState({invited_guest_count: this.props.order_details.invited_guest_count});

  }

  setEventName(e: any){

    //alert();

    //this.setState({changed: true});

    this.props.setEventName(e);
    //this.setState({event_name: e.target.value})

    //this.setState({guest_message: this.state.guest_message_before_event_name + " " + e.target.value + " " + this.state.guest_message_after_event_name})

  }

  changeGuestCount(e:any){

    this.setState({guest_count: e.target.value})
    this.props.setGuestCount(e);

  }

 
  onDrop(acceptedFiles: any){
        
        let req = request.post('/api/upload');
        let that = this;
        //this.setState({files: acceptedFiles});
        
        console.log(JSON.stringify(acceptedFiles));
        acceptedFiles.forEach((file: any)=> {
            console.log(file.name);
            //this.setState({image_src: "http://localhost:4000/uploads/1.jpg"});
            
            req.attach("file", file);
            //this.setState({files: acceptedFiles});

        });
        //req.field("order_id", this.props.order.order_id);
        //req.end((response: any) => {
            //console.log(JSON.stringify(response))
        //    this.setState({files: acceptedFiles});

        //});
        //this.setState({files: acceptedFiles});

        
  }


  setGuestCount(e: any){

      //this.setState({guest_count: e.target.value});
      this.props.setInvitedGuestCount(e);

  }

  setGuestMessage(e: any){

      //this.guest_message_before_event_name + event_name + this.guest_message_after_event_name

      this.setState({guest_message: e.target.value});
      this.props.setGuestMessage(e);

  }

  render(): JSX.Element {
    return (
      <div>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-10">
                 <label>Event Name: This name will be used to generate a link that you send to your guests.  30 character limit.</label>
              </div>
            </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-4">
                <input type="text" onChange={(e: any) => this.setEventName(e)} className="form-control" id="exampleInputName2" placeholder="Event Name" value={this.state.event_name} maxLength={25} style={{borderRadius: 0, fontSize: 16}}/>
              </div>
            </div>
        </form>
         
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-10">
                Event Photo: This image will be used on your Event Menu.  Use a high quality image that relates to your image or a logo.  1.5 x 1.5 inches or 110 x 110 pixels.
              </div>
            </div>
        </form>
        
        <Dropzone onDrop={(files: any) => this.onDrop(files)} style={{borderRadius: "50%", "width" : "110", "height" : "110", "border" : "1px dashed", borderColor: "#808080"}}>
              <img height="107" width="107" style={{borderRadius:"50%"}} src="/images/menu/JF_3x3.jpg"/>
        </Dropzone>
            {this.state.files.map((f: any) => <img src={f.preview}/>)}
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              How many guests are you offering Sconely Signature to?  This number can only increase after your order is placed.
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
              <div className="col-sm-7">
                <div className="col-sm-1">
                  12
                </div>
                <div className="col-sm-5">
                  <input type="range" list="guests" min="0" max="150" step="1" onChange={(e: any) => this.setGuestCount(e)} className="form-control" id="exampleInputName2" placeholder="" value={this.state.invited_guest_count} maxLength={3} style={{borderRadius: 0, fontSize: 16, width: "150px"}}/>
                </div>
                <div className="col-sm-1">
                  150
                </div>
              </div>
              <div className="col-sm-2">
                {this.state.invited_guest_count} X 6.00
              </div>
              <div className="col-sm-1">
                =
              </div>
              <div className="col-sm-1">
                ${this.state.invited_guest_count * 6.00}
              </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              Your guests select their preferred scone, which will be delivered in personalized packages. One scone per person, $6 each. 
            </div>
          </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-3">
                  <Link to="/order/12345/items">Items</Link>
              </div>
            </div>
        </form>
       </div>
    )
  }
}

/*function mapStateToProps(state: any) {
  console.log("checkout state" + JSON.stringify(state));
  return {
   session: state.session,
   order_validations: state.order_validations,
   order: state.Order,
   order_delivery_address: state.delivery_address,
   order_contact: state.contact,
   order_name: state.name,
   order_cart_items: state.cart.cart_items,
   order_datetime: state.OrderDatetime,
   order_payment_method: state.OrderPayment,

   //menu_items: getPublicMenu
   //menu_items: dispatch()
  };
}

function mapDispatchToProps(dispatch: any) {
  //return bindActionCreators({ getAllProducts: getAllProducts }, dispatch);
  return {
    getUserOrderDetails: () => {
      dispatch(getUserOrderDetails("e"))
    },
    //setTime: (e: any) => {
    //  dispatch(setTime(e.target.value))
    //},
  }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Order);

const EventDetailsName1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsName)*/

export default EventDetailsName;
