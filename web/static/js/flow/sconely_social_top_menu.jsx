import React from 'react';

import { Link } from 'react-router'; 

export default class SconelySocialTopMenu extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.order_id);
    //alert(JSON.stringify(JSON.parse(localStorage.getItem("order")).links));

    this.state = {
    }

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  render(){

  		var orders = JSON.parse(localStorage.getItem("user")).orders;

  		function findOrder(order) { 
  			//alert(order.order_id);
		    return order.order_id === 12345;
		}

		var links = orders.find(findOrder).links; 

		return (
			<div>
				<br/>
				{links.map(function(link){

					var link_temp = "/order/12345/" + link.link;
					return(<Link to={link_temp}>{link.text} </Link>);	
					/*return(<form className="form-horizontal">
			          <div className="form-group">
			            <label for="inputEmail3" className="col-sm-2 control-label"><Link to={link_temp}>{link.text} </Link>)</label>
			          </div>
			        </form>)*/

				})}
			</div>
		)
  }
}
        