import {SET_FIRST_NAME, SET_LAST_NAME} from '../constants/actionTypes.ts';

export function setFirstName(value: any) {
  alert("first name");
  return {
    type: SET_FIRST_NAME,
    value
  }
}

export function setLastName(value: any) {
  alert("last name");
  return {
    type: SET_LAST_NAME,
    value
  }
}

