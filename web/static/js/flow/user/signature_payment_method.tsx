import * as React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');

//require('react-datepicker/dist/react-datepicker.css');

//import 'react-date-picker/index.css';
//import { DateField, Calendar } from 'react-date-picker';

//const onChange = (dateString, { dateMoment, timestamp }) => {
  //console.log(dateString)

//  alert();
//}

export default class SignaturePaymentMethod extends React.Component<any, any> {
  //props: Props;

  constructor(props: any) {
    super(props);
    //this.getData();
  
    //alert("sconely yours1" + this.props.params.order_id);

    this.state = {

        event_name: "",
        event_datetime: "",
        event_address: "",
        number_of_guests: 0,
        guest_choose: "",
        additiobal_items: {},
        code: 0,
        startDate: moment()

    };

 
  }

  // Yes, I could use an arrow function, I get it.
  //@autobind
  //_handleCompleteTodo(id: string): void {
    // do something to mark this todo as complete
  //}

 
  render(): JSX.Element {
    return (
              <div>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-4">
                          Payment
                      </div>
                    </div>
                  </form>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-3">
                        <select value={this.state.zipcode}  className="form-control" style={{borderRadius: 0, WebkitAppearance: "none", height: 36, fontSize: 16}}>
                          <option>Home</option>
                          <option>Work</option>
                        </select>
                      </div>
                    </div>
                  </form>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-4">
                        <input type="text" className="form-control" id="exampleInputName2" placeholder="Card Number" style={{borderColor: this.state.card_number_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}}/>
                      </div>
                      <div className="col-sm-3">
                          {this.state.card_type}
                      </div>
                    </div>
                  </form>
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-md-2">
                        <input type="text" maxLength={2} className="form-control" id="exampleInputName2" placeholder="MM" style={{borderColor: this.state.expiry_month_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                      </div>
                      <div className="col-md-2">
                        <input type="text" maxLength={4} className="form-control" id="exampleInputName2" placeholder="YYYY" style={{borderColor: this.state.expiry_year_border_color, borderRadius: 0, WebkitAppearance: "none", fontSize: 16}}/>
                      </div>
                      <div className="col-md-2">
                        <input type="email" className="form-control" id="exampleInputEmail2" placeholder="CVC" style={{borderColor: this.state.cvc_border_color, borderRadius: 0, WebkitAppearance: "none"}}/>
                      </div>
                    </div>
                  </form>  
            </div>
    )
  }
}