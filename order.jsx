import React from 'react';
import ReactDOM from 'react-dom';
var DatePicker = require('react-datepicker');
var moment = require('moment');
//var Popup = require('react-popup');
//var Modal = require('react-bootstrap-modal')
//var Modal = ReactBootstrap.Modal;
import { Modal } from 'react-bootstrap';

require('react-datepicker/dist/react-datepicker.css');

//Popup.alert('This is an alert popup');

var Order = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
        order_state: "start",
				startDate: moment(),
        open: false,
        order: {},
        items_count: 0,
        popup_image: "",
        popup_details: "",
        delivery_address_from_profile: "",
        selected_city: "",
        selected_state: ""
			}
	},
  componentWillMount: function(){

      //alert("!");

      Stripe.setPublishableKey(); // set your test public key

  },

  handleState: function(){

      if(this.state.order_state == "start"){

          //order_type: "bulk"

          this.setState({order_state: "delivery"});

      }else if(this.state.order_state == "delivery"){

          //delivery_address_street = this.refs.street_address.value;
          //delivery_address_city = this.refs.city.value;
          //delivery_address_state = this.refs.state.value;
          //delivery_address_zipcode = this.refs.zipcode.value;  
          
          //delivery_date = this.refs.street_date.value;
          //delivery_time = this.refs.street_time.value;         

          this.state.order = {delivery_address: {street: this.refs.street_address.value, city: this.refs.city.value, state: this.refs.state.value, zipcode: this.refs.zipcode.value, date: this.state.startDate, time: ""}};      

          this.setState({order_state: "items"});

      }else if(this.state.order_state == "items"){

          //order = {total: 0}


          this.setState({order_state: "payment"});

      }else if(this.state.order_state == "payment"){

          //order = {paid: true}

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

  render: function(){

      var page = "";
      var items_html = "";

      //alert(this.state.order_state);

      if(this.state.order_state == "start"){

          page = <div><a onClick={this.startBulkOrder}>bulk</a> or <a>invited</a></div>

          
      }else if(this.state.order_state == "delivery"){

          page =  <table width="100%" border="1">
                    <tbody>
                      <tr><td><b>Please allow 3 hours for delivery-Delivery Address</b></td><td><b>Datetime</b></td></tr><tr><td><input ref="street_address" value="Street" size="50" onChange={this.onStreetAddressChange}/><input ref="apt" value="apt" size="10" onChange={this.onAptChange}/><br/><select ref="city" onChange={this.selectedCity}><option value="">city</option><option value="santa_monica">Santa Monica</option></select><select ref="state" onChange={this.selectedState}><option value="">state</option><option value="CA">Ca</option></select><br/><input ref="zipcode" size="10" value="zipcode" onChange={this.onZipCodeChange}/><input ref="comments" value="comments" size="50" onChange={this.onCommentChange}/></td><td><DatePicker selected={this.state.startDate} onChange={this.handleChange} /><br/><select ref="time"><option value="">time</option><option value="800">8:00</option><option value="830">8:30</option></select></td>
                      </tr>
                    </tbody>
                  </table>;

      }else if(this.state.order_state == "items"){

          var items = [[{item_id: 1, title: "title1", description: ""}, {item_id: 2, title: "title2", description: ""}], [{item_id: 1, title: "title3", description: ""}, {item_id: 2, title: "title4", description: ""}]]

          
          //items_html = <table><tbody>;

          var items_html_temp = items.map(function(item, index){


              var rows = item.map(function(i, x){

                  //alert(JSON.stringify(item.title));

                  return <td><table><tbody><tr><td>{i.title}<br/><img src="/images/chocolate_chip_scones.jpg" onClick={this.clickImage} height="100px" width="100px"/><br/><select ref="item_1" id="item_1" onChange={this.selectedItem}><option value=""></option><option value="1">1</option></select><button onClick={this.btnAddToCart}>add to cart</button></td></tr></tbody></table></td>;

                //}
              }.bind(this));

              return <tr>{rows}</tr>;

          }.bind(this));

          //alert(JSON.stringify(items_html_temp));

          page = <table><tbody>{items_html_temp}</tbody></table>;

          //page = <table width="100%"><tbody><tr><td><input type="checkbox"/>title<br/><img src="/images/chocolate_chip_scones.jpg" onClick={this.clickImage} height="100px" width="100px"/>image<br/><select ref="item_1" id="item_1" onChange={this.selectedItem}><option value=""></option><option value="1">1</option></select><button onClick={this.btnAddToCart}>add to cart</button></td><td>title<br/>image<select ref="item_2" id="item_2" onChange={this.selectedItem}><option value=""></option><option value="1">1</option></select></td></tr></tbody></table>;

      }else if(this.state.order_state == "payment"){

          page = <table width="100%"><tbody><tr><td>chocolate scone x 1<br/>strawberry scone x 2<br/>subtotal</td><td>payment-use existing<br/><form method="post" onSubmit={ this.handleSubmit }><input size="20" data-stripe="number" placeholder="number"/><input size="4" data-stripe="cvc" placeholder="cvc" /><input size="2" data-stripe="exp-month" placeholder="exp-month" /><input size="4" data-stripe="exp-year" placeholder="exp-year" /><button type="submit">Pay</button></form></td></tr></tbody></table>;

      }else if(this.state.order_state == "cart"){

          page = "cart-back to order";

      }


  		return (<div>start-items-address-pay<a onClick={this.clickCart}>cart({this.state.items_count})</a><br/><br/>{page}<br/><button onClick={this.handleState}>Next</button><Modal show={this.state.open} onHide={this.closeModal} aria-labelledby="ModalHeader"><Modal.Header closeButton><Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title></Modal.Header><Modal.Body><p><img src={this.state.popup_image} onClick={this.clickImage}/><br/><br/>{this.state.popup_description}</p></Modal.Body></Modal></div>);

  }

});


ReactDOM.render(<Order />, document.getElementById('react_order'));

//ReactDOM.render(<Cart />, document.getElementById('cart'));