import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
var DatePicker = require('react-datepicker');
var moment = require('moment');
//var Popup = require('react-popup');
//var Modal = require('react-bootstrap-modal')
//var Modal = ReactBootstrap.Modal;
import { Button, FormGroup, FormControl, Modal, Form, FieldGroup, Col, ControlLabel } from 'react-bootstrap';
var Dropzone = require('react-dropzone');

require('react-datepicker/dist/react-datepicker.css');

import { Router, Route, Link, browserHistory, useRouterHistory, withRouter } from 'react-router'
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

//Popup.alert('This is an alert popup');



const BulkOrderMenu = React.createClass({

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

      return(<div>
                  <Button onClick={this.changeRoute}></Button><Link to="/order/new/message"><Button>Items</Button></Link><Link to="/order/new/items"><Button>Delivery</Button></Link><Link to="/students"><Button>Payment</Button></Link>

      </div>);

  }

});

const InvitedOrderMenu = React.createClass({

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

      return(<div>
                  <Button onClick={this.changeRoute}></Button><Link to="/order/1/guests">Guest List</Link><Link to="/order/1/items">Items</Link><Link to="/order/1/messages"><Button>Messages</Button></Link><Link to="/order/1/delivery_address"><Button>Delivery Address</Button></Link><Link to="/payment"><Button>Payment</Button></Link><Link to="/event_name"><Button>Event Name</Button></Link><Link to="/Map"><Button>Map</Button></Link>

      </div>);

  }

});


var Home = React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  newBulkOrder(){

    //browserHistory.push('/users/polinav#/bills');
    //this.props.router.push('/some/path');
    //router.push('/users/12')

    //get new order_id from server and redirect

    this.context.router.push("/order/1/items")

  },

  newInvitedOrder(){

    //browserHistory.push('/users/polinav#/bills');
    //this.props.router.push('/some/path');
    //router.push('/users/12')

    //get new order_id from server and redirect

    this.context.router.push("/order/1/guests")

  },

  render(){

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                        New Bulk/New Invited
                        <br/>
                        <Button onClick={this.newBulkOrder}>New Bulk Order</Button><Button onClick={this.newInvitedOrder}>New Invited Order</Button>
                        <br/>
                        <OrderList/>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>);

  }

});

var NewBulkOrder = React.createClass({

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

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                        <InvitedOrderMenu/>
                        <br/>
                        go to items page actually-redirect
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>);

  }

});


var OrderList = React.createClass({

  getInitialState: function(){

      return {

          orders: [{order_id: 1}]
        
      }
  },
  componentWillMount: function(){

      //alert("!");

  },

  render(){

      return(<div>
            
                  {this.state.orders.map(function(order){

                      return(<div><Link to="/order1/1">August 15, 2016</Link>-bulk-sent</div>);

                  })}

            </div>);

  }

});

var Order1 = React.createClass({

  getInitialState: function(){

      return {

          orders: [{order_id: 1}]
        
      }
  },
  componentWillMount: function(){

      //alert("!");
      //alert(this.props.params.order_id);

      //get the details from the database for this order
      //status-new/being processed

  },

  render(){

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                        <BulkOrderMenu/>
                        <br/>
                        if no params order is new-if bulk show bulk menu and go to item page
                        Delivery date-order type
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>);

  }

});

var OrderMessage = React.createClass({

  getInitialState: function(){

      return {

         guest_messages: [{order_id: 1}]
        
      }
  },
  componentWillMount: function(){

      //alert("!");
      //alert(this.props.params.order_id);

  },

  render(){

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                      <InvitedOrderMenu/>
                      <br/>
                      guest messages
                      <br/>
                      send message to guests
                      <br/>
                      <textarea></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>);

  }

});

