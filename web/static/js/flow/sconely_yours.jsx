import React from 'react'

export default class SconelyYours extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    alert("sconely yours1" + this.props.params.order_id);

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
        <br/>
        To get start please enter an event datetime:
        <br/>
        <input type= "text"/>
        <br/>
        To get start please enter an event code:
        <br/>
        <input type= "text"/>
        To get start please enter number of guests:
        <br/>
        <input type= "text"/>
        <br/>
        To get start please enter an address:
        <br/>
        <input type= "text"/>
        <br/>
        To get start please choose extra items:
        <br/>
        <input type= "text"/>
        <br/>
        To get start please decide if guests choose item:
        <br/>
        <input type= "text"/>
        <br/>
        To get start please enter a payment method:
        <br/>
        <input type= "text"/>
      </ul>
    )
  }
}