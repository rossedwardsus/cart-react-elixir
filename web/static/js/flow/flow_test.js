'use strict'


import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom';

//import autobind from 'autobind-decorator'
//import TodoListItem from './TodoListItem'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory, useRouterHistory, Link } from 'react-router';
import createHistory from 'history';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';


import PublicHomePage from './public/public_home_page.jsx';
import PublicMenu from './menu.jsx';
import PublicAboutUs from './public/public_about_us';

import UserHomePage from './user/user_home_page.jsx';

import Order from "./order.jsx";
import Checkout from "./order_datetime_contact.jsx";
import OrderCart from "./order_cart.jsx";
import OrderComplete from './order_complete.jsx';

import Login from './login.jsx';
import Register from './register.jsx';

import User from "./user";

/*import UserOrder from "./user_order";
import SconelySocial from "./sconely_yours_social_single_page";
import SconelyYours from "./sconely_yours_social_single_page";
//import SconelyYoursDeliveryAddressPayment from "./sconely_yours_single_page";

//import SconelySocial from "./sconely_social_single_page";*/
import SconelySignatureGuest from "./sconely_signature_guest/guest.jsx";

/*import SconelySocialEventDetails from "./sconely_social_event_details";
import SconelySignatureGuest from "./sconely_signature_guest/guest";
import SconelySignatureGuests from "./sconely_signature_guests";
import SconelySocialMenu from "./sconely_social_menu";
import SconelySignaturePreview from "./sconely_signature_preview";
import SconelySignatureSinglePage from "./sconely_signature_single_page";
import OrderPayment from "./sconely_yours_social_order_payment";
import ProfilePayment from "./user/payment";*/

import * as cart_reducer from './reducers/cart.ts';
import * as login_reducer from './reducers/login.ts';
import * as delivery_address_reducer from './reducers/order_delivery_address.ts';
import * as name_reducer from './reducers/name.ts';
import * as root_reducer from './reducers/root.ts';
import reducers from './reducers/index.ts';

//type Props = {
//  todos: Array<Object>,
//}

//import { getAllProducts } from './actions/viewPublicMenu'


const isReactComponent = (obj) => Boolean(obj && obj.prototype && Boolean(obj.prototype.isReactComponent));

const component = (component) => {
  return isReactComponent(component)
    ? {component}
    : {getComponent: (loc, cb)=> component(
         comp=> cb(null, comp.default || comp))}
};



//const reducer = combineReducers(
//{
  //...cart_reducer,
  //login_reducer,
  //delivery_address: delivery_address_reducer,
  //name: name_reducer,
  //...reducers,
  //routing: routerReducer
//}

//)

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const middleware = applyMiddleware(
  //createLogger(),
  routerMiddleware(hashHistory),
  thunk
);

const store = createStore(
    reducers,
    DevTools.instrument(),
    middleware
)

const history = syncHistoryWithStore(hashHistory, store)


//store = {session_id: "", event: {event_name: "", delivery_address: "", date: "", time: ""}, guests: {choose: "", number: 0}, payment_methods: [{personal: ""}], orders: [subtotal: ""], menu_items: [1234, 5678], additional_items:[{}], completed: "yes"}


//alert(JSON.stringify(store.getState()));


//queryKey: false

//const appHistory = useRouterHistory(createHistory)({ queryKey: false })

/*const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Sconely}>
      <IndexRoute component={Sconely} />
      <Route path="/order/:order_id" component={SconelyYours}/>
    </Route>
  </Router>  
);*/

//<Route path="/order/:order_id" component={SconelyYours} />
//<Route path="/user/delivery_address" component={SconelyYours} />

//store.dispatch({type: "VIEW_PUBLIC_MENU"});


/*<Route path="/order/:order_id/event_details" component={SconelySocialEventDetails} />
        <Route path="/order/:order_id/guests" guest_chooses="yes" component={() => (<SconelySignatureGuests guest_chooses="value" />)} />
        <Route path="/order/:order_id/menu" component={SconelySocialMenu} />
        <Route path="/order/:order_id/preview" component={SconelySignaturePreview} />
        <Route path="/order/:order_id/payment" component={OrderPayment} />
        
        <Route path="/user/profile" component={SconelySocial} />
        <Route path="/user/delivery_address" component={SconelySocial} />
        <Route path="/user/payment" component={ProfilePayment} />
        <Route path="/user/orders" component={UserOrder} />*/

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" getComponent={(nextState, cb) => {
                                       // async work to find components
                                      cb(null, User)
                                    }} >
      <IndexRoute getComponent={(nextState, cb) => {
                                       // async work to find components
                                      cb(null, PublicHomePage)
                                    }} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/public/menu" component={PublicMenu} />
        <Route path="/public/about_us" component={PublicAboutUs} />
        <Route path="/order/:order_id/cart" component={OrderCart} />
        <Route path="/order/checkout" component={Checkout} />
        <Route path="/order/:order_id" component={Order} />
        //<Route path="/order/:order_id/order_complete" getComponent={(nextState, cb) => {
                                     // async work to find components
                                    cb(null, OrderComplete)
                                  }} />
        <Route path="/user" component={UserHomePage} />
        <Route path="/order/:order_id/guest" component={SconelySignatureGuest} />
        

      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
      <Root/>,
      document.getElementById('root')
);