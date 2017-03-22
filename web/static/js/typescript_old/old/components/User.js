"use strict";
const React = require("react");
class User extends React.Component {
    render() {
        return React.createElement("h1", null, 
            "Hello from ", 
            this.props.compiler, 
            " and ", 
            this.props.framework, 
            "!");
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map