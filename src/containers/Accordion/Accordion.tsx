import * as React from 'react';
import { Component } from 'react';
import './Accordion.scss';

/** Interface for accordion props */
export interface IAccordionProps {
	/** Accordion heading */
	heading: {
		/** To display, when accordion is open */
		on: String;
		/** To display, when accordion is closed */
		off: String;
	};
	/** Accordion body content */
	children: JSX.Element | JSX.Element[] | String;
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
	/**
	 * Function to handle visibility flag toggling
	 */
	toggleIsOpenFlag = () => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	};

	constructor(props: IAccordionProps) {
		super(props);

		this.state = {
			isOpen: true
		};
	}

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
