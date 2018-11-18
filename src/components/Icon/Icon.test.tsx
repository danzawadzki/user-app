import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon component: ', () => {
	// Shallow rendered component
	const name = 'heart';
	const type = 'far';
	const color = 'orange';
	const onClick = jest.fn();

	const component = shallow(
		<Icon name={name} type={type} color={color} onClick={onClick} />
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render correctly', () => {
		expect(component.html()).toContain(name);
		expect(component.html()).toContain(type);
		expect(component.html()).toContain(color);
		expect(component.find('.Icon')).toBeDefined();
	});

	it('should fire onClick', () => {
		expect(onClick).toHaveBeenCalledTimes(0);
		expect(component.find('span.Icon').simulate('click'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
