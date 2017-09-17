// @flow

import * as React from 'react'

import { Link, browserHistory } from 'react-router'

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

import PublicTopNavbar from './public_top_navbar.tsx';
import PublicBottomNavbar from './public_bottom_navbar.tsx';

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

  
  render(): JSX.Element {

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
                        <div className="col-md-7">
                            We believe in high quality and sustainably baked scones that are best shared with others. With an emphasis on organic ingredients and superfoods, Sconely updates traditional scones and the experience of eating them.
                            <br/>
                            <br/>
                            We believe in high quality and sustainably baked scones that are best shared with others. With an emphasis on organic ingredients and superfoods, Sconely updates traditional scones and the experience of eating them.
                            <br/>
                            <br/>
                            Sconely specializes in artisanal sweet and savory scones that are perfect for events, meetings, conferences and parties. Sconely ensures that everyone at an event has something they can eat, decreases waste by allowing guests to pre-select their preferred scone, and creates community through shared food experiences.
                            <br/>
                            <br/>
                            Have you ever hosted an event and wondered if your guests would find something they could eat? Sconely solves that problem by offering a variety of scones, including vegan and gluten-free options.  
​                            <br/>
                            <br/>
                            Event hosts can order 12 - 250 regular or 24 - 500 mini scones with Sconely Social. Sconely Signature provides the option for guests to pre-select their preferred scone before an event. The scones are then delivered in individual personalized packages. 
​                            <br/>
                            <br/>
                            All of our scones are made from scratch with the finest ingredients and freshly baked to order. We use organic ingredients when possible and all of our scones are free of refined sugars and soy.
​                            <br/>
                            <br/>
                            Sconely is partnering up to use hyperlocal produce grown by Community Healing Gardens in our homemade scones to support the urban farming movement in LA and their farm program in Watts Los Angeles a known food desert at the only LAUSD Middle School. For every dozen scones sold, Sconely donates 1% to Community Healing Gardens, to plant and share healthy food in diverse and underserved communities in LA.
​                            <br/>
                            <br/>
                            Sconely bakes at Crafted Kitchen in Downtown Los Angeles. Contact us at eat@sconely.com for more information.
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <PublicBottomNavbar/>
            </div>
    )
  }
}