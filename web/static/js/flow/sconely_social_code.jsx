// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

export default class Code extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        custom_code: ""

    };

  }

  changeCode(e){

    this.setState({custom_code: e.target.value});
   
  }

  createCode(){

     this.props.createCode(this.state.custom_code);

  }

  render(): React.Element {
    return (
      <div>
        <b>Code</b>
        
      </div>
    )
  }
}