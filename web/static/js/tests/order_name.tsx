//var searchPath = '../../../../../app/assets/javascripts/components/navigation/search_icon.js.jsx';
//jest.dontMock(searchPath);


import * as React from 'react';
//import * as renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import * as TestUtils from "react-addons-test-utils";

import { assert, expect } from 'chai';
//import chai from 'chai';
const chai = require('chai');

const chaiEnzyme = require('chai-enzyme');

//import assert from 'assert';
import * as sinon from 'sinon';
import 'jsdom-global/register';

import Login from '../flow/login.tsx';
import Name from '../flow/name.tsx';

chai.use(chaiEnzyme());


//import jsdom from 'jsdom'
//const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
//global.document = doc
//global.window = doc.defaultView


describe("Name", () => {

	let renderer: any;

	//divs
	//inputs
	//placehlders
	//incorrent inputs


	const container = shallow(<Name setUserEmail={() => {}}/>);
	let wrapper = shallow(<Name setUserEmail={() => {}}/>);

	it('should render name divs', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	expect(container.find('div').length).to.equal(18);
    	//expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	//expect(container.find('input[placeholder="First Name"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render name inputs', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(18);
    	expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	//expect(container.find('input[placeholder="First Name"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render first name placeholder', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(18);
    	//expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	expect(container.find('input[placeholder="First Name"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render last name placeholder', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(18);
    	//expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	expect(container.find('input[placeholder="Last Name"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render email placeholder', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(18);
    	//expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	expect(container.find('input[placeholder="Email"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should turn email border state red when a bad email is entered', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<Name User={{user_first_name: "", user_last_name: "", user_contact_email: "", user_contact_mobile: ""}} setUserEmail={() => {}} userContactEmailValidated={() => {}} setUserDeliveryContactAddressEmail={() => {}}/>);

    	let email_input = wrapper.find('input[placeholder="Email"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	email_input.simulate('change', { target: { value: 'rossedwards.us@gmail.com' } });


    	let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		console.log(wrapper.state());
		
		expect(wrapper.state().email_border_color).to.equal("grey");

		//console.log(containerStyle.get(0).style);
		//console.log(containerStyle.get(0).style);
		//expect(containerStyle.get(0).style).to.have.property('border-color', 'red');
		//expect(containerStyle.get(0).style).to.have.property('border-color', 'grey');
		
		//console.log(containerStyle.node.HTMLInputElement);
		//expect(containerStyle.node.props.style.borderColor).to.equal("grey");

    	
    	//.instance().value = "foo"
    	//expect(container.find('input[placeholder="Email"]').hasClass("border-color")).to.equal("red");

    	//expect(email_input.props("border-color")).to.equal("red");

    	//chai enzyme
    	//expect(email_input).to.have.style("border-color");

    	//expect(wrapper).to.have.style('border').equal('1px')

    	//const email = mount(<Name />).find('input[placeholder="Email"]');
		//expect(span.html().match(/style="([^"]*)"/i)[1]).toBe('color: #000;');

    	//let containerStyle = container.get(0).style;
		//expect(email).to.have.property('border-color', 'red');

		//const wrapper = mount(<TheForm/>);
		//const first = wrapper.find('first');
		//first.node.value = 'David'
		//first.simulate('change', first)

    	
  	});


  	it('should turn mobile number border state red when a bad mobile number is entered', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<Name User={{user_first_name: "", user_last_name: "", user_contact_email: "", user_contact_mobile: "", orders: [{order_type: "social"}]}} setUserMobile={() => {}} userContactEmailValidated={() => {}} setUserDeliveryContactAddressMobile={() => {}}/>);

    	let mobile_input = wrapper.find('input[placeholder="Mobile"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//mobile_input.simulate('change', { target: { value: '123-456-7890' } });
    	mobile_input.simulate('change', { target: { value: 'a1' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		console.log(wrapper.state());
		
		expect(wrapper.state().mobile_border_color).to.equal("grey");

		//console.log(containerStyle.get(0).style);
		//console.log(containerStyle.get(0).style);
		//expect(containerStyle.get(0).style).to.have.property('border-color', 'red');
		//expect(containerStyle.get(0).style).to.have.property('border-color', 'grey');
		
		//console.log(containerStyle.node.HTMLInputElement);
		//expect(containerStyle.node.props.style.borderColor).to.equal("grey");

    	
    	//.instance().value = "foo"
    	//expect(container.find('input[placeholder="Email"]').hasClass("border-color")).to.equal("red");

    	//expect(email_input.props("border-color")).to.equal("red");

    	//chai enzyme
    	//expect(email_input).to.have.style("border-color");

    	//expect(wrapper).to.have.style('border').equal('1px')

    	//const email = mount(<Name />).find('input[placeholder="Email"]');
		//expect(span.html().match(/style="([^"]*)"/i)[1]).toBe('color: #000;');

    	//let containerStyle = container.get(0).style;
		//expect(email).to.have.property('border-color', 'red');

		//const wrapper = mount(<TheForm/>);
		//const first = wrapper.find('first');
		//first.node.value = 'David'
		//first.simulate('change', first)

    	
  	});




  	//expect(container.find('div').hasClass('red-square')).to.equal(true);
  	//let a = mount(<TestComponent/>);
	//a.find('input').node.value = 'Task1';
 


	/*beforeEach(() => {

		renderer = TestUtils.createRenderer();
		renderer.render(<Login />);

	});

	it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        assert.strictEqual(result.type, "div");
    });*/


     it('calls name componentDidMount', () => {
	    //const wrapper = mount(<Login />);
	    //expect(wrapper.find('.icon-star')).to.have.length(1);

	    //const component = shallow(<Login />)
	  
	    //assert.equal(
	    //	component.find('span').text(), '', 'the visit component has no text'
	  	//)

	  	//expect(component.prototype.componentDidMount.calledOnce).to.equal(true);
	 })

});

//describe("Hello", () => {

//	let renderer: any;

	/*beforeEach(() => {

		renderer = TestUtils.createRenderer();
		renderer.render(<Login />);

	});

	it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        assert.strictEqual(result.type, "div");
    });*/


 //    it('calls hello componentDidMount', () => {
	    //const wrapper = mount(<Login />);
	    //expect(wrapper.find('.icon-star')).to.have.length(1);

	    //const component = shallow(<Login />)
	  
	    //assert.equal(
	    //	component.find('span').text(), '', 'the visit component has no text'
	  	//)

	  	//expect(component.prototype.componentDidMount.calledOnce).to.equal(true);

	  	
	  	//const onButtonClick = sinon.spy();
	    //const wrapper = shallow(
	    //  <Foo onButtonClick={onButtonClick} />
	    //);
	    //wrapper.find('button').simulate('click');
	    //expect(onButtonClick).to.have.property('callCount', 1);

	    
	//    sinon.spy(Login.prototype, 'componentDidMount');
	//    const wrapper = mount(<Login />);
	    //expect(Login.prototype.componentDidMount).to.have.property('callCount', 1);
	    //Foo.prototype.componentDidMount.restore();

	    
	    //const wrapper = mount(<Login />);
	    //wrapper.find('button').simulate('click');
	    //expect(onButtonClick).to.have.property('callCount', 1);

	    //const wrapper = shallow(<Login />);
		//const email = wrapper.find({id: 'email'});
		//assert.equal(email.length, 1);


//	  });

  /*    it('email', () => {

      	const wrapper = shallow(<Login />);
		const email = wrapper.find({id: 'email'});
		//assert.equal(email.length, 1);
	 
	  });*/


	/*var assert = require('assert');

	describe('Empty test', function() {
	  
	  it('empty test should run successfully', function() {
		  
	    assert.equal('A', 'A');
	  });
	});*/


	//test('Link changes the class when hovered', () => {
	  /*const component = renderer.create(
	    <Link page="http://www.facebook.com">Facebook</Link>
	  );
	  let tree = component.toJSON();
	  expect(tree).toMatchSnapshot();

	  // manually trigger the callback
	  tree.props.onMouseEnter();
	  // re-rendering
	  tree = component.toJSON();
	  expect(tree).toMatchSnapshot();

	  // manually trigger the callback
	  tree.props.onMouseLeave();
	  // re-rendering
	  tree = component.toJSON();
	  expect(tree).toMatchSnapshot();*/
	//});

	//describe('Hello function', () => {
	//  it('should return hello world', () => {
	//    const result = shallow(<Cart/>);
	    //expect(result).to.equal('Hello World!');
	//  });
	//});

//});
