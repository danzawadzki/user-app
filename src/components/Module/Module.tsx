import * as React from 'react';
import './Module.scss';

export interface IModule {
	/** Button child html node. */
	children: JSX.Element | JSX.Element[];
}

/**
 * Module component.
 *
 * @version 1.0.0
 */
const Module = ({ children }: IModule) => <div className="Module">{children}</div>;

export default Module;
