import React from 'react';
import ReactDOM from 'react-dom';
var Dropzone = require('react-dropzone');
var request = require("superagent");
import {Button, FormControl} from 'react-bootstrap'

var AdminViewOrders = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {

          orders: [{title: "title1"}, {title: "title2"}]
				
			}
	},
  componentDidMount: function(){

    //alert();

  },
  
  render: function(){

  		    return(<div>
                    <br/>
                    {this.state.orders.map(function(order){

                            return(<div>{order.title}</div>)

                    })}
          </div>);
  }

});


ReactDOM.render(<AdminViewOrders/>, document.getElementById('admin_view_orders'));