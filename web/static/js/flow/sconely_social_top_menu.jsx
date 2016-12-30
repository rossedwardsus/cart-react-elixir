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
				<br/>
				{window.event.links.map(function(link){

					var link_temp = "/order/12345/" + link.link;
					return(<Link to={link_temp}>{link.text} </Link>);	

				})}
			</div>
		)
  }
}
        