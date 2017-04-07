import React from 'react';
import ReactDOM from 'react-dom';
var request = require("superagent");
import {Button, Form, FormControl, ControlLabel, FormGroup, Col, Input} from 'react-bootstrap'

var UserProfileDeliveryAddress = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {

          address: "",
          suite: "",
          city: "",
          state: "",
          zipcode: "",
          note: ""
				
			}
	},
  componentDidMount: function(){

    //alert(this.props.user_id);

  },

  handleAddressChange: function(e){

    this.setState({address: e.target.value})

  },

  handleSuiteChange: function(e){

    this.setState({suite: e.target.value})

  },

  handleCityChange: function(e){

    this.setState({city: e.target.value})

  },

  handleStateChange: function(e){

    this.setState({state: e.target.value})

  },

  handleZipCodeChange: function(e){

    this.setState({zipcode: e.target.value})

  },

  handleNoteChange: function(e){

    this.setState({note: e.target.value})

  },

  save: function(){
      request
        .post('/api/user/profile/delivery_address')
        .send({address: this.state.address, suite: this.state.suite, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode, note: this.state.note})
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
                            <Form bsSize="small" horizontal>
                              <FormGroup bsSize="small">
                                  <Col componentClass={ControlLabel} sm={10}>
                                    <FormControl
                                      type="text"
                                      value={this.state.address}
                                      placeholder="Delivery Address"
                                      onChange={this.handleAddressChange}
                                      ref="address"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.suite}
                                      placeholder="Suite"
                                      onChange={this.handleSuiteChange}
                                      ref="suite"
                                    />
                                  </Col>
                              </FormGroup>
                            </Form>
                            <br/>
                            <Form horizontal>
                              <FormGroup>
                                  <Col componentClass={ControlLabel} sm={5}>
                                    <FormControl
                                      type="text"
                                      value={this.state.city}
                                      placeholder="City"
                                      onChange={this.handleCityChange}
                                      ref="city"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.state}
                                      placeholder="State"
                                      onChange={this.handleStateChange}
                                      ref="state"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={5}>
                                    <FormControl
                                      type="text"
                                      value={this.state.zipcode}
                                      placeholder="Zip Code"
                                      onChange={this.handleZipCodeChange}
                                      ref="zipcode"
                                    />
                                  </Col>
                              </FormGroup>
                            </Form>
                            <br/>
                            <br/>
                            Notes
                            <br/>
                            Leave food at front desk
                            <br/>
                            <FormGroup>
                                <FormControl componentClass="textarea" placeholder="textarea" style={{resize: "none"}} ref="note" onChange={this.handleNoteChange}/>
                            </FormGroup>
                            <br/>
                            <br/>
                            <Button onClick={this.save}>Save</Button>
                          </td>
                          <td width="30%"></td>
                        </tr>
                      </tbody>
                    </table>
          </div>);
  }
});

ReactDOM.render(<UserProfileDeliveryAddress user_id={user_id}/>, document.getElementById('user_profile_delivery_address'));