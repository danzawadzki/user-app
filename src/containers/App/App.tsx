import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import AppUserProfile from './AppUserProfile';
import AppComments from './AppComments';
import Module from '../../components/Module/Module';
import { IAvatarSrc } from '../../components/Avatar/Avatar';
import { ICounter } from '../../components/Counter/Counter';
import { addComment, fetchComments } from '../../actions/comments.actions';
import { fetchUser, incrementUserCounter } from '../../actions/user.actions';

export interface IAppUser {
	/** User name */
	name: string;
	/** User location */
	location?: string;
	/** User avatar */
	avatar?: IAvatarSrc;
	/** Comment content body */
	counters?: ICounter[];
}

export interface IAppState {
	/** Controlled input value with comment to post */
	commentForm?: string;
}

class App extends Component<any, IAppState> {
	state = {
		commentForm: ''
	};
	/**
	 * Handler to form onSubmit event.
	 * @param e
	 */
	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Spreading state and props
		const { commentForm } = this.state;
		const { user, addComment } = this.props;

		// Validate if comment contains body
		if (!commentForm) {
			return console.log('Type something!');
		}
		addComment({ avatar: user.data.avatar, name: user.data.name }, commentForm);
		// Setting up state
		this.setState({
			commentForm: ''
		});
	};

	/**
	 * Fetching commens and user profile info on component mount
	 */
	async componentDidMount() {
		this.props.fetchUser();
		this.props.fetchComments();
	}

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

	render() {
		return (
			<div className="App">
				<Module id="UserProfile">
					<AppUserProfile
						handleIncrement={this.props.incrementUserCounter}
						isLoading={this.props.user.isLoading}
						user={this.props.user.data}
					/>
				</Module>
				<Module id="Comments">
					<AppComments
						isLoading={this.props.comments.isLoading}
						commentForm={this.state.commentForm}
						comments={this.props.comments.data}
						onChange={this.handleChange}
						onSubmit={this.handleSubmit}
					/>
				</Module>
			</div>
		);
	}
}

/**
 * Mapping redux state to props.
 */
const mapStateToProps = (state: any) => {
	return {
		comments: state.comments,
		user: state.user
	};
};

export default connect(
	mapStateToProps,
	{
		fetchUser,
		incrementUserCounter,
		fetchComments,
		addComment
	}
)(App);
