import { CREATE_ORDER, SET_ORDER_TYPE, SET_PAYMENT_ERROR, SET_NETWORK_ERROR, SET_ORDER_STATUS, ADD_CART_ITEM, CLEAR_USER, TERMS, MAILING_LIST, SET_ORDER_ID, SET_POOL_NAME, SET_DELIVERY_COST, SET_PROMO_CODE, COMPLETE_ORDER, CLEAR_ORDER, SAVE_FOR_LATER, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM, SET_ORDER_DELIVERY_DATETIME_DATE, SET_ORDER_DELIVERY_DATETIME_SPECIFIC_TIME, SET_ORDER_NOTE, SET_GIFT_ORDER, SET_GIFT_NOTE, SET_PICKUP_LOCATION } from '../constants/actionTypes.ts';


export function addCartItem(order_id: any, item_id: any, size: any, quantity: any) {
  console.log("add cart item quantity action " + item_id + " " + size + " " + quantity);

  //if uorder_id != undefined
  //else

  return {
    type: ADD_CART_ITEM,
    order_id, 
    item_id: item_id,
    size: size,
    quantity: quantity
  }

  /*return {
    type: ADD_CART_ITEM,
    item_id,
    item_type,
    quantity
  }*/
}


export function increaseCartItemQuantity(item_index: any) {
  console.log("increase cart item quantity action " + item_index);
  return {
    type: INCREASE_CART_ITEM_QUANTITY,
    item_index
  }
}


export function decreaseCartItemQuantity(item_index: any) {
  console.log("DECREASE cart item quantity action " + item_index);
  return {
    type: DECREASE_CART_ITEM_QUANTITY,
    item_index
  }
}

export function removeCartItem(item_index: any) {
  return {
    type: REMOVE_CART_ITEM,
    item_index
  }
}