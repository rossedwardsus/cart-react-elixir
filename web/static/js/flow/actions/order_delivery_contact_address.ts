import {SET_DELIVERY_CONTACT_ADDRESS_FIRST_NAME, SET_DELIVERY_CONTACT_ADDRESS_LAST_NAME, SET_DELIVERY_CONTACT_ADDRESS_EMAIL, SET_DELIVERY_CONTACT_ADDRESS_MOBILE, SET_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME, SET_DELIVERY_CONTACT_ADDRESS_STREET1, SET_DELIVERY_CONTACT_ADDRESS_STREET2, SET_DELIVERY_CONTACT_ADDRESS_CITY, SET_DELIVERY_CONTACT_ADDRESS_STATE, SET_DELIVERY_CONTACT_ADDRESS_ZIPCODE} from '../constants/actionTypes.ts';


//setDeliveryContactAddressPredefined
export function setUserDefinedDeliveryContactAddress(predefined_delivery_contact_address: any, order_id: any) {
//  console.log("street1");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //look in user state for the delivery contact and address info

  return function (dispatch: any, getState: any) { 

    console.log("state " + JSON.stringify(getState()));
  
    //dispatch({type: SET_USER_DEFINED_DELIVERY_CONTACT_ADDRESS, first_name: "", last_name: "", email: "", mobile: "", street1: predefined_delivery_contact_address.street1, street2: "", city: "", state: "", zipcode: "", order_id: order_id});

  }

}

export function setDeliveryContactAddressFirstName(value: any, order_id: any) {
  console.log("delivery contact address first name action");
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
        type: SET_DELIVERY_CONTACT_ADDRESS_FIRST_NAME,
        value,
        order_id
      }
  //}

}

export function setDeliveryContactAddressLastName(value: any, order_id: any) {
  console.log("delivery contact address last name action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_DELIVERY_CONTACT_ADDRESS_LAST_NAME,
        value,
        order_id
      }
  //}

}

export function setDeliveryContactAddressEmail(value: any, order_id: any) {
  console.log("delivery contact address email action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_DELIVERY_CONTACT_ADDRESS_EMAIL,
        value,
        order_id
      }
  //}

}

export function setDeliveryContactAddressMobile(value: any, order_id: any) {
  console.log("delivery contact address mobile action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_DELIVERY_CONTACT_ADDRESS_MOBILE,
        value,
        //order_id
      }
  //}

}

export function setDeliveryContactAddressCompanyName(value: any) {
  console.log("delivery contact address company name action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_DELIVERY_CONTACT_ADDRESS_COMPANY_NAME,
        value,
        //order_id
      }
  //}

}

export function setDeliveryContactAddressStreet1(value: any, order_id: any) {
  console.log("delivery contact address street1 action");
  //if user is logged in theb SET_USER_ORDER_DELVIERY_ADDRESS_STREET1
  //else SET_DELIVERY_ADDRESS_STREET1

  //if("session.user_id" == "guest"){
  //    return {
  //      type: SET_DELIVERY_ADDRESS_STREET1,
  //      value
  //    }
  //}else{
      return {
        type: SET_DELIVERY_CONTACT_ADDRESS_STREET1,
        value,
        order_id
      }
  //}

}


export function setDeliveryContactAddressStreet2(value: any, order_id: any) {
  console.log("delivery contact address street2 action");
  return {
    type: SET_DELIVERY_CONTACT_ADDRESS_STREET2,
    value
  }
}

export function setDeliveryContactAddressCity(value: any, order_id: any) {
  console.log("delivery contact address city action");
  return {
    type: SET_DELIVERY_CONTACT_ADDRESS_CITY,
    value
  }
}


export function setDeliveryContactAddressState(value: any, order_id: any) {
  console.log("delivery contact address state action");
  return {
    type: SET_DELIVERY_CONTACT_ADDRESS_STATE,
    value
  }
}

export function setDeliveryContactAddressZipcode(value: any, order_id: any) {
  console.log("delivery contact address zipcode action");
  return {
    type: SET_DELIVERY_CONTACT_ADDRESS_ZIPCODE,
    value
  }
}


