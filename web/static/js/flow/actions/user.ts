import {SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_EMAIL, SET_USER_MOBILE, GET_USER_DETAILS, SET_USER_ORDERS, SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_EMAIL, SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE, SET_USER_DELIVERY_CONTACT_ADDRESS_NOTE, ADD_USER_PAYMENT_METHOD, SET_USER_PAYMENT_METHOD_NAME, SET_USER_PAYMENT_METHOD_CARD_NUMBER, SET_USER_PAYMENT_METHOD_EXPIRY_MONTH, SET_USER_PAYMENT_METHOD_EXPIRY_YEAR, SAVE_USER_PAYMENT_METHOD} from '../constants/actionTypes.ts';

import axios from 'axios';
import {push} from 'react-router-redux';


export function setUserFirstName(value: any) {
  //alert("GET USER details");
  console.log("set user first name action " + value);
  return {
    type: SET_USER_FIRST_NAME,
    data: value
  }
}

export function setUserLastName(value: any) {
  //alert("GET USER details");
  console.log("set user last name action " + value);
  return {
    type: SET_USER_LAST_NAME,
    data: value
  }
}

export function setUserEmail(value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}



export function getUser(user_id: any) {
  //alert("GET USER details");

  
  return function (dispatch: any) { 
       dispatch({type: SET_USER_ORDERS});

       /*axios.post('/api/graphql', {
                     query: 'query {get_user (user_id: "") {first_name delivery_contacts_addresses {delivery_contact_address_name}}}'
              })
              .then((response: any) => {

                    console.log("getuser response" + JSON.stringify(response));

                     //dispatch({
                    //  type: REGISTER_USER,
                    //  data: "session_key"
                    //})

            

              })
              .catch((error: any) => {

                    console.log("sorry an error occurred-email already exists" + error);
                    //go to code/payment screen
            //        this.props.loadView();

             //if (!error.status) {
                // network error
              //}

              })*/

  }


  //return {
  //  type: GET_USER_DETAILS,
  //  data: {first_name: "", last_name: "", email: "", mobile: ""}
  //}
}



export function setUserOrders(value: any) {
  //alert("setDeliveryAddressStreet");
  return {
    type: SET_USER_ORDERS,
    value
  }
}



export function addUserDeliveryContactAddress(delivery_contact_address_name: any, first_name: any, last_name: any, email: any, mobile: any, street1: any, street2: any, city: any, state: any, zipcode: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("add user delivery address street1");
  return function (dispatch: any) { 
      
      axios.post('/api/graphql', {
                     query: 'mutation {add_user_delivery_contact_address (delivery_contact_address_name: "' + delivery_contact_address_name + '", first_name: "' + first_name + '", last_name: "' + last_name + '", email: "' + email + '", street1: "' + street1 + '", street2: "' + street2 + '", city: "' + city +'", state: "' + state + '", zipcode: "' + zipcode + '") {user_id}}'
              })
              .then((response: any) => {

                    console.log("register response" + JSON.stringify(response));

                     //dispatch({
                    //  type: REGISTER_USER,
                    //  data: "session_key"
                    //})

                    //dispatch({
                    //   type: ADD_USER_DELIVERY_ADDRESS,
                          //  data: "session_key"
                    //})

                    //return {
                    //  type: ADD_USER_DELIVERY_ADDRESS,
                    //  name,
                    //  street1,
                    //  street2,
                    //  city,
                    //  state,
                    //  zipcode
                    //}

                    //that.props.history.push('/user');
                    //dispatch(push("/user"));



              })
              .catch((error: any) => {

                    console.log("sorry an error occurred-email already exists" + error);
                    //go to code/payment screen
            //        this.props.loadView();

             //if (!error.status) {
                // network error
              //}

              })

              

  }
  
}

/*export function setUserNewDeliveryAddressFirstName(value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}*/

export function setUserDeliveryContactAddressFirstName(user_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user contact address first name action " + value);
  return function (dispatch: any) { 
    
    return {
      type: SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME,
      data: value
    }

  }
}

export function setUserDeliveryContactAddressLastName(user_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user contact address last name action " + value);
  return function (dispatch: any) { 
    
    return {
      type: SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME,
      data: value
    }

  }
}

export function setUserDeliveryContactAddressEmail(user_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user contact address email action " + value);
  return function (dispatch: any) { 
    
    return {
      type: SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME,
      data: value
    }

  }
}

export function setUserDeliveryContactAddressMobile(user_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user contact address mobile action " + value);
  return function (dispatch: any) { 
    
    return {
      type: SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME,
      data: value
    }

  }
}

export function setUserDeliveryContactAddressNote(user_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user contact address mobile action " + value);
  return function (dispatch: any) { 
    
    return {
    //  type: SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME,
    //  data: value
    }

  }
}

/*export function setUserDeliveryAddressStreet1(user_id: any, delivery_address_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}

export function setUserDeliveryAddressStreet2(user_id: any, delivery_address_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}

export function setUserDeliveryAddressCity(user_id: any, delivery_address_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}

export function setUserDeliveryAddressZipcode(value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}*/


