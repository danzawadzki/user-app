import Accordion from '../Accordion/Accordion';
import CommentsList from '../../components/CommentsList/CommentsList';
import MessageInput from '../../components/MessageInput/MessageInput';
import React, { Component } from 'react';
import './CommentsFeed.scss';
import { ICommentAuthor } from '../../components/Comment/Comment';
import WithLoader from '../../components/WithLoader/WithLoader';
import { ICommentState } from '../../reducers/comments.reducer';
import { connect } from 'react-redux';
import { addComment, fetchComments } from '../../actions/comments.actions';
import { IUserState } from '../../reducers/user.reducer';
import { IAppUser } from '../App/App';

export interface ICommentsFeedState {
	/** Controlled input value with comment to post */
	commentForm?: string;
}

export interface ICommentsFeedProps {
	/** Comment author object */
	user: IAppUser;
	/** Comments object with comments array, loading and error flag */
	comments: ICommentState;
	/** Handler to addComment action. */
	addComment: (user: ICommentAuthor, comment: string) => void;
}

export interface ICommentsFeedRedux {
	/** Comment author object */
	user: IUserState;
	/** Comments object with comments array, loading and error flag */
	comments: ICommentState;
	/** Loading flag pulled from comments object for withLoading hoc */
	isLoading: boolean;
}
/**
 * Comments feed component. Contains accordion component and message input to place new posts.
 * @constructor
 */
class CommentsFeed extends Component<ICommentsFeedProps, ICommentsFeedState> {
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
		addComment({ avatar: user.avatar, name: user.name }, commentForm);

		// Setting up state
		this.setState({
			commentForm: ''
		});
	};

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
		const { comments } = this.props;
		const { commentForm } = this.state;
		return (
			<>
				<Accordion
					heading={{
						on: `Hide comments (${comments.data ? comments.data.length : 0})`,
						off: `Show comments (${comments.data ? comments.data.length : 0})`
					}}>
					<CommentsList comments={comments.data} />
				</Accordion>
				<MessageInput
					id="commentForm"
					value={commentForm}
					placeholder="Add a comment..."
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
				/>
			</>
		);
	}
}

/**
 * Mapping redux state to props.
 */
const mapStateToProps = (state: ICommentsFeedRedux) => {
	return {
		comments: state.comments,
		isLoading: state.comments.isLoading,
		user: state.user.data
	};
};

export default connect(
	mapStateToProps,
	{
		fetchComments,
		addComment
	}
)(WithLoader(CommentsFeed));
