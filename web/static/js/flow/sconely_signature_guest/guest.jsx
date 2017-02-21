// @flow

import React from 'react'

import { Link, browserHistory } from 'react-router';
import MenuItems from './menu_items';

export default class SconelySignatureGuest extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        page: "",

        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}],
        
    };

    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.showItem = this.showItem.bind(this);

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  guestChoice(order_type) {
    //alert(order_type);
    this.context.router.push('/order/12345');
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  mouseOver(e){

      e.target.src = "/images/menu/DWK_greenrollover3.jpg";

  }

  mouseOut(e){

      e.target.src = "/images/menu/DWK_greenrollover1.jpg";

  }

  showItem(item_id){

      alert(item_id);

      $('#myModal').modal('show');

  }

  render(): React.Element {
    return (
      <div>
        <div className="container-fluid">
            <div className="row">               
                  {this.state.menu_items.map(function(item){
                    return(<div className="col-xs-12 col-md-3">
                              <div className="thumbnail" >
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
                                 <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                                    Launch demo modal
                                 </button>
                              </div>
                          </div>)
                  }.bind(this))}
            </div>
        </div>
      </div>
    )
  }
}