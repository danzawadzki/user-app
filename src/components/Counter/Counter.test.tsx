import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component: ', () => {
	//Shallow rendered component
	const number = 997;
	const label = 'Police';

	const component = shallow(<Counter number={number} label={label} />);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render correctly', () => {
		expect(component.find('.Label')).toBeDefined();
	});

	it('should render with number and label', () => {
		expect(component.find('.Module__number')).not.toBe(null);
		expect(component.html()).toContain(number);
		expect(component.html()).toContain(label);
	});

	it('should render with default 0 as a counter number, if is not provided in the props', () => {
		const componentWithOutNumber = shallow(<Counter label={label} />);
		expect(componentWithOutNumber.html()).toContain(0);
		expect(componentWithOutNumber.html()).toContain(label);
	});
});
