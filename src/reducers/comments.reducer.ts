import { commentsConstants } from '../constants/comments.constants';
import { IComment } from '../components/Comment/Comment';
import { Reducer } from 'redux';

/** Action interface */
export interface IAction {
	/** Action type name */
	type: string;
	/** Action payload */
	payload: any;
}

/** Comments related state interface */
export interface ICommentState {
	/** Loading flag */
	isLoading: boolean;
	/** Error flag */
	error: boolean;
	/** Comments array */
	data: IComment[];
}

/** Initial state */
const initialState: ICommentState = { isLoading: false, error: false, data: [] };

/**
 * Comments reducer to fetch and add new comments
 *
 */
export const comments: Reducer<ICommentState, IAction> = (
	state = initialState,
	action: IAction
) => {
	switch (action.type) {
		case commentsConstants.FETCH_COMMENTS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case commentsConstants.FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload
			};
		case commentsConstants.FETCH_COMMENTS_ERROR:
			return {
				...state,
				error: true,
				isLoading: false,
				data: null
			};
		case commentsConstants.ADD_COMMENT:
			return {
				...state,
				data: [...state.data, action.payload]
			};
		default:
			return state;
	}
};

export default comments;
