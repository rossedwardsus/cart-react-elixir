//var searchPath = '../../../../../app/assets/javascripts/components/navigation/search_icon.js.jsx';
//jest.dontMock(searchPath);


import * as React from 'react';
//import * as renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import Login from '../flow/login';
import * as TestUtils from "react-addons-test-utils";

import { assert, expect } from 'chai';
//import assert from 'assert';


describe("Hello", () => {

	let renderer: any;

	beforeEach(() => {

		renderer = TestUtils.createRenderer();
		renderer.render(<Login />);

	});

	it("should render correctly", () => {
        const result = renderer.getRenderOutput();
        assert.strictEqual(result.type, "div");
    });


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
