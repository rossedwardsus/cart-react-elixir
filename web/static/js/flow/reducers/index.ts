import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login.ts';
//import register from './register.ts';
//import root from './root.ts';
import OrderDeliveryAddress from './order_delivery_Address.ts';
import user from './user.ts';
import user_delivery_addresses from './user_delivery_addresses.ts';
import cart from './cart.ts';
import name from './name.ts';
import contact from './contact.ts';
import deliveryAddress from './order_delivery_address.ts';
import user_payment_methods from './user_payment_methods.ts';
//import OrderContact from './order_contact';

export default combineReducers({
  user,
  user_delivery_addresses,
  cart,
  name,
  contact,
  delivery_address: deliveryAddress,
  user_payment_methods,
  routing: routerReducer
})