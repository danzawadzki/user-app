import * as React from 'react';
import { mount } from 'enzyme';
import UserProfile from './UserProfile';

describe('UserProfile component: ', () => {
	// Shallow rendered component
	const user = {
		id: 1,
		location: 'Los Angeles, USA',
		name: 'Harvey Specter',
		avatar: {
			large: 'https://randomuser.me/api/portraits/men/1.jpg',
			regular: 'https://randomuser.me/api/portraits/med/men/1.jpg',
			small: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
		},
		counters: [{ label: 'Follow', number: 0 }]
	};
	const isLoading = false;
	const handleIncrement = jest.fn();

	const component = mount(
		<UserProfile
			handleIncrement={handleIncrement}
			isLoading={isLoading}
			user={user}
		/>
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should contain all props', () => {
		expect(component.html()).toContain(user.name);
		expect(component.html()).toContain(user.location);
		expect(component.find('img')).toBeTruthy();
	});

	it('should fire handleIncrement func on button click', () => {
		expect(handleIncrement).toHaveBeenCalledTimes(0);
		expect(component.find('#follow')).toBeTruthy();
		expect(component.find('#follow').simulate('click'));
		expect(handleIncrement).toHaveBeenCalledTimes(1);
	});
});
