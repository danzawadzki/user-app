import { Reducer } from 'redux';
import { IAppUser } from '../containers/App/App';
import { userConstants } from '../constants/user.constants';
import { ICounter } from '../components/Counter/Counter';

/** Action interface */
export interface IAction {
	/** Action type name */
	type: string;
	/** Action payload */
	payload: any;
}

/** User related state interface */
export interface IUserState {
	/** Loading flag */
	isLoading: boolean;
	/** Error flag */
	error: boolean;
	/** Comments array */
	data: IAppUser;
}

/** Initial state */
const initialState: IUserState = {
	isLoading: false,
	error: false,
	data: { name: '' }
};

/**
 * User profile reducer to fetch information about the user
 *
 */
export const user: Reducer<IUserState, IAction> = (
	state = initialState,
	action: IAction
) => {
	switch (action.type) {
		case userConstants.FETCH_USER_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case userConstants.FETCH_USER_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload
			};
		case userConstants.FETCH_USER_ERROR:
			return {
				...state,
				error: true,
				isLoading: false
			};
		case userConstants.INCREMENT_USER_COUNTER:
			// Deep clone of the user object (not the quickest way, but making correct deep copy).
			const user: IAppUser = JSON.parse(JSON.stringify(state.data));

			/**
			 * If counters exists, and payload label (treated as an id here) equals payload,
			 * then increment counter number by 1.
			 */
			if (user.counters && user.counters.length) {
				user.counters.forEach((item: ICounter) => {
					if (item.label.toLowerCase() === action.payload.toLowerCase()) {
						return item.number ? item.number++ : (item.number = 1);
					}
					return item;
				});
			}

			return {
				...state,
				data: user
			};
		default:
			return state;
	}
};

export default user;
