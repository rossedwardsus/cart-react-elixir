import React from 'react';
import ReactDOM from 'react-dom';
var Dropzone = require('react-dropzone');
var request = require("superagent");
import {Button, FormControl} from 'react-bootstrap'

var AdminAddItem = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {

          files: []
				
			}
	},
  componentDidMount: function(){

    //alert();

  },

  onDrop: function(){

      var req = request.post('/upload');
      files.forEach((file)=> {
          req.attach(file.name, file);
      });
      req.end(callback);

      /*files.forEach((file)=> {
            //alert(JSON.stringify(file.getAsText("utf-8")));
            //req.attach(file.name, file);
            reader.onload = function(e) {
                // e.target.result should contain the text
                //alert(e.target.result);
                alert(e.target.result.split(",")[0]);
                //e.target.result.map(function(guest){

                  //  guest_list.push(guest);

                //})
                this.setState({guest_list: guest_list});
            };
            reader.readAsText(file);
      });*/

  },
  
  render: function(){

  		    return(<div>
                    <br/>
                    <FormControl
                     type="text"
                     placeholder="Title"
                     onChange={this.handleChange}
                    />
                    <br/>
                    description-textarea<input/>
                    <br/>
                    category-select<select onChange={this.categoryChange}><option value=""></option><option value="scone">Scone</option><option value="tea">Tea</option><option value="assortment">Assortment</option></select>
                    <br/>
                    <br/>
                    add photo
                    <br/>
                    <Dropzone onDrop={this.onDrop}>
                      <div>Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                    <br/>
                    <button type="button" onClick={this.onOpenClick}>
                    Open Dropzone
                    </button>
                    {this.state.files.length > 0 ? <div>
                    <h2>Uploading {this.state.files.length} files...</h2>
                    <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                    </div> : null}
                    <br/>
                    <Button>Save</Button>
          </div>);
  }

});

ReactDOM.render(<AdminAddItem/>, document.getElementById('admin_add_item'));