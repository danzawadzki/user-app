import * as React from 'react';
import './UserProfile.scss';
import UserCard from '../../components/UserCard/UserCard';
import CountersList from '../../components/CountersList/CountersList';
import Button from '../../components/Button/Button';
import { IAppUser } from '../App/App';
import WithLoader from '../../components/WithLoader/WithLoader';

export interface IAppUserProfile {
	/** User profile */
	user: IAppUser;
	/** Function to increment counter */
	handleIncrement: (label: string) => void;
}

/**
 * User Profile component
 */
const UserProfile: React.StatelessComponent<IAppUserProfile> = ({
	user,
	handleIncrement
}) => {
	return (
		<>
			<UserCard
				name={user.name}
				location={user.location}
				avatar={user.avatar}
				onHeartClick={() => handleIncrement('likes')}
			/>
			<div className="userProfile__counters">
				<CountersList counters={user.counters} />
				<Button id="follow" onClick={() => handleIncrement('followers')}>
					Follow
				</Button>
			</div>
		</>
	);
};

export default WithLoader(UserProfile);
