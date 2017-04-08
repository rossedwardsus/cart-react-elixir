import {SET_DATE, SET_TIME, SET_SPECIFIC_TIME} from '../constants/actionTypes.ts';

export function setDate(value: any) {
  alert("addCartItem from redux");
  return {
    type: SET_DATE,
    value
  }
}

export function setTime(value: any) {
  alert("time" + value);
  return {
    type: SET_TIME,
    value
  }
}

export function setSpecificTime(value: any) {
  alert("time" + value);
  return {
    type: SET_SPECIFIC_TIME,
    value
  }
}
