import * as React from 'react'

import { Link, browserHistory } from 'react-router'

export default class SconelySignatureMenuItems extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        
    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  render(): JSX.Element {
    return (
      <ul>
        menu items
        <br/>
        
      </ul>
    )
  }
}