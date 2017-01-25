// @flow

import React from 'react';

import { Link } from 'react-router';

import OrdersList from './orders_list';

import request from 'superagent';

var fetch = require('graphql-fetch')('http://domain.com/graphql')
import { GQLClient } from 'graphql-http';


export default class Events extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        
    };

     localStorage.setItem("user", JSON.stringify({name: "ross", orders: [{order_id: 12345, order_type: "signature", links: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}, {link: "preview", text: "Preview"}, {link: "payment", text: "Payment"}], delivery_address: "", event_name: "", guest_chooses: false, number_of_guests: 0, menu: [], status: "paid"}]}));

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  createOrder(order_type) {

    if(order_type == "sconely_social"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});
       

    }else if(order_type == "sconely_signature"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

         
    }else if(order_type == "sconely_signature_single_page"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        this.context.router.push('/order/12345/sconely_signature_single_page');
        
         
    }else if(order_type == "sconely_yours"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});
         
    }


    /*const client = GQLClient('http://localhost:3000', {
      // anything passed here is merged with 
      // the options passed to fetch() 
      credentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });*/

    /*client.mutate(`
      mutation ($id: RecordID!, $name: String!) {
        updateUser(input: {id: $id, name: $name}) {
          user {
            id
            name
          }
        }
      }
    `, { id: 1234, name: 'Danny' }).then((result) => {
      console.log(result.data.user);
      // => { id: 1234, name: 'Danny' } 
    });*/



    /*var query = `
      query q (id: String!) {
        user(id: $id) {
          id,
          email,
          name
        }
      }
    `
    var queryVars = {
      id: 'abcdef'
    }
    var opts = {
      // custom fetch options 
    }*/
     
    /**
     * @param  {Query} query graphql query
     * @param  {Object} [vars]  graphql query args, optional
     * @param  {Object} [opts]  fetch options, optional
     */
    /*fetch(query, queryVars, opts).then(function (results) {
      if (results.errors) {
        //... 
        return
      }
      var user = result.data.user
      //... 
    })*/


    /*request
      .post('/api/order/new')
      .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .end(function(err, res){
        // Calling the end function will send the request
        //this.setState({payment_complete: true});
  
      });*/


    //alert(order_type);
    
    //this.context.router.push('/order/12345/event_details');
    
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  render(): React.Element {

    var orders = JSON.parse(localStorage.getItem("user")).orders;

    return (
      <div>
        <a onClick={this.createOrder.bind(this, "sconely_signature_single_page")}>Sconely Signature Single Page</a>
        <br/>
        <br/>
        <br/>
        <a onClick={this.createOrder.bind(this, "sconely_yours")}>Sconely Yours</a>
        <br/>
        <a onClick={this.createOrder.bind(this, "sconely_social")}>Sconely Social</a>
        <br/>
        <a onClick={this.createOrder.bind(this, "sconely_signature")}>Sconely Signature</a>
        <br/>
        <OrdersList orders={orders}/>
      </div>
    )
  }
}