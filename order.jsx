import React from 'react';
import ReactDOM from 'react-dom';
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

var Order = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
				startDate: moment()
			}
	},
  componentWillMount: function(){

  		var myVar = setInterval(this.myTimer, 10000);

  		//alert(this.state.images[0] + ".jpg");

  		//this.setState({image_url: "/images/" + this.state.images[0]});

  		//get default image
  		//with a timer change the image on a 5 second interval

  },

  render: function(){

  		return (<div><table width="100%"><tr><td>Delivery Address and Datetime</td></tr><tr><td><input ref="street_address"/><br/><input ref="city"/><select ref="state"><option value=""></option><option value="CA">Ca</option></select><br/><input ref="zipcode"/></td><td><DatePicker selected={this.state.startDate} onChange={this.handleChange} /><br/><select ref="time"><option value=""></option><option value="800">8:00</option></select></td></tr></table></div>);

  }

});


ReactDOM.render(<Order />, document.getElementById('react_order'));