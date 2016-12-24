"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
//namespace app.components {
class Sconely extends React.Component {
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
        return React.createElement("h1", null, "Sconely Yours-start with menu - then delivery address - then payment");
        //return (
        //	<div>
        //<div className="detail">
        // {this.props.children}
        //</div>
        //</div>)
    }
}
//}
ReactDOM.render(React.createElement(Sconely, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));
/*render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))*/ 
//# sourceMappingURL=SconelyYours.js.map