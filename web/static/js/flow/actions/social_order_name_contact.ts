import { CREATE_ORDER, SET_ORDER_TYPE, SET_PAYMENT_ERROR, SET_NETWORK_ERROR, SET_ORDER_STATUS, ADD_CART_ITEM, CLEAR_USER, TERMS, MAILING_LIST, SET_ORDER_ID, SET_POOL_NAME, SET_DELIVERY_COST, SET_PROMO_CODE, COMPLETE_ORDER, CLEAR_ORDER, SAVE_FOR_LATER, INCREASE_CART_ITEM_QUANTITY, DECREASE_CART_ITEM_QUANTITY, REMOVE_CART_ITEM, SET_ORDER_DELIVERY_DATETIME_DATE, SET_ORDER_DELIVERY_DATETIME_SPECIFIC_TIME, SET_ORDER_NOTE, SET_GIFT_ORDER, SET_GIFT_NOTE, SET_PICKUP_LOCATION } from '../constants/actionTypes.ts';

//import {getMenuItems} from './menu.ts';
//import {createOrderSession} from './session.ts';
//import {push} from 'react-router-redux';
//import axios from 'axios';
//var moment = require('moment');

export function setUserFirstName(value: any) {
  //alert("GET USER details");
  console.log("set user first name action " + value);
  return {
    type: SET_USER_FIRST_NAME,
    value: value
  }
}

export function setUserLastName(value: any) {
  //alert("GET USER details");
  console.log("set user last name action " + value);
  return {
    type: SET_USER_LAST_NAME,
    value: value
  }
}

export function setUserEmail(value: any) {
  //alert("GET USER details");
  console.log("set user email action " + value);
  return {
    type: SET_USER_CONTACT_EMAIL,
    value: value
  }
}

export function setUserMobile(value: any) {
  //alert("GET USER details");
  console.log("set user mobile action " + value);
  return {
    type: SET_USER_CONTACT_MOBILE,
    value: value
  }
}