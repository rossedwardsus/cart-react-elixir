import {ADD_CART_ITEM, ADD_GUEST_ORDER_CART_ITEM, REMOVE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, SET_DATE, SET_TIME, SET_SPECIFIC_TIME} from '../constants/actionTypes.ts';

export function addCartItem(order_id: any, item_id: any, twelveortwentyfourminis: any, quantity: any) {
  console.log("add cart item quantity action " + item_id + " " + twelveortwentyfourminis + " " + quantity);

  //if uorder_id != undefined
  //else

  return {
    type: ADD_GUEST_ORDER_CART_ITEM,
    order_id, 
    item_id,
    twelveortwentyfourminis,
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

