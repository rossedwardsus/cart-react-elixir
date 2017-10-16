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
export class PublicStory extends React.Component<any, any> {
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
                          <br/>
                          <br/>   
                          <br/>
                        </div>
                        <div className="col-md-7">
                          <br/>
                          <br/>
                          Privacy Policy:
                          <br/>
                          Last modified: September 20, 2017
                          <br/>
                          Sconely LLC respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website www.sconely.com (our ÒWebsiteÓ) and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                          <br/>
                          This policy applies to information we collect:
                          <br/>
                          on this Website;
                          <br/>
                          in email, text, and other electronic messages between you and this Website; and
                          <br/>
                          when you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.
                          <br/>
                          It does not apply to information collected by:
                          <br/>
                          us offline or through any other means, including on any other website operated by Company or any third party (including our affiliates and subsidiaries); or
                          <br/>
                          any third party (including our affiliates and subsidiaries), including through any application or content that may link to or be accessible from or on the Website.
                          <br/>
                          Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy below). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
                          <br/>
                          WHAT WE COLLECT
                          <br/>
                          We may collect the following information from and about users of our Website:
                          <br/>
                          name;
                          <br/>
                          contact information including address, e-mail address, and telephone number;
                          <br/>
                          payment information;
                          <br/>
                          demographic information such as preferences, interests, and postal codes;
                          <br/>
                          information relevant to customer surveys and/or offers; and
                          <br/>
                          about your internet connection, the equipment you use to access our Website, and usage details.
                          <br/>
                          SECURITY
                          <br/>
                          We are committed to ensuring that your information is secure. We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                          <br/>
                          The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
                          <br/>
                          Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website.
                          <br/>
                          COOKIES
                          <br/>
                          Our Website uses cookies to deliver a better and more personalized service, including by enabling us to store information about your preferences and recognizing when you return to our Website.
                          <br/>
                          A cookie is a small file placed on the hard drive of your computer. A cookie does not give us access to your computer or any information about you, other than the data you choose to share with us. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.
                          <br/>
                          CALIFORNIA DO NOT TRACK DISCLOSURE
                          <br/>
                          Do Not Track (ÒDNTÓ) is a privacy preference that users can set in their web browsers.  When a user turns on the DNT signal, the browser sends a message to websites requesting them not to track the user. We do not track our customers over time and across third-party websites to provide targeted advertising and therefore do not respond to DNT signals.
                          <br/>
                          CORRECTING AND CONTROLLING YOUR INFORMATION
                          <br/>
                          If you do not wish to have your contact information used by the Company to promote our own products or services, you can opt-out by checking the relevant box located on the form on which we collect your data (for example, the order form or registration form) or at any other time by sending us an email stating your request to eat@sconely.com. If we have sent you a promotional email, you may send us a return email asking to be omitted from future email distributions. This opt out does not apply to information provided to the Company as a result of a product purchase, product service experience or other transactions.
                          <br/>
                          You may send us an email at eat@sconely.com to request access to, correct or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.
                        </div>
                        <div className="col-md-3">
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
                    <br/>
                    <br/>
                    <PublicBottomNavbar/>
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

export default PublicStory
