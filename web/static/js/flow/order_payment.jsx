// @flow

import React from 'react'

import request from 'superagent';

import SconelySocialTopMenu from './sconely_social_top_menu';

export default class Payment extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        payment_options: [{name: "personal"}, {name: "work"}],
        payment_choice: "",
        payment_complete: false
        
    };

    //localstorage get order info uasing props
    //function findOrder(order) { 
        //alert(order.order_id);
    //    return order.order_id === 12345;
    //}

    //var links = orders.find(findOrder).links; 
    //get the total items and multiply plus tax and delivery
    //if type == signature get guest amount
    //else get items

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

  selectPaymentOption(e){

    alert(e.target.value);

  }

  render(): React.Element {

    var body = "";
    var subtotal = 0.00;
    var total = 0.00;

    if("order_type" == "order_type"){
        
        subtotal = "Subtotal: " + (5.00 * 5.00);
        total = "Total: " + ((5.00 * 5.00) + 10.00);
    
    }

    if(this.state.payment_complete == false){

      body = <div>
              <SconelySocialTopMenu />
              <br/>
              <b>Payment</b>
              <br/>
              <br/>
                {subtotal}           
                <br/>     
                Delivery Cost: based on distance needed to travel and tax
                <br/>
                <br/>
                {total}
                Radio
                <br/>
                <select onChange={this.selectPaymentOption.bind(this)}>
                  <option value=""></option>
                  {this.state.payment_options.map(function(option){
                      return(
                          <option value={option.name}>{option.name}</option>
                      )
                  })}
                </select>
                <br/>
                Add another
                <br/>
                Name this card:
                <br/>
                Card Number
                <br/>
                <input/>
                <br/>
                Expiration
                <br/>
                <input/>
                <br/>
                Security Code
                <br/>
                <input/>
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