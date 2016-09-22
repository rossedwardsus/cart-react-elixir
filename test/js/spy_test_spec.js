//require('./testdom')('<html><body></body></html>');  

var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

import assert from 'assert'; // obviously you can use a assertion library of your choice 
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import { spyOnComponentMethod, stubComponentMethod } from 'sinon-spy-react';
import { shallow, mount } from 'enzyme';
import { expect } from "chai";
 
import Avatar from './avatar.jsx'; // some React component to test 


/*describe('<Foo />', () => {

  it('calls componentDidMount', () => {
    spy(Foo.prototype, 'componentDidMount');
    const wrapper = mount(<Avatar />);
    expect(Avatar.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});*/

it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Avatar />);
    //expect(wrapper.find(Foo)).to.have.length(3);
    expect(wrapper).to.have.length(1);
    
});

it('componentDidMount', () => {

    sinon.spy(Avatar.prototype, 'componentDidMount');
    const wrapper = mount(<Avatar />);
    expect(Avatar.prototype.componentDidMount).to.have.property('callCount', 1);
    Avatar.prototype.componentDidMount.restore();

});


//import React, {PropTypes} from 'react';
/*class Avatar extends React.Component {
    componentDidMount(){



    }

    render() {
        return (
          <div className="avatar">
            <p>
              <em>{this.props.email}</em>
            </p>
            <img src={this.props.src} className="img-rounded"/>
          </div>
        );
    }
}*/
 
/*it('calls componentDidMount after mounting', () => {
    const spy = spyOnComponentMethod(Avatar, 'componentDidMount');
    const avatar = TestUtils.renderIntoDocument(<Avatar />);
 
    assert(spy.calledOnce);
});*/
 
/*it('does something with specific initial state', () => {
    const stub = stubComponentMethod(Avatar, 'getInitialState').returns({
      foo: 'bar' // the stubbed/mocked initial state 
    });
    const spy = spyOnComponentMethod(Avatar, 'someSpecialMethod'); // gets called if state.foo === 'bar' 
    const component = TestUtils.renderIntoDocument(<Avatar />);
 
    assert(spy.calledOnce);
 
    stub.restore();
});*/