export function saveUserDeliveryContactAddress(id: any, delivery_contact_address_name: any, first_name: any, last_name: any, email: any, mobile: any, street1: any, street2: any, city: any, state: any, zipcode: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("save user delivery address street1");
  return function (dispatch: any) { 
      
      /*axios.post('/api/graphql', {
                     query: 'mutation {save_user_delivery_contact_address ( user_id: "''", delivery_contact_address_id: "''", delivery_contact_address_name: "' + delivery_contact_address_name + '", first_name: "' + first_name + '", last_name: "' + last_name + '", email: "' + email + '", street1: "' + street1 +'") {user_id}}'
              }, headers: { Authorization: localStorage.getItem('sconely_token')}, withCredentials: false)
              .then((response: any) => {

                    console.log("register response" + JSON.stringify(response));

                     //dispatch({
                    //  type: REGISTER_USER,
                    //  data: "session_key"
                    //})

                    //return {
                    //  type: ADD_USER_DELIVERY_ADDRESS,
                    //  name,
                    //  street1,
                    //  street2,
                    //  city,
                    //  state,
                    //  zipcode
                    //}

                    //that.props.history.push('/user');
                    //dispatch(push("/user"));

              })
              .catch((error: any) => {

                    console.log("sorry an error occurred-email already exists" + error);
                    //go to code/payment screen
            //        this.props.loadView();

             //if (!error.status) {
                // network error
              //}

              })*/
  }
  
}



export function addUserPaymentMethod(payment_name: any, name_on_card: any, card_number: any, expiry_month: any, expiry_year: any) {
  //console.log("state" + JSON.stringify(state));

  //add to stripe

  console.log("add user delivery address street1");
  return function (dispatch: any) { 
      
      /*axios.post('/api/graphql', {
                     query: 'mutation {add_user_payment_method (payment_name: "' + payment_name + '", name_on_card: "' + name_on_card + '", expiry_month: "' + expiry_month + '", city: "' + city +'", state: '" + state + "', zipcode: '" + zipcode + "') {user_id}}'
              })
              .then((response: any) => {

                    console.log("register response" + JSON.stringify(response));

                     //dispatch({
                    //  type: REGISTER_USER,
                    //  data: "session_key"
                    //})

                    //return {
                    //  type: ADD_USER_PAYMENT_METHOD,
                    //  name,
                    //  street1,
                    //  street2,
                    //  city,
                    //  state,
                    //  zipcode
                    //}
                    //saved

                    //that.props.history.push('/user');
                    //dispatch(push("/user"));

              })
              .catch((error: any) => {

                    console.log("sorry an error occurred-email already exists" + error);
                    //go to code/payment screen
            //        this.props.loadView();

             //if (!error.status) {
                // network error
              //}

        })*/

         dispatch({
            type: ADD_USER_PAYMENT_METHOD,
              //  data: "session_key"
         })

  }
  
}

export function setUserPaymentMethodCardNumber(id: any, number: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("set user payment name action");
  return function (dispatch: any) {

      dispatch({type: SET_USER_PAYMENT_METHOD_CARD_NUMBER, id: id, value: number});

  }
}

export function setUserPaymentMethodExpiryMonth(id: any, number: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("set user payment month action " + id);
  return function (dispatch: any) {

      dispatch({type: SET_USER_PAYMENT_METHOD_EXPIRY_MONTH, id: id, value: number});

  }
}

export function setUserPaymentMethodExpiryYear(id: any, number: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("set user payment year action");
  return function (dispatch: any) {

      dispatch({type: SET_USER_PAYMENT_METHOD_EXPIRY_YEAR, id: id, value: number});

  }
}

export function saveUserPaymentMethod(payment_name: any) {
  //console.log("state" + JSON.stringify(state));

  //save on stripe

  console.log("save user payment action " + payment_name);
  return function (dispatch: any) { 
      
      /*axios.post('/api/graphql', {
                     query: 'mutation {save_user_payment_method (payment_name: "' + payment_name + '", expiry_month: "' + expiry_month + '", city: "' + city +'", state: "' + state + '", zipcode: "' + zipcode + '") {user_id}}'
              })
              .then((response: any) => {

                    console.log("register response" + JSON.stringify(response));

                     //dispatch({
                    //  type: REGISTER_USER,
                    //  data: "session_key"
                    //})

                    //return {
                    //  type: ADD_USER_DELIVERY_ADDRESS,
                    //  name,
                    //  street1,
                    //  street2,
                    //  city,
                    //  state,
                    //  zipcode
                    //}
                    //saved

                    //that.props.history.push('/user');
                    //dispatch(push("/user"));

              })
              .catch((error: any) => {

                    console.log("sorry an error occurred-email already exists" + error);
                    //go to code/payment screen
            //        this.props.loadView();

             //if (!error.status) {
                // network error
              //}

        })*/

         //dispatch({
         //   type: ADD_USER_DELIVERY_ADDRESS,
              //  data: "session_key"
         //})

  }
  
}