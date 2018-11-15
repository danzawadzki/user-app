import React from 'react';
import { shallow } from 'enzyme';
import Accordion from './Accordion';

describe('UserCard component: ', () => {
	// Shallow rendered component
	const heading = { on: 'Hide', off: 'Show' };
	const body = 'Accordion test body content.';

	const component = shallow(<Accordion heading={heading}>{body}</Accordion>);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should contain on label and content', () => {
		expect(component.html()).toContain(heading.on);
		expect(component.html()).toContain(body);
	});

	it('should contain off label and not contain content after click', () => {
		component.find('a').simulate('click');
		expect(component.html()).toContain(heading.off);
		expect(component.find('.Accordion__body--hidden').exists());
	});
});
