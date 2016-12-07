import * as React from "react";
import * as ReactDOM from "react-dom";

//import { Cart } from "./components/Cart";
//import { DeliveryAddress } from "./components/DeliveryAddress";

import User from "./components/User";

import { Router, Route, Link } from 'react-router'


export interface HelloProps { compiler: string; framework: string; }


//namespace app.components {

		class Sconely extends React.Component<HelloProps, {}> {

			/*constructor(props : HelloProps) {
			    super(props);
			    this.state = 
			    	menu: {},
			    	cart: {},
			    	page: "menu"

			    };

			    { editText: this.props.todo.title };
		  	}
		  	*/

		    render() {
		        return <h1>Sconely Yours-start with menu - then delivery address - then payment</h1>;

		        	//return (
      				//	<div>


		        	//<div className="detail">
			         // {this.props.children}
			        //</div>
			        //</div>)

		    }
		}

//}


//ReactDOM.render(

//    <Sconely compiler="TypeScript" framework="React" />,
//    document.getElementById("example")
//);


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))