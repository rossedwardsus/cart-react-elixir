import React from 'react'

import { Link } from 'react-router'

export default class OrdersList extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        orders: [{order_id: 1234, order_date: ""}]

    };

  }

  
  render(): React.Element {
    return (
      <ul>
       List of orders
       <br/>
       Date-Order Type
      </ul>
    )
  }
}