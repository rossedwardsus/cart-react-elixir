/* @flow */
import React from 'react'
import ReactDOM from 'react-dom';

//import autobind from 'autobind-decorator'
//import TodoListItem from './TodoListItem'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory, useRouterHistory, Link } from 'react-router';
import createHistory from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import SconelyYours from "./sconely_yours";


//type Props = {
//  todos: Array<Object>,
//}

const store = createStore(
  combineReducers({
    //...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(hashHistory, store)

class Sconely extends React.Component {
  //props: Props;

  constructor() {
    super();
    //this.getData();
  
    //alert("todolist");

    this.state = {

        payment: "",
        password: "",
        delivcery_address: "",
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
}

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

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Sconely}>
        <IndexRoute component={Sconely} />
        <Route path="/order/:order_id" component={SconelyYours} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
      <Root/>,
      document.getElementById('root')
);