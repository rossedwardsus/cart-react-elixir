import * as React from 'react'

import { Link, browserHistory } from 'react-router'
import {connect} from 'react-redux';

import {getMenuItems} from '../actions/menu.ts';
import {addGuestCartItem} from '../actions/sconely_signature_guest.ts';

class GuestMenu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        selected_item_id: 0,
        selected_item_title: "",
        selected_item_story: "",
        selected_item_ingredients: ""

    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
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

  addGuestCartItem(){

    $('#myModal').modal('hide');
    this.props.addGuestCartItem("item_id");

  }

  render(): JSX.Element {
    return (
            <div>
              <nav className="navbar navbar-default" style={{border: 1}}>
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                             <span className="sr-only">Toggle navigation</span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                             <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" style={{textAlign: "center"}} href="#"><img src="http://sconely-test.herokuapp.com/images/logo/LogoJune5d.jpg"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="navigationbar">
                          <ul id="navbar" className="nav navbar-nav navbar-right">
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Signup</Link></li>
                            <li><Link to="/register">About Us</Link></li>
                            <li><Link to="/register">Faq</Link></li>
                          </ul>
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
                    </div>
                    <div className="col-xs-12 col-md-9">
                      <br/>
                    
                      <img height="100" width="100" src="/images/menu/DWK_green.jpg"/>
                      <br/>
                      Ross has invited you to choose a scone for an event on july 1st.  Select your prefered scone for "my event".
                      <br/>
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
                                        <img id="1" onClick={() => this.showItem(item.item_id)} src={"/images/menu/" + item.image_id + ".jpg"} data-target="myModal" alt="..." height="270" width="270"/>
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
                                        $60/Mini - $54
                                    </div>
                                    <div className="modal-footer">
                                      <form className="form-horizontal">
                                        <div className="form-group">
                                          <div className="col-md-3">
                                            <button className={this.state.add_cart_item_button_classname}  onClick={() => this.addGuestCartItem()} type="button" style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Select Scone</button>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                          </div>
                      </div>
                    </div>
            </div>
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
    addGuestCartItem: (item_id: any) => {
      dispatch(addGuestCartItem(item_id));
    },
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