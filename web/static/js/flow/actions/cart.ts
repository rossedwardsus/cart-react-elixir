import {ADD_CART_ITEM, ADD_USER_ORDER_CART_ITEM, REMOVE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, SET_DATE, SET_TIME, SET_SPECIFIC_TIME} from '../constants/actionTypes.ts';

export function addCartItem(item_id: any, item_type: any, quantity: any) {
  console.log("add cart item quantity action " + item_id + " " + item_type + " " + quantity);

  //if user is logged in
  //else

  return {
    type: ADD_USER_ORDER_CART_ITEM,
    item_id,
    item_type,
    quantity
  }

  /*return {
    type: ADD_CART_ITEM,
    item_id,
    item_type,
    quantity
  }*/
}

export function increaseCartItemQuantity(item_id: any) {
  console.log("increase cart item quantity action " + item_id);
  return {
    type: INCREASE_CART_ITEM_QUANTITY,
    item_id
  }
}


export function decreaseCartItemQuantity(item_id: any) {
  console.log("DECREASE cart item quantity action " + item_id);
  return {
    type: DECREASE_CART_ITEM_QUANTITY,
    item_id
  }
}

export function removeCartItem(index: any) {
  return {
    type: REMOVE_CART_ITEM,
    index
  }
}

