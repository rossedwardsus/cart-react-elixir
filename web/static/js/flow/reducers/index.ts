import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login.ts';
import root from './root.ts';
import OrderDeliveryAddress from './order_delivery_Address.ts';
import user from './user.ts';
import user_delivery_addresses from './user_delivery_addresses.ts';
import cart_items from './cart_items.ts';
import user_payment_methods from './user_payment_methods.ts';
//import OrderContact from './order_contact';

export default combineReducers({
  login,
  root,
  user,
  user_delivery_addresses,
  cart_items,
  user_payment_methods,
  routing: routerReducer
})