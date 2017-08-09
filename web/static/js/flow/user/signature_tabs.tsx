import * as React from 'react';
import { Link } from 'react-router';

export default class SignatureTabs extends React.Component<any, any> {
  //props: Props;

  

  render(): JSX.Element {
    return (
              <ul className="nav nav-tabs">
                  <li className="active"><Link to="/order/1234/details">DETAILS</Link></li>
                  <li><Link to="/order/1234/guests">GUESTS</Link></li>
                  <li><Link to="/order/1234/items">ADDITIONAL ITEMS</Link></li>
                  <li><Link to="/order/1234/summary">ORDER SUMMARY</Link></li>
                  <li><Link to="/order/1234/preview">MENU PREVIEW</Link></li>
              </ul>    
    )
  }
}