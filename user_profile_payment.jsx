import React from 'react';
import ReactDOM from 'react-dom';


var Gallery = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
				images: ["SH_SFe_8x8.jpg", "SH_10_x_10_scone_720.jpg", "SH_strawberry_buttermilk_8x8.jpg", "SH_group_pic_8x8.jpg"],
				image_url: "/images/gallery/SH_SFe_8x8.jpg",
				counter: 0
			}
	},
  componentWillMount: function(){

  		var myVar = setInterval(this.myTimer, 10000);

  		//alert(this.state.images[0] + ".jpg");

  		//this.setState({image_url: "/images/" + this.state.images[0]});

  		//get default image
  		//with a timer change the image on a 5 second interval

  },
  myTimer: function(){

  		//counter = counter + 1;

  		this.setState({image_url: "/images/gallery/" + this.state.images[this.state.counter]});

  		if(this.state.counter == this.state.images.length-1){

  			this.setState({counter: 0});

  		}else{

  			this.setState({counter: this.state.counter+1});

  		}

  },

  render: function(){

  		return(<div><table><tbody><tr><td><img src={this.state.image_url}/></td></tr></tbody></table></div>);

  }

});


ReactDOM.render(<Gallery />, document.getElementById('gallery'));