import {CREATE_SIGNATURE_ORDER, SET_USER_ORDERS, GET_USER_ORDER_DETAILS, GET_USER_ORDER_SUBORDERS, PROCESS_USER_ORDER} from '../constants/actionTypes.ts';
import axios from 'axios';
import {push} from 'react-router-redux';


export function createSignatureOrder(user_id: any) {
  console.log("create signature order action");
  return function (dispatch: any) { 
      //axios.post('/api/graphql', {
      /*axios.post('/api/graphql', {
             query: 'mutation {create_signature_order (user_id: 1) { order_id }}'
      })
      .then((response: any) => {

            console.log("graphql response " + JSON.stringify(response));

            //that.props.history.push('/user');
            //context.router

      //      that.props.setOrderId(1);

        //    this.context.router.push('/order/complete');
            //dispatch(push("/user/order/" + response.data.data.createSignatureOrder.orderId));

      })
      .catch((error: any) => {

            console.log("error" + error);
            //go to code/payment screen
    //        this.props.loadView();


            //display errror to user - payment

     //if (!error.status) {
        // network error
      //}

      })*/

      dispatch(push("/order/519525/details"));
  }
}


export function processSignatureOrder(order_id: any) {
  console.log("process user order action");
  return function (dispatch: any) { 
      //axios.post('/api/graphql', {
      axios.post('/api/graphql', {
             query: 'mutation {process_signature_order (order_id: "23", event_name: "en", invited_guest_count: 5, invited_guest_message: "a mmessage to invited guests", delivery_contact: {first_name: "fn", last_name: ln, email: "e"}, delivery_address: {street1: "s1"}, delivery_date: "", delivery_time: "8-9") { status suborders { suborder_id stripe_token }}}'
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
    //dispatch({ type: GET_USER_ORDER, first_name: "fn"});

    return function (dispatch: any) { 
        //axios.post('/api/graphql', {
        /*axios.post('http://localhost:4000/api/graphql', {
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

        })*/
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


/*export function getUserOrderPayment(order_id: any) {
    console.log("get user order action");
    return function (dispatch: any) { 
    }
}*/


export function setUserOrders() {
  console.log("set user orders");
  return function (dispatch: any) { 
    
               dispatch({ 
                 type: SET_USER_ORDERS,
                 value: [{order_id: "", date: ""}]
               })

  }
  
}



