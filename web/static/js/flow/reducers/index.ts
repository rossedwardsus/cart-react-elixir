import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login.ts';
import session from './session.ts';
//import register from './register.ts';
//import root from './root.ts';
import MenuItems from './menu.ts';
import Order from './order.ts';
import OrderDeliveryAddress from './order_delivery_Address.ts';
import OrderDatetime from './order_datetime.ts';
import OrderPayment from './order_payment.ts';
import order_validations from './order_validated.ts';
import user from './user.ts';
//import user_delivery_addresses from './user_delivery_addresses.ts';
import cart from './cart.ts';
import name from './name.ts';
import contact from './contact.ts';
//import OrderDeliveryAddress from './order_delivery_address.ts';
import UserPaymentMethods from './user_payment_methods.ts';
//import OrderContact from './order_contact';
//import SconelySignatureGuest from './sconely_signature_guest.ts';
import UserOrders from './user_orders.ts';
import UserOrderDeliveryAddress from './user_order_delivery_address.ts';
import UserOrderEventDetails from './user_order_event_details.ts';
import GuestResponse from './guest_response.ts';

export default combineReducers({
  session,
  MenuItems,
  Order,
  OrderDatetime,
  OrderPayment,
  OrderDeliveryAddress,
  order_validations,
  cart,
  name,
  contact,
  user,
  UserOrders,
  UserOrderEventDetails,
  UserOrderDeliveryAddress,
  UserPaymentMethods,
  GuestResponse,
  //user_delivery_addresses,
  routing: routerReducer
})