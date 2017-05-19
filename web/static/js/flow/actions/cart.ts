import {ADD_CART_ITEM, REMOVE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, SET_DATE, SET_TIME, SET_SPECIFIC_TIME} from '../constants/actionTypes.ts';

export function addCartItem(item_id: any, dozens: any, quantity_multipler: any) {
  console.log("add cart item quantity action " + item_id)
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
  console.log("increase cart item quantity action " + item_id)
  return {
    type: INCREASE_CART_ITEM_QUANTITY,
    item_id
  }
}


export function decreaseCartItemQuantity(item_id: any) {
  console.log("DECREASE cart item quantity action " + item_id)
  return {
    type: DECREASE_CART_ITEM_QUANTITY,
    item_id
  }
}

