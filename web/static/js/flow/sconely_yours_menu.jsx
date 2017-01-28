// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

//import Dialog from "rc-dialog";

type Props = {
  //title: string,
  //visited: boolean,
  setDeliveryAddrss: () => void,
};


export default class Menu extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        items: [{item_id: 1}]
        
    };

    

    
  }

  componentDidMount(){

    //get active items from the database

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }


  render(): React.Element {

    var value_12 = "";     
    var value_24 = "";
    var mini_12 = "";

    this.state.items.map(function(item){


        value_12 = item.item_id + "_" + 12;     
        value_24 = item.item_id + "_" + 24;
        mini_12 = value_12 + "_mini";

    });



    return (
      <div>
        <br/>
        <br/>
        total items-subtotal
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail" >
                  <img onClick={this.props.selectItem(1)} src="/images/strawberry_scones.png" data-target="myModal" alt="..."/>
                  <div className="caption" onClick={this.props.selectItem}>
                    <h3>Strawberry Scone1</h3>
                    <p>Cost</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail">
                  <img src="/images/strawberry_scones.png" alt="..."/>
                  <div className="caption">
                    <h3>Strawberry Scone2</h3>
                    <p>Cost</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail">
                  <img src="/images/strawberry_scones.png" alt="..."/>
                  <div className="caption">
                    <h3>Strawberry Scone2</h3>
                    <p>Cost</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        item1 photo
        <br/>
        amount-cost
        <br/>
        {this.state.items.map(function(item){

            var value_12 = item.item_id + "_" + 12;
            var value_24 = item.item_id + "_" + 24;
            var mini_12 = value_12 + "_mini";


            return(
                <div>
                event name<input onChange={(value) => this.props.event_name(value)}/>
                <br/>
                click the image for popup
                <br/>
                total items
                <br/>
                <br/>
                item1 photo
                <br/>
                amount-cost
                <br/>
                <select onChange={(e) => this.props.selectItem(e.target.value)}>
                  <option value=""></option>
                  <option value={value_12}>12</option>
                  <option value={mini_12}>Mini 12</option>
                  <option value={value_24}>24</option>
                </select>
                <br/>
                X
                <br/>
                  <select onChange={(e) => this.props.selectQuantity(e.target.value)}>
                  <option value="">1</option>
                  <option value={value_12}>2</option>
        
                </select>
                </div>
            )

        }.bind(this))}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>   
        <br/>
        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">

                ...
                <img src="/images/strawberry_scones.png"></img>
              </div>
              <div className="modal-footer">
                <select onChange={this.props.selectItem}>
                  <option value=""></option>
                  <option value={value_12}>12</option>
                  <option value={mini_12}>Mini 12</option>
                  <option value={value_24}>24</option>
                </select>
                <br/>
                X
                <br/>
                  <select onChange={this.props.selectQuantity}>
                  <option value="">1</option>
                  <option value={value_12}>2</option>
                </select>
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}