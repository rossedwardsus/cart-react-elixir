import {SET_DELIVERY_ADDRESS_STREET1, SET_USER_ORDER_DELIVERY_ADDRESS_STREET1, SET_DELIVERY_ADDRESS_STREET2, SET_DELIVERY_ADDRESS_CITY, SET_DELIVERY_ADDRESS_STATE, SET_DELIVERY_ADDRESS_ZIPCODE} from '../constants/actionTypes.ts';

export function setDeliveryAddressStreet1(value: any, order_id: any) {
  console.log("street1");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("user" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_ORDER_DELIVERY_ADDRESS_STREET1,
        value,
        order_id
      }
  //}

}


export function setDeliveryAddressStreet2(value: any, order_id: any) {
  console.log("street2");
  return {
    type: SET_DELIVERY_ADDRESS_STREET2,
    value
  }
}

export function setDeliveryAddressCity(value: any, order_id: any) {
  console.log("city");
  return {
    type: SET_DELIVERY_ADDRESS_CITY,
    value
  }
}


export function setDeliveryAddressState(value: any, order_id: any) {
  console.log("state");
  return {
    type: SET_DELIVERY_ADDRESS_STATE,
    value
  }
}

export function setDeliveryAddressZipcode(value: any, order_id: any) {
  console.log("zipcode");
  return {
    type: SET_DELIVERY_ADDRESS_ZIPCODE,
    value
  }
}


