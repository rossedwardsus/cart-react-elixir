import * as React from 'react'

import { Link, browserHistory } from 'react-router'
import {connect} from 'react-redux';

import {loadSignatureGuestResponseOrderDetails, saveGuestChoice} from '../actions/signature_guest_response.ts';
import {getOrderDetails, getMenuItems} from '../selectors/signature_guest_response.ts';

//import Background from 'http://localhost:4000/images/menu/DWK_green.jpg';


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

  componentDidMount = () => {

    this.props.loadSignatureGuestResponseOrderDetails();

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

  saveGuestChoice = () => {

    $('#myModal').modal('hide');   
    this.props.saveGuestChoice(this.state.selected_item_id);

  }

  render(): JSX.Element {

    const {order_details} = this.props;
    
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
                      <img height="75" width="75" src="/images/menu/DWK_green.jpg"/>
                      <br/>
                      Select the Scone you would like to have at the Sconely Launch Party at LACI
                      <br/>
                      {order_details.invited_guest_message}
                      <br/>
                      <br/>
                      <br/>
                    </div>
                    <div className="col-xs-12 col-md-9">
                      <br/>
                      <div className="hidden-lg col-md-3">
                        <br/>
                        <br/>
                        <img height="75" width="75" src="/images/menu/DWK_green.jpg"/>
                        <br/>
                        Select the Scone you would like to have at the Sconely Launch Party at LACI
                        <br/>
                        {order_details.invited_guest_message}
                        <br/>
                        <br/>
                        <br/>
                      </div>
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
                                    <b>{item.title}</b> /
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
                                    </div>
                                    <div className="modal-footer">
                                      <form className="form-horizontal">
                                        <div className="form-group">
                                          <div className="col-md-3">
                                            <button className="btn btn-default"  onClick={() => this.saveGuestChoice()} type="button" style={{borderRadius: 0, WebkitAppearance: "none", height: 35, width: 120}}>Select Scone</button>
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
  console.log("mapstatetoprops order" + JSON.stringify(state.SignatureGuestResponse));
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        menu_items1: getMenuItems(state),
        order_details1: getOrderDetails(state),
        order_details: state.SignatureGuestResponse,
        menu_items: state.MenuItems,
        //cart: state.cart

    //}
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    //viewmenuthunk

    loadSignatureGuestResponseOrderDetails: () => {
    //  console.log("e.target.value");
      dispatch(loadSignatureGuestResponseOrderDetails());
    },

    //getMenuItems: () => {
      //dispatch(getMenuItems());
    //},
    saveGuestChoice: (item_id: any) => {
      dispatch(saveGuestChoice(item_id));
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