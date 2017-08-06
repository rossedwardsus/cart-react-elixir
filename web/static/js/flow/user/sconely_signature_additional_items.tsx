import * as React from 'react'

import SidebarCart from './sconely_signature_sidebar_cart.tsx';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import {addCartItem} from '../actions/cart.ts';
//import {processSignatureOrder} from './actions/user_order.ts';


class SconelySignatureAdditionalItems extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + window.guest_chooses);

    this.state = {

        items: [{item_id: 1, image_id: "SweetassortmentJune7a", title: "Savory Assortment", description: ""}, {item_id: 1, image_id: "savories7", title: "Sweet Assortment", description: ""}, {title: "Savory Assortment Mini", description: "", image_id: "SconelyGallery3"}, {title: "Sweet Assortment Mini", description: "", image_id: "Savoryassortment5x5"}],
        dozen: 0,
        quantity: 0,
        mini: "no",
        add_cart_item_button_classname: "btn btn-default"
       
    };

    

    //load the data from the database if this is not a new event/order

    //if window.event.status == "existing/saved"
    /*request
              .post('/api/order/new')
              .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
              .set('X-API-Key', 'foobar')
              .set('Accept', 'application/json')
              .end(function(err, res){
                // Calling the end function will send the request
                //this.setState({payment_complete: true});
          
    });*/

    /*this.changeEventName = this.changeEventName.bind(this);
    this.changeNumberOfGuests = this.changeNumberOfGuests.bind(this);
    this.changeDeliveryAddress = this.changeDeliveryAddress.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.createCode = this.createCode.bind(this);
    this.changeCode = this.changeCode.bind(this);
    //this.findOrder = this.findOrder.bind(this);*/

    //autosave
    //if event name has been added then start autosaving

    //myTimer;
    //var myVar = setInterval(
    //    () => 
            //get the data from state and upload to server
            //only update if the data has been changed though
            //add a flag that updates when they change something
            
            //if this.state.changed == true then update
            //only update event details

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

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}

  componentDidMount(){

    

  }


 
   showItem(item_id: any){

      //alert(item_id);

      this.setState({selected_item_id: item_id});

      this.props.menu_items.menu_items.map(function(item: any){

          if(item.item_id === item_id){

              this.setState({selected_item_title: item.title});
              this.setState({selected_item_story: item.story});
              this.setState({selected_item_ingredients: item.ingredients});

          }


      }.bind(this));

      $('#myModal').modal('show');

  }

  changeDozen(e: any){

      this.setState({dozen: 1224})

  }

  changeQuantity(e: any){

      this.setState({quantity: e.target.value})

  }

  addCartItem = () => {

      this.props.addCartItem(this.props.params.order_id, 1, "dozen", "quantity")

  }

  //<SidebarCart UserOrderEventDetails={this.props.UserOrderEventDetails} UserOrderCart={this.props.UserOrderCart} processSignatureOrder={this.props.processSignatureOrder}/>
                    

  render(): JSX.Element {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#"><img src="http://sconely-test.herokuapp.com/images/logo/LogoJune5d.jpg"/></a>
                    </div>

                </div>
              </nav>
              <div className="row">
                <div className="hidden-xs col-md-3">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/public/menu">Menu</Link>
                    <br/>
                    <Link to="/public/menu">Delivery Addresses</Link>
                    <br/>
                    <Link to="/public/menu">Payment Methods</Link>
                    <br/>
                    <Link to="/public/menu">About Me</Link>
                    <br/>
                    <Link to="/public/menu">Photo</Link>
                    
                </div>
                <div className="col-md-9">
                      <br/>
                      <br/>
                      <br/>
                      {this.state.items.map(function(item: any, index: any){

                              //console.log(item);
                          

                              //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

                              //this.setState({image_id: image_id});

                              //console.log("image id" + image_id);

                              //console.log("image id " + this.state["image_src_" + item.item_id]);

                              //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                              return(
                                      <div className="col-xs-12 col-md-4" style={{marginTop: 0, marginBottom: 0}}>
                                            <img id="1" onClick={() => this.showItem(item.item_id)}  src={"/images/menu/" + item.image_id + ".jpg"} data-target="myModal" alt="..." height="270" width="270"/>
                                        <br/>    
                                        <br/>
                                        <b>{item.title}</b> / {item.description}
                                        <br/>
                                        <br/>
                                        <br/>
                                      </div>
                            );
                          }.bind(this))}
                           <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" max-height=" 700px">
                                  <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title" id="myModalLabel">{this.state.selected_item_title}</h4>
                                      </div>
                                      <div className="modal-body">
                                          {this.state.selected_item_story}
                                          <br/>
                                          <br/>
                                          Ingredients: {this.state.selected_item_ingredients}
                                          <br/>
                                          <br/>
                                          $3/Mini - $5
                                      </div>
                                      <div className="modal-footer">
                                        <form className="form-horizontal">
                                          <div className="form-group">
                                            <div className="col-md-3">
                                                12<input type="radio" onChange={(e: any) => this.changeDozen(e)} name="dozen" value="12" /> 
                                                24<input type="radio" onChange={(e: any) => this.changeDozen(e)} name="dozen" value="24" />
                                            </div>
                                            <div className="col-md-3">
                                              <select className="form-control" value={this.state.selected_item_quantity}  style={{height: 35, width: 120}}>
                                                <option value="">Select Quantity</option> 
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                              </select>
                                            </div>
                                            <div className="col-md-3">
                                              <button className={this.state.add_cart_item_button_classname}  type="button" onClick={this.addCartItem} style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Add To Cart</button>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          </div>
                  </div>
        <br/>
       </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("sidebar_cart mapstatetoprops " + JSON.stringify(state));
  console.log("order id " + JSON.stringify(ownProps.params.order_id));
  
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        /*menu_items: state.MenuItems,
        UserOrderEventDetails: state.UserOrderEventDetails,
        //UserOrderCart: state.UserOrderCart,

        UserOrderCart: state.UserOrderCart.cart_items.map((item: any) => {

            if(item.order_id == 1){

                return(item)

            }

        }),*/

    //}
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    addCartItem: (order_id: any, item_id: any, type: any, quantity: any) => {
      dispatch(addCartItem(order_id, item_id, "type", 1));
    },
    processSignatureOrder: () => {
      //dispatch(processSignatureOrder(ownProps.params.order_id));
    },
    //increaseCartItemQuantity: () => {
    //  dispatch(increaseCartItemQuantity(1, 12));
    //},
    //decreaseCartItemQuantity: () => {
    //  dispatch(decreaseCartItemQuantity(1, 12));
    //}
  }
}

const SconelySignatureAdditionalItems1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(SconelySignatureAdditionalItems);

export default SconelySignatureAdditionalItems1;