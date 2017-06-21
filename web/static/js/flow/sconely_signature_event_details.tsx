import * as React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');
//import 'react-date-picker/index.css';
//import { DateField, Calendar } from 'react-date-picker';
//import Autocomplete from 'react-google-autocomplete';

import { connect } from 'react-redux';

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
        code: "",
        guest_count: 12,

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

  }

  changeEventName(e: any){

    //alert();

    //this.setState({changed: true});

    this.props.setEventName(e);
    this.setState({event_name: e.target.value})

  }

  changeGuestCount(e:any){

    this.setState({guest_count: e.target.value})
    this.props.setGuestCount(e);

  }

  handleDateChange(dateString: any) {

    //alert(dateString);

    //this.setState({
      //startDate: date
    //});
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
        req.field("order_id", this.props.order.order_id);
        req.end((response: any) => {
            //console.log(JSON.stringify(response))
            this.setState({files: acceptedFiles});

        });
        //this.setState({files: acceptedFiles});

        
  }


  setGuestCount(e: any){

      this.setState({guest_count: e.target.value});
      //this.props.setGuestCount(e);

  }

  render(): JSX.Element {
    return (
      <div>
        <br/>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-5">
                <label>Event Details</label>
              </div>
            </div>
        </form>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-10">
                <input type="text" onChange={(e: any) => this.changeEventName(e)} className="form-control" id="exampleInputName2" placeholder="Event Name" value={this.state.event_name} style={{borderRadius: 0, fontSize: 16}}/>
              </div>
            </div>
        </form>
        <br/>
        <form className="form-horizontal">
            <div className="form-group">
              <div className="col-sm-5">
                Event Photo
              </div>
            </div>
        </form>
        <Dropzone onDrop={(files: any) => this.onDrop(files)}>
            
        </Dropzone>
        <aside>
          <h2>Dropped files</h2>
            {this.state.files.map((f: any) => <img src={f.preview}/>)}
            </aside>
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              How many guests are you offering Sconely Signature to?
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-1">
              12
            </div>
            <div className="col-sm-5">
              <input type="range" onChange={(e: any) => this.setGuestCount(e)} id="weight" min="12" max="100" step="1" value={this.state.guest_count} style={{width: "200px", height: "10px"}}/>
            </div>
            <div className="col-sm-1">
              100
            </div>
            <div className="col-sm-2">
              Total Cost
            </div>
            <div className="col-sm-1">
              12
            </div>
          </div>
        </form>
         <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              Your guests will be able to select their preferred scone, which will be delivered in personalized packages. One scone per person, $6 each. If one or more of your guests do not choose a scone, a Sconely seasonal scone will be delivered in it's place. 
            </div>
          </div>
        </form>
        <form className="form-horizontal">
          <div className="form-group">
              <input type="radio" name="guest_doesnt_choose"/>- Sconely chooses seasonal scone
              <br/>
              <input type="radio" name="guest_doesnt_choose"/>- host chooses all of the same scone (everyone gets DWK, eg)
              <br/>
              <input type="radio" name="guest_doesnt_choose"/>- Sconely chooses mixture of sweet and savory distributed across the order
          </div>
        </form>
       </div>
    )
  }
}

function mapStateToProps(state: any) {
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
    //setDate: (e: any) => {
    //  dispatch(setDate(e))
    //},
    //setTime: (e: any) => {
    //  dispatch(setTime(e.target.value))
    //},
  }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Order);

const EventDetailsName1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsName)

export default EventDetailsName;
