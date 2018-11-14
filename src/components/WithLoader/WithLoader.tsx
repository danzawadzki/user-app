import * as React from 'react';
import './WithLoader.scss';

export interface IWithLoader {
	/** Loading flag */
	isLoading: boolean;
}

/**
 * WithLoader higher order component.
 *
 * @version 1.0.0
 */
const WithLoader = <P extends object>(Component: React.ComponentType<P>) =>
	class WithLoading extends React.Component<P & IWithLoader> {
		render() {
			const { isLoading, ...props } = this.props as IWithLoader;
			return isLoading ? (
				<div className="WithLoader">
					<div className="WithLoader__spinner" />
				</div>
			) : (
				<Component {...props} />
			);
		}
	};

export default WithLoader;
