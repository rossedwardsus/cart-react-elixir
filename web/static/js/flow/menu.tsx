'use strict';

import * as React from 'react';
import { Link, browserHistory } from 'react-router';
import {connect} from 'react-redux';

import {getMenuItems} from './actions/menu.ts';
import {cartValidated} from './actions/order_validations.ts';
import {addCartItem} from './actions/cart.ts';
import SidebarCart from './sidebar_cart.tsx';
import {createOrder} from './actions/order.ts';
import MobileCheckoutButton from './mobile_checkout_button.tsx';



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
        menu_items: [{item_id: 1, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 2, title: "Ruby Q", description: "Cherry Chocolate Chunk", story: "Ruby Q is a mouthwatering scone with cherries and chocolate throughout. It's a Sconely favorite!", ingredients: "Unbleached white all-purpose flour*, Cherries*, Semisweet chocolate*, Butter*, Eggs*, Heavy Cream*, Raw cane sugar*, Baking powder, Pure vanilla extract*, Madagascar vanilla bean*, Sea salt. *Organic", image_id: "MenuRubyQ4.5", hover_image_id: "MenuRubyQ4.5roll"}, {item_id: 3, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 4, title: "Savvy Go Go", description: "Tomato Goat Cheese Sun-dried", image_id: "MenuSavvy4.5", hover_image_id: "MenuSavvy4.5roll"}, {item_id: 5, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 6, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}, {item_id: 7, title: "freedom", description: "let freedom ring!7", image_id: "DWK_greenrollover1"},  {item_id: 8, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 9, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"},  {item_id: 10, title: "freedom", description: "let freedom ring!", image_id: "DWK_greenrollover1"}],
        selected_item_id: "",
        selected_item_type: "",
        selected_item_quantity: "",
        selected_item_title: "",
        selected_item_story: "",
        selected_item_ingredients: "",
        add_cart_item_button_classname: "btn btn-default disabled",
        total_items: 0

    };

    //this.loadCart = this.loadCart.bind(this);
    this.showItem = this.showItem.bind(this);
    //this.selectedItemDozens = this.selectedItemDozens.bind(this);
    this.selectedItemQuantity = this.selectedItemQuantity.bind(this);
    this.addCartItem = this.addCartItem.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
   
  }

  componentDidMount(){

    this.props.getMenuItems();

    console.log(JSON.stringify(this.props.params));

    //start yours order here
    //this.props.createOrder("sconely_yours");


    //get active items from the database
    //alert(this.props.params);

    //alert(JSON.stringify(this.props.cart_items));
    //this.props.dispatch();

    //this.setState({image_src: "/images/menu/MenuSavvy4in.jpg"});

    this.state.menu_items.map(function(value: any, index: any){

          //console.log(value.item_id);
          let image_src = "image_src_" + value.item_id;
          this.setState({[image_src]: value.image_id});

    }.bind(this));


  }

  componentWillReceiveProps(nextProp:any){

      console.log("menu props");

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  showItem(item_id: any){

      //alert(item_id);

      this.setState({selected_item_id: item_id});

      this.state.menu_items.map(function(item: any){

          if(item.item_id === item_id){

              this.setState({selected_item_title: item.title});
              this.setState({selected_item_story: item.story});
              this.setState({selected_item_ingredients: item.ingredients});

          }


      }.bind(this));

      $('#myModal').modal('show');

  }

  selectedItemType = (e: any) => {

      //alert(e.target.value);

      this.setState({selected_item_type: e.target.value});
      this.setState({add_cart_item_button_classname: "btn btn-default"});
      
  }


  selectedItemQuantity(e: any){

    console.log("selected_item quantity " + e.target.value);

    this.setState({selected_item_quantity: e.target.value});
    //set add cart button == active
    //this.set

  }

  addCartItem(){

    console.log("add cart item");

    //if they haven't selected quantity and dozens dont submit and show them an error

    //$('#myModal').modal('toggle');

    let item_count = 0;

    this.props.cart.cart_items.map(function(item: any){

            //console.log("item " + JSON.stringify(item));
            //console.log("order type" + JSON.stringify(that.props.order));

            //if(that.props.order.order_type == "sconely_yours"){

              //if total_cost is more then 2 then cost = 5 else 6
              //dont have to loop.  just times cart length

              //total_cost = total_cost + (5 * item.quantity);
              item_count = item_count + item.quantity;

            //}else{

    });

    console.log("item count" + item_count);

    if(item_count < 150){

      this.props.addCartItem(this.state.selected_item_id, this.state.selected_item_type, this.state.selected_item_quantity);

    }

    this.props.cartValidated();

    //cart validated in redux

  }

  goToDateTimeContact(){

      this.context.router.push("/order/12345/signature");
      
  } 

  onMouseEnter(item_id: any){

      //console.log("mouse enter" + item_id);

      //console.log(this.state.menu_items.find((item: any) => item.item_id === item_id).hover_image_id);

      //let image_id = this.state.menu_items.find((item: any) => item.item_id === item_id).hover_image_id;

      //this.setState({["image_src_" + item_id]: image_id});

      let menu_items_updated = this.state.menu_items.map((item: any) => 

          {
              if(item.item_id == item_id){

              //let image_name = item.image_id;
                item.image_id = item.image_id + "roll";

              }

              return item;

          })

      console.log(JSON.stringify(menu_items_updated));

      this.setState({menu_items: menu_items_updated});


  }

  onMouseLeave(item_id: any){

      //console.log("mouse leave" + item_id);

      //console.log(this.state.menu_items.find((item: any) => item.item_id === item_id).hover_image_id);

      let image_id = this.state.menu_items.find((item: any) => item.item_id === item_id).image_id;

      this.setState({["image_src_" + item_id]: image_id});

  }

  render(): JSX.Element{

          //var that = this;
          //var page = "";


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
                                <a className="navbar-brand" href="#"><img src="/images/logo/Sconelylogo.5.jpg"/></a>
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
                    <div className="row">
                          <div className="hidden-xs col-md-3">
                            <br/>
                            <br/>
                            <Link to="/public/menu">Menu</Link>
                            <br/>
                            <Link to="/public/menu">Sconely Social</Link>
                            <br/>
                            <br/>
                            <SidebarCart order={this.props.order} cart={this.props.cart}/>
                            <br/>
                          </div>
                          <div className="col-xs-1 col-md-9">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            Total Items {this.props.cart.cart_items.length}
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            {this.state.menu_items.map(function(item: any){

                                //console.log("hello " + this.state["image_src_" + item.item_id]);

                                let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

                                return(
                                        <div className="col-md-4 col-xs-1" style={{marginTop: 0, marginBottom: 0}}>
                                              <img id="1" onClick={() => this.showItem(item.item_id)} onMouseEnter={() => this.onMouseEnter(item.item_id)} onMouseLeave={() => this.onMouseLeave(item.item_id)} src={"/images/menu/" + item.image_id + ".jpg"}  data-target="myModal" alt="..." height="270" width="270"/>
                                              
                                          <div style={{fontSize: 13}}><b>{item.title}</b> / {item.description}</div>
                                          <br/>
                                          <br/>
                                          <br/>
                                        </div>
                                );
                            }.bind(this))}
                              
                            <br/>
                            <MobileCheckoutButton cartTotalItems={this.props.cart.cart_items.length}/>
                          </div>
                    </div>
                  <br/>
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
                            $60/Mini - $54
                        </div>
                        <div className="modal-footer">
                          <form className="form-horizontal">
                            <div className="form-group">
                              <div className="col-md-3" style={{height: 35, paddingTop: 10}}>
                                <input type="radio" name="optradio" value="regular" onChange={(value: any) => this.selectedItemType(value)}/> 1 Dz $60
                              </div>
                              <div className="col-md-3" style={{height: 35, paddingTop: 10}}>
                                <input type="radio" name="optradio" value="mini" onChange={(value: any) => this.selectedItemType(value)}/> 2 Dz Mini $54
                              </div>
                              <div className="col-md-3">
                                <select className="form-control" value={this.state.selected_item_quantity} onChange={(e: any) => this.selectedItemQuantity(e)} style={{height: 35, width: 120}}>
                                  <option value="">Select Quantity</option> 
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </select>
                              </div>
                              <div className="col-md-3">
                                <button className={this.state.add_cart_item_button_classname}  type="button" onClick={() => this.addCartItem()} style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Add To Cart</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)

    
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops menu" + JSON.stringify(state));
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        menu_items: state.menu_items,    
        order: state.Order,
        cart: state.cart

    //}
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    getMenuItems: () => {
      dispatch(getMenuItems());
    },
    addCartItem: (item_id: any, item_type: any, quantity: any) => {
      dispatch(addCartItem(item_id, item_type, quantity));
    },
    cartValidated: () => {
      dispatch(cartValidated());
    },
    createOrder: (order_type: any) => {
      dispatch(createOrder(order_type));
    }
  }
}

const PublicMenu1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicMenu);

export default PublicMenu1;

//background: url(../images/down-arrow.png) no-repeat right 12px