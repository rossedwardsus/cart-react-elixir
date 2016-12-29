/* @flow */

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
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';


import User from "./user";
import Events from "./events";
import SconelySocial from "./sconely_social";
import SconelySocialEventDetails from "./sconely_social_event_details";
import SconelySocialGuests from "./sconely_social_guests";
import Payment from "./user/payment";

//import * as reducers from './reducers'

//type Props = {
//  todos: Array<Object>,
//}

const reducer = combineReducers({
  //...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
    reducer,
    DevTools.instrument(),
    applyMiddleware(thunk)
)

const history = syncHistoryWithStore(hashHistory, store)


//store = {session_id: "", event: {event_name: "", delivery_address: "", date: "", time: ""}, guests: {choose: "", number: 0}, payment_methods: [{personal: ""}], orders: [subtotal: ""], menu_items: [1234, 5678], additional_items:[{}], completed: "yes"}




/*class Sconely extends React.Component {
  //props: Props;

  constructor() {
    super();
    //this.getData();
  
    //alert("todolist");

    this.state = {

        payment: "",
        password: "",
        delivery_address: "",
        orders: [{}]

    }

    //call out to backend and get user info

  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  _handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  handleClick(order_type) {
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  render(): React.Element {
    return (
      <div>
      <ul>
        <a onClick={this.handleClick.bind(this, "sconely_yours")}>Sconely Social</a>
        <br/>
      </ul>
      {this.props.children}
      </div>
    )
  }
}*/

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


const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={User}>
        <IndexRoute component={Events} />
        <Route path="/order/:order_id" component={SconelySocial} />
        <Route path="/order/:order_id/event_details" component={SconelySocialEventDetails} />
        <Route path="/order/:order_id/guests" guest_chooses="yes" component={() => (<SconelySocialGuests guest_chooses="value" />)} />
        <Route path="/order/:order_id/menu" component={SconelySocialGuests} />
        <Route path="/order/:order_id/preview" component={SconelySocial} />
        <Route path="/order/:order_id/payment" component={SconelySocial} />
        <Route path="/user/profile" component={SconelySocial} />
        <Route path="/user/delivery_address" component={SconelySocial} />
        <Route path="/user/payment" component={Payment} />
        <Route path="/user/orders" component={Events} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
      <Root/>,
      document.getElementById('root')
);