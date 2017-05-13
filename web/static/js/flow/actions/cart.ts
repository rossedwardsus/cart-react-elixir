import {ADD_CART_ITEM, REMOVE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, SET_DATE, SET_TIME, SET_SPECIFIC_TIME} from '../constants/actionTypes.ts';

export function addCartItem(item_id: any, dozens: any, quantity_multipler: any) {
  //alert("addCartItem from redux");
  return {
    type: ADD_CART_ITEM,
    item_id
  }
}

export function removeCartItem(text: any) {
  return {
    type: REMOVE_CART_ITEM,
    text
  }
}

export function increaseCartItemQuantity(item_id: any) {
  alert("action" + item_id)
  return {
    type: INCREASE_CART_ITEM_QUANTITY,
    item_id
  }
}


export function decreaseCartItemQuantity(item_id: any) {
  alert(item_id)
  return {
    type: DECREASE_CART_ITEM_QUANTITY,
    item_id
  }
}

export function setDate(value: any) {
  //alert(item_id)
  return {
    type: SET_DATE,
    value
  }
}

export function setTime(value: any) {
  //alert(item_id)
  return {
    type: SET_TIME,
    value
  }
}

export function setSpecificTime(value: any) {
  //alert(item_id)
  return {
    type: SET_SPECIFIC_TIME,
    value
  }
}