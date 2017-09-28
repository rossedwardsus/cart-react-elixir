import {SET_USER_FIRST_NAME, SET_USER_LAST_NAME, SET_USER_CONTACT_EMAIL, SET_USER_CONTACT_MOBILE} from '../constants/actionTypes.ts';

export function setUserNameFirst(value: any) {
  console.log("first name action: " + value);
  return {
    type: SET_USER_FIRST_NAME,
    value
  }
}

export function setUserNameLast(value: any) {
  console.log("last name action: " + value);
  return {
    type: SET_USER_LAST_NAME,
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

