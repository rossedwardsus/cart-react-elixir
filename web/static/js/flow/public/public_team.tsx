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

  //_div: any;

  constructor(props: any) {
    super(props);
    //this.getData();

    //let _div = null;
  
    //alert("sconely yours1" + this.props.params.order_id);
    window.scrollTo(0, 0);
    //this._div.scrollTop = 0

  }

  componentWillMount = () => {

      console.log("cwm");

      window.scrollTo(0, 0);
      //this._div.scrollTop = 0

  }

  componentDidMount = () => {

      console.log("cdm");

      setTimeout(() => {
      
        window.scrollTo(0, 0);

      }, 100);

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }                                


  render(){

    let menu = null;


    
  
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
                          <img src="/images/sconelyteam.jpg"/>
                          <br/>
                          <br/>
                          <b>Julia Friedman, Founder & CEO</b>
                          <br/>
                          An entrepreneur, with a passion for food and art, Julia is in search of the perfect scone: a scone that not only tastes heavenly, but also looks out of this world. She comes from a family where food is an expression of love and is the centerpiece of social gatherings. After overcoming cancer nine years ago, she worked to develop healthier recipes that maximize nutrition and flavor. A former gallery owner, Julia is also the current Founder & CEO of ExchangeWorks, a platform that brings visual artists and the public together through exchanges. She is a graduate of Washington University, St. Louis.
                          ​<br/>
                          <br/>
                          <b>Ross Edwards, Founding Engineer</b>
                          <br/>
                          Ross has a passion for startups, technology, innovation and food. Ross has eaten far too much pizza at events and is excited for the potential of another option. He has a degree in computer science and is currently learning snowboarding. He also enjoys hiking, scuba diving and is a perpetual learner.​
                          <br/>
                          <br/>
                          <b>Culinary Team</b>
                          <br/>
                          Sconely's talented culinary team prepares and bakes our homemade scones. Our bakers come from reputable culinary schools and have worked at some of the top restaurants, catering companies and bakeries.
                          <br/>
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
