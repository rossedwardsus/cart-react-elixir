import React from 'react'

import EventDetails from './sconely_social_event_details';
import Guests from './sconely_signature_guests';

export default class SconelySignatureSinglePage extends React.Component {
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
        //startDate: moment()

    };

  }

  render(): React.Element {
    return (
      <div>
        <EventDetails order_id={this.props.params.order_id}/>
        <br/>
        <Guests order_id={this.props.params.order_id}/>
       </div>
    )
  }
}