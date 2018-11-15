import React from 'react';
import { shallow } from 'enzyme';
import Module from './Module';

describe('Module component: ', () => {
	// Shallow rendered component
	const content = <p>Test</p>;

	const component = shallow(<Module>{content}</Module>);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render correctly', () => {
		expect(component.find('.Module')).toBeDefined();
	});

	it('should render with child component', () => {
		expect(component.html()).not.toBe(null);
		expect(component.find(content)).toBeTruthy();
	});
});
