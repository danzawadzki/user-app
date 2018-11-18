import * as React from 'react';
import './Module.scss';

export interface IModule {
	/** Module custom id */
	id?: string;
	/** Custom actions box to display in right top corner of the screen. May contain icons etc. */
	actions?: JSX.Element | JSX.Element[] | string;
	/** Module child html node. */
	children: JSX.Element | JSX.Element[] | string;
}

/**
 * Module component - higher order component to display UI elements
 * inside white module with rounded corners and shadow under.
 *
 * @version 1.0.0
 */
const Module: React.StatelessComponent<IModule> = ({ id, actions, children }) => (
	<div id={id || ''} className="Module">
		{actions ? <div className="Module__actions">{actions}</div> : null}
		{children}
	</div>
);

export default Module;
