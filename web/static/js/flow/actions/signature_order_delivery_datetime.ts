import {SET_DATE, SET_TIME, SET_SPECIFIC_TIME} from '../constants/actionTypes.ts';

export function setDate(date: any, order_id: any) {
  console.log("set date action from redux " + date);
  return function (dispatch: any) { 
  
    dispatch({type: SET_DATE, value: date, order_id: order_id});

  }

  //return {
  //  type: SET_DATE,
  //  value
  //}
}

export function setTime(time: any, order_id: any) {
  //alert("time" + value);

  return function (dispatch: any) { 
  
    dispatch({type: SET_TIME, value: time, order_id: order_id});

  }

  //return {
  //  type: SET_TIME,
  //  value
  //}
}

export function setSpecificTime(value: any) {
  alert("time" + value);
  return {
    type: SET_SPECIFIC_TIME,
    value
  }
}
