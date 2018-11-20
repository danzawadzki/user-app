import * as React from 'react';
import './UserProfile.scss';
import UserCard from '../../components/UserCard/UserCard';
import CountersList from '../../components/CountersList/CountersList';
import Button from '../../components/Button/Button';
import { IAppUser } from '../App/App';
import WithLoader from '../../components/WithLoader/WithLoader';
import { incrementUserCounter } from '../../actions/user.actions';
import { connect } from 'react-redux';

export interface IUserProfileProps {
	/** User profile */
	user: IAppUser;
	/** Function to increment counter */
	incrementUserCounter: (label: string) => void;
}

/**
 * User Profile component
 */
const UserProfile: React.StatelessComponent<IUserProfileProps> = ({
	user,
	incrementUserCounter
}) => {
	return (
		<>
			<UserCard
				name={user.name}
				location={user.location}
				avatar={user.avatar}
				onHeartClick={() => incrementUserCounter('likes')}
			/>
			<div className="userProfile__counters">
				<CountersList counters={user.counters} />
				<Button id="follow" onClick={() => incrementUserCounter('followers')}>
					Follow
				</Button>
			</div>
		</>
	);
};

/**
 * Mapping redux state to props.
 */
const mapStateToProps = (state: any) => {
	return {
		isLoading: state.user.isLoading,
		user: state.user.data
	};
};

export default connect(
	mapStateToProps,
	{
		incrementUserCounter
	}
)(WithLoader(UserProfile));
