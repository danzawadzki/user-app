import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Module from '../../components/Module/Module';
import { IAvatarSrc } from '../../components/Avatar/Avatar';
import { ICounter } from '../../components/Counter/Counter';
import { fetchComments } from '../../actions/comments.actions';
import { fetchUser, incrementUserCounter } from '../../actions/user.actions';
import CommentsFeed from '../CommentsFeed/CommentsFeed';
import UserProfile from '../UserProfile/UserProfile';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Icon from '../../components/Icon/Icon';
import { IErrorState } from '../../reducers/error.reducer';
import { IUserState } from '../../reducers/user.reducer';

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

export interface IAppState {}

export interface IAppProps {
	user: IUserState;
	error: IErrorState;
	fetchUser: () => void;
	fetchComments: () => void;
	incrementUserCounter: (label: string) => void;
}

class App extends Component<IAppProps, IAppState> {
	/**
	 * Fetching comments and user profile info on component mount
	 */
	componentDidMount() {
		this.props.fetchUser();
		this.props.fetchComments();
	}

	render() {
		return (
			<ErrorBoundary hasError={this.props.error.hasError}>
				<div className="App">
					<Module
						id="UserProfile"
						actions={
							<Icon
								name="share-square"
								type="fas"
								color="orange"
								onClick={() => alert(window.location.href)}
							/>
						}>
						<UserProfile
							handleIncrement={this.props.incrementUserCounter}
							isLoading={this.props.user.isLoading}
							user={this.props.user.data}
						/>
					</Module>
					<Module id="Comments">
						<CommentsFeed />
					</Module>
				</div>
			</ErrorBoundary>
		);
	}
}

/**
 * Mapping redux state to props.
 */
const mapStateToProps = (state: any) => {
	return {
		comments: state.comments,
		user: state.user,
		error: state.error
	};
};

export default connect(
	mapStateToProps,
	{
		fetchUser,
		fetchComments,
		incrementUserCounter
	}
)(App);
