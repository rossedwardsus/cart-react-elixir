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

  
  render(): JSX.Element {

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
                            <br/>
                                Colossal cookies, apple pie and chocolate mush cake – these were the centerpieces of holiday celebrations, lovingly made by my Mom when I was growing up. Then and now, food remains an expression of love in my family.    
                                <br/>
                                Food became even more central to my life after overcoming cancer 9 years ago, which profoundly altered the way I ate and approached food. While looking for healthier ways to satisfy my sweet tooth, I experimented with recipes that maximize nutrition and flavor. I started baking scones and sharing them at meetings and parties. It became apparent that scones are underrated, versatile and incredibly social. 
                                <br/>
                                When I was leaving NYC to move west, I envisioned driving across the country in a food truck named Scone Home. Seeing the potential to innovate with scones and new ways to share them with others, the initial idea for Scone Home evolved into a technology driven company, called Sconely.
                                ​​<br/>
                                Throughout 2016, I spoke with technologist Ross Edwards to develop a plan merging a social app with gourmet scones. We spoke with bakers and nutritional experts to create a truly inclusive menu that addresses a variety of dietary preferences, while updating traditional scones.
                                ​<br/>
                                Sconely is dedicated to my Mom, Marcia Friedman, who loved to bake, build community around food and made sure everyone at the table had something they could eat. Sconely follows in her tradition.
                                ​<br/>
                                We hope you enjoy the Sconely experience, as much as we have enjoyed creating it!
                                ​<br/>
                                Julia Friedman, Sconely Founder     ​
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