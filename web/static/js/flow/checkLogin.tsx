import * as React from 'react'

import { Link, browserHistory } from 'react-router'

export default class checkLogin extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        
        
    };

  
  }

  componentDidMount(){

        //this.context.router.push('/order/12345');
        //browserHistory.push('#/');

        //this.props.history.push('/');

  }

  
  

  render(): JSX.Element {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}