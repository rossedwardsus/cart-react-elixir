import {SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_EMAIL, SET_USER_MOBILE, GET_USER_DETAILS, GET_USER_ORDERS, ADD_USER_DELIVERY_CONTACT, GET_USER_DELIVERY_CONTACTS, ADD_USER_DELIVERY_ADDRESS, GET_USER_DELIVERY_ADDRESSES, GET_USER_PAYMENT_METHODS} from '../constants/actionTypes.ts';

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


/*export function setUserNewDeliveryAddressName(value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}*/

/*export function setUserExistingDeliveryAddressName(user_id: any, delivery_address_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }

/*export function setUserDeliveryAddressStreet1(user_id: any, delivery_address_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}*/

/*export function setUserDeliveryAddressStreet2(user_id: any, delivery_address_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}*/

/*export function setUserDeliveryAddressCity(user_id: any, delivery_address_id: any, value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}*/

/*export function setUserDeliveryAddressStreet1(value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_EMAIL,
    data: value
  }
}*/

export function getUserDetails(value: any) {
  //alert("GET USER details");
  return {
    type: GET_USER_DETAILS,
    data: {first_name: "", last_name: "", email: "", mobile: ""}
  }
}

export function getUserOrders(value: any) {
  //alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value: [{order_id: "", date: ""}]
  }
}

export function setUserOrders(value: any) {
  //alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value
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

export function addUserDeliveryAddress(address_name: any, street1: any, street2: any, city: any, state: any, zipcode: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("add user delivery address street1");
  return function (dispatch: any) { 
      
      /*axios.post('/api/graphql', {
                     query: 'mutation {register (first_name: "' + first_name + '", last_name: "' + last_name + '", email: "' + email + '", password: "' + password +'") {user_id}}'
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

export function updateUserDeliveryAddress(address_name: any, street1: any, street2: any, city: any, state: any, zipcode: any) {
  //console.log("state" + JSON.stringify(state));
  console.log("add user delivery address street1");
  return function (dispatch: any) { 
      
      /*axios.post('/api/graphql', {
                     query: 'mutation {register (first_name: "' + first_name + '", last_name: "' + last_name + '", email: "' + email + '", password: "' + password +'") {user_id}}'
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

export function getUserDeliveryContacts() {
  console.log("get user delivery addresses action");
  return {
    type: GET_USER_DELIVERY_CONTACTS,
    data: [{"home": {street1: "", street2: "", city: "", state: "", zipcode: ""}},  {office: {street: "", street1: "", city: "", state: "", zipcode: ""}}]
  }
}

export function addUserDeliveryContact(address_name: any, street1: any, street2: any, city: any, state: any, zipcode: any) {
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
}

