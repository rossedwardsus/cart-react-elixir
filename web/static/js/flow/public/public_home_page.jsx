import "babel-polyfill";
import React from 'react'
import { Link } from 'react-router';
import Swipeable from 'react-swipeable';
import { routeActions, push } from 'react-router-redux'
import {connect} from 'react-redux';
//import {startOrder} from './actions/order';


const mapDispatchToProps = dispatch => {
  return {
    onNavigateTo(dest) {
      dispatch(push(dest));
    }
  };
};

@connect(null, mapDispatchToProps)
export default class Homepage extends React.Component {
  //props: Props;

  constructor(props) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        image: "/images/gallery/sconely_group_HPb.jpg",
        guest_code: ""
        
    };

    this.createOrder = this.createOrder.bind(this);
    this.guestCode = this.guestCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSwipedLeft = this.onSwipedLeft.bind(this);
    this.onSwipedRight = this.onSwipedRight.bind(this);
    this.guestCodeChange = this.guestCodeChange.bind(this);
    this.changeImage = this.changeImage.bind(this);

  }

  componentDidMount(){

    //alert("jsx");

    //get active items from the database

    setInterval(this.changeImage, 10000);

  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  onSubmit(e){

    e,preventDefault();

  }

  guestCode(order_type) {

    //e.preventDefault();

    //alert(order_type);

    //if(order_type == "sconely_yours"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        //orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});
       
        //if user is logged in then 
        //guest code is right then
        //this.context.router.push('/order/' + this.state.guest_code + '/guest/');

        //this.context.router.push('/guest/order/12345/sconely_yours');

        //store.dispatch(push('/order/' + this.state.guest_code + '/guest/'));

        //this.props.dispatch(routeActions.push('/foo'));

        //push("/foo");

        this.props.onNavigateTo('/hello');


    //}

  }

  guestCodeChange(e){

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

    if(this.state.image == "/images/gallery/sconely_group_HPb.jpg"){

        this.setState({image: "/images/gallery/Sconely_HomePage_image_new_site.jpg"});

    }else{

        this.setState({image: "/images/gallery/sconely_group_HPb.jpg"});

    }

  }


  createOrder(order_type) {

    if(order_type == "sconely_yours"){

        //var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);

        //orders.push({order_id: 54321, user_type: "guest", order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});
       
        //orders.push({order_id: 54321, user_type: "rgistered, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: //[{link: "event_details", text: "Event Details"}, {link: "menu", text: "Menu"}], status: "new"});



        //if user is logged in then 
        this.context.router.push('/order/12345');

        //this.context.router.push('/order/12345');


    }else if(order_type == "sconely_social"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        this.context.router.push('/order/12345');
         
    }else if(order_type == "sconely_signature"){

        var orders = JSON.parse(localStorage.getItem("user")).orders;
        //alert(orders);
        orders.push({order_id: 54321, order_type: order_type, address: "", event_name: "", guest_chooses: false, menu: [{link: "event_details", text: "Event Details"}, {link: "guests", text: "Guests"}, {link: "menu", text: "Menu"}], status: "new"});

        this.context.router.push('/order/12345/sconely_signature');
        
         
    }


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


    /*request
      .post('/api/order/new')
      .send({ payment_choice: this.state.payment_choice, total: 0, customer_id: 0 })
      .set('X-API-Key', 'foobar')
      .set('Accept', 'application/json')
      .end(function(err, res){
        // Calling the end function will send the request
        //this.setState({payment_complete: true});
  
      });*/


    //alert(order_type);
    
    //this.context.router.push('/order/12345/event_details');
    
    //browserHistory.push('#/order/12345');
    //browserHistory.push('/mobile/user#/order/12345');
    //save id in local storage
  
  }


  render(){

    return (
              <div>
                    <nav className="navbar navbar-default navbar-fixed-top">
                          <div className="container-fluid">
                            <div className="navbar-header">
                              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                              </button>
                              <a className="navbar-brand" href="#"><img height="100" width="250" src="/images/logo/Sconely_color_web_300_space3.jpg"/></a>
                            </div>
                            <div className="hidden-xs navbar-form navbar-right">
                              <div className="hidden-xs form-group">
                                <input type="text" className="hidden-xs form-control" placeholder="Guest Code" value={this.state.guest_code} onChange={this.guestCodeChange}/>
                              </div>
                              <button type="button" className="hidden-xs btn btn-default" onClick={() => this.guestCode()}>Submit</button>
                            </div>
                            <div id="navbar" className="navbar-collapse collapse navbar-right" style={{zIndex: 10010, background: "white"}}>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><a href="./">Profile<span className="sr-only">(current)</span></a></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/login_register">Login/Register<span className="sr-only">(current)</span></Link></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><a onClick={this.createOrder.bind(this, "sconely_yours")}>Start Order</a></li>
                              </ul>
                              <ul className="nav navbar-nav">
                                <li className="inactive"><Link to="/public/menu">Menu</Link><span className="sr-only">(current)</span></li>
                              </ul>
                            </div>
                          </div>
                    </nav>
                    <div className="row">
                        <div className="hidden-xs col-md-4">
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <Link to="/public/menu">Menu</Link>
                          <br/>
                          Home
                          <br/>
                          <a onClick={this.createOrder.bind(this, "sconely_social")}>Start Order</a>
                          <br/>
                          <br/>
                        </div>
                        <div className="col-md-6">
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <div className="hidden-lg navbar-form">
                                    <div className="form-group">
                                      <input type="text" className="form-control" placeholder="Guest Code" value={this.state.guest_code} onChange={this.guestCodeChange}/>
                                    </div>
                                    <button type="button" onClick={() => this.guestCode()} className="btn btn-default">Submit</button>
                                  </div>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  <Swipeable onSwipingLeft={this.onSwipedLeft} onSwipingRight={this.onSwipedRight}><img width="300" height="300" src={this.state.image}/></Swipeable>
                                  <br/>
                                  <br/>
                                  
                                
                        </div>
                        <div className="hidden-xs col-md-2">
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              <br/>
                              maybe put something here
                        </div>
                    </div>
              </div>
    )
  }
}