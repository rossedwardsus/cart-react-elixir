import React from 'react';
import ReactDOM from 'react-dom';
var Dropzone = require('react-dropzone');
var request = require("superagent");
import {Input, Button} from 'react-bootstrap'

var UserProfileName = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
				
			}
	},
  componentDidMount: function(){

    //alert();

  },
  
  render: function(){

  		    return(<div>
                    <br/>
                    Address
                    <br/>
                    Suite
                    <Input/>
                    City
                    <br/>
                    State
                    <br/>
                    Zipcode
                    <br/>
                    <Input/>
                    <br/>
                    Leave food at front desk
          </div>);
  }

});


ReactDOM.render(<UserProfileName />, document.getElementById('user_profile_name'));