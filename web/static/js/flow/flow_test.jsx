/* @flow */
import React from 'react'
//import autobind from 'autobind-decorator'
//import TodoListItem from './TodoListItem'

import { Router, Route, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';

//type Props = {
//  todos: Array<Object>,
//}

class Sconely extends React.Component {
  //props: Props;

  constructor() {
    super();
    //this.getData();
  
    //alert("todolist");

  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  _handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  }



  render(): React.Element {
    return (
      <ul>
        <Link to="sconely_yours">Sconely Yours</Link>
        <br/>
        Sconely Social
      </ul>
    )
  }
}

class SconelyYours extends React.Component {
  //props: Props;

  constructor() {
    super();
    //this.getData();
  
    //alert("sconely yours");

  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}



  render(): React.Element {
    return (
      <ul>
        Welcome to Sconely Yours.  With sconely yours you can order scones for an event.
        <br/>
        To get start please enter an event name:
        <br/>
        <input type= "text"/>
      </ul>
    )
  }
}

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/mobile/user" component={Sconely} />
    <Route path="sconely_yours" component={SconelyYours} />
  </Router>  
);

ReactDOM.render(
      <Root/>,
      document.getElementById('root')
);