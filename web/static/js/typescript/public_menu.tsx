'use scrict'

import React from 'react';

import { Link, browserHistory } from 'react-router';
import { Record } from 'immutable';

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

//import Dialog from "rc-dialog";

type Props = {
  //title: string,
  //visited: boolean,
  setDeliveryAddrss: () => void,
};

interface IMyComponentState {
    someValue: string
}


export default class Menu extends React.Component<any, any> {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        page: "items",
        items: [{item_id: 1}, {item_id: 1}, {item_id: 1}],
    };

    this.selectItem = this.selectItem.bind(this);
    
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

  selectItem(e){

    $('#myModal').modal('show'); 

  }

  render(): React.Element {

              return(
                <div>
                <div className="container-fluid">
                      <div className="row">
                  
                  <div className="hidden-xs col-md-2">
                          <br/>
                          <br/>
                          Home
                          <br/>
                          <Link to="/user/delivery_address">Menu</Link>
                          <br/>
                          About Us
                          <br/>
                        </div>
                        <div className="col-xs-12 col-md-8">

                                
                        
                  <br/>
                  <div className="container-fluid">
                        <div className="row">
                          {this.state.items.map(function(item){

                            return(
                                    <div className="col-xs-12 col-md-2">
                        
                                <div className="thumbnail" >
                                  <img id="1" onMouseOver={(e) => this.mouseOver(e)} onMouseOut={(e) => this.mouseOut(e)} onClick={() => this.selectItem(1)} src="/images/menu/DWK_greenrollover1.jpg" data-target="myModal" alt="..."/>
                                  <div className="caption">
                                    <h3>Strawberry Scone1</h3>
                                    <p>Cost</p>
                                  </div>
                                </div>    
                                </div>      
                            )

                          }.bind(this))}
                          </div>
                          </div>
                        </div>
                      </div>
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
                          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
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