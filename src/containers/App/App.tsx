import React, { Component } from 'react';
import './App.scss';
import AppUserProfile from './AppUserProfile';
import AppComments from './AppComments';
import { IComment } from '../../components/Comment/Comment';
import Module from '../../components/Module/Module';
import { IAvatarSrc } from '../../components/Avatar/Avatar';
import { ICounter } from '../../components/Counter/Counter';

export interface IAppUser {
	/** User name */
	name: string;
	/** User location */
	location?: string;
	/** User avatar */
	avatar?: IAvatarSrc;
	/** Comment content body */
	counters: Array<ICounter>;
}

export interface IAppState {
	/** Controlled input value with comment to post */
	commentForm?: string;
	user: {
		isLoading: boolean;
		payload: IAppUser;
	};
	comments: {
		isLoading: boolean;
		payload: Array<IComment> | [];
	};
}

export default class App extends Component<any, IAppState> {
	/**
	 * Handler to input onChange event.
	 * @param e
	 */
	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		this.setState(prevState => ({
			...prevState,
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

	/**
	 * Handler to counter increment event.
	 * @param {string} label - Counter label
	 */
	handleIncrement = (label: string) => {
		if (this.state.user.payload && this.state.user.payload.counters) {
			//Making copy of counters by spreading them
			const counters = [...this.state.user.payload.counters];

			//Updating counter where counter.label equals function arg label
			counters.forEach(item => {
				if (item.label.toLowerCase() === label.toLowerCase()) {
					item.number ? item.number++ : 1;
				}
			});

			//Spreading user object
			const user = {
				...this.state.user
			};
			//Attaching updated counters
			user.payload.counters = counters;
			//Overwriting user property
			this.setState(() => ({
				user
			}));
		}
	};

	constructor(props: any) {
		super(props);

		this.state = {
			commentForm: '',
			user: {
				isLoading: true,
				payload: { name: '', location: '', avatar: {}, counters: [] }
			},
			comments: {
				isLoading: true,
				payload: []
			}
		};
	}

	async componentDidMount() {
		//Fetching user profile info
		const userResponse = await fetch('http://localhost:8080/users/1').then(res =>
			res.json()
		);

		this.setState(() => ({
			user: {
				isLoading: false,
				payload: userResponse
			}
		}));

		//Fetching user profile comments
		const commentsResponse = await fetch('http://localhost:8080/comments').then(res =>
			res.json()
		);

		this.setState(() => ({
			comments: {
				isLoading: false,
				payload: commentsResponse
			}
		}));
	}

	render() {
		return (
			<div className="App">
				<Module id="UserProfile">
					<AppUserProfile
						handleIncrement={this.handleIncrement}
						isLoading={this.state.user.isLoading}
						user={this.state.user.payload}
					/>
				</Module>
				<Module id="Comments">
					<AppComments
						isLoading={this.state.comments.isLoading}
						commentForm={this.state.commentForm}
						comments={this.state.comments.payload}
						onChange={this.handleChange}
						onSubmit={this.handleSubmit}
					/>
				</Module>
			</div>
		);
	}
}
