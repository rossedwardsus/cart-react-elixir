import * as React from 'react'

import EventDetails from './sconely_signature_event_details.tsx';
import EventDetailsAddress from './sconely_signature_event_details_address.tsx';
import EventDetailsEventAddress from './sconely_signature_event_details_event_address.tsx';
import EventDetailsDateTime from './sconely_signature_event_details_datetime.tsx';
import EventDetailsName from './sconely_signature_event_details_name.tsx';
import EventDetailsCode from './sconely_signature_event_details_code.tsx';
import Guests from './sconely_signature_guests.tsx';
//import AdditionalItems from './sconely_signature_additional_items.tsx';
import PaymentMethod from './payment_method.tsx';

import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//import request from 'superagent';

class SconelySignatureSinglePage extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    //state: any;

    this.state = {

        order_id: this.props.params.order_id,
        order_type: "",
        host_id: "",
        event_name: "",
        event_date: "",
        event_time: "",
        event_address_street: "",
        event_address_city: "",
        event_address_zipcode: "",
        code: 0,
        delivery_time: "",
        image_uploaded: "",
        //startDate: moment()

    };

    /*fetch('http://192.168.1.148:4000/graphql', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: 'guery GetOrder { create_user_beam(user_id: \"\", beam_name: \"\") { status }}'})
    }).then((response) => response.json())
      .then((responseData) => {
          alert("success");
          console.log(JSON.stringify(responseData.body))
      })
      .catch((err)=> {
        alert("error" + JSON.stringify(err));
        console.log('Some errors occured');
        console.log(err);
    })
    .done();*/

  }

  save(){

      /*fetch('http://192.168.1.148:4000/graphql', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: 'mutation CreateUserBeam { create_user_beam(user_id: \"\", beam_name: \"\") { status }}'})
        }).then((response) => response.json())
          .then((responseData) => {
              alert("success");
              console.log(JSON.stringify(responseData.body))
          })
          .catch((err)=> {
            alert("error" + JSON.stringify(err));
            console.log('Some errors occured');
            console.log(err);
        })
        .done();*/

  }

  changeEventName(){



  }

  setDate(){



  }

  setTime(){

    //if time is extra then add to total

  }


  uploadImage(){


  }

  setGuestCount(){



  }

  pay(){


  }




  render(): JSX.Element {

    let logged_in = null;
    
    if("logged_in_true" == "logged_in_true"){
        
        logged_in = <div id="navbar" className="navbar-collapse collapse navbar-right">
                      <ul className="nav navbar-nav">
                        <li className="inactive">Profile<span className="sr-only">(current)</span></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive">Start Order</li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                      </ul>
                    </div>
    }


    return (
            <div>
              <nav className="navbar navbar-default navbar-fixed-top">
                                <div className="container-fluid">
                                  <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#"><img height="100" width="250" src="/images/logo/Sconely_color_web_300_space3.jpg"/></a>
                                  </div>

                                  {logged_in}

                              </div>
              </nav>
              <div className="row">
                <div className="hidden-xs col-md-4">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/public/menu">Menu</Link>
                    <br/>
                    <Link to="/public/menu">Delivery Addresses</Link>
                    <br/>
                    <Link to="/public/menu">Payment Methods</Link>
                    <br/>
                    <Link to="/public/menu">About Me</Link>
                    <br/>
                    <Link to="/public/menu">Photo</Link>
                    
                </div>
                <div className="col-md-6">
                  <br/>
                  <br/>
                  <br/>
                  <Link to="/order/signature">Order Details</Link>
                  <br/>
                  <Link to="/order/signature/guests">Order Guests</Link>
                  <br/>
                  <EventDetailsName/>
                  <br/>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-10">
                        12<input type="range" id="weight" min="12" max="500" step="1" value={this.state.values} style={{width: "200px", height: "10px"}}/>100
                      </div>
                    </div>
                  </form>
                  <EventDetailsAddress/>
                  <br/>
                  <br/>
                  <EventDetailsDateTime/>
                  <br/>
                  Invite message
                  <br/>
                  <PaymentMethod/>
                  <br/>
                  <EventDetailsCode/>
                  <br/>
                  <Guests/>
                  <br/>
                  <a className="btn dtn-default">Save</a><a className="btn dtn-default">Preview</a>
                </div>
              </div>
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

const SconelySignatureSinglePage1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(SconelySignatureSinglePage)

export default SconelySignatureSinglePage1;

