import {ADD_CART_ITEM, REMOVE_CART_ITEM, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY} from '../constants/actionTypes.ts';

export function addCartItem(item_id: any) {
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