import {SET_FIRST_NAME, SET_LAST_NAME, SET_COMPANY_NAME} from '../constants/actionTypes.ts';

export function setFirstName(value: any) {
  console.log("first name: " + value);
  return {
    type: SET_FIRST_NAME,
    value
  }
}

export function setLastName(value: any) {
  console.log("last name " + value);
  return {
    type: SET_LAST_NAME,
    value
  }
}

export function setCompanyName(value: any) {
  console.log("company name " + value);
  return {
    type: SET_COMPANY_NAME,
    value
  }
}