var OrderGuests = React.createClass({

  getInitialState: function(){

      return {

          guest_list: [{name: "ross edwards", email: "rossedwards.us@gmail.com"}, {name: "julia friedman", email: ""}]
        
      }
  },
  componentWillMount: function(){

      //alert("!");
      //alert(this.props.params.order_id);

  },

  onChange: function(e){

        //alert(e.target.value);
        var guests = e.target.value.split("\n");
        //alert(guests[0]);
        var guests_temp = [];

        guests.map(function(guest){
        
            guests_temp.push({name: guest.split(",")[0], email: guest.split(",")[1]});

        });

        //alert(JSON.stringify(guests_temp));

        this.setState({guest_list: guests_temp});

  },

  render(){

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                      <InvitedOrderMenu/>
                      <br/>
                      <b>Guests</b>
                      <br/>
                      <br/>
                      <br/>
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="50%">
                              Add individually:
                              <br/>
                              <input/>
                              <br/>
                              <Button>Add</Button>
                              <br/>
                              <br/>
                              Copy and paste:
                              <br/>
                              <FormGroup controlId="formControlsTextarea">
                                <FormControl componentClass="textarea" placeholder="textarea" ref="guests" rows="10" cols="1" style={{resize: "none"}} onChange={this.onChange}/>
                              </FormGroup>
                              <br/>
                              <br/>
                              Drag a file
                              <br/>
                              <Dropzone onDrop={this.onDrop}>
                                <div>Try dropping some files here, or click to select files to upload.</div>
                              </Dropzone>
                            </td>
                            <td width="5%"></td>
                            <td style={{verticalAlign: "top"}}>
                                <table width="100%">
                                  <tbody>
                                    {this.state.guest_list.map(function(guest){
                                            //alert(guest.name);

                                      return(<tr><td style={{verticalAlign: "top"}}>{guest.name}</td><td>{guest.email}</td></tr>)

                                    })}
                                  </tbody>
                                </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br/>
                <br/>
                
            </div>);

  }

});

var OrderItems = React.createClass({

  getInitialState: function(){

      return {

          orders: [{order_id: 1}]
        
      }
  },
  componentWillMount: function(){

      //alert("!");
      //alert(this.props.params.order_id);

  },

  render(){

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                      if order type==bulk <BulkOrderMenu/>
                      <br/>
                      order items
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>);

  }

});

var OrderDeliveryAddress = React.createClass({

  getInitialState: function(){

      return {

          orders: [{order_id: 1}]
        
      }
  },
  componentWillMount: function(){

      //alert("!");
      //alert(this.props.params.order_id);

  },

  render(){

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td style={{verticalAlign: "top"}}>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                          <br/>
                          <input type="radio"/>Use Existing Address
                          <br/>
                          <Form horizontal>
                              <FormGroup>
                                  <Col componentClass={ControlLabel} sm={10}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Delivery Address"
                                      onChange={this.handleChange}
                                      ref="delivery_address"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Suite"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                              </FormGroup>
                          </Form>
                          <br/>
                          <br/>
                          <Form horizontal>
                              <FormGroup>
                                  <Col componentClass={ControlLabel} sm={5}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="City"
                                      onChange={this.handleChange}
                                      ref="delivery_address"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="State"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Zipcode"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                              </FormGroup>
                          </Form>
                          <br/>
                          <br/>
                          City-State-Zipcode
                          <br/>
                          <br/>
                          <input type="radio"/>Or enter a new one
                          <br/>
                          <br/>
                          <Form horizontal>
                              <FormGroup>
                                  <Col componentClass={ControlLabel} sm={5}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="City"
                                      onChange={this.handleChange}
                                      ref="delivery_address"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="State"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                                  <Col componentClass={ControlLabel} sm={2}>
                                    <FormControl
                                      type="text"
                                      value={this.state.value}
                                      placeholder="Zipcode"
                                      onChange={this.handleChange}
                                      ref="suite"
                                    />
                                  </Col>
                              </FormGroup>
                          </Form>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>);

  }

});

var OrderPayment = React.createClass({

  getInitialState: function(){

      return {

          orders: [{order_id: 1}]
        
      }
  },
  componentWillMount: function(){

      //alert("!");
      //alert(this.props.params.order_id);

  },

  render(){

      return(<div>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        settings
                        <br/>
                        orders
                        <br/>
                      </td>
                      <td>
                          Use Existing Payment Method
                          <br/>
                          Address-Suite
                          <br/>
                          <input/>
                          <br/>
                          City-State-Zipcode
                          <br/>
                          <br/>
                          Or enter a new one
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>);

  }

});

















