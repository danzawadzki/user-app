import * as React from 'react';
import { Component } from 'react';
import './Accordion.scss';

/** Interface for accordion props */
export interface IAccordionProps {
	/** Accordion heading */
	heading: {
		/** To display, when accordion is open */
		on: string;
		/** To display, when accordion is closed */
		off: string;
	};
	/** Accordion body content */
	children: JSX.Element | JSX.Element[] | string;
}

/** Interface for accordion state */
export interface IAccordionState {
	/** Flag to open and close accordions */
	isOpen: boolean;
}

/**
 * Accordion component.
 *
 * @version 1.0.0
 */
export default class Accordion extends Component<IAccordionProps, IAccordionState> {
	state = {
		isOpen: true
	};

	/**
	 * Function to handle visibility flag toggling
	 */
	toggleIsOpenFlag = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	};

	render() {
		const { heading, children } = this.props;
		const { isOpen } = this.state;

		return (
			<div className="Accordion">
				<a onClick={this.toggleIsOpenFlag} className="Accordion__heading">
					{isOpen ? heading.on : heading.off}
				</a>
				<div
					className={`Accordion__body Accordion__body--${
						isOpen ? 'visible' : 'hidden'
					}`}>
					{children}
				</div>
			</div>
		);
	}
}
