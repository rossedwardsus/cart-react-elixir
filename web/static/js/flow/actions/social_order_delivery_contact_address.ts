import {SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME, SET_USER_DELIVERY_CONTACT_ADDRESS_EMAIL, SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET1, SET_USER_DELIVERY_CONTACT_ADDRESS_STREET2, SET_USER_DELIVERY_CONTACT_ADDRESS_CITY, SET_USER_DELIVERY_CONTACT_ADDRESS_STATE, SET_USER_DELIVERY_CONTACT_ADDRESS_ZIPCODE, SET_USER_DELIVERY_CONTACT_ADDRESS_NOTE} from '../constants/actionTypes.ts';

export function setUserDeliveryContactAddressFirstName(value: any, order_id: any) {
  console.log("user delivery contact address first name action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if save for later
  //set_user_delivery_

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_FIRST_NAME,
        value,
        //order_id
      }
  //}

}

export function setUserDeliveryContactAddressLastName(value: any, order_id: any) {
  console.log("user delivery contact address last name action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_LAST_NAME,
        value,
        //order_id
      }
  //}

}

export function setUserDeliveryContactAddressEmail(value: any, order_id: any) {
  console.log("user delivery contact address email action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_EMAIL,
        value,
        order_id
      }
  //}

}

export function setUserDeliveryContactAddressMobile(value: any, order_id: any) {
  console.log("user delivery contact address mobile action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_MOBILE,
        value,
        order_id
      }
  //}

}

export function setUserDeliveryContactAddressCompanyName(value: any) {
  console.log("user delivery contact address company name");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME,
        value,
        //order_id
      }
  //}

}

export function setUserDeliveryContactAddressStreet1(value: any, order_id: any) {
  console.log("user delivery contact address street1");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_STREET1,
        value,
        order_id
      }
  //}

}

export function setUserDeliveryContactAddressStreet2(value: any, order_id: any) {
  console.log("user delivery contact address street2");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_STREET2,
        value,
        order_id
      }
  //}

}

export function setUserDeliveryContactAddressCity(value: any, order_id: any) {
  console.log("user delivery contact address city");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_CITY,
        value,
        order_id
      }
  //}

}

export function setUserDeliveryContactAddressState(value: any, order_id: any) {
  console.log("user delivery contact address state action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_STATE,
        value,
        order_id
      }
  //}

}

export function setUserDeliveryContactAddressZipcode(value: any, order_id: any) {
  console.log("user delivery contact address zipcode action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_ZIPCODE,
        value,
        order_id
      }
  //}

}

export function setUserDeliveryContactAddressNote(value: any, order_id: any) {
  console.log("user delivery contact address zipcode action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_USER_DELIVERY_CONTACT_ADDRESS_NOTE,
        value,
        order_id
      }
  //}

}

