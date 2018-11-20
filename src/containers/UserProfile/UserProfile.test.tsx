import * as React from 'react';
import { mount } from 'enzyme';
import UserProfile from './UserProfile';
import createMockStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

describe('UserProfile component: ', () => {
	// Shallow rendered component
	const mockStore = createMockStore([ReduxThunk]);
	const initialState = {
		user: {
			isLoading: false,
			data: {
				id: 1,
				location: 'Los Angeles, USA',
				name: 'Harvey Specter',
				avatar: {
					large: 'https://randomuser.me/api/portraits/men/1.jpg',
					regular: 'https://randomuser.me/api/portraits/med/men/1.jpg',
					small: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
				},
				counters: [{ label: 'Follow', number: 0 }]
			}
		}
		//incrementUserCounter: jest.fn();
	};
	const store = mockStore(initialState);

	const component = mount(
		<Provider store={store}>
			<UserProfile />
		</Provider>
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should contain all props', () => {
		expect(component.html()).toContain(initialState.user.data.name);
		expect(component.html()).toContain(initialState.user.data.location);
		expect(component.find('.Counter__number').text()).toContain(
			initialState.user.data.counters[0].number
		);
		expect(component.find('img')).toBeTruthy();
	});
});
