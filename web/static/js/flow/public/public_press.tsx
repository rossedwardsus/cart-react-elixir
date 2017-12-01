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

import {Helmet} from "react-helmet";

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
export class PublicPress extends React.Component<any, any> {
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
  
  }

  componentDidMount(){

    window.scrollTo(0, 0);

    //dispatch(checkLoggedIn);

    //this.props.checkLoggedIn();

    //alert("jsx");

    //get active items from the database


    //this.setState({gallery_image: this.state.gallery_images[this.state.gallery_image_index]});

    //let interval = setInterval(this.changeImage, 5000);
    //this.setState({interval: interval});


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


 

  //<Swipeable onSwipingLeft={this.onSwipedLeft} onSwipingRight={this.onSwipedRight}><img width="300" height="300" src={this.state.image}/></Swipeable>
                                  


  render(){

    let menu = null;


    


    return (
              <div>
                    <Helmet>
                        <title>Nested Title</title>
                        <meta name="twitter:card" content="Nested component" />
                        <meta name="twitter:title" content="The Always-Up-to-Date SEO Checklist from @BruceClayInc" />
                        <meta name="twitter:url" content="https://www.bruceclay.com/blog/seo-checklist/" />
                        <meta name="twitter:description" content="Just getting started optimizing websites? Here’s a time-tested SEO checklist to keep on-hand during your projects." />
                        <meta name="twitter:image" content="https://www.bruceclay.com/blog/wp-content/uploads/2016/08/SEO-Checklist.jpg" />
                    </Helmet>
            
                    <PublicTopNavbar/>
                    <div className="row">
                        <div className="hidden-xs col-md-3">
                          <br/>
                          <br/>
                          <br/>
                          <br/>   
                          <br/>
                        </div>
                        <div className="col-md-9 nopadding" style={{paddingLeft: "30px"}}>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <div className="col-md-7 nopadding" style={{borderRight: 0, paddingRight: 0}}>
                              <b>LA Downtowner</b>
                              <br/>
                              <a href="https://www.ladowntowner.com/articles/2017/12/1/sconely" style={{fontSize: 15, fontFamily: "Helvetica-Bold", color: "#00afec"}}>Edible Moments</a>
                          </div>
                          <br/>
                          <br/>
                          <div className="col-md-7 nopadding" style={{borderRight: 0, paddingRight: 0}}>
                              <b>Just Forking Around</b>
                              <br/>
                              <a href="http://www.justforkingaround.net/julia-friedman-sconely" style={{fontSize: 15, fontFamily: "Helvetica-Bold", color: "#00afec"}}>Julia Friedman of Sconely: Making Scones Social and Delicious</a>
                          </div>
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

export default PublicPress
