import {GET_USER_DETAILS, GET_USER_ORDERS, GET_USER_DELIVERY_ADDRESSES, GET_USER_DELIVERY_ADDRESS_NAMES, GET_USER_PAYMENT_NAMES, ADD_USER_DELIVERY_ADDRESS} from '../constants/actionTypes.ts';

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
  console.log("set user delivery address street1");
  return {
    type: ADD_USER_DELIVERY_ADDRESS,
    
  }
}

