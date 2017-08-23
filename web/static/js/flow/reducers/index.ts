import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login.ts';
import session from './session.ts';
//import Register from './register.ts';
//import root from './root.ts';
import menuItems from './menu.ts';
import Order from './social_yours_order.ts';
//import OrderDeliveryAddress from './order_delivery_Address.ts';
//import OrderDatetime from './order_datetime.ts';
//import OrderPayment from './order_payment.ts';
import OrderValidations from './order_validated.ts';
import User from './user.ts';
//import user_delivery_addresses from './user_delivery_addresses.ts';
import GuestOrder from './cart.ts';
//import name from './name.ts';
//import contact from './contact.ts';
//import OrderDeliveryAddress from './order_delivery_address.ts';
//import UserPaymentMethods from './user_payment_methods.ts';
//import OrderContact from './order_contact';
import SignatureOrderGuestResponse from './signature_guest_response.ts';
//import UserOrders from './user_order.ts';
//import UserOrderCart from './user_order_cart.ts';
//import UserOrderDeliveryAddress from './user_order_delivery_address.ts';
//import UserOrderDeliveryContact from './user_order_delivery_contact.ts';
//import UserOrderEventDetails from './user_order_event_details.ts';
//import UserOrderGuestResponse from './user_order_guest_response.ts';
//import UserOrderSuborders from './user_order_suborders.ts';


//session
//guest_order
//user
//user_orders
//order_validations
//user_order_suborders
//menus

export default combineReducers({
  //Register,
  session,
  menuItems,
  SignatureOrderGuestResponse,
  Order,
  //OrderDatetime,
  //OrderPayment,
  //OrderDeliveryAddress,
  //OrderValidations,
  GuestOrder,
  //name,
  //contact,
  User,
  //UserOrders,
  //UserOrderEventDetails,
  //UserOrderDeliveryAddress,
  //UserOrderDeliveryContact,
  //UserOrderCart,
  //UserPaymentMethods,
  //UserOrderGuestResponse,
  //UserOrderSuborders,
  //user_delivery_addresses,
  routing: routerReducer
})