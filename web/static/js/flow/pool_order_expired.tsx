// @flow

import React from 'react'

//import request from 'superagent';

//import SconelySocialTopMenu from './sconely_social_top_menu';

export default class PoolOrderExpired extends React.Component<any, any> {
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
              This pool has expired
              </div>
          )
    }
    
}