//var searchPath = '../../../../../app/assets/javascripts/components/navigation/search_icon.js.jsx';
//jest.dontMock(searchPath);


import * as React from 'react';
//import * as renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
//import Login from '../flow/login';
import PaymentMethod from '../flow/payment_method.tsx';
import * as TestUtils from "react-addons-test-utils";

import { assert, expect } from 'chai';
//import assert from 'assert';
import * as sinon from 'sinon';
import 'jsdom-global/register';

//import jsdom from 'jsdom'
//const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
//global.document = doc
//global.window = doc.defaultView

//test basic rendering and maybe reading the state?


describe("Order Payment", () => {

	let renderer: any;

	const container = shallow(<PaymentMethod setUserEmail={() => {}}/>);
	let wrapper = shallow(<PaymentMethod setUserEmail={() => {}}/>);

	/*beforeEach(() => {

		renderer = TestUtils.createRenderer();
		renderer.render(<Login />);

	});

	it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        assert.strictEqual(result.type, "div");
    });*/

    it('should render payment method divs', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	expect(container.find('div').length).to.equal(19);
    	//expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	//expect(container.find('input[placeholder="First Name"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render payment method inputs', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(5);
    	expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	//expect(container.find('input[placeholder="First Name"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render name on card placeholder', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(18);
    	expect(container.find('input[placeholder="Name on Card"]').length).to.equal(1);
    	//test each placeholder
    	//expect(container.find('input[placeholder="First Name"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render zipcode placeholder', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(18);
    	//expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	expect(container.find('input[placeholder="ZIP CODE"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});

  	it('should render cardnumber placeholder', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//expect(container.find('div').length).to.equal(18);
    	//expect(container.find('input[type="text"]').length).to.equal(5);
    	//test each placeholder
    	expect(container.find('input[placeholder="Card Number"]').length).to.equal(1);
    	//test border for email, email again, and mobile
    	//test validations triggered
  	
  	});


     it('sets name on card state to something', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setUserEmail={() => {}} userContactEmailValidated={() => {}} setUserDeliveryContactAddressEmail={() => {}}/>);

    	let name_on_card_input = wrapper.find('input[placeholder="Name on Card"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	//name_on_card_input.simulate('change', { target: { value: 'rossedwards.us@gmail.com' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		console.log(wrapper.state());
		
		//expect(wrapper.state().email_border_color).to.equal("grey");

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

  	it('it sets brand as amex', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setPaymentCardNumber={() => {}} userContactEmailValidated={() => {}} setPaymentMethodCardBrand={() => {}}/>);

    	let card_number_input = wrapper.find('input[placeholder="Card Number"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	card_number_input.simulate('change', { target: { value: '378282246310005' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		console.log(wrapper.state());
		
		expect(wrapper.state().card_brand).to.equal("AMEX");

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


  	it('it sets brand as visa', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setPaymentCardNumber={() => {}} userContactEmailValidated={() => {}} setPaymentMethodCardBrand={() => {}}/>);

    	let card_number_input = wrapper.find('input[placeholder="Card Number"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	card_number_input.simulate('change', { target: { value: '4242424242424242' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		console.log(wrapper.state());
		
		expect(wrapper.state().card_brand).to.equal("VISA");

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


  	it('it sets brand as MASTERCARD', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setPaymentCardNumber={() => {}} userContactEmailValidated={() => {}} setPaymentMethodCardBrand={() => {}}/>);

    	let card_number_input = wrapper.find('input[placeholder="Card Number"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	card_number_input.simulate('change', { target: { value: '5555555555554444' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		console.log(wrapper.state());
		
		expect(wrapper.state().card_brand).to.equal("MASTERCARD");

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

  	it('it sets brand as discover', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setPaymentCardNumber={() => {}} userContactEmailValidated={() => {}} setPaymentMethodCardBrand={() => {}}/>);

    	let card_number_input = wrapper.find('input[placeholder="Card Number"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	card_number_input.simulate('change', { target: { value: '6011111111111117' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		console.log(wrapper.state());
		
		expect(wrapper.state().card_brand).to.equal("DISCOVER");

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

  	

  	

  	it('sets expiry month border color to red', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setUserEmail={() => {}} userContactEmailValidated={() => {}} setUserDeliveryContactAddressEmail={() => {}}/>);

    	let expiry_month_input = wrapper.find('input[placeholder="MM"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	expiry_month_input.simulate('change', { target: { value: 'a' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		//console.log(wrapper.state());
		
		expect(wrapper.state().expiry_month_border_color).to.equal("red");

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

  	it('sets expiry year border color to red', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setPaymentExpiryYear={() => {}} userContactEmailValidated={() => {}} setUserDeliveryContactAddressEmail={() => {}}/>);

    	let expiry_year_input = wrapper.find('input[placeholder="YYYY"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	expiry_year_input.simulate('change', { target: { value: 'a' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		//console.log(wrapper.state());
		
		expect(wrapper.state().expiry_year_border_color).to.equal("red");

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

  	it('sets cvc border color to red', () => {
    
    	// You can target DOM, its children(), or an element at() a position
    	//container.find('input[placeholder="Email"]').node.value = 'rossedwards.us';
    	
    	const wrapper = mount(<PaymentMethod setPaymentSecurityCode={() => {}} userContactEmailValidated={() => {}} setUserDeliveryContactAddressEmail={() => {}}/>);

    	let security_code_input = wrapper.find('input[placeholder="CVC"]');
    	//email_input.value = 'ross';
    	//email_input.simulate('change', email_input)

    	//email_input.simulate('change', { target: { value: 'rossedwards.us' } });
    	security_code_input.simulate('change', { target: { value: 'abc' } });


    	//let containerStyle = email_input;
		//expect(containerStyle).to.have.property('opacity', '1');
		//console.log(wrapper.state());
		
		expect(wrapper.state().security_code_border_color).to.equal("red");

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


     it('calls componentDidMount', () => {
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

	    
	    //sinon.spy(Login.prototype, 'componentDidMount');
	    //const wrapper = mount(<Login />);
	    //expect(Login.prototype.componentDidMount).to.have.property('callCount', 1);
	    //Foo.prototype.componentDidMount.restore();

	    
	    //const wrapper = mount(<Login />);
	    //wrapper.find('button').simulate('click');
	    //expect(onButtonClick).to.have.property('callCount', 1);

	    //const wrapper = shallow(<Login />);
		//const email = wrapper.find({id: 'email'});
		//assert.equal(email.length, 1);


	  });

      //it('email', () => {

      //	const wrapper = shallow(<Login />);
	//	const email = wrapper.find({id: 'email'});
	//	assert.equal(email.length, 1);
	 
	 // });


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

});
