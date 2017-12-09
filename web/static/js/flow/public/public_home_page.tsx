import "babel-polyfill";
import * as React from 'react'
import { Link } from 'react-router';
//import Swipeable from 'react-swipeable';
//import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';

import {createOrder} from '../actions/order.ts';

import PublicTopNavbar from './public_top_navbar.tsx';
import PublicBottomNavbar from './public_bottom_navbar.tsx';
import PublicPrivacyTermsNavbar from './public_privacy_terms_navbar.tsx';

var Modal = require('react-bootstrap-modal')

//import {List, Map} from 'immutable';

//import * as Cookie from 'js-cookie';
//const cookie: any = require('react-cookie');



function getCookie(name: string): string {
        const nameLenPlus = (name.length + 1);
        return document.cookie
          .split(';')
          .map(c => c.trim())
          .filter(cookie => {
            return cookie.substring(0, nameLenPlus) === `${name}=`;
          })
          .map(cookie => {
            return decodeURIComponent(cookie.substring(nameLenPlus));
          })[0] || null;
}

//@connect(null, mapDispatchToProps)
export class PublicHomePage extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        gallery_images: ["/images/gallery/SconelyGallery1.jpg", "/images/gallery/SconelyGallery2.jpg", "/images/gallery/SconelyGallery3.jpg", "/images/gallery/SconelyGallery4.jpg"],
        gallery_image: "",
        gallery_image_index: 0,
        guest_code: "",
        interval: "",
        //open: false
        fontSizeLarge: 14,
        fontSizeSmall: 13
        
    };

    //this.createSignatureOrder = this.createSignatureOrder.bind(this);
    //this.guestCode = this.guestCode.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
    //this.onSwipedLeft = this.onSwipedLeft.bind(this);
    //this.onSwipedRight = this.onSwipedRight.bind(this);
    //this.guestCodeChange = this.guestCodeChange.bind(this);
    this.changeImage = this.changeImage.bind(this);

  }

  componentDidMount(){

    window.scrollTo(0, 0);


    if(window.innerWidth == 1280){

        this.setState({fontSizeLarge: 14});
        this.setState({fontSizeSmall: 13});        

    }else if(window.innerWidth > 1280){

        this.setState({fontSizeLarge: 18});
        this.setState({fontSizeSmall: 17});        

    }else if(window.innerWidth < 1280){

        this.setState({fontSizeLarge: 14});
        this.setState({fontSizeSmall: 13});       

    }

 
    this.setState({gallery_image: this.state.gallery_images[this.state.gallery_image_index]});

    let interval = setInterval(this.changeImage, 5000);
    this.setState({interval: interval});


 
    //function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "sconely_session_id=12345;" + expires + ";path=/";
    //}

    //alert(document.cookie);

    

 
 
  }

  componentWillUnmount() {
     // use intervalId from the state to clear the interval
     clearInterval(this.state.interval);
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  showDeliveryLocations(){

    $('#myModal').modal('show').css("background", "");

    //e.preventDefault();

  }

  closeDeliveryLocations(){

    $('#myModal').modal('hide');

    //e.preventDefault();

  }

  guestCode() {

    //e.preventDefault();

    //alert(order_type);

    //if(order_type == "sconely_yours"){

          //if user is logged in then 
        //guest code is right then
        //this.context.router.push('/order/' + this.state.guest_code + '/guest/');

        this.context.router.push('/order/' + this.state.guest_code + '/guest/event');

        //store.dispatch(push('/order/' + this.state.guest_code + '/guest/'));

        //this.props.dispatch(routeActions.push('/foo'));

        

    //}

  }

  guestCodeChange(e: any){

      this.setState({guest_code: e.target.value});

  }

  onSwipedLeft(){

    //alert("left");
    //this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"})
    this.changeImage();

  }

  onSwipedRight(){

    //alert("right");
    //this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"})
    this.changeImage();

  }

  changeImage(){

    //console.log("changeimage");

    if(this.state.gallery_image_index == 3){

        
        //let gallery_image_index_temp = this.state.gallery_image_index; 
        this.setState({gallery_image: this.state.gallery_images[this.state.gallery_image_index]});
        this.setState({gallery_image_index: 0});

    }else{

        //console.log("changeimage else");

        //let gallery_image_index_temp = this.state.gallery_image_index; 
        this.setState({gallery_image: this.state.gallery_images[this.state.gallery_image_index]});
        this.setState({gallery_image_index: this.state.gallery_image_index + 1});

    }

    

    //if(this.state.gallery_image == "/images/gallery/sconely_group_HPb.jpg"){

    //    this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"});

    //}else{

    //    this.setState({image: "/images/gallery/sconely_group_HPb.jpg"});

    //}

  }


  createOrder(order_type: any) {

    console.log(order_type);

    this.props.createOrder(order_type, "");

    //if user is logged in then 
    //this.context.router.push('/order/menu');


    /*if(order_type == "sconely_yours"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);

        //orders.push({order_id: 54321, user_type: "guest", order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});
       
        //orders.push({order_id: 54321, user_type: "rgistered, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});

        this.props.createOrder("sconely_yours", "");

        //if user is logged in then 
        this.context.router.push('/order/menu');

        //this.context.router.push('/public/menu');


    }else if(order_type == "sconely_social"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        //orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        //localStorage.setState("order", Map({name: "name", contact: "contact", cart: List([]), delivery_address: {street: ""}, payment: ""}));

        this.props.createOrder("sconely_social", "");

        this.context.router.push('/order/menu');
         
    }else if(order_type == "sconely_signature"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        //orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        this.context.router.push('/order/signature');
        
         
    }*/


    /*const client = GQLClient('http://localhost:3000', {
      // anything passed here is merged with 
      // the options passed to fetch() 
      credentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });*/

    /*client.mutate(`
      mutation ($id: RecordID!, $name: String!) {
        updateUser(input: {id: $id, name: $name}) {
          user {
            id
            name
          }
        }
      }
    `, { id: 1234, name: 'Danny' }).then((result) => {
      console.log(result.data.user);
      // => { id: 1234, name: 'Danny' } 
    });*/



    /*var query = `
      query q (id: String!) {
        user(id: $id) {
          id,
          email,
          name
        }
      }
    `
    var queryVars = {
      id: 'abcdef'
    }
    var opts = {
      // custom fetch options 
    }*/
     
    /**
     * @param  {Query} query graphql query
     * @param  {Object} [vars]  graphql query args, optional
     * @param  {Object} [opts]  fetch options, optional
     */
    /*fetch(query, queryVars, opts).then(function (results) {
      if (results.errors) {
        //... 
        return
      }
      var user = result.data.user
      //... 
    })*/


  

    //alert(order_type);
    
    //this.context.router.push('/order/12345/event_details');
    
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }

  //<Swipeable onSwipingLeft={this.onSwipedLeft} onSwipingRight={this.onSwipedRight}><img width="300" height="300" src={this.state.image}/></Swipeable>
                                  


  render(){

    let menu = null;


    
    /*if(this.props.user.user_id != undefined){
        
        menu = <div id="navbar" className="navbar-collapse collapse navbar-right">
                      <ul className="nav navbar-header">
                        <li className="inactive">Profile<span className="sr-only">(current)</span></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive">Start Order</li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><span className="sr-only">(current)</span></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li className="inactive"><span className="sr-only">Home</span></li>
                      </ul>
                    </div>
    }else{

        menu = <div>
                      <ul id="navbar" className="nav navbar-nav navbar-left">
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Signup</Link></li>
                      <ul className="nav navbar-nav">
                        <li><span className="sr-only">(current)</span></li>
                      </ul>
                    </ul>
                    <div id="navbar" className="nav navbar-form navbar-right">
                              <div className="hidden-xs form-group">
                                <input type="text" className="hidden-xs form-control" placeholder="Guest Code" value={this.state.guest_code} onChange={(e: any) => this.guestCodeChange(e)}/>
                              </div>
                              <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>

    }*/

    return (
              <div>
                   <PublicTopNavbar/>
                    <div className="row">
                        <div className="hidden-xs col-lg-3" style={{paddingLeft: "60px", paddingRight: "0px"}}>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <div style={{fontSize: this.state.fontSizeLarge, fontFamily: "Helvetica-Bold"}}>
                            EPIC SCONES FOR EPIC HOLIDAYS
                          </div>
                          <br/>
                          <div style={{fontSize: this.state.fontSizeSmall}}>
                            Many locally sourced organic ingredients
                            <br/>
                            Free of refined sugars and soy
                            <br/>
                            <br/>
                            Perfect for breakfast, lunch or dinner!
                          </div>
                          <br/>
                        <br/>   
                        <br/>
                        </div>
                        <div className="col-md-6" style={{paddingLeft: "10px"}}>
                                
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <img src={this.state.gallery_image} height="100%" width="100%"/>
                                  <br/>
                                  <br/>
                                  <div className="visible-xs">
                                    <div style={{fontSize: this.state.fontSizeLarge, fontFamily: "Helvetica-Bold"}}>
                                    EPIC SCONES FOR EPIC HOLIDAYS
                                    </div>
                                    <br/>
                                    <br/>
                                    <div style={{fontSize: this.state.fontSizeSmall}}>
                                        Many locally sourced organic ingredients
                                        <br/>
                                        Free of refined sugars and soy
                                        <br/>
                                        <br/>
                                        Perfect for breakfast, lunch or dinner!
                                    </div>
                                    <br/>
                                    <br/>
                                    <div style={{fontSize: this.state.fontSizeLarge, fontFamily: "Helvetica-Bold"}}>
                                        SCONELY SOCIAL
                                    </div>
                                    <div style={{fontSize: this.state.fontSizeSmall}}>
                                      Dozens of regular size or mini scones
                                      <br/>
                                      Freshly baked, delivered to your event
                                      <br/>
                                    </div>
                                    <button onClick={() => this.props.createOrder("social")} className="btn btn-default" style={{borderRadius: 0, WebkitAppearance: "none", height: 35}}>VIEW MENU + ORDER</button>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div style={{fontSize: this.state.fontSizeLarge, fontFamily: "Helvetica-Bold"}}>SCONELY POOL</div>
                                    <div style={{fontSize: this.state.fontSizeSmall}}>
                                      Up to eleven scones each, paid separately
                                      <br/>
                                      Freshly baked, delivered to one location
                                      <br/>
                                      Email us to start an order
                                      <br/>
                                      <br/>
                                      <b>With every dozen scones you purchase we donate 1% to Community Healing Gardens.</b>
                                    </div>
                                  </div>
                        </div>
                        <div className="hidden-xs col-md-3" style={{paddingLeft: 20}}>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <button onClick={() => this.props.createOrder("yours")} className="btn btn-default" style={{borderRadius: 0, WebkitAppearance: "none", height: 35}}>VIEW YOURS MENU + ORDER</button>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <div style={{fontSize: this.state.fontSizeLarge, fontFamily: "Helvetica-Bold"}}>SCONELY SOCIAL</div>
                          <div style={{fontSize: this.state.fontSizeSmall}}>
                            Dozens of regular sized or mini scones
                            <br/>
                            Freshly baked, delivered to your event
                            <br/>
                          </div>
                          <br/>
                          <button onClick={() => this.props.createOrder("social")} className="btn btn-default" style={{borderRadius: 0, WebkitAppearance: "none", height: 35}}>VIEW MENU + ORDER</button>
                          <br/>
                          <br/>
                          <br/>
                          <div style={{fontSize: this.state.fontSizeLarge, fontFamily: "Helvetica-Bold"}}>SCONELY POOL</div>
                          <div style={{fontSize: this.state.fontSizeSmall}}>
                            Up to eleven scones each, paid separately
                            <br/>
                            Freshly baked, delivered to one location
                            <br/>
                            Email us to start an order
                            <br/>
                            <br/>
                            <b>With every dozen scones you purchase we donate 1% to Community Healing Gardens.</b>
                          </div>
                          <br/>
                        </div>
                    </div>
                    <PublicBottomNavbar/>
                    <PublicPrivacyTermsNavbar/>
              </div>
    )
  }
}

//<button onClick={() => this.props.createOrder("pool_order")} className="btn btn-default" style={{borderRadius: 0, WebkitAppearance: "none", height: 35}}>VIEW MENU + ORDER</button>

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("homepage" + JSON.stringify(state));
  return {
    //active: ownProps.filter === state.visibilityFilter
    //logged_in: state.login
    user: state.user
  }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    createOrder: (order_type: any, name: any) => {
      //alert("check");
      dispatch(createOrder(order_type, "", ""))
    }
  }
}

const PublicHomePageConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicHomePage)

export default PublicHomePageConnected
