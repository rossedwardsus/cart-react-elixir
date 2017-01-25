import React from 'react'

import { Link } from 'react-router'

export default class App extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        event_name: "",
        event_date: "",
        event_delivery_datetime: "",
        event_delivery_address: "",
        number_of_guests: "",
        guest_choose: false,
        total: "",

        
    };

    window.links = [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}];

    this.changeEventName = this.changeEventName.bind(this);
    this.changeNumberOfGuests = this.changeNumberOfGuests.bind(this);
    this.changeDeliveryAddress = this.changeDeliveryAddress.bind(this);
    this.handleChange = this.handleChange.bind(this);

    /*alert();

    get all of the user information
    store = {user_id, events, addresses, payments}

    request
      .post('/api/pet')
      .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .end(function(err, res){
        // Calling the end function will send the request
        //this.setState({payment_complete: true});
  
      });*/

  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}

  changeEventName(e){

    //alert();

    this.setState({event_name: e.target.value})

  }

  changeDeliveryAddress(e){

    this.setState({delivery_address: e.target.value})

  }

  changeNumberOfGuests(e){

    this.setState({number_of_guests: e.target.value})

  }


  handleChange(dateString) {

    alert(dateString);

    //this.setState({
      //startDate: date
    //});
  }

  next(){

    alert("next" + this.state.event_name);

  }

  render(): React.Element {
    return (
      <div>
        <div className="container-fluid">
            <div className="row">
                <div className="hidden-xs col-md-2">
                Profile
                <br/>
                <Link to="/user/delivery_address">Delivery addresses</Link>
                <br/>
                Payments
                <br/>
                Password
                <br/>
                Image
                <br/>
                About me
                <br/>
                </div>
                <div className="col-xs-6 col-md-8">
                      {this.props.children}
                </div>
                <div className="col-xs-6 col-md-2">
                    maybe put something here
                </div>
            </div>
          </div>
      </div>
    )
  }
}