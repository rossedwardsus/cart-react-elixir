import {SET_DELIVERY_ADDRESS_STREET1, SET_USER_ORDER_DELIVERY_ADDRESS_STREET1, SET_DELIVERY_ADDRESS_STREET2, SET_DELIVERY_ADDRESS_CITY, SET_DELIVERY_ADDRESS_STATE, SET_DELIVERY_ADDRESS_ZIPCODE, SET_USER_DEFINED_DELIVERY_CONTACT_ADDRESS} from '../constants/actionTypes.ts';


//setDeliveryContactAddressPredefined
export function setUserDefinedDeliveryContactAddress(predefined_delivery_contact_address: any, order_id: any) {
//  console.log("street1");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //look in user state for the delivery contact and address info

  return function (dispatch: any) { 
  
    dispatch({type: SET_USER_DEFINED_DELIVERY_CONTACT_ADDRESS, first_name: "", last_name: "", email: "", mobile: "", street1: predefined_delivery_contact_address.street1, street2: "", city: "", state: "", zipcode: "", order_id: order_id});

  }

}



export function setDeliveryAddressStreet1(value: any, order_id: any) {
  console.log("street1");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
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


