import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('Comment component: ', () => {
	// Shallow rendered component
	const author = {
		name: 'Joe Black',
		avatars: {
			small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
			regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
			large: 'https://randomuser.me/api/portraits/men/65.jpg'
		}
	};
	const comment =
		'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.';
	const timestamp = '10/11/2018';
	const component = shallow(
		<Comment author={author} comment={comment} timestamp={timestamp} />
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render correctly with all props', () => {
		expect(component.find('.Comment')).toBeDefined();
		expect(component.find('.Comment__header').exists()).toBeTruthy();
		expect(component.find('.Comment__content').exists()).toBeTruthy();
	});

	it('should render correctly with all props', () => {
		expect(component.html()).toContain(author.name);
		expect(component.html()).toContain(comment);
	});
});
