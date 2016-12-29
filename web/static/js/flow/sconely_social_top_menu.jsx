import React from 'react';

import { Link } from 'react-router'; 

export default class SconelySocialTopMenu extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
    }

  }

  render(){
		return (
			<div>
				top menu with links to <Link to="/order/12345/event_details">event details</Link> and <Link to="/order/12345/guests">guests</Link> and payment
			</div>
		)
  }
}
        