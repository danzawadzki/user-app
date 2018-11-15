import React from 'react';
import { shallow } from 'enzyme';
import CountersList from './CountersList';

describe('CountersList component: ', () => {
	// Shallow rendered component
	const counter = {
		number: 997,
		label: 'Police'
	};
	const counters = [counter, counter, counter];

	const component = shallow(<CountersList counters={counters} />);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should have length of counters array', () => {
		expect(component.find('li')).toHaveLength(counters.length);
	});

	it('should render message "No counters...", if no counters were provided', () => {
		const componentEmpty = shallow(<CountersList />);

		expect(componentEmpty.html()).toContain('No counters...');
	});
});
