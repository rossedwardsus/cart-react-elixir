/* @flow */
import React from 'react'
//import autobind from 'autobind-decorator'
//import TodoListItem from './TodoListItem'

//type Props = {
//  todos: Array<Object>,
//}

class TodoList extends React.Component {
  //props: Props;

  // Yes, I could use an arrow function, I get it.
  //@autobind
  _handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  }

  render(): React.Element {
    return (
      <ul>
        hello
      </ul>
    )
  }
}