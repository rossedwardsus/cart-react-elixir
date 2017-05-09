import {SET_CONTACT_EMAIL, SET_CONTACT_PHONE} from '../constants/actionTypes.ts';

export function setContactEmail(value: any) {
  console.log("contact email");
  return {
    type: SET_CONTACT_EMAIL,
    value
  }
}

export function setContactPhone(value: any) {
  //alert("addCartItem from redux" + value);
  return {
    type: SET_CONTACT_PHONE,
    value
  }
}