import {CREATE_ORDER, GET_ORDER, SAVE_ORDER} from '../constants/actionTypes.ts';
import axios from 'axios';

export function saveOrder(order_id: any) {
  console.log("get user order action");
  return function (dispatch: any) { 
      //axios.post('/api/graphql', {
      axios.post('http://localhost:4000/api/graphql', {
             query: 'mutation {save_sconely_signature_order (orderId: "23") { delivery_datetime }}'
      })
      .then((response: any) => {

            console.log("graphql response " + JSON.stringify(response));

            //that.props.history.push('/user');
            //context.router

      //      that.props.setOrderId(1);

        //    this.context.router.push('/order/complete');
  

      })
      .catch((error: any) => {

            console.log("error" + error);
            //go to code/payment screen
    //        this.props.loadView();


            //display errror to user - payment

     //if (!error.status) {
        // network error
      //}

      })
  }


  //alert("GET USER details");
  //return {
  //  type: SAVE_ORDER,
  //  data: {first_name: "", last_name: "", email: "", mobile: ""}
  //}
}

/*export function getUserOrders(value: any) {
  //alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value: [{order_id: "", date: ""}]
  }
}*/

export function getUserOrder(order_id: any) {
    console.log("get user order action");
    return function (dispatch: any) { 
        //axios.post('/api/graphql', {
        axios.post('http://localhost:4000/api/graphql', {
               query: 'query {get_user_order (orderId: "23") { delivery_datetime }}'
        })
        .then((response: any) => {

              console.log("graphql response " + JSON.stringify(response));

              //that.props.history.push('/user');
              //context.router

        //      that.props.setOrderId(1);

          //    this.context.router.push('/order/complete');
    

        })
        .catch((error: any) => {

              console.log("error" + error);
              //go to code/payment screen
      //        this.props.loadView();


              //display errror to user - payment

       //if (!error.status) {
          // network error
        //}

        })
    }

  //return {
  //  type: GET_USER_ORDERS,
  //  value: [{order_id: "", date: ""}]
  //}
}

/*export function setUserOrders(value: any) {
  //alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value
  }
}

export function getUserDeliveryAddresseNames() {
  console.log("get user delivery addresses");
  return {
    type: GET_USER_DELIVERY_ADDRESSES,
    data: ["home", "office"]
  }
}

export function getUserDeliveryAddress() {
  console.log("get user delivery address action");
  return {
    type: GET_USER_DELIVERY_ADDRESSES,
    data: ["home", "office"]
  }
}

export function getUserDeliveryAddresses() {
  console.log("get user delivery addresses action");
  return {
    type: GET_USER_DELIVERY_ADDRESSES,
    data: [{"home": {street1: "", street2: "", city: "", state: "", zipcode: ""}},  {office: {street: "", street1: "", city: "", state: "", zipcode: ""}}]
  }
}

export function getPaymentNames() {
  console.log("get user delivery addresses");
  return {
    type: GET_USER_PAYMENT_NAMES,
    data: ["personal", "work"]
  }
}

export function addUserDeliveryAddress(address_name: any, street1: any, street2: any, city: any, state: any, zipcode: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("add user delivery address street1");
  return {
    type: ADD_USER_DELIVERY_ADDRESS,
    name,
    street1,
    street2,
    city,
    state,
    zipcode
  }
}*/

