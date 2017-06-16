import {SET_EVENT_NAME} from '../constants/actionTypes.ts';

export function setEventName(value: any) {
  console.log("set event name action from redux");
  return {
    type: SET_EVENT_NAME,
    value
  }
}

/*export function setGuestFirstName(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_FIRST_NAME,
    value
  }
}

export function setGuestLastName(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_LAST_NAME,
    value
  }
}

export function setGuestEmail(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_EMAIL,
    value
  }
}

export function setGuestHostMessage(value: any) {
  //alert(item_id)
  return {
    type: SET_GUEST_HOST_MESSAGE,
    value
  }
}*/