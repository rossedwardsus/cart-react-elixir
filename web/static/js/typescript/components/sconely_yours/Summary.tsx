import * as React from "react";
import DatePicker = require('react-datepicker');
import moment = require('moment');
import Dropzone = require('react-dropzone');
import { Router, browserHistory } from 'react-router';
 

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}