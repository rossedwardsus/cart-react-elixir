// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router'

import SconelySocialTopMenu from './sconely_social_top_menu'; 

import Dialog from "rc-dialog";


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

    /*var orders = JSON.parse(localStorage.getItem("user")).orders;    

    function findOrder(order) { 
            //alert(order.order_id);
            return order.order_id === 12345;
    };

    var order_type = orders.find(findOrder).order_type; 
    //alert(order_type);
    this.setState({order_type: order_type});*/

    //myTimer;
    //var myVar = setInterval(
    //    () => 
            //get the data from state and upload to server
            //only update if the data has been changed though
            //add a flag that updates when they change something
            
            //if this.state.changed == true then update
            //only update menu

            //window.event.event_name == this.state.event_name
            //window.address == "home"
            //window.event_date == "date"
            //window.event_time == "time"
            //window.custom_code = "custom_code"

            /*request
              .post('/api/order/new')
              .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
              .set('X-API-Key', 'foobar')
              .set('Accept', 'application/json')
              .end(function(err, res){
                // Calling the end function will send the request
                //this.setState({payment_complete: true});
          
              });*/

            //console.log("hello")
    //, 10000);

    //myVar;
    //myTimer;

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

  selectItem(){

    //alert("e.target.value");
    //this.props.selectMenuItems(e.target.value);

    //localstorage push items

    //$('#myModal').on('shown.bs.modal', function () {
      //$('#myInput').focus()
    //})

    $('#myModal').modal({});


  }

  addItem(){

    //alert("e.target.value");
    //this.props.selectMenuItems(e.target.value);

    //localstorage push items

    //$('#myModal').on('shown.bs.modal', function () {
      //$('#myInput').focus()
    //})

    //$('#myModal').modal({});


    //add to title?

  }

  render(): React.Element {
    return (
      <div>
        <SconelySocialTopMenu />
        <br/>
        <br/>
        if social guests cant choose
        <br/>
        if signature guests can choose
        <br/>
        total items-subtotal
        <br/>
        <br/>
        <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <div className="thumbnail" >
                  <img onClick={this.selectItem.bind(this)} src="/images/strawberry_scones.png" data-target="myModal" alt="..."/>
                  <div className="caption" onClick={this.selectItem.bind(this)}>
                    <h3>Strawberry Scone1</h3>
                    <p>Cost</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8">
                <div className="thumbnail">
                  <img src="/images/strawberry_scones.png" alt="..."/>
                  <div className="caption">
                    <h3>Strawberry Scone2</h3>
                    <p>Cost</p>
                    <button onClick={this.addItem.bind(this)}>Add</button>
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
        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}