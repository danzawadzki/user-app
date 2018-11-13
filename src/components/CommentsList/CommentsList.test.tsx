import React from 'react';
import { shallow } from 'enzyme';
import CommentsList from './CommentsList';

describe('CommentsList component: ', () => {
	//Shallow rendered component
	const user = {
		author: {
			name: 'Random User',
			avatar: {
				small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
				regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
				large: 'https://randomuser.me/api/portraits/men/65.jpg'
			}
		},
		comment:
			'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
		timestamp: '10/10/2018'
	};

	const comments = [user, user, user, user, user];
	const component = shallow(<CommentsList comments={comments} />);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should have length of comments array', () => {
		expect(component.find('li')).toHaveLength(comments.length);
	});

	it('should render message "No comments...", if no comments were provided', () => {
		const componentEmpty = shallow(<CommentsList />);

		expect(componentEmpty.html()).toContain('No comments...');
	});
});
