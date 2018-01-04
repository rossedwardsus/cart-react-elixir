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

//import {List, Map} from 'immutable';

//import * as Cookie from 'js-cookie';
//const cookie: any = require('react-cookie');




//@connect(null, mapDispatchToProps)
export class PublicTeam extends React.Component<any, any> {
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

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }                                


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
                        <div className="col-md-7" style={{paddingLeft: "30px"}}>
                          <br/>
                          <img src="/images/sconely_team.jpg"/>
                          <br/>
                          <br/>
                          <b>Julia Friedman, Founder & CEO</b>
                          <br/>
                          An entrepreneur, with a passion for food and art, Julia is in search of the perfect scone: a scone that not only tastes heavenly, but also looks out of this world. She comes from a family where food is an expression of love and is the centerpiece of social gatherings. After overcoming cancer nine years ago, she worked to develop healthier recipes that maximize nutrition and flavor. A former gallery owner, Julia is also the current Founder & CEO of ExchangeWorks, a platform that brings visual artists and the public together through exchanges. She is a graduate of Washington University, St. Louis.
                          ​<br/>
                          <br/>
                          <b>Ross Edwards, Lead Engineer</b>
                          <br/>
                          Ross has a passion for startups, technology, innovation and food. Ross has eaten far too much pizza at events and is excited for the potential of another option. He has a degree in computer science and is currently learning snowboarding. He also enjoys hiking, scuba diving and is a perpetual learner.​
                          <br/>
                          <br/>
                          <b>Carrie Baker, Head Baker</b>
                          <br/>
                          Not just a Baker by name, Chef Carrie has been baking since she could reach the oven. After studying at Baltimore International College, Carrie trained under French Chef James Walsh, taking her first Sous position in a traditional Italian scratch kitchen. She has since held positions as chef, baker, and manager; gaining invaluable cultural culinary experience, following trends, and perfecting techniques. Carrie has a passion for small business, organics, plant-based diets and enjoys creating comfort foods for everyone! ​<br/>
                          <br/>
                          <b>Dadi Revivo, Recipe Consultant</b>
                          <br/>
                          With two decades of culinary experience, Chef Dadi Revivo is known for his unique flavor combinations and dynamic cooking style. He was the pastry chef for some of the finest restaurants in the US. His focus is to develop recipes that are honest, delicious and preserve the simplicity and perfection of each ingredient.
                          ​<br/>
                          <br/>
                          <b>Debi Saltzberg, Advisor</b>
                          <br/>
                          A graduate from The Hotel Restaurant department at the University of Massachusetts in Amherst, Debi has spent 25 years in the Restaurant Industry experiencing all positions from the Back of the House to Upper Management and Operations at top restaurants and resorts. Her love for food and beverage has also taken her on a journey into Biodynamic and Organic Farming.   
                          </div>
                    </div>
                    <br/>
                    <br/>
                    <PublicBottomNavbar/>
                    <PublicPrivacyTermsNavbar/>
              </div>
    )
  }
}


export default PublicTeam
