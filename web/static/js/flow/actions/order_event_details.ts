import {SET_EVENT_NAME, SET_GUEST_MESSAGE, SET_GUEST_COUNT} from '../constants/actionTypes.ts';

export function setEventName(value: any, order_id: any) {
  console.log("set event name action from redux");
  return {
    type: SET_EVENT_NAME,
    value,
    order_id
  }
}

export function setGuestMessage(value: any, order_id: any) {
  console.log("guest message")
  return {
    type: SET_GUEST_MESSAGE,
    value
  }
}

/*export function setImageAdded(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_EMAIL,
    value
  }
}*/

export function setGuestCount(value: any, order_id: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_COUNT,
    value,
    order_id
  }
}