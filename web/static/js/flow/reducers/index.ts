import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login.ts';
import root from './root.ts';

export default combineReducers({
  login,
  root, 
  routing: routerReducer
})