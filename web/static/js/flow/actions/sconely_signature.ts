import {GUEST_ADD_CART_ITEM, SET_GUEST_FIRST_NAME, SET_GUEST_LAST_NAME, SET_GUEST_EMAIL, SET_GUESR_HOST_MESSAGE} from '../constants/actionTypes.ts';

export function addGuestCartItem(item_id: any, dozens: any, quantity_multipler: any) {
  //alert("addCartItem from redux");
  return {
    type: GUEST_ADD_CART_ITEM,
    item_id
  }
}

export function setGuestFirstName(value: any) {
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
}