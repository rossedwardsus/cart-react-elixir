import React from 'react';
import ReactDOM from 'react-dom';
var request = require("superagent");
import {Button, Form, FormControl, ControlLabel, FormGroup, Col} from 'react-bootstrap'

var UserProfilePayment = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
				
			}
	},
  componentDidMount: function(){

    //alert(this.props.user_id);

  },

  save: function(){

      //save to stripe first and then store the token

      //Stripe.createToken();
      Stripe.setPublishableKey('pk_test_xxxx');

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
                                      placeholder="Credit Card Number"
                                      onChange={this.handleChange}
                                      ref="delivery_address"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Cvc"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Expiry Month"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Expiry Year"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                              </FormGroup>
                            </Form>
                            <br/>
                            <Form horizontal>
                              <FormGroup>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Card Type"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                                  
                              </FormGroup>
                            </Form>
                            <br/>
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

ReactDOM.render(<UserProfilePayment user_id={user_id}/>, document.getElementById('user_profile_payment'));