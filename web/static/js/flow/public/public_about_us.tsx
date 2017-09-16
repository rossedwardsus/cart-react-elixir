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
                        <div className="hidden-xs col-md-2">
                          <br/>
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          <br/>   
                          <br/>
                        </div>
                        <div className="col-md-7">
                            
                        </div>
                        <div className="col-md-3">
                        </div>
                    </div>
                    <PublicBottomNavbar/>
            </div>
    )
  }
}