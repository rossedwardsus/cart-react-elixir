import {SET_USER_NAME_FIRST, SET_USER_NAME_LAST, SET_USER_CONTACT_EMAIL, SET_USER_CONTACT_MOBILE} from '../constants/actionTypes.ts';

export function setUserNameFirst(value: any) {
  console.log("first name action: " + value);
  return {
    type: SET_USER_NAME_FIRST,
    value
  }
}

export function setUserNameLast(value: any) {
  console.log("last name action: " + value);
  return {
    type: SET_USER_NAME_LAST,
    value
  }
}

export function setUserContactEmail(value: any) {
  console.log("company name " + value);
  return {
    type: SET_USER_CONTACT_EMAIL,
    value
  }
}

export function setUserContactMobile(value: any) {
  console.log("company name " + value);
  return {
    type: SET_USER_CONTACT_MOBILE,
    value
  }
}

/*export function setCompanyName(value: any) {
  console.log("company name " + value);
  return {
    type: SET_COMPANY_NAME,
    value
  }
}*/

