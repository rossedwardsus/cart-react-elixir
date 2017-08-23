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
import { createHistory, createHashHistory, createBrowserHistory } from 'history';
//import createBrowserHistory from 'history/lib/createBrowserHistory';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';


import PublicHomePage from './public/public_home_page.tsx';
import PublicMenu from './public/public_menu.tsx';
import PublicAboutUs from './public/public_about_us';
import YoursRedirect from './yours_redirect.tsx';

import UserHomePage from './user/user_home_page.tsx';
import UserProfile from './user/user_profile.tsx';
import UserDeliveryContactsAddresses from './user/user_delivery_contacts_addresses.tsx';
//import UserDeliveryContacts from './user/user_delivery_contacts.tsx';
import UserPaymentMethods from './user/user_payment_methods.tsx';
import UserAboutMe from './user/user_about_me.tsx';
import UserOrder from './user/user_order.tsx';

//import Order from "./order.jsx";
import Menu from "./order_menu.tsx";
import Checkout from "./order_checkout.tsx";
import PaymentMethod from './payment_method.tsx'
import OrderCart from "./order_cart.tsx";
import OrderComplete from './order_complete.jsx';
import Preview from './preview.tsx';

import Login from './login.tsx';
import Register from './register.tsx';
import RegisterCompleted from './register_completed.tsx';
import checkLogin from './checkLogin.tsx';

import User from "./user";

//import SconelySocial from "./sconely_social_single_page";*/
import SconelySignatureGuestMenuItems from "./signature_guest_response/menu_items.tsx";
import SconelySignatureGuestName from "./signature_guest_response/name.tsx";
import SconelySignatureGuestOrderCompleted from "./signature_guest_response/order_completed.tsx";
//import SconelySignatureGuestEvent from "./sconely_signature_guest_response/event.tsx";

//import SconelySocialEventDetails from "./sconely_social_event_details";
import Guests from "./user/sconely_signature_guests.tsx";
import SignatureAdditionalItems from "./user/signature_additional_items.tsx";
import SignatureOrderHistory from "./user/sconely_signature_order_history.tsx";
import SignatureOrderPreview from "./user/sconely_signature_preview.tsx";
//import SconelySignature from "./sconely_signature_single_page.tsx";
//import SconelySignatureSinglePage from "./sconely_signature_single_page.tsx";
/*import OrderPayment from "./sconely_yours_social_order_payment";
import ProfilePayment from "./user/payment";*/

//import * as cart_reducer from './reducers/cart.ts';
//import * as login_reducer from './reducers/login.ts';
//import * as delivery_address_reducer from './reducers/order_delivery_address.ts';
//import * as name_reducer from './reducers/name.ts';
//import * as root_reducer from './reducers/root.ts';
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

const historyWithoutAnnoyingQueryKey = useRouterHistory(createHashHistory)({ queryKey: false })
//const history = syncHistoryWithStore(historyWithoutAnnoyingQueryKey, store)

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
        <Route path="/register_complete" component={RegisterCompleted} />
        <Route path="/public/menu" component={PublicMenu} />
        <Route path="/public/about_us" component={PublicAboutUs} />
        <Route component={checkLogin}>
          <Route path="/order/menu" component={Menu} />
          <Route path="/order/checkout" component={Checkout} />
          <Route path="/order/preview" component={Preview} />
          <Route path="/order/cart" component={OrderCart} />
          <Route path="/order/complete" component={OrderComplete} />
        </Route>
        <Route path="/user" component={UserHomePage} />
        <Route path="/user/profile" component={UserProfile} />
        <Route path="/user/delivery_contacts_addresses" component={UserDeliveryContactsAddresses} />
        <Route path="/user/payment_methods" component={UserPaymentMethods} />
        <Route path="/user/about_me" component={UserAboutMe} />
        <Route path="/order/:order_id/details" component={UserOrder} />
        <Route path="/order/:order_id/guests" component={Guests} />
        <Route path="/order/:order_id/summary" component={SignatureOrderHistory} />
        <Route path="/order/:order_id/items" component={SignatureAdditionalItems} />
        <Route path="/order/:order_id/preview" component={SignatureOrderPreview} />
        <Route path="/order/:event_name/guest/menu" component={SconelySignatureGuestMenuItems} />
        <Route path="/order/:event_name/guest/name" component={SconelySignatureGuestName} />
        <Route path="/order/:event_name/guest/completed" component={SconelySignatureGuestOrderCompleted} />
        <Route path="/:name" component={YoursRedirect} />                
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
      <Root/>,
      document.getElementById('root')
);