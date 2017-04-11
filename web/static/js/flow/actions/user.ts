import {GET_USER_DETAILS, GET_USER_ORDERS} from '../constants/actionTypes.ts';

export function setDeliveryAddressStreet1(value: any) {
  alert("setDeliveryAddressStreet");
  return {
    type: SET_DELIVERY_ADDRESS_STREET1,
    value
  }
}

export function setDeliveryAddressStreet2(value: any) {
  alert("setDeliveryAddressStreet");
  return {
    type: SET_DELIVERY_ADDRESS_STREET2,
    value
  }
}

export function setDeliveryAddressCity(value: any) {
  alert("addCartItem from redux" + value);
  return {
    type: SET_DELIVERY_ADDRESS_CITY,
    value
  }
}

export function setDeliveryAddressState(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_DELIVERY_ADDRESS_STATE,
    value
  }
}

export function setDeliveryAddressZipcode(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_DELIVERY_ADDRESS_ZIPCODE,
    value
  }
}