import * as React from 'react';
import { mount } from 'enzyme';
import CommentsFeed from './CommentsFeed';

describe('CommentsFeed component: ', () => {
	// Shallow rendered component
	const isLoading = false;
	const commentInput = 'Test';
	const onChange = jest.fn();
	const onSubmit = jest.fn();

	const component = mount(
		<CommentsFeed
			isLoading={isLoading}
			commentForm={commentInput}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);

	it('should render match snapshot', () => {
		expect(component).toMatchSnapshot();
	});

	it('should fire onSubmit func', () => {
		expect(onSubmit).toHaveBeenCalledTimes(0);
		expect(component.find('form.MessageInput')).toBeTruthy();
		expect(component.find('form.MessageInput').simulate('submit'));
		expect(onSubmit).toHaveBeenCalledTimes(1);
	});
	it('should fire onSubmit func', () => {
		expect(onChange).toHaveBeenCalledTimes(0);
		expect(component.find('input')).toBeTruthy();
		expect(component.find('input').simulate('change'));
		expect(onChange).toHaveBeenCalledTimes(1);
	});
});
