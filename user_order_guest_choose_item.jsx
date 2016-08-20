import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
var DatePicker = require('react-datepicker');
var moment = require('moment');
//var Popup = require('react-popup');
//var Modal = require('react-bootstrap-modal')
//var Modal = ReactBootstrap.Modal;
import { Button, FormGroup, FormControl, Modal } from 'react-bootstrap';
var Dropzone = require('react-dropzone');

require('react-datepicker/dist/react-datepicker.css');

import { Router, Route, Link, browserHistory, useRouterHistory, withRouter } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

//Popup.alert('This is an alert popup');



const UserOrderGuestChooseItem = React.createClass({

  componentDidMount() {
  
    //alert("polinav");

  },

  contextTypes: {
    router: React.PropTypes.object
  },

  changeRoute(){

    //browserHistory.push('/users/polinav#/bills');
    //this.props.router.push('/some/path');
    //router.push('/users/12')
    this.context.router.push("/bills")


  },

  render(){

      var items = [[{item_id: 1, title: "title1", description: ""}, {item_id: 2, title: "title2", description: ""}], [{item_id: 1, title: "title3", description: ""}, {item_id: 2, title: "title4", description: ""}]];

      var items_html_temp = items.map(function(item, index){


                      var rows = item.map(function(i, x){

                          //alert(JSON.stringify(item.title));

                          return <td><table><tbody><tr><td>{i.title}<br/><img src="/images/chocolate_chip_scones.jpg" onClick={this.clickImage} height="100px" width="100px"/><br/><select ref="item_1" id="item_1" onChange={this.selectedItem}><option value=""></option><option value="1">1</option><option value="2">2</option></select><button onClick={this.btnAddToCart}>add to cart</button></td></tr></tbody></table></td>;

                        //}
                      }.bind(this));

                      return <tr>{rows}</tr>;

                  }.bind(this));


      var page = <table><tbody>{items_html_temp}</tbody></table>;
                  

      return(<div>
                  Welcome user!
                  <br/>
                  You have been invited to an event by user
                  <br>
                  The event name is and will be held on
                  <br/>
                  The address of the event is
                  <br/>
                  <br/>
                  <br/>
                  Please choose the items for this event
                  <br/>
                  <br/> 
                  List of items
                  <br/>
                  {page}
                  <br/>
                  Message to host
                  <br/>
                  <textarea></textarea>
                  <br/>
                  Add name you want on bag
                  <input/>
                  <br/>
                  <br/>
                  <Button>Save</Button>
            </div>);

  }

});

//start order
//buttons at top
//list of orders
render(<UserOrderGuestChooseItem/>, document.getElementById('user_order_guest_choose_item'))