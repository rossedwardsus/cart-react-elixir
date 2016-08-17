import React from 'react';
import ReactDOM from 'react-dom';

import {Checkbox} from 'react-bootstrap';

var UserProfileFoodPreferences = React.createClass({
	//var counter = 0;


	getInitialState: function(){

			return {
				food_preferences: []
			}
	},
  componentWillMount: function(){

  		var myVar = setInterval(this.myTimer, 10000);

  		//alert(this.state.images[0] + ".jpg");

  		//this.setState({image_url: "/images/" + this.state.images[0]});

  		//get default image
  		//with a timer change the image on a 5 second interval

  },
  onChange: function(e){

      alert(e.target.value);

      var food_preferences_temp = this.state.food_preferences;
      food_preferences_temp.push(e.target.value);

  },
 
  render: function(){

  		return(
          <div>

                <Checkbox value="sugar_free" checked="true" onChange={this.onChange}>Sugar Free</Checkbox>
                <br/>
                <Checkbox value="gluten_free" onChange={this.onChange}>Gluten Free</Checkbox>

          </div>
      );

  }

});


ReactDOM.render(<UserProfileFoodPreferences />, document.getElementById('user_profile_food_preferences'));