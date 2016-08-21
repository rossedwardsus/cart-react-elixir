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

    //alert(this.props.user_id);

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
                                  <Col componentClass={ControlLabel} sm={10}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Delivery Address"
                                      onChange={this.handleChange}
                                      ref="delivery_address"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Suite"
                                      onChange={this.handleChange}
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
                                      value={this.state.value}
                                      placeholder="City"
                                      onChange={this.handleChange}
                                      ref="delivery_address"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="State"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={5}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="ZipCode"
                                      onChange={this.handleChange}
                                      ref="suite"
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
                                <FormControl componentClass="textarea" placeholder="textarea" style={{resize: "none"}}/>
                            </FormGroup>
                            <br/>
                            <br/>
                            <Button onClick={this.save}>Save</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
          </div>);
  }
});

ReactDOM.render(<UserProfileDeliveryAddress user_id={user_id}/>, document.getElementById('user_profile_delivery_address'));