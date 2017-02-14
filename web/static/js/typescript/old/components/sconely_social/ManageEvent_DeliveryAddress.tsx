import * as React from "react";
import * as DatePicker from "react-datepicker";
import * as moment from "moment";
import * as Dropzone from "react-dropzone";
import { Router, browserHistory } from 'react-router';
import * as request from "superagent";

/*export class TestModel{
    private id: string;
    private username: string;

    constructor(id: string, username: string) {
        this.id= loginName;
        this.username= password;
    }

    IsValid(): boolean {
        return true;
    }
}*/

/*var testModel = new TestModel("test1", "test2");

$.ajax({
     url: "",
     type: "POST",
     data: { id:testModel.id, username:testModel.username } // Access property with <object>.<property>
});*/


request
   .post('/api/pet')
   //.send({ name: 'Manny', species: 'cat' })
   //.set('X-API-Key', 'foobar')
   //.set('Accept', 'application/json')
   //.end(function(err, res){
   //  if (err || !res.ok) {
   //    alert('Oh no! error');
   //  } else {
   //    alert('yay got ' + JSON.stringify(res.body));
   //  }
   //});
 

export interface HelloProps { compiler: string; framework: string; }

export class DeliveryAddress extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}