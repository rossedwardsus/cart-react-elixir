import React from 'react'
import { Link } from 'react-router';

export default class Homepage extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {
        
    };

  }

  componentDidMount(){

    //get active items from the database

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  

  render(): React.Element {

    return (
              <div className="container-fluid">
                    <div className="row">
                        <div className="hidden-xs col-md-4">
                          <br/>
                          <br/>
                          Home
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          About Us
                          <br/>
                        </div>
                        <div className="col-xs-6 col-md-6">
                                <div>
                                  <br/>
                                  gallery
                                  <br/>
                                  <br/>
                                  
                                </div>
                        </div>
                        <div className="col-xs-6 col-md-2">
                              maybe put something here
                        </div>
                    </div>
              </div>
    )
  }
}