import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component: ', () => {
	// Shallow rendered component
	const label = 'Push me!';

	const component = shallow(
		<Button id="button_test" onClick={() => console.log('Fired by onClick event.')}>
			{label}
		</Button>
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should render correctly with all props', () => {
		expect(component.find('.Button')).toBeDefined();
	});

	it('should render with correct label', () => {
		expect(component.get(0).props.children).toEqual(label);
	});

	it('should render with full width styles', () => {
		const componentFullWidth = shallow(
			<Button
				id="button_test"
				isFullWidth={true}
				onClick={() => console.log('Fired by onClick event.')}>
				{label}
			</Button>
		);

		expect(componentFullWidth.find('.Button--fullWidth')).toBeDefined();
	});
});
