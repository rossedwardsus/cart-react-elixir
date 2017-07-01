import {CREATE_SIGNATURE_ORDER, GET_USER_ORDER_DETAILS, GET_USER_ORDER_DELIVERY_CONTACT, GET_USER_ORDER_DELIVERY_ADDRESS, GET_USER_ORDER_GUEST_RESPONSES, GET_USER_ORDER_SUBORDERS, PROCESS_USER_ORDER} from '../constants/actionTypes.ts';
import axios from 'axios';
import {push} from 'react-router-redux';


export function createSignatureOrder(user_id: any) {
  console.log("create signature order action");
  return function (dispatch: any) { 
      //axios.post('/api/graphql', {
      axios.post('/api/graphql', {
             query: 'mutation {create_signature_order (user_id: 1) { order_id }}'
      })
      .then((response: any) => {

            console.log("graphql response " + JSON.stringify(response.data.data.createSignatureOrder.orderId));

            //that.props.history.push('/user');
            //context.router

      //      that.props.setOrderId(1);

        //    this.context.router.push('/order/complete');
            dispatch(push("/user/order/" + response.data.data.createSignatureOrder.orderId));

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
}


export function processSignatureOrder(order_id: any) {
  console.log("process user order action");
  return function (dispatch: any) { 
      //axios.post('/api/graphql', {
      axios.post('/api/graphql', {
             query: 'mutation {process_signature_order (orderId: "23") { status }}'
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
               query: 'query {get_sconely_signature_order (orderId: "23") { event_name invited_guest_count delivery_contact {first_name last_name} delivery_address {street1}}}'
        })
        .then((response: any) => {

              console.log("graphql response " + JSON.stringify(response));

              //that.props.history.push('/user');
              //context.router

        //      that.props.setOrderId(1);

          //    this.context.router.push('/order/complete');

          //dispatch details address payment methods cart
    

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

export function getUserOrderHistory(order_id: any) {
    console.log("get user order action");
    /*return function (dispatch: any) { 
        //axios.post('/api/graphql', {
        axios.post('http://localhost:4000/api/graphql', {
               query: 'query {get_sconely_signature_order (orderId: "23") { event_name invited_guest_count delivery_contact {first_name last_name} delivery_address {street1}}}'
        })
        .then((response: any) => {

              console.log("graphql response " + JSON.stringify(response));

              //that.props.history.push('/user');
              //context.router

        //      that.props.setOrderId(1);

          //    this.context.router.push('/order/complete');

          //dispatch details address payment methods cart
    

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
    }*/

  //return {
  //  type: GET_USER_ORDERS,
  //  value: [{order_id: "", date: ""}]
  //}
}



export function getUserOrderDetails(order_id: any) {
    console.log("get user order details action");
    return function (dispatch: any) { 
        //axios.post('/api/graphql', {
        axios.post('http://localhost:4000/api/graphql', {
               query: 'query {get_sconely_signature_order_details (orderId: "23") { order_type }}'
        })
        .then((response: any) => {

              console.log("graphql order details response " + JSON.stringify(response));


               dispatch({ 
                 type: GET_USER_ORDER_DETAILS,
                 value: [{order_id: "", date: ""}]
               })

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
}

export function getUserOrderDeliveryContact(order_id: any) {
    console.log("get user order contact action");
    return function (dispatch: any) { 

        axios.post('http://localhost:4000/api/graphql', {
               query: 'query {get_sconely_signature_order_delivery_contact (orderId: "23") { first_name, email }}'
        })
        .then((response: any) => {

              console.log("graphql order contact response " + JSON.stringify(response));


              dispatch({ 
                type: GET_USER_ORDER_DELIVERY_CONTACT,
                first_name: "fn",
              })

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
}

export function getUserOrderDeliveryAddress(order_id: any) {
    console.log("get user order delivery address action");
    return function (dispatch: any) { 

        axios.post('http://localhost:4000/api/graphql', {
               query: 'query {get_sconely_signature_order_delivery_address (orderId: "23") { street1, street2 }}'
        })
        .then((response: any) => {

              console.log("graphql order contact response " + JSON.stringify(response));


              dispatch({ 
                type: GET_USER_ORDER_DELIVERY_ADDRESS,
                street1: "street1",
              })

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
}

export function getUserOrderGuestResponses(order_id: any) {
    console.log("get user order details action");
    return function (dispatch: any) { 
        //axios.post('/api/graphql', {
        axios.post('http://localhost:4000/api/graphql', {
               query: 'query {get_sconely_signature_order_guest_responses (orderId: "23") { first_name }}'
        })
        .then((response: any) => {

              console.log("graphql guest responses response " + JSON.stringify(response));


               dispatch({ 
                 //type: GET_USER_ORDER_DETAILS,
                 //value: [{order_id: "", date: ""}]
               })

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
}

export function getUserOrderSuborders(order_id: any) {
    console.log("get user order details action");
    return function (dispatch: any) { 
        //axios.post('/api/graphql', {
        axios.post('http://localhost:4000/api/graphql', {
               query: 'query {get_sconely_signature_order_suborders (orderId: "23") { order_type }}'
        })
        .then((response: any) => {

              console.log("graphql suborders response " + JSON.stringify(response));


               dispatch({ 
                 //type: GET_USER_ORDER_DETAILS,
                 //value: [{order_id: "", date: ""}]
               })

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
}


/*export function getUserOrderPayment(order_id: any) {
    console.log("get user order action");
    return function (dispatch: any) { 
    }
}*/


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

