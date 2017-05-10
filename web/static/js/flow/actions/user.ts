import {GET_USER_DETAILS, GET_USER_ORDERS, GET_USER_DELIVERY_ADDRESSES, SET_USER_DELIVERY_ADDRESS_STREET1} from '../constants/actionTypes.ts';

export function getUserDetails(value: any) {
  //alert("GET USER details");
  return {
    type: GET_USER_DETAILS,
    value
  }
}

export function getUserOrders(value: any) {
  //alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value
  }
}

export function setUserOrder(value: any) {
  //alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value
  }
}

export function getUserDeliveryAddresses() {
  console.log("get user delivery addresses");
  return {
    type: GET_USER_DELIVERY_ADDRESSES
  }
}

export function setUserDeliveryAddressStreet1(address_id: any, value: any) {
  console.log("set user delivery address street1" + address_id + " " + value);
  return {
    type: SET_USER_DELIVERY_ADDRESS_STREET1,
    address_id,
    value
  }
}

