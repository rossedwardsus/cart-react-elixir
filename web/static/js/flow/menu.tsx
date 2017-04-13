'use strict'

import * as React from 'react'
import { Link, browserHistory } from 'react-router'

import {connect} from 'react-redux';
//import {viewMenu} from './action/cart.ts';
//import {checklogin} from './action/cart.ts';
import {addCartItem, increaseCartItemQuantity, decreaseCartItemQuantity} from './actions/cart.ts';
import SidebarCart from './sidebar_cart.tsx';


//type Props = {
  //title: string,
  //visited: boolean,
//  setDeliveryAddrss: () => void,
//};


class PublicMenu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}],
        selected_item_id: "",
        selected_item_dozens: "",
        selected_item_quantity: "",
        selected_item_mini: false,

    };

    //this.loadCart = this.loadCart.bind(this);
    //this.showItem = this.showItem.bind(this);
    //this.selectedCartItem = this.selectedCartItem.bind(this);
    //this.selectedItemQuantity = this.selectedQuantity.bind(this);
    
  }

  componentDidMount(){

    //get active items from the database
    //alert(this.props.params);

    //alert(JSON.stringify(this.props.cart_items));
    //this.props.dispatch();

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }
 
  mouseOver(e:any){

      e.target.src = "/images/menu/DWK_greenrollover3.jpg";

  }

  mouseOut(e: any){

      e.target.src = "/images/menu/DWK_greenrollover1.jpg";

  }

  showItem(item_id: any){

      alert(item_id);

      this.setState({selected_item_id: item_id});

      $('#myModal').modal('show');

  }

  selectedItemDozens(e: any){

      alert(e.target.value);

      this.setState({selected_item_dozens: e.target.value});

      if(e.target.value == "34"){

          this.setState({selected_item_mini: true});

      }
      
  }


  selectedItemQuantity(e: any){

    alert(e.target.value);

    this.setState({selected_item_quantity: e.target.value});
    //set add cart button == active

  }

  addCartItem(){

    //if they haven't selected quantity and dozens dont submit and show them an error

    this.props.addCartItem(this.state.selected_item_id, this.state.selected_item_dozens, this.state.selected_item_quantity, this.state.selected_item_mini);

  }

  goToDateTimeContact(){

      this.context.router.push('/order/12345/signature');
      
  } 

  render(): JSX.Element{

    var that = this;
    var page = "";


    //if(this.state.page == "items"){
    //<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>

    //alert(this.props.cart_items.length);

          return(<div>
                  <nav className="navbar navbar-default navbar-fixed-top">
                          <div className="container-fluid">
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#"><img height="100" width="250" src="/images/logo/Sconely_color_web_300_space3.jpg"/></a>
                            </div>
                            <div className="hidden-xs navbar-form navbar-right">
                            </div>
                            <div id="navbar" className="navbar-collapse collapse navbar-right" style={{zIndex: 10010, background: "white"}}>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><a href="./">Profile<span className="sr-only">(current)</span></a></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/login">Login<span className="sr-only">(current)</span></Link></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/register">Signup<span className="sr-only">(current)</span></Link></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                              </ul>
                            </div>
                          </div>
                  </nav>
                  <div className="container-fluid">
                    <div className="row">
                          <div className="hidden-xs col-md-2">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <SidebarCart order={this.props.order} increaseCartItemQuantity={this.props.increaseCartItemQuantity} decreaseCartItemQuantity={this.props.decreaseCartItemQuantity}/>
                            <br/>
                          </div>
                          <div className="hidden-xs col-md-10">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            {this.state.menu_items.map(function(item: any){
                                return(<div className="col-md-4">
                                          <div className="thumbnail" style={{paddingRight: 50, paddingLeft: 10}}>
                                              <img id="1" onMouseOver={(e) => this.mouseOver(e)} onMouseOut={(e) => this.mouseOut(e)} onClick={() => this.showItem(item.item_id)} src="/images/menu/DWK_greenrollover1.jpg" data-target="myModal" alt="..."/>
                                              <div className="caption">
                                                <h3>Strawberry Scone</h3>
                                              </div>
                                          </div>
                                </div>)
                            }.bind(this))}
                              
                            <br/>
                          </div>
                    </div>
                  </div>
                  <br/>
                  <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" max-height=" 700px">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div className="modal-body">
                            Story
                            <br/>
                            Ingredients
                        </div>
                        <div className="modal-footer">
                          <select value={this.state.selected_item_dozens} onChange={(value) => this.selectedItemDozens(value)}>
                            <option value="">Quantity</option>
                            <option value="12">Dozen</option>
                            <option value="mini_24">2 Dozen Mini</option>
                          </select>
                          X
                          <select value={this.state.selected_item_quantity} onChange={(value) => this.selectedItemQuantity(value)}>
                            <option value=""></option> 
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                          </select>
                          <button type="button" onClick={() => this.addCartItem()} className="btn btn-default" data-dismiss="modal">Add-only show if cart items larger then 1</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)

    
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops " + JSON.stringify(state));
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        order: state.default.order

    //}
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    addCartItem: (item_id: any, dozens: any, quantity: any) => {
      dispatch(addCartItem(1))
    },
    increaseCartItemQuantity: () => {
      dispatch(increaseCartItemQuantity(1))
    },
    decreaseCartItemQuantity: () => {
      dispatch(decreaseCartItemQuantity(1))
    }
  }
}

const PublicMenu1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicMenu)

export default PublicMenu1