// @flow

import * as React from 'react'

import { Link, browserHistory } from 'react-router'

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

//import Dialog from "rc-dialog";

type Props = {
  //title: string,
  //visited: boolean,
  setDeliveryAddrss: () => void,
};


export default class Menu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        page: "items",
        items: [{item_id: 1}],
        cart: this.props.cart,
    };

    //this.loadCart = this.loadCart.bind(this);
    
  }

  componentDidMount(){

    //get active items from the database

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }



 

  

  render(): JSX.Element {

    var that = this;
    var page = "";

    var value_12 = "";     
    var value_24 = "";
    var mini_12 = "";

    /*this.state.items.map(function(item){


        value_12 = item.item_id + "_" + 12;     
        value_24 = item.item_id + "_" + 24;
        mini_12 = value_12 + "_mini";

    });

    if(this.state.page == "items"){

          page = <div>
                  cart(<a onClick={() => that.loadCart()}>{this.props.total_items}</a>)
                  <br/>
                  <br/>
                  <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-md-4">
                          <div className="thumbnail" >
                            <img id="1" onMouseOver={(e) => this.mouseOver(e)} onMouseOut={(e) => this.mouseOut(e)} onClick={() => this.props.selectItem(1)} src="/images/menu/DWK_greenrollover1.jpg" data-target="myModal" alt="..."/>
                            <div className="caption" onClick={() => this.props.selectItem}>
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
                  {this.state.items.map(function(item){

                      var value_12 = item.item_id + "_" + 12;
                      var value_24 = item.item_id + "_" + 24;
                      
                      return(
                          <div>
                          <select onChange={(e) => this.props.addItemToCart(e.target.value)}>
                            <option value=""></option>
                            <option value={value_12}>12</option>
                            <option value={value_24}>24</option>
                          </select>
                          <br/>
                          </div>
                      )

                  }.bind(this))}
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
                          <select onChange={(value) => this.props.addItemToCart(value)}>
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

    }else{

          page = <div>
                    <a onClick={() => this.loadItems()}>items</a>
                    <br/>
                    {this.props.cart.map(function(item){

                          var item_id = item.item_id;

                          return(<div>description{item.item_id}xquantity-<a onClick={() => that.props.removeItemFromCart(item_id)}>remove</a></div>)

                    })}
                  </div>

    }*/

    



    return (
            <div className="row">
                  <div className="hidden-xs col-md-3">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                  </div>
                  <div className="col-xs-11 col-md-3">
                    <div>
                        <div className="hidden-lg">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/public/about_us" style={{color: "grey", textDecoration: "none"}}>ABOUT US</Link>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/public/faq" style={{color: "grey", textDecoration: "none"}}>FAQ</Link>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/public/team" style={{color: "grey", textDecoration: "none"}}>TEAM</Link>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/public/press" style={{color: "grey", textDecoration: "none"}}>PRESS</Link>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/public/story" style={{color: "grey", textDecoration: "none"}}>OUR STORY</Link>
                        <br/>
                        <br/>
                    </div>
                    <br/>
                    <div className="hidden-lg">

                        &nbsp;&nbsp;&nbsp;&nbsp;<a className="fa fa-instagram" style={{fontSize: 20, textDecoration: "none", color: "grey"}} href="http://www.instagram.com/sconelyla"></a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a className="fa fa-twitter" style={{fontSize: 20, textDecoration: "none", color: "grey"}}  href="http://www.twitter.com/sconelyla"></a>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a className="fa fa-facebook" style={{fontSize: 20, textDecoration: "none", color: "grey"}}  href="http://www.facebook.com/sconelyla"></a>
                    </div>
                  </div>
                  <div className="hidden-xs col-md-2">
                      <div className="form-horizontal" style={{paddingLeft: 0}}>
                        <div className="col-md-1" style={{paddingLeft: 10}}>
                          <div style={{fontSize: 15, height: 10}}>@sconelyla</div>
                        </div>
                      </div>
                      <br/>
                      <div className="form-horizontal" style={{paddingLeft: 0}}>
                        <div className="col-md-1" style={{paddingLeft: 10}}>
                          <a className="fa fa-instagram" style={{fontSize: 20, textDecoration: "none", color: "grey"}} href="http://www.instagram.com/sconelyla"></a>
                        </div>
                        <div className="col-md-1" style={{paddingLeft: 10}}>
                          <a className="fa fa-twitter" style={{fontSize: 20, textDecoration: "none", color: "grey"}} href="http://www.twitter.com/sconelyla"></a>
                        </div>
                        <div className="col-md-1" style={{paddingLeft: 10}}>
                          <a className="fa fa-facebook" style={{fontSize: 20, textDecoration: "none", color: "grey"}}  href="http://www.facebook.com/sconelyla"></a>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-8">
                  </div>
            </div>
    )
  }
}