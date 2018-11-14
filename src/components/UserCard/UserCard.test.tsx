import React from 'react';
import { shallow } from 'enzyme';
import UserCard from './UserCard';

describe('UserCard component: ', () => {
	//Shallow rendered component
	const name = 'Random User';
	const location = 'New York, USA';
	const avatar = {
		small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
		regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
		large: 'https://randomuser.me/api/portraits/men/65.jpg'
	};
	const onClick = () => console.log('Heart icon has been clicked.');

	const component = shallow(
		<UserCard
			name={name}
			location={location}
			avatar={avatar}
			onHeartClick={onClick}
		/>
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should contain user name and location', () => {
		expect(component.html()).toContain(name);
		expect(component.html()).toContain(location);
	});

	it('should render with out location', () => {
		const componentWithOutLocation = shallow(
			<UserCard name={name} avatar={avatar} onHeartClick={onClick} />
		);

		expect(componentWithOutLocation.html()).toContain('Unknown');
	});
});
