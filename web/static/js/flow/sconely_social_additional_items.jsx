// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

import request from 'superagent';

export default class Items extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        items: [{item_id: 1}],
        chosen_items: []

    };

    /*request
      .post('/api/pet')
      .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .end(function(err, res){
        // Calling the end function will send the request
        //this.setState({items: {item_id: 1234}});
  
      });*/


      this.selectNumberOfItem = this.selectNumberOfItem.bind(this);

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  createOrder(order_type) {
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  selectNumberOfItem(e){

    alert(e.target.value);

  }

  render(): React.Element {
    return (
      <div>
        <b>Add additional items</b>
        <br/> 
        {this.state.items.map(function(item){

            var value_8 = item.item_id + "_" + 8;
            var value_16 = item.item_id + "_" + 16;


            return(
                <div>
                total items
                <br/>
                <br/>
                item1 photo
                <br/>
                amount-cost
                <br/>
                <select onChange={this.selectNumberOfItem.bind(this)}>
                  <option value=""></option>
                  <option value={value_8}>8</option>
                  <option value={value_16}>16</option>
                </select>
                <br/>
                item2 photo
                <br/>
                <input type="checkbox"/>
                </div>
            )

        }.bind(this))}
        </div>
    )
  }
}