import * as React from 'react';
import './App.scss';
import UserCard from '../../components/UserCard/UserCard';
import CountersList from '../../components/CountersList/CountersList';
import Button from '../../components/Button/Button';
import { IAppUser } from './App';
import WithLoader from '../../components/WithLoader/WithLoader';

export interface IAppUserProfile {
	user: IAppUser;
	handleIncrement: (label: string) => void;
}

const AppUserProfile = ({ user, handleIncrement }: IAppUserProfile) => {
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

export default WithLoader(AppUserProfile);
