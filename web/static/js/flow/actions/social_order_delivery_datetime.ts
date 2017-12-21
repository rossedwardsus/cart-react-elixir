import { CREATE_ORDER, SET_ORDER_TYPE, SET_PAYMENT_ERROR, SET_NETWORK_ERROR, SET_ORDER_STATUS, ADD_CART_ITEM, CLEAR_USER, TERMS, MAILING_LIST, SET_ORDER_ID, SET_POOL_NAME, SET_DELIVERY_COST, SET_PROMO_CODE, COMPLETE_ORDER, CLEAR_ORDER, SAVE_FOR_LATER, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM, SET_ORDER_DELIVERY_DATETIME_DATE, SET_ORDER_DELIVERY_DATETIME_SPECIFIC_TIME, SET_ORDER_NOTE, SET_GIFT_ORDER, SET_GIFT_NOTE, SET_PICKUP_LOCATION } from '../constants/actionTypes.ts';

//import {getMenuItems} from './menu.ts';
//import {createOrderSession} from './session.ts';
//import {push} from 'react-router-redux';
//import axios from 'axios';
//var moment = require('moment');


export function setOrderDeliveryDatetimeDate(value: any) {
  return {
    type: SET_ORDER_DELIVERY_DATETIME_DATE,
    value
  }
}

export function setOrderDeliveryDatetimeSpecificTime(value: any) {
  return {
    type: SET_ORDER_DELIVERY_DATETIME_SPECIFIC_TIME,
    value
  }
}
