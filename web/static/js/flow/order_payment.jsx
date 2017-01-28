// @flow

import React from 'react'

//import request from 'superagent';

//import SconelySocialTopMenu from './sconely_social_top_menu';

export default class Payment extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        payment_options: [{payment_id: 1, name: "personal"}, {payment_id: 2, name: "work"}],
      
        
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

  render(): React.Element {

          var subtotal = this.props.total_item * 5;

          return(<div>
              <br/>
              <b>Payment</b>
              <br/>
              <br/>
                {this.props.total_items * 5}           
                <br/>     
                <br/>
                {this.props.sub_total}
                <br/>
                <br/>
                <form className="form-horizontal">
                  <div className="form-group">
                    <label for="inputEmail3" className="col-sm-2 control-label"><input type="radio" name="existing"/></label>
                    <div className="col-sm-2">
                        <select>
                            <option></option>
                            <option>Home</option>
                            <option>Office</option>
                        </select>
                        <br/>
                    </div>
                    <label for="inputEmail3" className="col-sm-2 control-label"><input type="radio" name="new"/></label>
                    <div className="col-sm-2">
                        <input type="checkbox"/>save
                        <br/>
                        Name this card:
                        <input type="text" size="20" onChange={(e) => this.props.setNewCardName(e.target.value)}/>
                        <br/>
                        Card Number
                        <br/>
                        <input type="text" size="20" onChange={(e) => this.props.setNewCardNumber(e.target.value)}/>
                        <br/>
                        Expiration Date
                        <br/>
                        <input type="text" onChange={(e) => this.props.setNewCardExpiryDate(e.target.value)}/>
                        <br/>
                        Security Code
                        <br/>
                        <input type="text" size="4" onChange={(e) => this.props.setNewCardSecurityCode(e.target.value)}/>
                        
                    </div>
                    </div>
                </form>
                <button onClick={this.completePayment.bind(this)}>Complete order</button>
              </div>
          )
    }
    
}