import React from 'react';
import { shallow } from 'enzyme';
import MessageInput from './MessageInput';

describe('MessageInput component: ', () => {
	//Shallow rendered component
	const value = 'Test';
	const id = 'TestInput';
	const placeholder = 'Type comment...';
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => console.log(e);
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	const component = shallow(
		<MessageInput
			id={id}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should contain value and placeholder', () => {
		expect(component.html()).toContain(value);
		expect(component.html()).toContain(placeholder);
	});
});
