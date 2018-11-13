import * as React from 'react';
import './Counter.scss';

export interface IAvatar {
	/** Large counter number */
	number?: number;
	/** Small label text under the counter */
	label: string;
}

/**
 * Counter component.
 *
 * @version 1.0.0
 */
const Counter = ({ number = 0, label }: IAvatar) => (
	<div className="Counter">
		<span className="Counter__number">{number}</span>
		<span className="Counter__label">{label}</span>
	</div>
);

export default Counter;
