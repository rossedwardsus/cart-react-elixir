// @flow

import * as React from 'react'

import { Link, browserHistory } from 'react-router'

//import SconelySocialTopMenu from './sconely_social_top_menu'; 

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

    this.state = {
        page: "items",
        items: [{item_id: 1}],
        cart: this.props.cart,
    };

    this.showDeliveryLocations = this.showDeliveryLocations.bind(this);
    
  }

  componentDidMount(){

    //get active items from the database

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }


  showDeliveryLocations(){

      $('#deliveryAreas').modal('show');

      //e.preventDefault();

  }

  closeDeliveryLocations(){

      $('#deliveryAreas').modal('hide');

      //e.preventDefault();

  }

   

  render(): JSX.Element {

    var that = this;
    var page = "";

    var value_12 = "";     
    var value_24 = "";
    var mini_12 = "";

  

    return (
            <div>
               <nav className="navbar navbar-default" style={{border: 1}}>
                    <div className="container-fluid">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><img src="https://sconely-production.herokuapp.com/images/logo/LogoJune5d.jpg"/></a>
                      </div>
                      <div className="collapse navbar-collapse" id="navigationbar">
                        <ul className="nav navbar-nav navbar-right">
                              <li><Link to="/public/about_us">ABOUT US</Link></li>
                              <li><a onClick={() => this.showDeliveryLocations()}>FREE DELIVERY AREAS + TIMES</a></li>
                              <li><Link to="/public/free_sample">FREE SAMPLE</Link></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="modal fade" id="deliveryAreas" role="dialog" aria-labelledby="myModalLabel">
                                    <div className="modal-dialog" role="document">
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <button type="button" onClick={() => this.closeDeliveryLocations()} className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                          <h4 className="modal-title" id="myModalLabel">Free Delivery Areas + Times</h4>
                                        </div>
                                        <div className="modal-body">
                                          <div className="col-md-6" style={{paddingLeft: "30px"}}>
                                            Beverly Hills
                                            <br/>
                                            Brentwood
                                            <br/>
                                            Century City
                                            <br/>
                                            Downtown LA
                                            <br/>
                                            Hancock Park
                                            <br/>
                                            Marina Del Rey
                                            <br/>
                                            Playa Vista
                                            <br/>
                                            Santa Monica 
                                            <br/>
                                            Venice
                                            <br/>
                                            West Hollywood
                                            <br/>
                                            Westwood
                                            <br/>
                                          </div>
                                          <div className="col-md-6" style={{paddingLeft: "30px"}}>
                                            Tuesday - Saturday
                                            <br/>
                                            9am - Noon
                                            <br/>
                                            <br/>
                                            Contact us about other delivery options!
                                            <br/>
                                            <br/>
                                          </div>
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
                                      </div>
                                    </div>
                                  </div>

            </div>
    )
  }
}