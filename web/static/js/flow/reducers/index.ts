import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login.ts';
import root from './root.ts';
import OrderDeliveryAddress from './order_delivery_Address.ts';
//import OrderContact from './order_contact';

export default combineReducers({
  login,
  root, 
  routing: routerReducer
})