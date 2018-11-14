import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

describe('Avatar component: ', () => {
	// Shallow rendered component
	const name = 'Joe Black';
	const avatars = {
		small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
		regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
		large: 'https://randomuser.me/api/portraits/men/65.jpg'
	};
	const component = shallow(<Avatar name={name} avatar={avatars} />);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render correctly with all props', () => {
		expect(component.find('.Avatar')).toBeDefined();
		expect(component.find('.Avatar')).not.toBeFalsy();
		expect(component.find('.Avatar__image').exists()).toBeTruthy();
		expect(component.find('img').prop('alt')).toMatch(name);
		expect(component.find('img').prop('srcSet')).toMatch(avatars.small);
	});

	it('should render only with name props', () => {
		const componentOnlyWithName = shallow(<Avatar name={name} />);

		expect(componentOnlyWithName).toBeDefined();

		// To not contain any images
		expect(componentOnlyWithName.find('img').exists()).toBeFalsy();
		expect(componentOnlyWithName.find('.Avatar__image').exists()).toBeFalsy();
	});
});
