import {GET_USER_DETAILS, GET_DELIVERY_ADDRESSES, SET_DELIVERY_ADDRESS, GET_USER_ORDERS} from '../constants/actionTypes.ts';

export function getUserDetails(value: any) {
  alert("GET USER details");
  return {
    type: GET_USER_DETAILS,
    value
  }
}

export function getUserOrders(value: any) {
  alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value
  }
}

export function getUserOrder(value: any) {
  alert("setDeliveryAddressStreet");
  return {
    type: GET_USER_ORDERS,
    value
  }

export function getDeliveryAddresses(value: any) {
  alert("addCartItem from redux" + value);
  return {
    type: SET_DELIVERY_ADDRESS,
    value
  }
}

export function setDeliveryAddress(value: any) {
  alert("addCartItem from redux" + value);
  return {
    type: GET_DELIVERY_ADDRESS,
    value
  }
}

export function setPaymentMethods(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_PAYMENT_METHODS,
    value
  }
}
