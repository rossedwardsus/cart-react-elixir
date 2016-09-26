//delivery address
//menu-cart
//payment
//datetime
//redux
//unit testing
//immutable


import React from 'react';

import TopMenu from './top_menu.jsx'
import StuGovMenu from './stu_gov_menu.jsx'
import { Navbar, Nav, NavItem, NavDropdown, Form, FormGroup, Col, ControlLabel, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router'

export default class UserOrderExpress extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      cart: [{item_id: 1, amount: "student"}],
      delivery_address: "",
      datetime: "",
      payment: ""
    };
  }

  componentDidMount() {
  
    //alert("bills");

  }

  render(){

  		var page = "";

  		if(this.state.page == "delivery_address"){
         page = <form>
			        <FormGroup
			          controlId="formBasicText"
			          validationState={this.getValidationState()}
			        >
			          <ControlLabel>Delivery Address-State</ControlLabel>
			          <FormControl
			            type="text"
			            value={this.state.value}
			            placeholder="Enter text"
			            onChange={this.handleChange}
			          />
			          <FormControl.Feedback />
			          <HelpBlock>Validation is based on string length.</HelpBlock>
			        </FormGroup>
			    </form>
        }else{

        	//page gets menu


                
        //<Row className="show-grid">
	    //  <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
	    //  <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
	    //  <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
	    //</Row>
	    //<Image src="/assets/thumbnail.png" responsive />
      
      	}else{

      		//page gets cart

      	}

	    return(<div><table>
	    				<tr>
	    					<td></td><td></td><td></td>
	    			{page}
	      			<br>
	                text
	                <br>
	                <Button>Submit</Button>
	                </table>
	              </div>);

  }

}
