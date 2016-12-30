// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

import SconelySocialTopMenu from './sconely_social_top_menu'; 


export default class Menu extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        items: [{item_id: 1}]
        
    };

    this.selectNumberOfItem = this.selectNumberOfItem.bind(this);
    this.selectItem = this.selectItem.bind(this);

    //alert(window.links.indexOf({link: "menu", text: "Menu"}));

    if(window.event.links.indexOf({link: "menu", text: "Menu"}) == -1){

        //alert("doesnt exist");
  
        window.event.links.push({link: "preview", text: "Preview"}, {link: "payment", text: "Payment"});

    }else{

        alert("exists");
    }

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

  selectNumberOfItem(e){

    alert(e.target.value);

  }

  selectItem(e){

    //alert(e.target.value);
    this.props.selectMenuItems(e.target.value);

  }

  render(): React.Element {
    return (
      <div>
        <SconelySocialTopMenu />
        <br/>
        <br/>
        if guests cant choose show this:
        <br/>
        total items
        <br/>
        <br/>
        item1 photo
        <br/>
        amount-cost
        <br/>
        {this.state.items.map(function(item){

            var value_8 = item.item_id + "_" + 8;
            var value_16 = item.item_id + "_" + 16;


            return(
                <div>
                total items
                <br/>
                <br/>
                item1 photo
                <br/>
                amount-cost
                <br/>
                <select onChange={this.selectNumberOfItem.bind(this)}>
                  <option value=""></option>
                  <option value={value_8}>8</option>
                  <option value={value_16}>16</option>
                </select>
                <br/>
                item2 photo
                <br/>
                <input type="checkbox"/>
                </div>
            )

        }.bind(this))}
        <br/>
        item2 photo
        <br/>
        <br/>
        <br/>
        <input type="checkbox"/>
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