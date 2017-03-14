import * as React from 'react'

import { Link, browserHistory } from 'react-router'

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

//import Dialog from "rc-dialog";

//type Props = {
  //title: string,
  //visited: boolean,
//  setDeliveryAddrss: () => void,
//};


export default class Menu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 2, title: "suzy sunshine", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}, {item_id: 1, title: "freedom", description: "let freedom ring!"}],
        item: "",
        item_quantity: "",
        item_quantity_multiplier: ""

    };

    //this.loadCart = this.loadCart.bind(this);
    this.showItem = this.showItem.bind(this);
    this.selectedCartItem = this.selectedCartItem.bind(this);
    this.selectedCartItemQuantityMultiplier = this.selectedCartItemQuantityMultiplier.bind(this);
    
  }

  componentDidMount(){

    //get active items from the database

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  /*loadCart(){

    this.setState({page: "cart"});
    //remove/change quantity

  }

  loadItems(){

    this.setState({page: "items"});
    //remove/change quantity

  }*/

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

  mouseOver(e:any){

      e.target.src = "/images/menu/DWK_greenrollover3.jpg";

  }

  mouseOut(e: any){

      e.target.src = "/images/menu/DWK_greenrollover1.jpg";

  }

  showItem(item_id: any){

      //alert(item_id);

      $('#myModal').modal('show');

  }

  selectedCartItem(e: any){

    //alert(e.target.value);

    if(e.target.value.indexOf("mini") > -1){

      //alert("true");

      this.setState({mini: true});

    }else{

      this.setState({mini: false});

    }

    this.setState({item: e.target.id});
    this.setState({item_quantity: e.target.value});
    
  }

  selectedCartItemQuantityMultiplier(e: any){

    //alert(e.target.value);

    this.setState({item_quantity_multiplier: e.target.value});

  }

  render(): JSX.Element{

    var that = this;
    var page = "";

    var value_12 = "";     
    var value_24 = "";
    var mini_12 = "";

    let { addCartItem } = this.props;

    /*this.state.items.map(function(item){


        value_12 = item.item_id + "_" + 12;     
        value_24 = item.item_id + "_" + 24;
        mini_12 = value_12 + "_mini";

    });*/

    //if(this.state.page == "items"){
    //<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>

          return(<div>
                  <br/>
                  <br/>
                  <div className="row">
                        
                        {this.state.menu_items.map(function(item: any){
                            return(<div className="col-md-4">
                                      <div className="thumbnail" style={{paddingRight: 50, paddingLeft: 10}}>
                                          <img id="1" onMouseOver={(e) => this.mouseOver(e)} onMouseOut={(e) => this.mouseOut(e)} onClick={() => this.showItem(item.item_id)} src="/images/menu/DWK_greenrollover1.jpg" data-target="myModal" alt="..."/>
                                          <div className="caption">
                                            <h3>Strawberry Scone1</h3>
                                            <p>
                                                <select onChange={this.selectedCartItem} id={item.item_id}>
                                                  <option value=""></option>
                                                  <option value="12">Dozen</option>
                                                  <option value="24_mini">2 Dozen Mini Scones</option>
                                                </select>
                                                <br/>
                                                <select onChange={this.selectedCartItemQuantityMultiplier} id={item.item_id}>
                                                  <option value=""></option>
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                                </select>
                                            </p>
                                            <button onClick={addCartItem.bind(this, this.state.item, this.state.item_quantity, this.state.item_quantity_multiplier, this.state.mini)}>Add</button>
                                          </div>
                                      </div>
                            </div>)
                        }.bind(this))}
                    
                  </div>
                  <br/>
                  
                  <br/>
                  <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" max-height=" 700px">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                          <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div className="modal-body">

                          ...
                          <img width="300" height="300" src="/images/strawberry_scones.png"></img>
                        </div>
                        <div className="modal-footer">
                          <select onChange={(value) => this.props.addItemToCart(value)}>
                            <option value=""></option>
                            <option value={value_12}>12</option>
                            <option value={mini_12}>Mini 12</option>
                            <option value={value_24}>24</option>
                          </select>
                          X
                          
                            <select onChange={this.props.selectQuantity}>
                            <option value="">1</option>
                            <option value={value_12}>2</option>
                          </select>
                          <button type="button" onClick={() => this.props.addCartItem(1, 1, 1)} className="btn btn-default" data-dismiss="modal">Add</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)

    
  }
}