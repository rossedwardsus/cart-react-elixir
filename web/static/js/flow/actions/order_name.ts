import {SET_FIRST_NAME, SET_LAST_NAME} from '../constants/actionTypes.ts';

export function setFirstName(value: any) {
  alert("first name");
  return {
    type: SET_FIRST_NAME,
    value
  }
}



