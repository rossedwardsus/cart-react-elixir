// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

export default class Items extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        items: [{item_id: 1}]
        
    };

    this.selectItem = this.selectItem.bind(this);

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  createOrder(order_type) {
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  selectItem(e){

    //alert(e.target.value);
    this.props.selectMenuItems(e.target.value);

  }

  render(): React.Element {
    return (
      <div>
        <div id="" style={{overflowX: scroll, height:"200px"}}>
          <b>Choose Items</b>
          <br/> 
          total items
          <br/>
          {this.state.items.map(function(item){
              return(

                  <div>
                    item1 photo
                    <br/>
                    <input type="checkbox" value="1" onChange={this.selectItem.bind(this)}/>
                  </div>

              )
          }.bind(this))}
          <br/>
          <br/>
          <br/>   
          <br/>
        </div>
      </div>
    )
  }
}