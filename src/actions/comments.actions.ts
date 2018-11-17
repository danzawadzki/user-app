import { commentsConstants } from '../constants/comments.constants';
import { api } from '../services/api';
import { Action, Dispatch } from 'redux';
import { IComment, ICommentAuthor } from '../components/Comment/Comment';
import { getTimestamp } from '../utilities/helpers/date.helpers';

/** New comment interface */
export interface ICommentNew {
	/** Action type */
	type: string;
	/** Comment payload */
	payload: IComment;
}

/**
 * Action to fetch comments list
 */
export const fetchComments = () => async (dispatch: Dispatch<Action>) => {
	/** Initialize action to fetch comments */
	dispatch({ type: commentsConstants.FETCH_COMMENTS_REQUEST });
	try {
		const response = await api<IComment[]>('comments').then(res => {
			return res && res.length === 0
				? res
				: res.sort(
						(a, b) =>
							new Date(a.timestamp).getTime() -
							new Date(b.timestamp).getTime()
				  );
		});
		/** Dispatching success action with response as a payload */
		dispatch({ type: commentsConstants.FETCH_COMMENTS_SUCCESS, payload: response });
	} catch (e) {
		/** Dispatching error action with response as a error message */
		dispatch({ type: commentsConstants.FETCH_COMMENTS_ERROR, payload: e });
	}
};

/**
 * Action to add comment
 *
 * @param {object} author - object representing comment author
 * @param {string} comment - body content
 */
export const addComment = (author: ICommentAuthor, comment: string) => async (
	dispatch: Dispatch<Action>
) => {
	dispatch<ICommentNew>({
		type: commentsConstants.ADD_COMMENT,
		payload: {
			author,
			comment,
			timestamp: getTimestamp()
		}
	});
};
