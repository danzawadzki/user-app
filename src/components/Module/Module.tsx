import * as React from 'react';
import './Module.scss';

export interface IModule {
	/** Module custom id */
	id?: string;
	/** Module child html node. */
	children: JSX.Element | JSX.Element[] | string;
}

/**
 * Module component - higher order component to display UI elements
 * inside white module with rounded corners and shadow under.
 *
 * @version 1.0.0
 */
const Module = ({ id, children }: IModule) => (
	<div id={id || ''} className="Module">
		{children}
	</div>
);

export default Module;
