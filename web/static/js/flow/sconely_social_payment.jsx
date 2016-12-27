// @flow

import React from 'react'

import request from 'superagent';

export default class Payment extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        payment_choice: "",
        payment_complete: false
        
    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  completePayment(order_type) {

    //make payment through stripe

    /*alert();

    request
      .post('/api/pet')
      .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .end(function(err, res){
        // Calling the end function will send the request
        //this.setState({payment_complete: true});
  
      });*/
    
      this.setState({payment_complete: true});
  
    
  }

  render(): React.Element {

    var body = "";

    if(this.state.payment_complete == false){

      body = <div>
            <b>Payment</b>
              <br/>
              Subtotal: {this.props.total}
              <br/>
              Delivery Cost: 
              <br/>
              Radio
              <br/>
              <select>
                <option>Personal</option>
              </select>
              <br/>
              Add another
              <br/>
              Name this card:
              <br/>
              Card Number
              <br/>
              Expiration
              <br/>
              Security Code
              <br/>
              <br/>
              <button onClick={this.completePayment.bind(this)}>Complete order</button>
              <br/>
              </div>

    }else{

      body = <div><b>Payment complete!</b>.  You can now invite your guests to view the menu with the code.</div>

    }
    

    return (
      <div>
        
        {body}
       
      </div>
    )
  }
}