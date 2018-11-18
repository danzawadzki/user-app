import * as React from 'react';
import { Component } from 'react';
import './ErrorBoundary.scss';

/** Interface for accordion props */
export interface IErrorBoundaryProps {
	/** Error flag */
	hasError: boolean;
	/** Body content */
	children: JSX.Element | JSX.Element[] | string;
}

/** Interface for accordion props */
export interface IErrorBoundaryState {
	/** Error flag */
	hasError?: boolean;
}

/**
 * Error Boundary component
 *
 * @version 1.0.0
 */
export default class ErrorBoundary extends Component<
	IErrorBoundaryProps,
	IErrorBoundaryState
> {
	state = { hasError: false };

	componentDidCatch() {
		this.setState({
			hasError: true
		});
	}

	render() {
		if (this.props.hasError || this.state.hasError) {
			return (
				<div className="ErrorBoundary">
					<h3 className="ErrorBoundary__heading">Ooooops!</h3>
					<span className="ErrorBoundary__subheading">
						Something went wrong! Make sure the server is working properly.
					</span>
				</div>
			);
		} else {
			return this.props.children;
		}
	}
}
