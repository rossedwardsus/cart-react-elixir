import * as React from 'react'

import EventDetails from './sconely_signature_event_details.tsx';
import Guests from './sconely_signature_guests.tsx';

//import request from 'superagent';

export default class SconelySignature extends React.Component<any, any> {
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
    return (
      <div>
        <EventDetails/>
        <br/>
        <Guests/>
       </div>
    )
  }
}