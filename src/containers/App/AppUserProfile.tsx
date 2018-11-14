import React, { Component } from 'react';
import './App.scss';
import Module from '../../components/Module/Module';
import UserCard from '../../components/UserCard/UserCard';
import CountersList from '../../components/CountersList/CountersList';
import Button from '../../components/Button/Button';

class AppUserProfile extends Component {
	render() {
		const user = {
			author: {
				name: 'Random User',
				avatar: {
					small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
					regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
					large: 'https://randomuser.me/api/portraits/men/65.jpg'
				}
			},
			comment:
				'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula.',
			timestamp: '10/10/2018'
		};

		return (
			<Module id="UserProfile">
				<UserCard
					name="Random User"
					location="New York, USA"
					avatar={{
						small: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
						regular: 'https://randomuser.me/api/portraits/med/men/65.jpg',
						large: 'https://randomuser.me/api/portraits/men/65.jpg'
					}}
					onHeartClick={() => console.log('Heart icon has been clicked.')}
				/>
				<div className="userProfile__counters">
					<CountersList
						counters={[
							{ number: 121, label: 'Likes' },
							{ number: 723, label: 'Following' },
							{ number: 4422, label: 'Followers' }
						]}
					/>
					<Button id="follow" onClick={e => console.log(e)}>
						Follow
					</Button>
				</div>
			</Module>
		);
	}
}

export default AppUserProfile;
