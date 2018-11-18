import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary component: ', () => {
	// Shallow rendered component
	const content = <p className="test">Test</p>;

	const component = shallow(<ErrorBoundary hasError={false}>{content}</ErrorBoundary>);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render correctly', () => {
		expect(component.find('p.test')).toBeDefined();
	});

	it('should render with child component', () => {
		expect(component.html()).not.toBe(null);
		expect(component.find(content)).toBeTruthy();
	});

	it('should render error message', () => {
		const component = shallow(
			<ErrorBoundary hasError={true}>{content}</ErrorBoundary>
		);

		expect(component.find(content)).not.toExist();
		expect(component.find('h3.ErrorBoundary__heading')).toBeTruthy();
	});
});
