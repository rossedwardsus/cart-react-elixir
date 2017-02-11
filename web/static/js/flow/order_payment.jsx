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

  //completePayment(order_type) {

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
    
      //this.setState({payment_complete: true});
  
    
  //}

  render(): React.Element {

          var subtotal = this.props.total_item * 5;

          return(<div>
              <br/>
              
                <br/>
                <br/>
                <form className="form-horizontal">
                  <div className="form-group">
                    <label for="inputEmail3" className="col-sm-0 control-label"></label>
                    <div className="col-sm-8">
                        <b>Payment Metho</b>
                        <br/>
                        <select>
                            <option></option>
                            <option>Card ending in 9876</option>
                            <option>Card ending in 1234</option>
                        </select>
                        <br/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="inputEmail3" className="col-sm-0 control-label"></label>
                    <div className="col-sm-10">
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
                <button className="btn btn-default" onClick={() => this.props.completeOrder()}>Complete order</button>
              </div>
          )
    }
    
}