import React from 'react'

import Menu from './sconely_yours_menu';
import DateTime from './sconely_yours_datetime';
import DeliveryAddress from './sconely_yours_delivery_address'
//import Payment from './sconely_social_payment';

import request from 'superagent';

export default class SconelyYours extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    this.state = {

        order_id: this.props.params.order_id,
        cart: [{item_id: 1, quantity: 1, mini: true}, {item_id: 1, quantity: 1, mini: true}],
        delivery_address: "",
        delvery_datetime: ""
    };

    /*fetch('http://192.168.1.148:4000/graphql', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query: 'guery GetOrder { create_user_beam(user_id: \"\", beam_name: \"\") { status }}'})
    }).then((response) => response.json())
      .then((responseData) => {
          alert("success");
          console.log(JSON.stringify(responseData.body))
      })
      .catch((err)=> {
        alert("error" + JSON.stringify(err));
        console.log('Some errors occured');
        console.log(err);
    })
    .done();*/

  }

  componentDidMount(){

    //get users payment methods
    //delivery addresses

  }

  save(){
  
      /*fetch('http://192.168.1.148:4000/graphql', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: 'mutation CreateUserBeam { create_user_beam(user_id: \"\", beam_name: \"\") { status }}'})
        }).then((response) => response.json())
          .then((responseData) => {
              alert("success");
              console.log(JSON.stringify(responseData.body))
          })
          .catch((err)=> {
            alert("error" + JSON.stringify(err));
            console.log('Some errors occured');
            console.log(err);
        })
        .done();*/

  }

  addItemToCart(){



  }

  showItem(){


  }

  removeItem(){


  }

  showcart(){


  }

  
  setDate(){



  }

  setTime(){

    //if time is extra then add to total

  }

  setDeliveryAddress(){


  }


  pay(){


  }




  render(): React.Element {
    return (
      <div>
        <Menu order_id={this.props.params.order_id}/>
        <br/>
        <DateTime/>
        <br/>
        <DeliveryAddress />
      </div>
    )
  }
}