import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Module from '../../components/Module/Module';
import { IAvatarSrc } from '../../components/Avatar/Avatar';
import { ICounter } from '../../components/Counter/Counter';
import { addComment, fetchComments } from '../../actions/comments.actions';
import { fetchUser, incrementUserCounter } from '../../actions/user.actions';
import CommentsFeed from '../CommentsFeed/CommentsFeed';
import UserProfile from '../UserProfile/UserProfile';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Icon from '../../components/Icon/Icon';
import { IErrorState } from '../../reducers/error.reducer';
import { IUserState } from '../../reducers/user.reducer';
import { ICommentState } from '../../reducers/comments.reducer';
import { ICommentAuthor } from '../../components/Comment/Comment';

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

export interface IAppProps {
	user: IUserState;
	comments: ICommentState;
	error: IErrorState;
	addComment: (user: ICommentAuthor, comment: string) => void;
	fetchUser: () => void;
	fetchComments: () => void;
	incrementUserCounter: (label: string) => void;
}

class App extends Component<IAppProps, IAppState> {
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
						<CommentsFeed
							isLoading={this.props.comments.isLoading}
							commentForm={this.state.commentForm}
							comments={this.props.comments.data}
							onChange={this.handleChange}
							onSubmit={this.handleSubmit}
						/>
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
		incrementUserCounter,
		fetchComments,
		addComment
	}
)(App);
