import * as React from 'react';
import './MessageInput.scss';

export interface IMessageInput {
	/** Component id for onChange method */
	id: string;
	/** Controlled form input value */
	value?: string;
	/** Input placeholder */
	placeholder?: string;
	/** Handler to onChange event */
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	/** Handler to onSubmit event */
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * MessageInput component.
 *
 * @version 1.0.0
 */
const MessageInput = ({
	value = '',
	id,
	placeholder = 'Type...',
	onChange,
	onSubmit
}: IMessageInput) => {
	return (
		<form className="MessageInput" onSubmit={onSubmit}>
			<input
				id={id}
				className="MessageInput__input"
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</form>
	);
};

export default MessageInput;
