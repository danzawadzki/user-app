import * as React from 'react';
import './Button.scss';

export interface IButton {
	/** DOM element id. */
	id: string;
	/** Flag to display fullwidth button. */
	isFullWidth?: Boolean;
	/** Button child html node. */
	children: String;
	/** Handler to the onClick event */
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button component.
 *
 * @version 1.0.0
 */
const Button = ({ id, isFullWidth = false, children, onClick }: IButton) => (
	<button
		type="button"
		className={`Button ${isFullWidth && 'Button--fullWidth'}`}
		onClick={onClick}>
		{children}
	</button>
);

export default Button;
