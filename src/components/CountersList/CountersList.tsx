import * as React from 'react';
import './CountersList.scss';
import Counter, { ICounter } from '../Counter/Counter';

export interface ICountersList {
	/** Array of objects representing counters */
	counters?: ICounter[];
}

/**
 * Counters list component.
 *
 * @version 1.0.0
 */
const CountersList: React.StatelessComponent<ICountersList> = ({ counters = [] }) => {
	if (counters.length === 0) {
		return <p className="CountersList__message">No counters...</p>;
	}
	return (
		<ul className="CountersList">
			{counters.map(({ number, label }: ICounter, index) => (
				<li className="CountersList__item" key={`counter-${index}`}>
					<Counter number={number} label={label} />
				</li>
			))}
		</ul>
	);
};

export default CountersList;
