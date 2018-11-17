import * as React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App container: ', () => {
	// // Shallow rendered component
	const component = shallow(<App />);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});
});
