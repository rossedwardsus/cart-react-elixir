import React from 'react';
import ReactDOM from 'react-dom';
var request = require("superagent");
import {Button, Form, FormControl, ControlLabel, FormGroup, Col} from 'react-bootstrap'

var UserProfileDeliveryAddress = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
				
			}
	},
  componentDidMount: function(){

    //alert();

  },

  save: function(){
      request
        .post('/api/user/profile/delivery_address')
        .send({delivery_address: this.refs.delivery_address.value, suite: this.refs.suite.value, city: this.refs.city.value, state: this.state.state, zipcode: this.refs.zipcode.value, note: this.refs.zipcode.value})
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end(function(err, res){
          // Calling the end function will send the request
        });
  },
  
  render: function(){

  		    return(<div>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <Form horizontal>
                              <FormGroup>
                                  <Col componentClass={ControlLabel} sm={2}>
                                        Address
                                  </Col>
                                  <Col sm={10}>
                                  <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter text"
                                    onChange={this.handleChange}
                                    ref="delivery_address"
                                  />
                                  </Col>
                              </FormGroup>
                            </Form>
                            <ControlLabel>Suite</ControlLabel>Suite
                            <br/>
                            <FormControl
                              type="text"
                              value={this.state.value}
                              placeholder="Enter text"
                              onChange={this.handleChange}
                              ref="suite"
                            />
                            <br/>
                            CityStateZipcode
                            <br/>
                            <input/>
                            <br/>
                            <ControlLabel>City</ControlLabel>Suite
                            <br/>
                            <FormControl
                              type="text"
                              value={this.state.value}
                              placeholder="Enter text"
                              onChange={this.handleChange}
                              ref="city"
                            />
                            <br/>
                            Notes
                            <br/>
                            Leave food at front desk
                            <br/>
                            <Button onClick={this.save}>Save</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
          </div>);
  }
});

ReactDOM.render(<UserProfileDeliveryAddress />, document.getElementById('user_profile_delivery_address'));