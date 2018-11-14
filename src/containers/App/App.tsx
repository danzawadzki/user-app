import React, { Component } from 'react';
import './App.scss';
import AppUserProfile from './AppUserProfile';
import AppComments from './AppComments';

/**
 * 5. Redux integration
 *    5.1 mockup api
 *    5.2 create action to fetchComments
 *    5.3 create action to addComment
 *    5.4 create action to fetchUser
 */

export interface IAppState {
	commentForm?: string;
}

export default class App extends Component<any, IAppState> {
	/**
	 * Handler to input onChange event.
	 * @param e
	 */
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		this.setState(() => ({
			[e.target.id]: e.target.value
		}));
	};
	/**
	 * Handler to form onSubmit event.
	 * @param e
	 */
	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.setState({
			commentForm: ''
		});
	};

	constructor(props: any) {
		super(props);

		this.state = {
			commentForm: ''
		};
	}

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

		const comments = [user, user];

		return (
			<div className="App">
				<AppUserProfile />
				<AppComments
					commentForm={this.state.commentForm}
					comments={comments}
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}
