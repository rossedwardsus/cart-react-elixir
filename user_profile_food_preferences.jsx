import React from 'react';
import ReactDOM from 'react-dom';

import {Checkbox, FormGroup, Button} from 'react-bootstrap';

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
              <FormGroup>
                <Checkbox value="sugar_free" checked="true" onChange={this.onChange} inline>
                    Refined Sugar Free
                </Checkbox>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Gluten Free
                </Checkbox>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Wheet Free
                </Checkbox>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Vegan
                </Checkbox>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Vegetarian
                </Checkbox>
              </FormGroup>
              <FormGroup>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Soy Free
                </Checkbox>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Egg Free
                </Checkbox>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Nut Allergies
                </Checkbox>
                <Checkbox value="gluten_free" onChange={this.onChange} inline>
                    Dairy Free
                </Checkbox>
              </FormGroup>
              <br/>
              <Button>Save</Button>
          </div>
      );

  }

});


ReactDOM.render(<UserProfileFoodPreferences />, document.getElementById('user_profile_food_preferences'));