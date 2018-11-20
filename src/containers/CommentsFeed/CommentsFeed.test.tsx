import * as React from 'react';
import { mount } from 'enzyme';
import CommentsFeed from './CommentsFeed';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { spy } from 'sinon';

describe('CommentsFeed component: ', () => {
	// Shallow rendered component
	const mockStore = createMockStore([ReduxThunk]);
	const onSubmit = spy();
	const initialState = {
		addComment: onSubmit,
		comments: {
			isLoading: false,
			data: []
		},
		user: {
			isLoading: false,
			data: {
				name: 'Adam',
				avatar: {}
			}
		}
	};
	const store = mockStore(initialState);

	const component = mount(
		<Provider store={store}>
			<CommentsFeed />
		</Provider>
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render with out comments', () => {
		expect(component.html()).not.toContain('.CommentsList__item');
		expect(component.find('.CommentsList__item').exists()).toBeFalsy();
	});

	it('should set value in component state ', () => {
		component
			.find('input')
			.simulate('change', { target: { value: 'test', id: 'test' } });

		expect(component.find('input')).toHaveProp('value');
	});

	it('shoud; render 3 comments', () => {
		const mockStore = createMockStore([ReduxThunk]);
		const onSubmit = spy();
		const initialState = {
			addComment: onSubmit,
			comments: {
				isLoading: false,
				data: [
					{
						author: { name: 'Adam' },
						comment:
							'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula malesuada elit lectus feli…',
						timestamp: '07:10:50 10/10/2017'
					},
					{
						author: { name: 'Adam' },
						comment:
							'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula malesuada elit lectus feli…',
						timestamp: '07:10:50 10/10/2017'
					},
					{
						author: { name: 'Adam' },
						comment:
							'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula malesuada elit lectus feli…',
						timestamp: '07:10:50 10/10/2017'
					}
				]
			},
			user: {
				isLoading: false,
				data: {
					name: 'Adam',
					avatar: {}
				}
			}
		};
		const store = mockStore(initialState);

		const component = mount(
			<Provider store={store}>
				<CommentsFeed />
			</Provider>
		);

		expect(component.find('.CommentsList__item')).toHaveLength(3);
	});
});
