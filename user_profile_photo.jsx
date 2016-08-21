import React from 'react';
import ReactDOM from 'react-dom';
var Dropzone = require('react-dropzone');
var request = require("superagent");

var UserProfilePhoto = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {

          files: []
				
			}
	},
  componentDidMount: function(){

    //alert();

  },
  onDrop: function(files){
        this.setState({
            files: files
        });
        var req = request.post('/upload');
        files.forEach((file)=> {
            req.attach(file.name, file);
        })
        //req.end("callback");
        req.end(function(err, res){
        // Calling the end function will send the request
        });
  },
  render: function(){

  		    return(<div>
                    <br/>
                    <Dropzone onDrop={this.onDrop}>
                      <div>Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                    {this.state.files.length > 0 ? <div>
                    <h2>Uploading {this.state.files.length} files...</h2>
                    <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                    </div> : null}
          </div>);
  }

});


ReactDOM.render(<UserProfilePhoto />, document.getElementById('user_profile_photo'));