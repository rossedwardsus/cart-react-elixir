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
import UserOrderCart from './user_order_cart.ts';
import UserOrderDeliveryAddress from './user_order_delivery_address.ts';
import UserOrderEventDetails from './user_order_event_details.ts';
import UserOrderGuestResponse from './user_order_guest_response.ts';
import UserOrderSuborders from './user_order_suborders.ts';


//session
//guest_order
//user
//user_orders
//order_validations
//user_order_suborders
//menus

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
  UserOrderCart,
  UserPaymentMethods,
  UserOrderGuestResponse,
  UserOrderSuborders,
  //user_delivery_addresses,
  routing: routerReducer
})