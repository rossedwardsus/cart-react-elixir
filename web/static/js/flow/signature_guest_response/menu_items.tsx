import * as React from 'react'

import { Link, browserHistory } from 'react-router'
import {connect} from 'react-redux';

import {getMenuItems, getOrderDetails, getNormalizedMenuItems, getSconelyMessage} from '../selectors/signature_guest_response.ts';

import {getMenuItemsAction} from '../actions/menu.ts';
import {loadSignatureGuestResponseOrderDetails, saveGuestChoice} from '../actions/signature_guest_response.ts';


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
        selected_item_ingredients: "",
        sconely_message: ""

    };

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  componentDidMount(){

    console.log("mounted");

    this.props.loadSignatureGuestResponseOrderDetails();
    this.props.getMenuItems();


    //let sconely_message: any = "";
    
   

  }

  componentWillReceiveProps = () => {

    console.log("cwrp" + JSON.stringify((this.props.order_details.invited_guest_message == "")));

    if (this.props.order_details.invited_guest_message == ""){

        //this.setState({sconely_message: "cwrpPlease select your preferred Scone"});

    }

  }

  showItem(item_id: any){

      //alert(item_id);

      this.setState({selected_item_id: item_id});

      //var elementPos = array.map(function(x) {return x.id; }).indexOf(idYourAreLookingFor);
      //var objectFound = array[elementPos];

      //var filteredArray = array.filter(function (element) { 
      //    return element.id === 0;
      //});

      //[{id:1},{id:2},{id:3},{id:4}].findIndex(obj => obj.id == 3)

      //{1234: {title: ""}, 5678: {title: ""}}

      /*this.props.normalized_menu_items.map(function(item: any){

          if(item.item_id === item_id){*/

              this.setState({selected_item_title: this.props.menu_items[item_id].title});
              //this.setState({selected_item_story: item.story});
              //this.setState({selected_item_ingredients: item.ingredients});

          /*}


      }.bind(this));*/



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

  noThanks = () => {

    this.context.router.push("/order/lacisconelylaunchaugust032017indtla/guest/name");

  }

  render(): JSX.Element {

    const {order_details, menu_items} = this.props;

    console.log("order details " + JSON.stringify(order_details.invited_guest_message));
    console.log("menu items " + JSON.stringify(menu_items));

    //let message = order_details.invited_guest_message.replace(/(?:\r\n|\r|\n)/g, <br />)

    //order_details.invited_guest_message.split(“\r”);

    //let message = order_details.invited_guest_message.string.replace( /\n/g, " " ).split(" ");

    let message = order_details.invited_guest_message.split('\r').map((item: any, key: any) => {
      return <span key={key}>{item}<br/></span>
    })
    
    /*let message = order_details.invited_guest_message.split(“\r”).map((item: any) => {
    return (<div>
      {item}
      <br/>
      </div>
    )
    })*/
    
    
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
                    <div className="hidden-xs col-md-3" style={{wordWrap: "break-word", overflowWrap: "break-word", textOverflow: "ellipsis"}}>
                      <br/>
                      <br/>
                      {this.props.sconely_message}
                      <br/>
                      <img src="/images/menu/LACI_1.5.jpg"/>
                      <br/>
                      Sconely Chat & Chew at LACI
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <label className="text-justify" style={{wordWrap: "break-word", overflowWrap: "break-word", textOverflow: "ellipsis", whiteSpace: "normal", fontWeight: "normal"}}>{message}</label>
                      <br/>
                      <br/>
                      <br/>
                    </div>
                    <div className="col-xs-12 col-md-9">
                      <br/>
                      <div className="hidden-lg col-xs-11">
                        <br/>
                        <br/>
                        <img height="75" width="75" src="/images/menu/DWK_green.jpg"/>
                        <br/>
                        Sconely Launch at LACI
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        {order_details.invited_guest_message}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                      </div>
                      <br/>
                      <br/>
                       {this.props.menu_items.map(function(item: any, index: any){

                          //console.log(JSON.stringify(item));
                      

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
                                    <b>{item.title}11111111111111111111111111111111111111111111111</b> /
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
                      <button onClick={() => this.noThanks()}>No Scone for me, thanks!</button>
                    </div>
            </div>
    )
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapstatetoprops menuItems" + JSON.stringify(state.menuItems));
  return {
    //active: ownProps.filter === state.visibilityFilter

    //if(state.default.order.cart_items != undefined){
        sconely_message: getSconelyMessage(state),
        normalized_menu_items: getNormalizedMenuItems(state),
        //flattened_menu_items: getMenuItems(state),
        order_details: getOrderDetails(state),
        //order_details: state.SignatureGuestResponse,
        menu_items: getMenuItems(state),
        //cart: state.cart

        
    //}
  }
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  //console.log(JSON.stringify(ownProps.params.event_name));
  let event_name = ownProps.params.event_name;

  return {
    //viewmenuthunk

    getMenuItems: () => {
      dispatch(getMenuItemsAction());
    },

    loadSignatureGuestResponseOrderDetails: () => {
      //console.log("e.target.value");
      dispatch(loadSignatureGuestResponseOrderDetails());
    },

    
    saveGuestChoice: (item_id: any) => {
      dispatch(saveGuestChoice(item_id, event_name));
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