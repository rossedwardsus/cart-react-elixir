import * as React from 'react'

import { Link, browserHistory } from 'react-router'
import {connect} from 'react-redux';

import {getMenuItems} from '../actions/menu.ts';

class GuestMenu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        
    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  render(): JSX.Element {
    return (
      <ul>
        menu items
        <br/>
         {this.props.menu_items.menu_items.map(function(item: any, index: any){

            console.log(item);
        

            //let image_id = this.state.smorgasbourgh_menu_items.find((item1: any) => item1.item_id === item.item_id).image_id;

            //this.setState({image_id: image_id});

            //console.log("image id" + image_id);

            //console.log("image id " + this.state["image_src_" + item.item_id]);

            //let image_src = "/images/menu/" + this.state["image_src_" + item.item_id] + ".jpg";

            return(
                    <div className="col-xs-12 col-md-4" style={{marginTop: 0, marginBottom: 0}}>
                          <img id="1" onClick={() => this.showItem(item.item_id)} onMouseEnter={(index: any) => this.onMouseEnter(item.item_id)} onMouseLeave={() => this.onMouseLeave(item.item_id)} src={"/images/menu/" + item.image_id + ".jpg"} data-target="myModal" alt="..." height="270" width="270"/>
                      <br/>    
                      <br/>
                      <b>{item.title}</b> / {item.description}
                      <br/>
                      <br/>
                      <br/>
                    </div>
          );
        }.bind(this))}
        
      </ul>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops order" + JSON.stringify(state));
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        
        menu_items: state.MenuItems,
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
    //addCartItem: (item_id: any, item_type: any, quantity: any) => {
    //  dispatch(addCartItem(item_id, item_type, quantity));
    //},
    //cartValidated: () => {
    //  dispatch(cartValidated());
    //},
    //createOrder: (order_type: any, name: any) => {
    //  dispatch(createOrder(order_type, name));
    //}
  }
}

const GuestMenu1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(GuestMenu);

export default GuestMenu1;