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

import {List, Map} from 'immutable';

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
export class PublicFaq extends React.Component<any, any> {
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
        interval: ""
        
    };

    //this.createSignatureOrder = this.createSignatureOrder.bind(this);
    this.guestCode = this.guestCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSwipedLeft = this.onSwipedLeft.bind(this);
    this.onSwipedRight = this.onSwipedRight.bind(this);
    this.guestCodeChange = this.guestCodeChange.bind(this);
    this.changeImage = this.changeImage.bind(this);

  }

  componentDidMount(){

    //dispatch(checkLoggedIn);

    //this.props.checkLoggedIn();

    //alert("jsx");

    //get active items from the database


    this.setState({gallery_image: this.state.gallery_images[this.state.gallery_image_index]});

    let interval = setInterval(this.changeImage, 5000);
    this.setState({interval: interval});


    //Cookies.set('name', 'value');
    //alert(Cookies.get('name'));

    //function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (1*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "sconely_session_id=12345;" + expires + ";path=/";
    //}

    //alert(document.cookie);

    

    //alert(getCookie("mommy_id"));

    //document.cookie = "session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //document.cookie = "sportssharing_session_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

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

  onSubmit(e: any){

    e.preventDefault();

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
                        <div className="hidden-xs col-md-3">
                          <br/>
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          <br/>   
                          <br/>
                        </div>
                        <div className="col-md-7" style={{paddingLeft: "30px"}}>
                            <br/>
                            <br/>
                            <b>Why Sconely?</b>
                            <br/>
                            <br/>
                            <div style={{fontFamily: 'Helvetica'}}>
                            We love bringing people together around artisanal sweet and savory scones! See our story for more details about why we do what we do.
                            </div>
                            <br/>
                            <br/>
                            <b>What is Sconely?</b>
                            <br/>
                            <br/>
                            Sconely is a personalized website and delivery service specializing in handmade sweet and savory scones. Through a menu that focuses on personal dietary preferences and a unique ordering system, Sconely brings scones into the future.
                            <br/>
                            <br/>
                            <b>What’s on Sconely’s menu?</b>
                            <br/>
                            <br/>
                            Sconely’s menu includes a variety of sweet and savory scones, with vegan and gluten-free options. Most of our scones are available all year, with additional seasonal scones being added frequently. Check out our menu often for new scone flavors!
                            <br/>
                            <br/>
                            <b>What shape and size are your scones?</b>
                            <br/>
                            <br/>
                            Our scones are triangular in shape and come in regular (approximately 5 inches long) and mini size (approximately 3 inches long).
                            <br/>
                            <br/>
                            <b>What makes your scones different?</b>
                            <br/>
                            <br/>
                            Sconely updates traditional scones by creating unique sweet and savory recipes that maximize flavor and are influenced by international cuisine. Sconely addresses special diets, such as vegan and gluten-free and we use super foods, such as kale, purple onion and turmeric.  Our scones are made with locally sourced organic ingredients whenever possible and all of our scones are free of refined sugar, soy and preservatives. We put a lot of love and care into creating unique scones!
                            <br/>
                            <br/>
                            Our scones are made with locally sourced organic ingredients whenever possible and all of our scones are free of refined sugar, soy and preservatives. We put alot of love and care into creating unique scones!
                            <br/>
                            <br/>
                            <b>When can Sconely be eaten?</b>
                            <br/>
                            <br/>
                            Sconely is great 24/7! Think Suzy Sunshine or Bea for breakfast, Savvy Go Go or Ishkabibble for lunch, Ruby Q or Julie Freedom for an afternoon snack, Zilla as an appetizer and Snorker or DWK for dessert!
                            <br/>
                            <br/>
                            <b>How can I order?</b>
                            <br/>
                            <br/>
                            Ordering is easy with the following services. Just click on the links below or on our homepage to view the menu, select your scones, then check out. Sconely sends a confirmation email after an order is placed.
                            <br/>
                            <br/>
                            Sconely Yours: 2-10 scones, delivered to you.
                            <br/>
                            <br/>
                            Sconely Social: 1 dozen - 20 dozen regular sized scones and / or 2 dozen – 40 dozen mini scones, delivered to your event.
                            <br/>
                            <br/>
                            Sconely Pool: 1-10 scones per person for a group of 5 or more people, delivered to one location. One host initiates order and sends link to others in their group to order and pay individually. (check back for this option)
                            <br/>
                            <br/>
                            Sconely Signature: 1 dozen – 10 dozen regular sized scones, ordered and paid for by an event host, providing the option for guests to pre-select their preferred scone before an event. The scones are then delivered in individual personalized packages. (check back for this option)
                            <br/>
                            <br/>
                            <b>Can I pre-order?</b>
                            <br/>
                            <br/>
                            All Sconely services require orders to be placed two days in advance. However, we encourage you to place orders up to 2 months in advance for events and large orders.
                            <br/>
                            <br/>
                            <b>Where and when does Sconely deliver?</b>  
                            <br/>
                            <br/>
                            Currently we deliver to Downtown Los Angeles, Santa Monica and Venice, CA, between 9am and noon, Wednesday through Saturday. Contact us at orders@sconely.com to inquire about delivery outside these areas and times for Sconely Social orders only. Free pick up at our DTLA location is also possible.
                            <br/>
                            <br/>
                            <b>Is there a charge for delivery?</b>
                            <br/>
                            <br/>
                            We offer free delivery in Downtown Los Angeles, Santa Monica and Venice, CA between 9am and noon, Wednesday through Saturday. For deliveries to other areas of LA there is a $15 charge, if we can accommodate your request.
                            <br/>
                            <br/>
                            <b>Can you deliver at specific times?</b>
                            <br/>
                            <br/>
                            Since our scones stay fresh throughout the day, we suggest deliveries between 9am and noon. If you need a delivery at a specific time, please contact us at orders@sconely.com with your request. We try to accommodate special delivery times.
                            <br/>
                            <br/>
                            <b>Who delivers the scones?</b>
                            <br/>
                            <br/>
                            Our personal Sconely courier team delivers the scones by car and sometimes
                            scooter.
                            <br/>
                            <br/>
                            <b>Who makes the scones?</b>
                            <br/>
                            <br/>
                            The talented Sconely culinary team prepares and bakes our homemade scones.
                            <br/>
                            <br/>
                            <b>Where are the scones baked?</b>
                            <br/>
                            <br/>
                            Sconely bakes at Crafted Kitchen in the Arts District in Downtown Los Angeles.
                            <br/>
                            <br/>
                            <b>How long do your scones stay fresh?</b>
                            <br/>
                            <br/>
                            Our scones are baked to order and best eaten within 24 hours of delivery. If your scones are delivered at 10am they will still be fresh for an evening event. If you have extra scones from an order, you can freeze them and heat them up when ready.
                            <br/>
                            <br/>
                            <b>How can I keep my scones as fresh as possible?</b>
                            <br/>
                            <br/>
                            We pack our scones for maximum freshness. Scones can be stored in the box or bag they were delivered in and do not need to be stored in the refrigerator.
                            <br/>
                            <br/>
                            <b>What is your return policy?</b>
                            <br/>
                            <br/>
                            Sconely strives for excellence with everything we do. If for any reason you are not satisfied with our service, please contact us at orders@sconely.com. Refunds will be issued on a case-by-case basis.
                            <br/>
                            <br/>
                            <b>What is your cancellation policy?</b>
                            <br/>
                            <br/>
                            If you need to cancel an order for any reason, please contact as soon as possible at orders@sconely.com. We can only accommodate cancellations that are placed two days prior to the delivery date. Cancelled orders will be issued a full
                            refund within 72 hours.
                            <br/>
                            <br/>
                            <b>Can I reschedule a delivery or change a delivery address?</b>
                            <br/>
                            <br/>
                            Yes, we are happy to help you reschedule an order or change a delivery address. Contact us at orders@sconely.com or reply to your Sconely confirmation email with your request at least two days before the original delivery date.
                            <br/>
                            <br/>
                            <b>Can I send a gift?</b>
                            <br/>
                            <br/>
                            Freshly baked gourmet scones make a great gift! Yes, you can send a gift by marking the gift option at check out. Enter the delivery details and a gift note and
                            we take care of the rest!
                            <br/>
                            <br/>
                            <b>Does Sconely ship outside of Los Angeles?</b>
                            <br/>
                            <br/>
                            Currently, we hand deliver our packages within LA only.
                            <br/>
                            <br/>
                            <b>When is customer service available?</b>
                            <br/>
                            <br/>
                            Contact us by email at orders@sconely.com anytime or contact us by phone at (213) 952-8490, Wednesday – Saturday, 9AM – 5PM.
                            <br/>
                            <br/>
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                    <PublicBottomNavbar/>
                    <PublicPrivacyTermsNavbar/>
              </div>
    )
  }
}

/*const mapStateToProps = (state: any, ownProps: any) => {
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
      dispatch(createOrder(order_type, "name", "date"))
    }
  }
}

const PublicHomePageConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicHomePage)*/

export default PublicFaq
