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

  changeCode(e: any){

     this.setState({code: e.target.value});

     this.props.setCode(e);

     //check if code exists already

    /*axios.post('/api/graphql', {
          //axios.post('http://localhost:4000/api/graphql', {
                 query: 'mutation {setCode (order_type: "social", order_delivery_address_street1: "' + this.props.order_delivery_address.street1 + '", order_delivery_address_city: "' + this.props.order_delivery_address.city + '", order_delivery_address_state: "' + this.props.order_delivery_address.state + '", order_delivery_address_zipcode: "' + this.props.order_delivery_address.zipcode + '", order_datetime_date: "' + this.props.order_datetime.date + '", order_first_name: "' + that.props.order_name.first_name + '", order_last_name: "' + that.props.order_name.last_name + '", order_contact_email: "' + this.props.order_contact.email + '", order_contact_mobile: "' + this.props.order_contact.mobile + '", order_payment_name_on_card: "' + this.props.order_payment_method.name_on_card + '", order_payment_card_number: "' + this.props.order_payment_method.card_number + '", order_payment_expiry_month: "' + this.props.order_payment_method.expiry_month + '", order_payment_expiry_year: "' + this.props.order_payment_method.expiry_year + '", order_payment_security_code: "' + this.props.order_payment_method.security_code + '") { status, order_id }}'
          })
          .then((response: any) => {

                console.log("graphql response" + JSON.stringify(response));

                //that.props.history.push('/user');
                //context.router

                that.props.setOrderId(1);

                this.context.router.push('/order/complete');
      

          })
          .catch((error: any) => {

                console.log("error" + error);
                //go to code/payment screen
        //        this.props.loadView();


                //display errror to user - payment

         //if (!error.status) {
            // network error
          //}

          })*/


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
        <Dropzone onDrop={(files: any) => this.onDrop(files)}>
            <div style={{height:"25%", width:"10%"}}>Event Photo</div>
        </Dropzone>
        <aside>
          <h2>Dropped files</h2>
            {this.state.files.map((f: any) => <img src={f.preview}/>)}
            </aside>
        <br/>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              12<input type="range" onChange={(e: any) => this.props.setGuestCount(e)} id="weight" min="12" max="100" step="1" value={this.state.guest_count} style={{width: "200px", height: "10px"}}/>100
            </div>
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
