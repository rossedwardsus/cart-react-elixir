import {SET_DELIVERY_ADDRESS_STREET, SET_DELIVERY_ADDRESS_CITY, SET_DELIVERY_ADDRESS_STATE, SET_DELIVERY_ADDRESS_ZIPCODE} from '../constants/actionTypes.ts';

export function setDeliveryAddressStreet(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_DELIVERY_ADDRESS_STREET,
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