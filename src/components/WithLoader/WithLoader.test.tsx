import React from 'react';
import { shallow } from 'enzyme';
import WithLoader from './WithLoader';
import Counter from '../Counter/Counter';

describe('WithLoader component: ', () => {
	//Shallow rendered component
	const Test = WithLoader(Counter);
	const label = 'Label';
	const counter = 997;
	const component = shallow(<Test isLoading={true} label={label} number={counter} />);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should contain spinner if is loading', () => {
		expect(component.html()).not.toContain(label);
		expect(component.find('.WithLoader__spinner')).toBeTruthy();
	});

	it('should not contain spinner if is not loading', () => {
		const componentNotLoading = shallow(
			<Test isLoading={false} label={label} number={counter} />
		);
		expect(componentNotLoading.html()).toContain(label);
		expect(componentNotLoading.html()).toContain(counter);
	});
});
