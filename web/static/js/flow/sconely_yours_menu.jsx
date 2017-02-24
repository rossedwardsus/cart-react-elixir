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
        page: "items",
        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}],
        cart: this.props.cart,
    };

    this.loadCart = this.loadCart.bind(this);
    this.showItem = this.showItem.bind(this);
    
  }

  componentDidMount(){

    //get active items from the database

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  loadCart(){

    this.setState({page: "cart"});
    //remove/change quantity

  }

  loadItems(){

    this.setState({page: "items"});
    //remove/change quantity

  }

  /*removeitem(item_id){

    //find item and remove it via split maybe
    //this.setState({cart: cart_temp});

    var cart_temp = this.state.cart;
    var cart_temp1 = "";
    
    //var cart_temp = cart_temp.filter(function(item) {
    //    return item.name !== "John";
    //});

    //cart_temp.map(function(i, v){

            //if v.item_id == item_id{

              //.splice(0,1);

            //}
          
    //}
    
  }*/

  mouseOver(e){

      e.target.src = "/images/menu/DWK_greenrollover3.jpg";

  }

  mouseOut(e){

      e.target.src = "/images/menu/DWK_greenrollover1.jpg";

  }

  showItem(item_id){

      //alert(item_id);

      $('#myModal').modal('show');

  }

  render(): React.Element {

    var that = this;
    var page = "";

    var value_12 = "";     
    var value_24 = "";
    var mini_12 = "";

    /*this.state.items.map(function(item){


        value_12 = item.item_id + "_" + 12;     
        value_24 = item.item_id + "_" + 24;
        mini_12 = value_12 + "_mini";

    });*/

    //if(this.state.page == "items"){

          page = <div>
                  <br/>
                  <br/>
                        {this.state.menu_items.map(function(item){
                            return(<div className="thumbnail" >
                                <img id="1" onMouseOver={(e) => this.mouseOver(e)} onMouseOut={(e) => this.mouseOut(e)} onClick={() => this.showItem(item.item_id)} src="/images/menu/DWK_greenrollover1.jpg" data-target="myModal" alt="..."/>
                                <div className="caption">
                                  <h3>Strawberry Scone1</h3>
                                  <p>
                                    <div>
                                      <select onChange={this.props.addItemToCart} id={item.item_id}>
                                        <option value=""></option>
                                        <option value="12">12</option>
                                        <option value="24">24</option>
                                      </select>
                                      <br/>
                                    </div>
                                  </p>
                                </div>
                            </div>)
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
                          <img width="100" height="100" src="/images/strawberry_scones.png"></img>
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

    /*}else{

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
      <div>
        {page}
        <br/>
      </div>
    )
  }
}