var Order = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
        order_state: "start",
				startDate: moment(),
        open: false,
        order: {order_type: "invited"},
        guest_list: [{"first_name": "ross", "last_name": "edwards", "email": "rossedwards.us@gmail.com"}],
        items: [{item_id: 1, quantity: 0}],
        message: "",
        items_count: 0,
        popup_image: "",
        popup_details: "",
        delivery_address_from_profile: "",
        selected_city: "",
        selected_state: "",
        cart: [{title: "title"}]
			}
	},
  componentWillMount: function(){

      //alert("!");

      Stripe.setPublishableKey(); // set your test public key

  },

  btnHandleState: function(){

      if(this.state.order_state == "guest_list" && this.state.order_type == "invited"){

          //alert();

          var order_temp = this.state.order;
          order_temp["guest_list"] = {guest_list: []};

          this.setState({order_state: "message_stationary"});

      }else if(this.state.order_state == "message_stationary" && this.state.order_type == "invited"){

          //alert();

          this.setState({order_state: "delivery"});

      }else if(this.state.order_state == "delivery"){

          //delivery_address_street = this.refs.street_address.value;
          //delivery_address_city = this.refs.city.value;
          //delivery_address_state = this.refs.state.value;
          //delivery_address_zipcode = this.refs.zipcode.value;  
          
          //delivery_date = this.refs.street_date.value;
          //delivery_time = this.refs.street_time.value;         

          this.state.order = {delivery_address: {street: "this.refs.street_address.value", city: "this.refs.city.value", state: "this.refs.state.value", zipcode: "this.refs.zipcode.value", date: this.state.startDate, time: ""}};      

          this.setState({order_state: "items"});

      }else if(this.state.order_state == "items"){

          //order = {total: 0}


          this.setState({order_state: "payment"});

      }else if(this.state.order_state == "payment"){

          //order = {paid: true}
          //order = {order_type: "invited", guest_list: [{}, {}], message: "", stationary_id: 1, delivery_address: "", delivery_datetime: "", paid: true}
          //order = {order_type: "bulk", items: [{}, {}], delivery_address: "", delivery_datetime: "", paid: true}


          //submit payment 
          Stripe.setPublishableKey(); // set your test public key

          //if successful submit to database

          alert("paid!");

          $.ajax({
                type: "POST",
                url: "/api/user/orders/create",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({order: this.state.order}),
                dataType: "JSON",
                success: function(resultData){
                    alert("Save Complete" + JSON.stringify(resultData));
                }
          });

          this.setState({order_state: "completed"});

      }//else if(this.state.order_state == "cart"){

          //this.setState({order_state: "payment"});

      //}          

  },
  selectedCity: function(e){

      alert(e.target.value);
      //this.setState({selected_city: e.target.value})

  },
  selectedState: function(e){

      alert(e.target.value);
      //this.setState({selected_state: e.target.value})

  },

  onStreetChange: function(e){


  },

  onAptChange: function(e){


  },

  onZipCodeChange: function(e){



  },
  onCommentChange: function(e){



  },
  selectedItem: function(e){

      alert(e.target.id);

  },

  onImageClick: function(){



  },

  closeModal: function(){

      //alert();
      this.setState({open: false});

  },

  clickImage: function(){

      //alert();

      //menu_items[0].item_id
      //menu_items[0].description

      this.setState({popup_image: "/images/chocolate_chip_scones.jpg"})
      this.setState({popup_description: "description"})
      this.setState({open: true});

  },
  btnAddToCart: function(){

      //var cart = this.state.cart.items.push({item_id: 1, quantity: 2})
      //this.setState({cart: })
      this.setState({items_count: 1});

  },

  clickCart: function(){

      this.setState({order_state: "cart"});

  },

  startBulkOrder: function(){

      //alert("bulk");

      this.setState({order_type: "bulk", order_state: "guest_list"});

  },

  startInvitedOrder: function(){

      alert("invited");

      this.setState({order_type: "invited", order_state: "guest_list"});

  },

  onDrop: function (files) {
      var reader = new FileReader();
      console.log('Received files: ', files);
      //alert(files[0].result);
      //alert(reader.readAsText(files[0]));

      var guest_list = [];

      files.forEach((file)=> {
            //alert(JSON.stringify(file.getAsText("utf-8")));
            //req.attach(file.name, file);
            reader.onload = function(e) {
                // e.target.result should contain the text
                //alert(e.target.result);
                alert(e.target.result.split(",")[0]);
                //e.target.result.map(function(guest){

                  //  guest_list.push(guest);

                //})
                this.setState({guest_list: guest_list});
            };
            reader.readAsText(file);
      });

      /*var rawFile = new XMLHttpRequest();
      rawFile.open("GET", files[0], false);
      rawFile.onreadystatechange = function ()
      {
          if(rawFile.readyState === 4)
          {
              if(rawFile.status === 200 || rawFile.status == 0)
              {
                  var allText = rawFile.responseText;
                  alert(allText);
              }
          }
      }
      rawFile.send(null);*/
  },

  textareaChange: function(){

    //alert(this.refs.guestList.value);
    
    var guest_list = "";

    //this.refs.guestList.value.map(function(guest){

      //  guest_list.push(guest);

    //})
    //this.setState({guest_list: guest_list});
            

  },





  render: function(){

      var page = "";
      var items_html = "";

      //alert(this.state.order_state);

      if(this.state.order_state == "start"){

          page = <div><a onClick={this.startBulkOrder}><font size="20" color="black">bulk</font></a> or <a onClick={this.startInvitedOrder}><font size="20">invited</font></a></div>

      }else if(this.state.order_state == "guest_list"){

          page = <div>guest list-upload or paste
                  <br/>
                  <br/>
                  <table width="100%">
                    <tbody>
                      <tr>
                        <td>you have added 25 guests-choose how many items a guest can select</td>
                      <tr>
                      </tr>
                        <td>
                        <FormGroup controlId="formControlsTextarea">
                          <FormControl componentClass="textarea" placeholder="textarea" style={{resize: "none"}}/>
                        </FormGroup>
                        </td>
                        <td><textarea ref="guestList" cols="50" rows="10" style={{resize: "none"}} onChange={this.textareaChange}></textarea></td>
                        <td>
                            <Dropzone onDrop={this.onDrop}>
                              <div>Try dropping some files here, or click to select files to upload.</div>
                            </Dropzone>
                        </td>
                      </tr>
                      <tr>
                      {this.state.guest_list.map(function(guest){

                          return(<td>{guest.name}</td>)

                      })}
                      </tr>
                    </tbody>
                  </table>
                  </div>

      }else if(this.state.order_state == "message_stationary"){

          page =  <div>
                  Message Stationary
                  <table width="100%">
                    <tbody>
                      <tr>
                          <td><textarea rows="10" cols="50" style={{resize: "none"}}></textarea></td>
                          <td>stationary-gallery?</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>

         
      }else if(this.state.order_state == "delivery"){

          page =  <table width="100%" border="1">
                    <tbody>
                      <tr><td><b>Delivery Address</b></td><td><b>Datetime</b></td></tr><tr><td><input ref="street_address" value="Street" size="50" onChange={this.onStreetAddressChange}/><input ref="apt" value="suite" size="10" onChange={this.onAptChange}/><br/><br/><input ref="zipcode" size="10" value="zipcode" onChange={this.onZipCodeChange}/><br/><input ref="comments" value="comments" size="50" onChange={this.onCommentChange}/></td><td><DatePicker selected={this.state.startDate} onChange={this.handleChange} /><br/><select ref="time"><option value="">time</option><option value="800">8:00</option><option value="830">8:30</option></select></td>
                      </tr>
                    </tbody>
                  </table>;

      }else if(this.state.order_state == "items"){

          var items = [[{item_id: 1, title: "title1", description: ""}, {item_id: 2, title: "title2", description: ""}], [{item_id: 1, title: "title3", description: ""}, {item_id: 2, title: "title4", description: ""}]]

          
          //items_html = <table><tbody>;

          var items_html_temp = items.map(function(item, index){


              var rows = item.map(function(i, x){

                  //alert(JSON.stringify(item.title));

                  return <td><table><tbody><tr><td>{i.title}<br/><img src="/images/chocolate_chip_scones.jpg" onClick={this.clickImage} height="100px" width="100px"/><br/><select ref="item_1" id="item_1" onChange={this.selectedItem}><option value=""></option><option value="10">10</option><option value="20">20</option></select><button onClick={this.btnAddToCart}>add to cart</button></td></tr></tbody></table></td>;

                //}
              }.bind(this));

              return <tr>{rows}</tr>;

          }.bind(this));

          //alert(JSON.stringify(items_html_temp));

          page = <table><tbody>{items_html_temp}</tbody></table>;

          //page = <table width="100%"><tbody><tr><td><input type="checkbox"/>title<br/><img src="/images/chocolate_chip_scones.jpg" onClick={this.clickImage} height="100px" width="100px"/>image<br/><select ref="item_1" id="item_1" onChange={this.selectedItem}><option value=""></option><option value="1">1</option></select><button onClick={this.btnAddToCart}>add to cart</button></td><td>title<br/>image<select ref="item_2" id="item_2" onChange={this.selectedItem}><option value=""></option><option value="1">1</option></select></td></tr></tbody></table>;

      }else if(this.state.order_state == "payment"){

          //var items_html = <table><tbody;

          //var items_html_temp = this.state.order.items.map(function(item){

              //return(

              //    <tr><td>{item.title}</td><td>{item.quantity}</td></tr>

              //)

          //});

          //items_html = items_html + items_html_temp + </tbody></table>

          page = <table width="100%"><tbody><tr><td>chocolate scone x 1<br/>strawberry scone x 2<br/>subtotal</td><td>payment-use existing<br/><form method="post" onSubmit={ this.handleSubmit }><input size="20" data-stripe="number" placeholder="number"/><input size="4" data-stripe="cvc" placeholder="cvc" /><input size="2" data-stripe="exp-month" placeholder="exp-month" /><input size="4" data-stripe="exp-year" placeholder="exp-year" /><button type="submit">Pay</button></form></td></tr></tbody></table>;

      }else if(this.state.order_state == "cart"){

          page = "cart-back to order";

      }


  		return (<div>
                  <table width="100%">
                    <tbody>
                      <tr>
                        <td width="2%"></td>
                        <td width="25%" style={{verticalAlign: "top"}}>
                            settings
                            <br/>
                            profile
                            <br/>
                            <br/>
                            <b>CART</b>
                            <br/>
                            <table>
                              <tbody>
                                {this.state.cart.map(function(item){

                                    return(<tr><td>{item.title}</td></tr>);

                                })}
                              </tbody>
                            </table>
                        </td>
                        <td valign="top">
                            start-items-address-pay<a onClick={this.clickCart}>cart({this.state.items_count})</a><br/><br/><br/>{page}<br/><Button onClick={this.btnHandleState}>Next</Button>
                        </td>
                        </tr>
                    </tbody>
                  </table>
              <Modal show={this.state.open} onHide={this.closeModal} aria-labelledby="ModalHeader"><Modal.Header closeButton><Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title></Modal.Header><Modal.Body><p><img src={this.state.popup_image} onClick={this.clickImage}/><br/><br/>{this.state.popup_description}</p></Modal.Body></Modal>
          </div>);

  }

});


//ReactDOM.render(<Order />, document.getElementById('react_order'));

//ReactDOM.render(<Cart />, document.getElementById('cart'));


//start order
//buttons at top
//list of orders
render((
  <Router history={appHistory}>
    <Route path="/" component={Home}/>
    <Route path="/new/bulk" component={NewBulkOrder}/>
    <Route path="/new/invited" component={NewBulkOrder}/>
    <Route path="/order1/:order_id" component={Order1}/>
    <Route path="/order/:order_id/guests" component={OrderGuests}/>
    <Route path="/order/:order_id/message" component={OrderMessage}/>
    <Route path="/order/:order_id/items" component={OrderItems}/>
    <Route path="/order/:order_id/payment" component={OrderPayment}/>
    <Route path="/order/:order_id/delivery_address" component={OrderDeliveryAddress}/>
  </Router>
), document.getElementById('order'))