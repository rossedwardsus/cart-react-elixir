import React from 'react';

import { Link } from 'react-router'; 

export default class SconelySocialTopMenu extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);
    //alert(JSON.stringify(JSON.parse(localStorage.getItem("order")).links));

    this.state = {
    }

  }

  render(){

  		var links = JSON.parse(localStorage.getItem("order")).links;

		return (
			<div>
				<br/>
				{links.map(function(link){

					var link_temp = "/order/12345/" + link.link;
					return(<Link to={link_temp}>{link.text} </Link>);	

				})}
			</div>
		)
  }
}
        