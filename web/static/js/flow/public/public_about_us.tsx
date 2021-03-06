// @flow

import * as React from 'react'

import { Link, browserHistory } from 'react-router'

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

import PublicTopNavbar from './public_top_navbar.tsx';
import PublicBottomNavbar from './public_bottom_navbar.tsx';
import PublicPrivacyTermsNavbar from './public_privacy_terms_navbar.tsx';

//import Dialog from "rc-dialog";

type Props = {
  //title: string,
  //visited: boolean,
  setDeliveryAddrss: () => void,
};


export default class Menu extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

       
  }

  componentWillMount = () => {

      //window.scrollTo(0, 0);

      //setTimeout(() => {
      //  window.scrollTo(0, 0);
      //  document.body.scrollTop=0;      
      //}, 100)

  }

  componentDidMount = () => {

      window.scrollTo(0, 0);

      setTimeout(() => {
        window.scrollTo(0, 0);
      //  document.body.scrollTop=0;      
      }, 100)

  }

  
  render(): JSX.Element {

    return (
            <div style={{top: 0, left: 0}}>
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
                            <br/>
                            <br/>
                            <br/>
                            <div style={{fontSize: 18}}>
                              Sconely breaks from tradition with sweet and savory scones that fans have called “life changing”, “beyond delicious” and “epic.”  Through a menu that focuses on personal dietary preferences and a unique ordering system, Sconely brings scones into the future.
                              <br/>
                              <br/>
                              All of our scones are handcrafted in small batches and freshly baked to order. With an emphasis on locally sourced organic ingredients, our entire menu is free of refined sugar, soy and preservatives. Sconely’s menu includes a wide variety of artisanal scones, with vegan and gluten-free options. Check out our menu often for new flavors!
                              <br/>
                              <br/>
                              Sconely is partnering up to use hyperlocal produce grown by <a href="http://www.communityhealinggardens.com">Community Healing Gardens</a> in our homemade scones to support the urban farming movement in LA and their farm program in Watts Los Angeles a known food desert at the only LAUSD Middle School. For every dozen scones sold, Sconely donates 1% to Community Healing Gardens, to plant and share healthy food in diverse and underserved communities in LA.
                            </div>
                            <br/>
                            Ordering is easy with the following services.
                            <br/>
                            <br/>
                            <b>Sconely Social</b>: 1 dozen - 20 dozen regular sized scones and / or 2 dozen – 40 dozen mini scones delivered to your event
                            <br/>
                            <br/>
                            <b>Sconely Pool</b>: 1-10 scones per person for a group of 5 or more people, delivered to one location. One host initiates order and sends link to others in their group to order and pay individually. 
                            <br/>
                            <br/>
                            <b>Sconely Signature</b>: 1 dozen – 10 dozen scones, providing the option for guests to pre-select their preferred scone before an event. The scones are delivered in individual personalized packages. Sconely Signature ensures that everyone at an event has something they can eat, decreases waste by allowing guests to pre-select their preferred scone, and creates community through shared food experiences.
                            ​<br/>
                            <br/>
                            Sconely bakes at 672 S Santa Fe in Downtown Los Angeles. Contact us at eat@sconely.com for more information.
                        </div>
                        <div className="col-md-3">
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