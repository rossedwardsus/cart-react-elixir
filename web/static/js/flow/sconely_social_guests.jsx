import React from 'react'

export default class Guests extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

    };

  }

  render(): React.Element {
    return (
      <div>
        <b>Guests</b>
        <br/>
        <br/>
        Tell us about your guests:
        <br/>
        Number of guests:
        <br/>
        <input type= "text" onChange={this.changeNumberOfGuests}/>
        <br/>
        <br/>
        Guests choose item:
        <br/>
        <input type= "text"/>
        <br/>
        What guests have chosen
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}