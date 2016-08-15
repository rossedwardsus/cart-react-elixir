import React from 'react';
import ReactDOM from 'react-dom';
var Dropzone = require('react-dropzone');
var request = require("superagent");
import {Button, FormControl} from 'react-bootstrap'

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
                    <FormControl
                     type="text"
                     placeholder="Enter text"
                     onChange={this.handleChange}
                    />
                    <br/>
                    <input/>
                    <br/>
                    <input/>
                    <br/>
                    <Button>Save</Button>
          </div>);
  }

});


ReactDOM.render(<UserProfileName />, document.getElementById('user_profile_name'));