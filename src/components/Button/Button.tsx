import * as React from 'react';
import './Button.scss';

export interface IButton {
	/** DOM element id. */
	id: string;
	/** Flag to display fullwidth button. */
	isFullWidth?: boolean;
	/** Button child html node. */
	children: string;
	/** Handler to the onClick event */
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Button component.
 *
 * @version 1.0.0
 */
const Button: React.StatelessComponent<IButton> = ({
	id,
	isFullWidth = false,
	children,
	onClick
}) => (
	<button
		type="button"
		className={`Button ${isFullWidth && 'Button--fullWidth'}`}
		onClick={onClick}>
		{children}
	</button>
);

export default Button;
